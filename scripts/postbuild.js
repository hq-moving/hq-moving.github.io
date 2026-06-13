const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');
const fallbackPath = path.join(buildDir, '404.html');

if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, fallbackPath);
    console.log('Created 404.html for SPA routing on S3/CloudFront');
} else {
    console.error('build/index.html not found — skipping 404.html copy');
    process.exit(1);
}
