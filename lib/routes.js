import { services } from '@/lib/services';
import { getLocationSlugs } from '@/lib/locations';
import { getGuideSlugs } from '@/lib/guides';
import { getBlogSlugs } from '@/lib/blog';

/** Marketing pages — single registry for sitemap, nav audits, and future CMS migration */
export const staticPages = [
  { path: '/', priority: 1, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/services', priority: 0.9, changefreq: 'weekly' },
  { path: '/office-furniture-systems', priority: 0.95, changefreq: 'monthly' },
  { path: '/service-areas', priority: 0.85, changefreq: 'monthly' },
  { path: '/locations', priority: 0.9, changefreq: 'weekly' },
  { path: '/guides', priority: 0.85, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
];

const servicePriorities = {
  'office-furniture-installation': 0.95,
  'cubicle-installation': 0.95,
  'furniture-decommissioning': 0.9,
  'interstate-installation-moving': 0.95,
};

const locationPriorities = {
  'port-st-lucie': 0.95,
  'west-palm-beach': 0.92,
  'stuart-fl': 0.92,
  'jupiter-fl': 0.92,
  'vero-beach': 0.9,
  'treasure-coast': 0.88,
};

const guidePriorities = {
  'commercial-office-relocation': 0.88,
  'office-furniture-installation': 0.88,
  'cubicle-systems-florida': 0.85,
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

  const locationRoutes = getLocationSlugs().map((slug) => ({
    path: `/locations/${slug}`,
    priority: locationPriorities[slug] ?? 0.85,
    changefreq: 'monthly',
  }));

  const guideRoutes = getGuideSlugs().map((slug) => ({
    path: `/guides/${slug}`,
    priority: guidePriorities[slug] ?? 0.85,
    changefreq: 'monthly',
  }));

  const blogRoutes = getBlogSlugs().map((slug) => ({
    path: `/blog/${slug}`,
    priority: 0.75,
    changefreq: 'monthly',
  }));

  return [...staticPages, ...serviceRoutes, ...locationRoutes, ...guideRoutes, ...blogRoutes];
}

export function getServiceSlugs() {
  return services.map((service) => service.slug);
}
