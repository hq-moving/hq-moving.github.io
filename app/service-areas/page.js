import Link from 'next/link';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, localBusinessSchema } from '@/lib/seo';
import { cityToLocationSlug } from '@/lib/locations';

export const metadata = buildMetadata({
  title: 'Service Areas - Florida Office Furniture Installation & Interstate Moving',
  description:
    'Headquarters Moving LLC serves the Treasure Coast, all of Florida, and interstate routes for office furniture installation, relocation, and moving to and from other states.',
  path: '/service-areas',
  keywords:
    'interstate moving Florida, interstate installation, office furniture installation Port Saint Lucie, movers Treasure Coast, Florida to out of state movers',
});

const serviceAreas = [
  { region: 'Treasure Coast', cities: ['Port Saint Lucie', 'Fort Pierce', 'Stuart', 'Jensen Beach', 'Vero Beach'] },
  { region: 'Palm Beach County', cities: ['West Palm Beach', 'Jupiter', 'Boca Raton', 'Boynton Beach'] },
  { region: 'Central Florida', cities: ['Orlando', 'Melbourne', 'Lakeland', 'Daytona Beach'] },
  { region: 'South Florida', cities: ['Miami', 'Fort Lauderdale', 'Hollywood', 'Pompano Beach'] },
  {
    region: 'Interstate — Florida & Beyond',
    cities: [
      'Moves from Florida to other states',
      'Moves from other states to Florida',
      'Office furniture installation in other states',
      'Interstate commercial and residential relocation',
      'Cubicle and FF&E installation nationwide',
    ],
  },
];

const areaServices = [
  'Office furniture installation',
  'Cubicle and workstation setup',
  'Interstate installation & moving',
  'Commercial and residential relocation',
  'Office reconfiguration and decommissioning',
];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <NavBar />
      <main className="pt-24 pb-12 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold text-brand text-center mb-4">Areas We Serve</h1>
          <p className="text-xl text-body text-center max-w-3xl mx-auto mb-12">
            Based in Port Saint Lucie, we provide office furniture installation throughout the Treasure Coast and
            Florida, plus interstate moving and installation projects to and from other states.
          </p>

          <section className="mb-12 surface-muted rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-brand mb-4">Services Available in Every Area</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {areaServices.map((item) => (
                <li key={item} className="text-body flex items-center gap-2">
                  <span className="text-brand font-bold" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/locations/treasure-coast"
              className="inline-block mt-6 text-brand font-semibold hover:underline"
            >
              View all Treasure Coast location pages →
            </Link>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {serviceAreas.map((area) => (
              <div key={area.region} className="surface-card rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-brand mb-4">{area.region}</h2>
                <ul className="space-y-2">
                  {area.cities.map((city) => {
                    const locationSlug = cityToLocationSlug[city];
                    return (
                      <li key={city} className="flex items-center gap-2 text-body">
                        <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" aria-hidden="true" />
                        {locationSlug ? (
                          <Link
                            href={`/locations/${locationSlug}`}
                            className="text-body hover:text-brand hover:underline"
                          >
                            {city}
                          </Link>
                        ) : (
                          city
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <section className="bg-brand text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Florida &amp; Interstate Coverage</h2>
            <p className="text-lg text-white/90 mb-6">
              We handle projects across Florida and travel for interstate moves and out-of-state furniture installation.
              Call (772) 207-3720 for a free estimate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services/interstate-installation-moving" className="bg-white text-brand px-8 py-3 rounded-2xl font-bold inline-block dark:bg-gray-900 dark:text-white dark:border-2 dark:border-accent">
                Interstate Services
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-2xl font-bold inline-block hover:bg-white hover:text-brand dark:hover:bg-gray-900 dark:hover:text-accent dark:hover:border-accent">
                Get in Touch
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
