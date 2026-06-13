/** Canonical site URL — override locally via NEXT_PUBLIC_SITE_URL in .env.local */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.headquartersmoving.com';

export const SITE_NAME = 'Headquarters Moving LLC';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/hqtrans.png`;

/**
 * true  → static HTML in out/ (current S3 + CloudFront setup)
 * false → full Next.js server (Amplify, Vercel, ECS) — set NEXT_STATIC_EXPORT=false
 */
export const STATIC_EXPORT = process.env.NEXT_STATIC_EXPORT !== 'false';

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
