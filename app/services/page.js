import Link from 'next/link';
import PictureImage from '@/components/PictureImage';
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
      <main className="pt-24 pb-12 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold text-brand text-center mb-4">Our Services</h1>
          <p className="text-xl text-body text-center max-w-3xl mx-auto mb-12">
            Professional office furniture installation, interstate installation and moving, and full-service relocation across Florida and nationwide.
          </p>
          <section className="mb-12 bg-brand-light dark:bg-gray-900 rounded-2xl p-8 border border-brand-light dark:border-gray-700">
            <h2 className="text-2xl font-bold text-brand mb-3">Office Furniture Systems We Install &amp; Relocate</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-3xl">
              Herman Miller AO2, Steelcase 9000, Haworth Premise, Knoll Dividends, Teknion Leverage, HON Initiate,
              and dozens of other legacy cubicle systems — searchable by manufacturer and system name.
            </p>
            <Link
              href="/office-furniture-systems"
              className="text-brand font-semibold hover:underline"
            >
              View all manufacturers &amp; systems we handle →
            </Link>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-brand mb-6 uppercase">Office Furniture Installation</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {officeServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="surface-card rounded-xl shadow-lg overflow-hidden hover:shadow-2xl group">
                  <PictureImage src={service.image} alt={service.title} width={400} height={192} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-5">
                    <h3 className="font-bold text-xl text-brand mb-2">{service.title}</h3>
                    <p className="text-body text-sm">{service.subheadline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-brand mb-6 uppercase">Moving &amp; Interstate Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {movingServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="surface-card rounded-xl shadow-lg overflow-hidden hover:shadow-2xl group">
                  <PictureImage src={service.image} alt={service.title} width={400} height={192} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-5">
                    <h3 className="font-bold text-xl text-brand mb-2">{service.title}</h3>
                    <p className="text-body text-sm">{service.subheadline}</p>
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
