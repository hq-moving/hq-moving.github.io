import { getWebpSrc, hasWebpFallback } from '@/lib/images';

export default function PictureImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  ...rest
}) {
  const imgProps = {
    src,
    alt,
    width,
    height,
    className,
    loading: priority ? 'eager' : 'lazy',
    decoding: 'async',
    fetchPriority: priority ? 'high' : undefined,
    ...rest,
  };

  if (!hasWebpFallback(src)) {
    return <img {...imgProps} />;
  }

  return (
    <picture className="contents">
      <source srcSet={getWebpSrc(src)} type="image/webp" />
      <img {...imgProps} />
    </picture>
  );
}
