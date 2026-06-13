const fs = require('fs');
const path = require('path');

if (process.env.NEXT_STATIC_EXPORT === 'false') {
  console.log('Skipping S3 postbuild (NEXT_STATIC_EXPORT=false)');
  process.exit(0);
}

const outDir = path.join(__dirname, '..', 'out');
const manifestPath = path.join(__dirname, '.s3-directory-route-conflicts.json');

function writeExtensionlessRoute(htmlPath, dir, routeName) {
  const extensionlessPath = path.join(dir, routeName);
  const relativeBase = path.relative(outDir, extensionlessPath).replace(/\\/g, '/');

  if (fs.existsSync(extensionlessPath)) {
    const stat = fs.statSync(extensionlessPath);
    if (stat.isDirectory()) {
      const indexPath = path.join(extensionlessPath, 'index.html');
      fs.copyFileSync(htmlPath, indexPath);
      console.log(`S3 route: /${relativeBase}/ (index.html)`);
      return 'directory-conflict';
    }
  }

  fs.copyFileSync(htmlPath, extensionlessPath);
  console.log(`S3 route: /${relativeBase}`);
  return 'extensionless-file';
}

function createExtensionlessRoutes(dir) {
  const directoryConflicts = [];

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

    const result = writeExtensionlessRoute(fullPath, dir, routeName);
    if (result === 'directory-conflict') {
      directoryConflicts.push(fullPath);
    }
  }

  return directoryConflicts;
}

if (!fs.existsSync(outDir)) {
  console.error('out/ not found — run next build first');
  process.exit(1);
}

const directoryConflicts = createExtensionlessRoutes(outDir);

if (directoryConflicts.length > 0) {
  fs.writeFileSync(manifestPath, JSON.stringify(directoryConflicts, null, 2));
  console.log(`Directory route conflicts: ${directoryConflicts.length} (requires upload-s3-routes)`);
} else if (fs.existsSync(manifestPath)) {
  fs.unlinkSync(manifestPath);
}

console.log('Created extensionless S3 objects for clean URLs');
