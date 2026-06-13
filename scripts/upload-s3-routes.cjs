const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outDir = path.join(__dirname, '..', 'out');
const bucket = process.env.S3_BUCKET || 's3://www.headquartersmoving.com';
const manifestPath = path.join(__dirname, '.s3-directory-route-conflicts.json');

if (process.env.NEXT_STATIC_EXPORT === 'false') {
  console.log('Skipping S3 route uploads (NEXT_STATIC_EXPORT=false)');
  process.exit(0);
}

if (!fs.existsSync(manifestPath)) {
  console.log('No directory route conflicts to upload.');
  process.exit(0);
}

const htmlPaths = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

for (const htmlPath of htmlPaths) {
  const routeName = path.basename(htmlPath, '.html');
  const dir = path.dirname(htmlPath);
  const extensionlessDir = path.join(dir, routeName);

  if (!fs.existsSync(extensionlessDir) || !fs.statSync(extensionlessDir).isDirectory()) {
    continue;
  }

  const s3Key = path.relative(outDir, extensionlessDir).replace(/\\/g, '/');
  const destination = `${bucket}/${s3Key}`;

  execSync(
    `aws s3 cp "${htmlPath}" "${destination}" --content-type text/html`,
    { stdio: 'inherit' }
  );
  console.log(`Uploaded flat S3 route: /${s3Key}`);
}

fs.unlinkSync(manifestPath);
