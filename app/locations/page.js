import Link from 'next/link';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, localBusinessSchema } from '@/lib/seo';
import { locations } from '@/lib/locations';

export const metadata = buildMetadata({
  title: 'Office Furniture Installation & Moving Locations | HQ Moving',
  description:
    'Headquarters Moving serves Port St. Lucie, Stuart, Jupiter, West Palm Beach, Vero Beach, and cities within 100 miles for office furniture installation and commercial moving.',
  path: '/locations',
  keywords:
    'office movers Port St Lucie, commercial movers Treasure Coast, office furniture installation Stuart, cubicle installation Jupiter',
});

export default function LocationsIndexPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <NavBar />
      <main className="pt-24 pb-12 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold text-brand text-center mb-4">Service Locations</h1>
          <p className="text-xl text-body text-center max-w-3xl mx-auto mb-12">
            Based in Port St. Lucie, Headquarters Moving LLC provides office furniture installation and commercial moving
            throughout the Treasure Coast, Palm Beach County, and within a 100-mile radius.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="surface-card rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-accent transition-colors shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-subtle mb-2">{location.region}</p>
                <h2 className="text-xl font-bold text-brand mb-2">{location.city}</h2>
                <p className="text-sm text-body line-clamp-2">{location.subheadline}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
