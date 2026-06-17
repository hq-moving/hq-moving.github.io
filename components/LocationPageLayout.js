import Link from 'next/link';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';
import { getFeaturedLocations } from '@/lib/locations';

export default function LocationPageLayout({ location, relatedLocations = [] }) {
  const featured = getFeaturedLocations().filter((item) => item.slug !== location.slug).slice(0, 4);

  return (
    <>
      <NavBar />
      <main>
        <section className="pt-24 pb-12 bg-gradient-to-b from-brand-light to-white dark:from-gray-900 dark:to-gray-950">
          <PageContainer>
            <nav className="text-sm text-subtle mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/locations" className="hover:text-brand">Locations</Link>
              <span className="mx-2">/</span>
              <span className="text-brand font-semibold">{location.city}</span>
            </nav>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-subtle mb-3">
                {location.region} · {location.county}
              </p>
              <h1 className="text-3xl md:text-5xl xl:text-[3.25rem] font-bold text-brand mb-4">{location.headline}</h1>
              <p className="text-xl text-body font-medium mb-6">{location.subheadline}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="text-white bg-brand hover:bg-brand-dark inline-flex items-center px-6 py-3 text-lg shadow-xl rounded-2xl">
                  Get a Free Estimate →
                </Link>
                <a href="tel:17722073720" className="inline-flex items-center px-6 py-3 text-lg text-brand bg-white dark:bg-gray-900 border-2 border-accent rounded-2xl">
                  (772) 207-3720
                </a>
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="py-12 bg-white dark:bg-gray-950">
          <PageContainer>
            <div className="grid lg:grid-cols-3 gap-10">
              <article className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-brand mb-4">Local Service Overview</h2>
                <p className="text-lg text-body leading-relaxed mb-8">{location.intro}</p>

                <h2 className="text-2xl font-bold text-brand mb-4">Services in {location.city}</h2>
                <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                  {location.services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="surface-card rounded-lg px-4 py-3 border border-gray-100 dark:border-gray-800 block hover:border-accent transition-colors"
                      >
                        <span className="font-semibold text-brand">{service.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {location.childSlugs ? (
                  <>
                    <h2 className="text-2xl font-bold text-brand mb-4">Treasure Coast Cities We Serve</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                      {location.childSlugs.map((slug) => (
                        <li key={slug}>
                          <Link href={`/locations/${slug}`} className="text-brand font-semibold hover:underline capitalize">
                            {slug.replace(/-/g, ' ')} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-brand mb-4">Areas We Serve Near {location.city}</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                      {location.neighborhoods.map((area) => (
                        <li key={area} className="text-body flex items-center gap-2">
                          <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <h2 className="text-2xl font-bold text-brand mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {location.faqs.map((faq) => (
                    <details key={faq.question} className="surface-card bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 group">
                      <summary className="font-semibold text-brand cursor-pointer list-none flex justify-between items-center">
                        {faq.question}
                        <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span>
                      </summary>
                      <p className="mt-3 text-body">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </article>

              <aside>
                <div className="bg-brand text-white rounded-2xl p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-4">Headquarters Moving LLC</h2>
                  <p className="text-sm opacity-90 mb-4">
                    Based in Port St. Lucie, FL · Serving {location.city} and surrounding areas within 100 miles.
                  </p>
                  <ul className="space-y-2 text-sm mb-6">
                    <li>✓ Office furniture installation</li>
                    <li>✓ Cubicle reconfiguration</li>
                    <li>✓ Commercial moving</li>
                    <li>✓ Furniture decommissioning</li>
                  </ul>
                  <p className="font-semibold mb-1">Call or Text</p>
                  <a href="tel:17722073720" className="text-2xl font-bold hover:underline">(772) 207-3720</a>
                </div>
              </aside>
            </div>
          </PageContainer>
        </section>

        {(relatedLocations.length > 0 || featured.length > 0) && (
          <section className="py-12 surface-muted">
            <PageContainer>
              <h2 className="text-2xl font-bold text-brand text-center mb-8">Nearby Service Areas</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {(relatedLocations.length > 0 ? relatedLocations : featured).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/locations/${item.slug}`}
                    className="surface-card rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:border-accent transition-colors"
                  >
                    <h3 className="font-bold text-brand">{item.city}</h3>
                    <p className="text-sm text-subtle mt-1">{item.county}</p>
                  </Link>
                ))}
              </div>
            </PageContainer>
          </section>
        )}

        <section className="py-12 cta">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started in {location.city}?</h2>
            <p className="text-xl mb-6">Contact Headquarters Moving LLC for a free estimate on office furniture installation or commercial moving.</p>
            <Link
              href="/contact"
              className="bg-white text-brand px-8 py-3 rounded-2xl font-bold inline-block hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:border-2 dark:border-accent dark:hover:bg-gray-800"
            >
              Request a Free Estimate
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
