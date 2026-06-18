const fs = require('fs');
const path = require('path');

if (process.env.NEXT_STATIC_EXPORT === 'false') {
  console.log('Skipping S3 postbuild (NEXT_STATIC_EXPORT=false)');
  process.exit(0);
}

const outDir = path.join(__dirname, '..', 'out');
const manifestPath = path.join(__dirname, '.s3-html-routes.json');
const htmlRoutes = [];

function writeExtensionlessRoute(htmlPath, dir, routeName) {
  const extensionlessPath = path.join(dir, routeName);
  const relativeBase = path.relative(outDir, extensionlessPath).replace(/\\/g, '/');
  const htmlRelative = path.relative(outDir, htmlPath).replace(/\\/g, '/');

  if (fs.existsSync(extensionlessPath)) {
    const stat = fs.statSync(extensionlessPath);
    if (stat.isDirectory()) {
      const indexPath = path.join(extensionlessPath, 'index.html');
      fs.copyFileSync(htmlPath, indexPath);
      htmlRoutes.push({ source: htmlRelative, key: relativeBase });
      console.log(`S3 route: /${relativeBase}/ (index.html)`);
      return;
    }
  }

  fs.copyFileSync(htmlPath, extensionlessPath);
  htmlRoutes.push({ source: relativeBase, key: relativeBase });
  console.log(`S3 route: /${relativeBase}`);
}

function createExtensionlessRoutes(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === '_next') continue;
      createExtensionlessRoutes(fullPath);
      continue;
    }

    if (!entry.name.endsWith('.html')) continue;

    const routeName = entry.name.slice(0, -5);
    if (routeName === '404' || routeName === 'index') continue;

    writeExtensionlessRoute(fullPath, dir, routeName);
  }
}

if (!fs.existsSync(outDir)) {
  console.error('out/ not found — run next build first');
  process.exit(1);
}

createExtensionlessRoutes(outDir);

if (htmlRoutes.length > 0) {
  fs.writeFileSync(manifestPath, JSON.stringify(htmlRoutes, null, 2));
  console.log(`HTML routes for S3 upload: ${htmlRoutes.length}`);
} else if (fs.existsSync(manifestPath)) {
  fs.unlinkSync(manifestPath);
}

console.log('Created extensionless S3 objects for clean URLs');
