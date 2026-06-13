import { getAllRoutes } from '@/lib/routes';
import { absoluteUrl } from '@/lib/site';

/** Built at compile time on S3; becomes dynamic when STATIC_EXPORT is disabled */
export default function sitemap() {
  const lastModified = new Date();

  return getAllRoutes().map(({ path, changefreq, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: changefreq,
    priority,
  }));
}
