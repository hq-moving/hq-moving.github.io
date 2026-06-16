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

/** Favicon uses the truck mark only — full logo text is unreadable at 16–48px */
const TRUCK_CROP_RATIO = 0.58;

const OUTPUTS = [
  { file: path.join(ROOT, 'public', 'favicon.png'), size: 48 },
  { file: path.join(ROOT, 'public', 'favicon-32.png'), size: 32 },
  { file: path.join(ROOT, 'public', 'favicon-16.png'), size: 16 },
  { file: path.join(ROOT, 'app', 'icon.png'), size: 32 },
  { file: path.join(ROOT, 'public', 'apple-touch-icon.png'), size: 180 },
  { file: path.join(ROOT, 'public', 'icon-512.png'), size: 512 },
];

async function buildLogoSquare(size) {
  const meta = await sharp(LOGO).metadata();
  const cropHeight = Math.round(meta.height * TRUCK_CROP_RATIO);

  return sharp(LOGO)
    .extract({
      left: 0,
      top: 0,
      width: meta.width,
      height: Math.min(cropHeight, meta.height),
    })
    .resize(size, size, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png();
}

async function generateFavicons() {
  if (!fs.existsSync(LOGO)) {
    console.error(`Logo not found: ${LOGO}`);
    process.exit(1);
  }

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
