/**
 * Static export (S3): default — NEXT_STATIC_EXPORT unset or "true"
 * Node hosting (SSR/ISR): set NEXT_STATIC_EXPORT=false, then use platform deploy
 */
const isStaticExport = process.env.NEXT_STATIC_EXPORT !== 'false';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isStaticExport ? { output: 'export' } : {}),
  images: {
    unoptimized: isStaticExport,
  },
};

export default nextConfig;
