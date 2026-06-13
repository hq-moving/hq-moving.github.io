import { furnitureSystemsFaqs } from '@/lib/furnitureSystems';

export const SITE_URL = 'https://www.headquartersmoving.com';
export const DEFAULT_IMAGE = `${SITE_URL}/hqtrans.png`;

export function buildMetadata({ title, description, path = '', keywords = '' }) {
  const fullTitle = title.includes('Headquarters Moving')
    ? title
    : `${title} | Headquarters Moving LLC`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Headquarters Moving LLC',
      images: [{ url: DEFAULT_IMAGE }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [DEFAULT_IMAGE],
    },
  };
}

export function localBusinessSchema(serviceName = null) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'Headquarters Moving LLC',
    url: SITE_URL,
    logo: DEFAULT_IMAGE,
    image: DEFAULT_IMAGE,
    telephone: '+1-772-207-3720',
    email: 'HeadquartersMovers@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Port Saint Lucie',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: [
      'Port Saint Lucie',
      'Stuart',
      'Fort Pierce',
      'Vero Beach',
      'Jupiter',
      'West Palm Beach',
      'Treasure Coast',
      'Florida',
    ],
    priceRange: '$$',
    ...(serviceName ? { description: serviceName } : {}),
  };
}

export function serviceSchema(name, description, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'MovingCompany',
      name: 'Headquarters Moving LLC',
      url: SITE_URL,
      telephone: '+1-772-207-3720',
    },
    areaServed: { '@type': 'State', name: 'Florida' },
    url: `${SITE_URL}${path}`,
  };
}

export function buildFurnitureSystemsStructuredData() {
  const path = '/office-furniture-systems';
  const name = 'Office Furniture Systems We Install, Reconfigure & Relocate';
  const description =
    'Installation, relocation, reconfiguration, and decommissioning for Herman Miller, Steelcase, Haworth, Knoll, Teknion, HON, AIS, and other legacy cubicle systems across Florida.';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      localBusinessSchema(name),
      serviceSchema(name, description, path),
      {
        '@type': 'FAQPage',
        mainEntity: furnitureSystemsFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };
}

export function buildServiceStructuredData(service) {
  const path = `/services/${service.slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      localBusinessSchema(service.title),
      serviceSchema(service.title, service.metaDescription, path),
      ...(service.faqs?.length
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: service.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
            },
          ]
        : []),
    ],
  };
}
