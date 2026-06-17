import { notFound } from 'next/navigation';
import LocationPageLayout from '@/components/LocationPageLayout';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, buildLocationStructuredData } from '@/lib/seo';
import { getLocationBySlug, getLocationSlugs, locations } from '@/lib/locations';

export function generateStaticParams() {
  return getLocationSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const location = getLocationBySlug(params.slug);
  if (!location) return {};

  return buildMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/locations/${params.slug}`,
    keywords: `office furniture installation ${location.city}, commercial movers ${location.county}, cubicle installation ${location.city} FL`,
  });
}

export default function LocationDetailPage({ params }) {
  const location = getLocationBySlug(params.slug);
  if (!location) notFound();

  const relatedLocations = locations
    .filter((item) => item.slug !== location.slug && item.region === location.region && item.slug !== 'treasure-coast')
    .slice(0, 4);

  return (
    <>
      <JsonLd data={buildLocationStructuredData(location)} />
      <LocationPageLayout location={location} relatedLocations={relatedLocations} />
    </>
  );
}
