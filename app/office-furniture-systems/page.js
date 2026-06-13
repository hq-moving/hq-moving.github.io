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
      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-blue-900">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-blue-900 font-semibold">Office Furniture Systems</span>
          </nav>

          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              Office Furniture Systems We Install, Reconfigure &amp; Relocate
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
              Facility managers, project managers, furniture dealerships, and office relocation coordinators
              search by exact manufacturer and panel system when planning moves and renovations. Headquarters
              Moving crews work with the commercial furniture brands and legacy cubicle systems found in
              corporate offices, government buildings, schools, and hospitals throughout Florida.
            </p>
          </header>

          <FurnitureSystemsSearch />

          <section className="mb-12" aria-labelledby="manufacturers-heading">
            <h2 id="manufacturers-heading" className="text-2xl font-bold text-blue-900 mb-4">
              Major Commercial Furniture Brands
            </h2>
            <p className="text-gray-600 mb-6">
              We install, relocate, reconfigure, and decommission furniture from the manufacturers facility
              teams specify most often:
            </p>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {majorManufacturers.map((name) => (
                <li key={name} className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-100 text-gray-800">
                  {name}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12" aria-labelledby="legacy-systems-heading">
            <h2 id="legacy-systems-heading" className="text-2xl font-bold text-blue-900 mb-4">
              Legacy Cubicle Systems We Encounter Every Day
            </h2>
            <p className="text-gray-600 mb-8">
              These are the panel and cubicle systems our movers and installers work with most often during
              office relocations, downsizing, and reconfigurations:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {legacySystems.map((group) => (
                <article
                  key={group.manufacturer}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{group.manufacturer}</h3>
                  <ul className="space-y-2">
                    {group.systems.map((system) => (
                      <li key={system} className="text-gray-700 flex items-start gap-2">
                        <span className="text-blue-900 font-bold mt-1">•</span>
                        {system}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-12 bg-blue-50 rounded-2xl p-8 border border-blue-100" aria-labelledby="florida-systems-heading">
            <h2 id="florida-systems-heading" className="text-2xl font-bold text-blue-900 mb-4">
              Systems Commonly Found in Florida Government &amp; Corporate Offices
            </h2>
            <p className="text-gray-700 mb-6">
              Throughout Florida, our crews constantly encounter these systems in state agencies, municipalities,
              schools, hospitals, and older corporate offices:
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {floridaCommonSystems.map((item) => (
                <li
                  key={item.name}
                  className="bg-white rounded-lg px-4 py-3 border border-blue-100 text-gray-800 font-medium"
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold text-blue-900 mb-3">Project types we handle for these systems</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {systemServices.map((service) => (
                <li key={service} className="text-gray-700 flex items-center gap-2">
                  <span className="text-blue-900 font-bold">✓</span> {service}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12" aria-labelledby="related-services-heading">
            <h2 id="related-services-heading" className="text-2xl font-bold text-blue-900 mb-4">
              Related Installation &amp; Moving Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/services/office-furniture-installation"
                className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-blue-200"
              >
                <h3 className="font-bold text-blue-900">Office Furniture Installation</h3>
              </Link>
              <Link
                href="/services/cubicle-installation"
                className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-blue-200"
              >
                <h3 className="font-bold text-blue-900">Cubicle Installation</h3>
              </Link>
              <Link
                href="/services/office-reconfiguration"
                className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-blue-200"
              >
                <h3 className="font-bold text-blue-900">Office Reconfiguration</h3>
              </Link>
              <Link
                href="/services/furniture-decommissioning"
                className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-blue-200"
              >
                <h3 className="font-bold text-blue-900">Furniture Decommissioning</h3>
              </Link>
            </div>
          </section>

          <section className="mb-12" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-blue-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {furnitureSystemsFaqs.map((faq) => (
                <details key={faq.question} className="bg-gray-50 rounded-xl p-5 border border-gray-100 group">
                  <summary className="font-semibold text-blue-900 cursor-pointer list-none flex justify-between items-center">
                    {faq.question}
                    <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-blue-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Planning a Move or Reconfiguration?</h2>
            <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
              Tell us your manufacturer, panel system, and floor plan. We will provide a free estimate for
              installation, relocation, reconfiguration, or decommissioning anywhere in Florida.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-2xl font-bold inline-block hover:bg-gray-100"
              >
                Request a Free Estimate
              </Link>
              <a
                href="tel:17722073720"
                className="border-2 border-white text-white px-8 py-3 rounded-2xl font-bold inline-block hover:bg-white hover:text-blue-900"
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
