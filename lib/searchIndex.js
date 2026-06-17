import { services } from '@/lib/services';
import { locations } from '@/lib/locations';
import { guides } from '@/lib/guides';
import { blogPosts } from '@/lib/blog';
import { legacySystems, majorManufacturers } from '@/lib/furnitureSystems';

const staticEntries = [
  {
    title: 'Home',
    description: 'Office furniture installation and commercial moving across Florida.',
    href: '/',
    category: 'Page',
    text: 'Headquarters Moving Treasure Coast Florida',
  },
  {
    title: 'About Us',
    description: 'Learn about Headquarters Moving LLC.',
    href: '/about',
    category: 'Page',
    text: 'about headquarters moving company',
  },
  {
    title: 'Services',
    description: 'Office furniture installation, cubicles, moving, and decommissioning.',
    href: '/services',
    category: 'Page',
    text: 'all services commercial office',
  },
  {
    title: 'Office Furniture Systems',
    description: 'Herman Miller, Steelcase, Haworth, Knoll, and legacy cubicle systems.',
    href: '/office-furniture-systems',
    category: 'Page',
    text: 'manufacturers cubicle systems Herman Miller Steelcase Haworth Knoll',
  },
  {
    title: 'Service Areas',
    description: 'Treasure Coast, Palm Beach County, and interstate coverage.',
    href: '/service-areas',
    category: 'Page',
    text: 'areas serve Florida cities regions',
  },
  {
    title: 'Locations',
    description: 'Local office moving and furniture installation by city.',
    href: '/locations',
    category: 'Page',
    text: 'locations cities Port St Lucie Stuart Jupiter',
  },
  {
    title: 'Guides',
    description: 'Facility manager guides for relocation and installation.',
    href: '/guides',
    category: 'Page',
    text: 'guides facility manager relocation',
  },
  {
    title: 'Resources',
    description: 'Articles and case studies for office relocation and furniture projects.',
    href: '/blog',
    category: 'Page',
    text: 'blog articles case studies resources',
  },
  {
    title: 'Contact',
    description: 'Request a free estimate or call (772) 207-3720.',
    href: '/contact',
    category: 'Page',
    text: 'contact estimate phone email',
  },
];

function buildSearchIndex() {
  const serviceEntries = services.map((service) => ({
    title: service.title,
    description: service.metaDescription,
    href: `/services/${service.slug}`,
    category: 'Service',
    text: [
      service.headline,
      service.subheadline,
      service.intro,
      service.keywords,
      ...(service.features?.map((f) => `${f.title} ${f.description}`) ?? []),
      ...(service.faqs?.map((f) => `${f.question} ${f.answer}`) ?? []),
    ].join(' '),
  }));

  const locationEntries = locations.map((location) => ({
    title: `${location.city} — Office Moving & Installation`,
    description: location.metaDescription,
    href: `/locations/${location.slug}`,
    category: 'Location',
    text: [location.headline, location.subheadline, location.intro, location.county, location.region, ...(location.neighborhoods ?? [])].join(' '),
  }));

  const guideEntries = guides.map((guide) => ({
    title: guide.headline,
    description: guide.metaDescription,
    href: `/guides/${guide.slug}`,
    category: 'Guide',
    text: [
      guide.subheadline,
      ...guide.sections.flatMap((s) => [s.title, ...s.paragraphs]),
      ...guide.faqs.flatMap((f) => [f.question, f.answer]),
    ].join(' '),
  }));

  const blogEntries = blogPosts.map((post) => ({
    title: post.title,
    description: post.excerpt,
    href: `/blog/${post.slug}`,
    category: post.category === 'case-study' ? 'Case Study' : 'Article',
    text: [
      post.metaDescription,
      ...post.sections.flatMap((s) => [s.title, ...s.paragraphs]),
    ].join(' '),
  }));

  const systemTerms = [
    ...majorManufacturers,
    ...legacySystems.flatMap((group) => [group.manufacturer, ...group.systems]),
  ];

  const systemEntries = systemTerms.map((term) => ({
    title: term,
    description: 'Office furniture system we install, reconfigure, and relocate.',
    href: '/office-furniture-systems',
    category: 'System',
    text: `${term} cubicle panel furniture installation`,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...locationEntries,
    ...guideEntries,
    ...blogEntries,
    ...systemEntries,
  ];
}

export const searchIndex = buildSearchIndex();

function scoreEntry(entry, query) {
  const title = entry.title.toLowerCase();
  const description = entry.description.toLowerCase();
  const text = entry.text.toLowerCase();
  const words = query.split(/\s+/).filter(Boolean);

  let score = 0;

  for (const word of words) {
    if (title === word) score += 20;
    else if (title.startsWith(word)) score += 14;
    else if (title.includes(word)) score += 10;
    else if (description.includes(word)) score += 6;
    else if (text.includes(word)) score += 3;
  }

  if (title.includes(query)) score += 5;
  if (description.includes(query)) score += 3;

  return score;
}

/** Client-side site search — works on static S3 export without a backend */
export function searchSite(query, limit = 8) {
  const normalized = query.trim().toLowerCase();
  if (normalized.length < 2) return [];

  const ranked = searchIndex
    .map((entry) => ({ entry, score: scoreEntry(entry, normalized) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  const seen = new Set();
  const results = [];

  for (const { entry } of ranked) {
    const key = `${entry.href}|${entry.title}`;
    if (seen.has(key)) continue;
    seen.add(key);
    results.push(entry);
    if (results.length >= limit) break;
  }

  return results;
}
