import Link from 'next/link';
import Image from 'next/image';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, localBusinessSchema } from '@/lib/seo';
import { services, officeServices, movingServices } from '@/lib/services';

export const metadata = buildMetadata({
  title: 'Moving & Office Furniture Installation Services',
  description: 'Explore Headquarters Moving LLC services across Florida.',
  path: '/services',
  keywords: 'moving services Florida, office furniture installation, cubicle installation',
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <NavBar />
      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 text-center mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Professional office furniture installation, intrastate installation and moving, and full-service relocation across Florida.
          </p>
          <section className="mb-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Office Furniture Systems We Install &amp; Relocate</h2>
            <p className="text-gray-700 mb-4 max-w-3xl">
              Herman Miller AO2, Steelcase 9000, Haworth Premise, Knoll Dividends, Teknion Leverage, HON Initiate,
              and dozens of other legacy cubicle systems — searchable by manufacturer and system name.
            </p>
            <Link
              href="/office-furniture-systems"
              className="text-blue-900 font-semibold hover:underline"
            >
              View all manufacturers &amp; systems we handle →
            </Link>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 uppercase">Office Furniture Installation</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {officeServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl group">
                  <Image src={service.image} alt={service.title} width={400} height={192} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-5">
                    <h3 className="font-bold text-xl text-blue-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.subheadline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 uppercase">Moving &amp; Intrastate Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {movingServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row group">
                  <Image src={service.image} alt={service.title} width={192} height={192} className="sm:w-48 h-48 object-cover" />
                  <div className="p-5 flex flex-col justify-center">
                    <h3 className="font-bold text-xl text-blue-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.subheadline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
