import { notFound } from 'next/navigation';
import GuidePageLayout from '@/components/GuidePageLayout';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, buildGuideStructuredData } from '@/lib/seo';
import { getGuideBySlug, getGuideSlugs } from '@/lib/guides';

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};

  return buildMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${params.slug}`,
    keywords: 'office relocation guide Florida, facility manager office move, office furniture installation planning',
  });
}

export default function GuideDetailPage({ params }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  return (
    <>
      <JsonLd data={buildGuideStructuredData(guide)} />
      <GuidePageLayout guide={guide} />
    </>
  );
}
