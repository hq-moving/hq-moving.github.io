import Link from 'next/link';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, localBusinessSchema } from '@/lib/seo';

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
      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 text-center mb-4">Areas We Serve</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Based in Port Saint Lucie, we provide office furniture installation throughout the Treasure Coast and
            Florida, plus interstate moving and installation projects to and from other states.
          </p>

          <section className="mb-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Services Available in Every Area</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {areaServices.map((item) => (
                <li key={item} className="text-gray-700 flex items-center gap-2">
                  <span className="text-blue-900 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
            <Link
              href="/services/interstate-installation-moving"
              className="inline-block mt-6 text-blue-900 font-semibold hover:underline"
            >
              Learn about interstate installation &amp; moving →
            </Link>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {serviceAreas.map((area) => (
              <div key={area.region} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-blue-900 mb-4">{area.region}</h2>
                <ul className="space-y-2">
                  {area.cities.map((city) => (
                    <li key={city} className="text-gray-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-900 rounded-full flex-shrink-0" /> {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <section className="bg-blue-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Florida &amp; Interstate Coverage</h2>
            <p className="text-lg mb-6 opacity-90">
              We handle projects across Florida and travel for interstate moves and out-of-state furniture installation.
              Call (772) 207-3720 for a free estimate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services/interstate-installation-moving" className="bg-white text-blue-900 px-8 py-3 rounded-2xl font-bold inline-block">
                Interstate Services
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-2xl font-bold inline-block hover:bg-white hover:text-blue-900">
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
