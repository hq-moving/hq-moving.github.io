const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outDir = path.join(__dirname, '..', 'out');
const bucket = process.env.S3_BUCKET || 's3://headquartersmoving.com';
const manifestPath = path.join(__dirname, '.s3-html-routes.json');

if (process.env.NEXT_STATIC_EXPORT === 'false') {
  console.log('Skipping S3 route uploads (NEXT_STATIC_EXPORT=false)');
  process.exit(0);
}

if (!fs.existsSync(manifestPath)) {
  console.log('No HTML routes to upload.');
  process.exit(0);
}

const htmlRoutes = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

for (const { source, key } of htmlRoutes) {
  const filePath = path.join(outDir, source);

  if (!fs.existsSync(filePath)) {
    console.warn(`Skipping missing route file: ${source}`);
    continue;
  }

  const destination = `${bucket}/${key}`;

  execSync(
    `aws s3 cp "${filePath}" "${destination}" --content-type text/html --cache-control "public, max-age=0, must-revalidate"`,
    { stdio: 'inherit' }
  );
  console.log(`Uploaded HTML route: /${key}`);
}

console.log(`Set text/html content-type on ${htmlRoutes.length} extensionless routes`);
