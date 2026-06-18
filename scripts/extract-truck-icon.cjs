const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const SOURCE = path.join(ROOT, 'public', 'images', 'hqtranslarge.png');
const OUTPUT_PNG = path.join(ROOT, 'public', 'images', 'hq-truck-icon.png');
const OUTPUT_WEBP = path.join(ROOT, 'public', 'images', 'hq-truck-icon.webp');

/** Ignore wordmark rows at the bottom of the master logo. */
const TEXT_START_Y = 1035;

const PADDING = {
  top: 56,
  right: 64,
  bottom: 56,
  left: 56,
};

function isVisiblePixel(data, width, channels, x, y) {
  const i = (y * width + x) * channels;
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = data[i + 3];
  return a > 0 && !(r <= 28 && g <= 28 && b <= 28);
}

async function transparentizeBlack(sourcePath) {
  const { data, info } = await sharp(sourcePath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r <= 28 && g <= 28 && b <= 28) {
      data[i + 3] = 0;
    }
  }

  return { data, width, height, channels };
}

function getTruckBounds({ data, width, height, channels }) {
  let minX = width;
  let maxX = 0;
  let minY = height;
  let maxY = 0;

  for (let y = 0; y < TEXT_START_Y && y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (!isVisiblePixel(data, width, channels, x, y)) continue;
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
  }

  if (minX > maxX || minY > maxY) {
    throw new Error('Could not detect truck bounds in logo source.');
  }

  return { minX, maxX, minY, maxY };
}

async function main() {
  const source = await transparentizeBlack(SOURCE);
  const bounds = getTruckBounds(source);

  const extract = {
    left: Math.max(0, bounds.minX - PADDING.left),
    top: Math.max(0, bounds.minY - PADDING.top),
    right: Math.min(source.width, bounds.maxX + PADDING.right),
    bottom: Math.min(TEXT_START_Y, bounds.maxY + PADDING.bottom),
  };

  const crop = {
    left: extract.left,
    top: extract.top,
    width: extract.right - extract.left,
    height: extract.bottom - extract.top,
  };

  const transparentBuffer = await sharp(source.data, {
    raw: { width: source.width, height: source.height, channels: source.channels },
  })
    .png()
    .toBuffer();

  const cropped = await sharp(transparentBuffer).extract(crop).png().toBuffer();

  await sharp(cropped).png({ compressionLevel: 9 }).toFile(OUTPUT_PNG);
  await sharp(cropped).webp({ quality: 90 }).toFile(OUTPUT_WEBP);

  const meta = await sharp(OUTPUT_PNG).metadata();
  console.log('Truck bounds:', bounds);
  console.log('Crop:', crop);
  console.log(`Saved ${OUTPUT_PNG} (${meta.width}x${meta.height})`);
  console.log(`Saved ${OUTPUT_WEBP}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
