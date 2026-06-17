import { furnitureSystemsFaqs } from '@/lib/furnitureSystems';
import { SITE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/site';

export { SITE_URL, DEFAULT_OG_IMAGE, SITE_NAME };

export function buildMetadata({ title, description, path = '', keywords = '' }) {
  const fullTitle =
    title.includes('Headquarters Moving') || title.includes('HQ Moving')
      ? title
      : `${title} | Headquarters Moving LLC`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
        { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      ],
      shortcut: '/favicon.png',
      apple: '/apple-touch-icon.png',
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: DEFAULT_OG_IMAGE }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function localBusinessSchema(serviceName = null, location = null) {
  const base = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'Headquarters Moving LLC',
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    image: DEFAULT_OG_IMAGE,
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
    ],
    ...(serviceName ? { description: serviceName } : {}),
  };

  if (!location) return base;

  return {
    ...base,
    name: `Headquarters Moving LLC — ${location.city}`,
    url: `${SITE_URL}/locations/${location.slug}`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.lat,
      longitude: location.lng,
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: location.county,
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Office Moving & Furniture Installation — ${location.city}`,
      itemListElement: location.services.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          url: `${SITE_URL}/services/${service.slug}`,
        },
      })),
    },
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

export function buildLocationStructuredData(location) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      localBusinessSchema(location.headline, location),
      {
        '@type': 'Service',
        name: `Office Furniture Installation — ${location.city}`,
        description: location.metaDescription,
        provider: {
          '@type': 'MovingCompany',
          name: 'Headquarters Moving LLC',
          url: SITE_URL,
          telephone: '+1-772-207-3720',
        },
        areaServed: { '@type': 'City', name: location.city },
        url: `${SITE_URL}/locations/${location.slug}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: location.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };
}

export function buildGuideStructuredData(guide) {
  const path = `/guides/${guide.slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.headline,
        description: guide.metaDescription,
        author: { '@type': 'Organization', name: 'Headquarters Moving LLC' },
        publisher: {
          '@type': 'Organization',
          name: 'Headquarters Moving LLC',
          logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE },
        },
        url: `${SITE_URL}${path}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: guide.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };
}

export function buildBlogStructuredData(post) {
  const path = `/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'Headquarters Moving LLC' },
    publisher: {
      '@type': 'Organization',
      name: 'Headquarters Moving LLC',
      logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE },
    },
    url: `${SITE_URL}${path}`,
  };
}
