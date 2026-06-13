const RASTER_IMAGE = /\.(jpe?g|png)$/i;

export function getWebpSrc(src) {
  return src.replace(RASTER_IMAGE, '.webp');
}

export function hasWebpFallback(src) {
  return RASTER_IMAGE.test(src);
}
