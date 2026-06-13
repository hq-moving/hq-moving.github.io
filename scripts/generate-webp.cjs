const fs = require('fs');
const path = require('path');

let sharp;
try {
  sharp = require('sharp');
} catch {
  console.error('sharp is required. Run: npm install --save-dev sharp');
  process.exit(1);
}

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SKIP_FILES = new Set(['favicon.png', 'apple-touch-icon.png']);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }
    if (/\.(jpe?g|png)$/i.test(entry.name) && !SKIP_FILES.has(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertFile(inputPath) {
  const outputPath = inputPath.replace(/\.(jpe?g|png)$/i, '.webp');
  const inputStat = fs.statSync(inputPath);
  const outputExists = fs.existsSync(outputPath);

  if (outputExists) {
    const outputStat = fs.statSync(outputPath);
    if (outputStat.mtimeMs >= inputStat.mtimeMs) {
      return 'skipped';
    }
  }

  await sharp(inputPath).webp({ quality: 82 }).toFile(outputPath);
  return 'converted';
}

async function main() {
  const files = walk(PUBLIC_DIR);
  let converted = 0;
  let skipped = 0;

  for (const file of files) {
    const result = await convertFile(file);
    if (result === 'converted') {
      converted += 1;
      console.log('webp:', path.relative(PUBLIC_DIR, file));
    } else {
      skipped += 1;
    }
  }

  console.log(`WebP generation complete (${converted} converted, ${skipped} up to date).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
