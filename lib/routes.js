import { services } from '@/lib/services';

/** Marketing pages — single registry for sitemap, nav audits, and future CMS migration */
export const staticPages = [
  { path: '/', priority: 1, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/services', priority: 0.9, changefreq: 'weekly' },
  { path: '/office-furniture-systems', priority: 0.95, changefreq: 'monthly' },
  { path: '/service-areas', priority: 0.85, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
];

const servicePriorities = {
  'office-furniture-installation': 0.95,
  'interstate-installation-moving': 0.95,
};

/** All indexable routes for sitemap.xml and SEO tooling */
export function getAllRoutes() {
  const serviceRoutes = services.map((service) => ({
    path: `/services/${service.slug}`,
    priority: servicePriorities[service.slug] ?? 0.9,
    changefreq:
      service.slug === 'commercial-moving' || service.slug === 'residential-moving'
        ? 'monthly'
        : 'weekly',
  }));

  return [...staticPages, ...serviceRoutes];
}

export function getServiceSlugs() {
  return services.map((service) => service.slug);
}
