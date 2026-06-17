import { notFound } from 'next/navigation';
import ServicePageLayout from '@/components/ServicePageLayout';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, buildServiceStructuredData } from '@/lib/seo';
import { getServiceBySlug, services } from '@/lib/services';
import { getServiceSlugs } from '@/lib/routes';

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle || service.title,
    description: service.metaDescription,
    path: `/services/${params.slug}`,
    keywords: service.keywords,
  });
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) notFound();

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={buildServiceStructuredData(service)} />
      <ServicePageLayout service={service} relatedServices={relatedServices} />
    </>
  );
}
