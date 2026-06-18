import { getAllRoutes } from '@/lib/routes';
import { absoluteUrl } from '@/lib/site';

/** Built at compile time on S3; becomes dynamic when STATIC_EXPORT is disabled */
export default function sitemap() {
  // Google prefers YYYY-MM-DD (no milliseconds) for lastmod
  const lastModified = new Date().toISOString().slice(0, 10);

  return getAllRoutes().map(({ path, changefreq, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: changefreq,
    priority,
  }));
}
