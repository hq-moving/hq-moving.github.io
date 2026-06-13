from __future__ import annotations

import cv2
import numpy as np
from PIL import Image

TRUCK_PATH = r"C:\Users\georg\hq-moving.github.io\public\images\hqtruck1.png"
LOGO_PATH = r"C:\Users\georg\hq-moving.github.io\public\images\hqtranslarge.png"
OUTPUT_PATH = r"C:\Users\georg\hq-moving.github.io\public\images\hero-truck-branded.png"

PANEL_QUAD = np.array(
    [[372, 168], [1036, 194], [1042, 732], [368, 716]],
    dtype=np.int32,
)


def panel_mask(shape: tuple[int, int, int]) -> np.ndarray:
    mask = np.zeros(shape[:2], dtype=np.uint8)
    cv2.fillPoly(mask, [PANEL_QUAD], 255)
    return mask


def build_paint_mask(image: np.ndarray, panel: np.ndarray) -> np.ndarray:
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    orange = (hsv[:, :, 0] > 8) & (hsv[:, :, 0] < 25) & (hsv[:, :, 1] > 90)
    paint = (panel > 0) & (~orange)
    return (paint.astype(np.uint8) * 255)


def sample_cab_white(image: np.ndarray) -> np.ndarray:
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    candidates = []

    for y in range(240, 540, 4):
        for x in range(190, 370, 4):
            saturation = hsv[y, x, 1]
            value = hsv[y, x, 2]
            if saturation < 45 and value > 210:
                candidates.append(image[y, x].astype(np.float32))

    if not candidates:
        return np.array([248.0, 246.0, 242.0], dtype=np.float32)

    return np.median(candidates, axis=0)


def repaint_cargo_panel(image: np.ndarray) -> np.ndarray:
    panel = panel_mask(image.shape)
    paint_mask = build_paint_mask(image, panel)
    base = np.clip(sample_cab_white(image) * 1.03 + np.array([6.0, 8.0, 10.0]), 0, 255)

    result = image.copy()
    ys, xs = np.where(paint_mask > 0)
    y_min, y_max = ys.min(), ys.max()
    rng = np.random.default_rng(7)
    noise = rng.normal(0, 1.3, (len(ys), 3))

    for idx, (y, x) in enumerate(zip(ys, xs)):
        y_norm = (y - y_min) / max(1, y_max - y_min)
        shade = 1.02 - 0.05 * y_norm
        color = base * shade + noise[idx]
        result[y, x] = np.clip(color, 0, 255).astype(np.uint8)

    return result


def load_logo_rgba() -> np.ndarray:
    logo = Image.open(LOGO_PATH).convert("RGBA")
    arr = np.array(logo)
    black = (arr[:, :, 0] <= 28) & (arr[:, :, 1] <= 28) & (arr[:, :, 2] <= 28)
    arr[black, 3] = 0
    return cv2.cvtColor(arr, cv2.COLOR_RGBA2BGRA)


def warp_logo_to_panel(logo: np.ndarray, target_width: int) -> np.ndarray:
    height = int(logo.shape[0] * (target_width / logo.shape[1]))
    logo = cv2.resize(logo, (target_width, height), interpolation=cv2.INTER_LANCZOS4)

    width = logo.shape[1]
    height = logo.shape[0]

    src = np.float32([[0, 0], [width, 0], [width, height], [0, height]])
    dst = np.float32(
        [
            [width * 0.06, height * 0.05],
            [width * 0.94, height * 0.015],
            [width * 0.985, height * 0.96],
            [width * 0.1, height * 0.98],
        ]
    )

    matrix = cv2.getPerspectiveTransform(src, dst)
    warped_size = (int(width * 1.1), int(height * 1.08))
    return cv2.warpPerspective(
        logo,
        matrix,
        warped_size,
        flags=cv2.INTER_LANCZOS4,
        borderMode=cv2.BORDER_CONSTANT,
        borderValue=(0, 0, 0, 0),
    )


def composite_logo(base: np.ndarray, logo: np.ndarray) -> np.ndarray:
    logo_h, logo_w = logo.shape[:2]
    center_x, center_y = 685, 405
    x = max(430, min(center_x - logo_w // 2, base.shape[1] - logo_w - 24))
    y = max(235, min(center_y - logo_h // 2, base.shape[0] - logo_h - 55))

    roi = base[y : y + logo_h, x : x + logo_w]
    alpha = logo[:, :, 3:4].astype(np.float32) / 255.0
    logo_rgb = logo[:, :, :3].astype(np.float32)

    blended = roi.astype(np.float32) * (1 - alpha) + logo_rgb * alpha
    result = base.copy()
    result[y : y + logo_h, x : x + logo_w] = np.clip(blended, 0, 255).astype(np.uint8)
    return result


def main() -> None:
    truck = cv2.imread(TRUCK_PATH)
    if truck is None:
        raise FileNotFoundError(TRUCK_PATH)

    cleaned = repaint_cargo_panel(truck)
    logo = load_logo_rgba()
    warped_logo = warp_logo_to_panel(logo, target_width=190)
    final = composite_logo(cleaned, warped_logo)

    cv2.imwrite(OUTPUT_PATH, final)
    print(f"Saved {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
