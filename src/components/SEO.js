import { useEffect } from 'react';

const SITE_URL = 'https://www.headquartersmoving.com';
const DEFAULT_IMAGE = `${SITE_URL}/hqtrans.png`;

const upsertMeta = (selector, attributes) => {
    let element = document.head.querySelector(selector);
    if (!element) {
        element = document.createElement('meta');
        Object.entries(attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
        document.head.appendChild(element);
        return;
    }
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
};

const upsertLink = (rel, href) => {
    let element = document.head.querySelector(`link[rel="${rel}"]`);
    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
    }
    element.setAttribute('href', href);
};

const SEO = ({
    title,
    description,
    path = '',
    keywords = '',
    image = DEFAULT_IMAGE,
    type = 'website',
    structuredData = null,
}) => {
    const canonicalUrl = `${SITE_URL}${path}`;
    const fullTitle = title.includes('Headquarters Moving')
        ? title
        : `${title} | Headquarters Moving LLC`;

    useEffect(() => {
        document.title = fullTitle;

        upsertMeta('meta[name="description"]', { name: 'description', content: description });
        upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords });
        upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
        upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
        upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
        upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
        upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
        upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
        upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle });
        upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
        upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });

        upsertLink('canonical', canonicalUrl);

        const existingScript = document.getElementById('structured-data');
        if (existingScript) {
            existingScript.remove();
        }

        if (structuredData) {
            const script = document.createElement('script');
            script.id = 'structured-data';
            script.type = 'application/ld+json';
            script.text = JSON.stringify(structuredData);
            document.head.appendChild(script);
        }
    }, [fullTitle, description, keywords, image, canonicalUrl, type, structuredData]);

    return null;
};

export const localBusinessSchema = (serviceName = null) => ({
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
});

export const serviceSchema = (name, description, path) => ({
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
    areaServed: {
        '@type': 'State',
        name: 'Florida',
    },
    url: `${SITE_URL}${path}`,
});

export default SEO;
