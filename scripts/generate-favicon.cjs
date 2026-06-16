const fs = require('fs');
const path = require('path');

let sharp;
try {
  sharp = require('sharp');
} catch {
  console.error('sharp is required. Run: npm install --save-dev sharp');
  process.exit(1);
}

const ROOT = path.join(__dirname, '..');
const LOGO = path.join(ROOT, 'public', 'hqtrans.png');

/** Ignore logo text below the truck mark */
const TRUCK_MAX_Y_RATIO = 0.58;
/** Target fill of the square canvas (1 = edge-to-edge, limited only by aspect ratio) */
const CANVAS_FILL = 1;
const ALPHA_THRESHOLD = 12;

const OUTPUTS = [
  { file: path.join(ROOT, 'public', 'favicon.png'), size: 48 },
  { file: path.join(ROOT, 'public', 'favicon-32.png'), size: 32 },
  { file: path.join(ROOT, 'public', 'favicon-16.png'), size: 16 },
  { file: path.join(ROOT, 'app', 'icon.png'), size: 32 },
  { file: path.join(ROOT, 'public', 'apple-touch-icon.png'), size: 180 },
  { file: path.join(ROOT, 'public', 'icon-512.png'), size: 512 },
];

const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

async function getTruckBounds() {
  const meta = await sharp(LOGO).metadata();
  const maxY = Math.min(meta.height, Math.round(meta.height * TRUCK_MAX_Y_RATIO));
  const { data, info } = await sharp(LOGO)
    .extract({ left: 0, top: 0, width: meta.width, height: maxY })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let minX = info.width;
  let minY = info.height;
  let maxX = 0;
  let maxYFound = 0;

  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      const index = (y * info.width + x) * 4;
      if (data[index + 3] > ALPHA_THRESHOLD) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxYFound = Math.max(maxYFound, y);
      }
    }
  }

  if (maxX < minX || maxYFound < minY) {
    throw new Error('Could not detect truck bounds in logo');
  }

  const padX = Math.round((maxX - minX + 1) * 0.02);
  const padY = Math.round((maxYFound - minY + 1) * 0.02);

  return {
    left: Math.max(0, minX - padX),
    top: Math.max(0, minY - padY),
    width: Math.min(meta.width, maxX - minX + 1 + padX * 2),
    height: Math.min(maxY, maxYFound - minY + 1 + padY * 2),
  };
}

async function buildLogoSquare(size) {
  const bounds = await getTruckBounds();
  const truck = sharp(LOGO).extract(bounds).ensureAlpha();
  const truckMeta = await truck.metadata();
  const target = Math.max(1, Math.round(size * CANVAS_FILL));
  const scale = target / Math.max(truckMeta.width, truckMeta.height);
  const resizedWidth = Math.max(1, Math.round(truckMeta.width * scale));
  const resizedHeight = Math.max(1, Math.round(truckMeta.height * scale));
  const left = Math.floor((size - resizedWidth) / 2);
  const top = Math.floor((size - resizedHeight) / 2);

  const resized = await truck
    .resize(resizedWidth, resizedHeight, {
      fit: 'fill',
      kernel: sharp.kernel.lanczos3,
    })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: TRANSPARENT,
    },
  })
    .composite([{ input: resized, left, top }])
    .png();
}

async function generateFavicons() {
  if (!fs.existsSync(LOGO)) {
    console.error(`Logo not found: ${LOGO}`);
    process.exit(1);
  }

  const bounds = await getTruckBounds();
  console.log(`Truck bounds: ${bounds.width}x${bounds.height} at (${bounds.left}, ${bounds.top})`);

  for (const { file, size } of OUTPUTS) {
    const image = await buildLogoSquare(size);
    await image.toFile(file);
    console.log(`Favicon: ${path.relative(ROOT, file)} (${size}x${size})`);
  }
}

generateFavicons().catch((error) => {
  console.error(error);
  process.exit(1);
});
