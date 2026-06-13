import Link from 'next/link';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import FurnitureSystemsSearch from '@/components/FurnitureSystemsSearch';
import { buildMetadata, buildFurnitureSystemsStructuredData } from '@/lib/seo';
import {
  floridaCommonSystems,
  furnitureSystemsFaqs,
  legacySystems,
  majorManufacturers,
  systemServices,
} from '@/lib/furnitureSystems';

export const metadata = buildMetadata({
  title: 'Office Furniture Systems We Install, Reconfigure & Relocate',
  description:
    'Headquarters Moving installs, moves, reconfigures, and decommissions Herman Miller, Steelcase, Haworth, Knoll, Teknion, HON, AIS, and other legacy cubicle systems across Florida.',
  path: '/office-furniture-systems',
  keywords:
    'Herman Miller AO2 installation, Herman Miller Ethospace installers, Steelcase 9000 movers, Steelcase Answer installation, Haworth Premise reconfiguration, Knoll Dividends installers, cubicle reconfiguration services, office furniture installation Florida',
});

export default function OfficeFurnitureSystemsPage() {
  return (
    <>
      <JsonLd data={buildFurnitureSystemsStructuredData()} />
      <NavBar />
      <main className="pt-24 pb-12 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <nav className="text-sm text-subtle mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-brand">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand font-semibold">Office Furniture Systems</span>
          </nav>

          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-brand mb-4">
              Office Furniture Systems We Install, Reconfigure &amp; Relocate
            </h1>
            <p className="text-xl text-body max-w-4xl leading-relaxed">
              Facility managers, project managers, furniture dealerships, and office relocation coordinators
              search by exact manufacturer and panel system when planning moves and renovations. Headquarters
              Moving crews work with the commercial furniture brands and legacy cubicle systems found in
              corporate offices, government buildings, schools, and hospitals throughout Florida.
            </p>
          </header>

          <FurnitureSystemsSearch />

          <section className="mb-12" aria-labelledby="manufacturers-heading">
            <h2 id="manufacturers-heading" className="text-2xl font-bold text-brand mb-4">
              Major Commercial Furniture Brands
            </h2>
            <p className="text-body mb-6">
              We install, relocate, reconfigure, and decommission furniture from the manufacturers facility
              teams specify most often:
            </p>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {majorManufacturers.map((name) => (
                <li key={name} className="surface-muted rounded-lg px-4 py-3 border border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200">
                  {name}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12" aria-labelledby="legacy-systems-heading">
            <h2 id="legacy-systems-heading" className="text-2xl font-bold text-brand mb-4">
              Legacy Cubicle Systems We Encounter Every Day
            </h2>
            <p className="text-body mb-8">
              These are the panel and cubicle systems our movers and installers work with most often during
              office relocations, downsizing, and reconfigurations:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {legacySystems.map((group) => (
                <article
                  key={group.manufacturer}
                  className="surface-card rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-800"
                >
                  <h3 className="text-xl font-bold text-brand mb-3">{group.manufacturer}</h3>
                  <ul className="space-y-2">
                    {group.systems.map((system) => (
                      <li key={system} className="text-body flex items-start gap-2">
                        <span className="text-brand font-bold mt-1">•</span>
                        {system}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-12 bg-brand-light dark:bg-gray-900 rounded-2xl p-8 border border-brand-light dark:border-gray-800" aria-labelledby="florida-systems-heading">
            <h2 id="florida-systems-heading" className="text-2xl font-bold text-brand mb-4">
              Systems Commonly Found in Florida Government &amp; Corporate Offices
            </h2>
            <p className="text-body mb-6">
              Throughout Florida, our crews constantly encounter these systems in state agencies, municipalities,
              schools, hospitals, and older corporate offices:
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {floridaCommonSystems.map((item) => (
                <li
                  key={item.name}
                  className="surface-card rounded-lg px-4 py-3 border border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200 font-medium"
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold text-brand mb-3">Project types we handle for these systems</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {systemServices.map((service) => (
                <li key={service} className="text-body flex items-center gap-2">
                  <span className="text-brand font-bold">✓</span> {service}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12" aria-labelledby="related-services-heading">
            <h2 id="related-services-heading" className="text-2xl font-bold text-brand mb-4">
              Related Installation &amp; Moving Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/services/office-furniture-installation"
                className="rounded-xl surface-card border border-gray-100 dark:border-gray-800 p-5 shadow-sm hover:shadow-md hover:border-brand-light"
              >
                <h3 className="font-bold text-brand">Office Furniture Installation</h3>
              </Link>
              <Link
                href="/services/cubicle-installation"
                className="rounded-xl surface-card border border-gray-100 dark:border-gray-800 p-5 shadow-sm hover:shadow-md hover:border-brand-light"
              >
                <h3 className="font-bold text-brand">Cubicle Installation</h3>
              </Link>
              <Link
                href="/services/office-reconfiguration"
                className="rounded-xl surface-card border border-gray-100 dark:border-gray-800 p-5 shadow-sm hover:shadow-md hover:border-brand-light"
              >
                <h3 className="font-bold text-brand">Office Reconfiguration</h3>
              </Link>
              <Link
                href="/services/furniture-decommissioning"
                className="rounded-xl surface-card border border-gray-100 dark:border-gray-800 p-5 shadow-sm hover:shadow-md hover:border-brand-light"
              >
                <h3 className="font-bold text-brand">Furniture Decommissioning</h3>
              </Link>
            </div>
          </section>

          <section className="mb-12" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-brand mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {furnitureSystemsFaqs.map((faq) => (
                <details key={faq.question} className="surface-card bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 group">
                  <summary className="font-semibold text-brand cursor-pointer list-none flex justify-between items-center">
                    {faq.question}
                    <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <p className="mt-3 text-body">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-brand text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Planning a Move or Reconfiguration?</h2>
            <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
              Tell us your manufacturer, panel system, and floor plan. We will provide a free estimate for
              installation, relocation, reconfiguration, or decommissioning anywhere in Florida.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-brand px-8 py-3 rounded-2xl font-bold inline-block hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:border-2 dark:border-accent dark:hover:bg-gray-800"
              >
                Request a Free Estimate
              </Link>
              <a
                href="tel:17722073720"
                className="border-2 border-white text-white px-8 py-3 rounded-2xl font-bold inline-block hover:bg-white hover:text-brand dark:hover:bg-gray-900 dark:hover:text-accent dark:hover:border-accent"
              >
                Call (772) 207-3720
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
