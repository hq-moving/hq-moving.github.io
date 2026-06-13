import Link from 'next/link';
import PictureImage from '@/components/PictureImage';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';
import { services } from '@/lib/services';
export default function ServicePageLayout({ service, relatedServices = [] }) {
  return (
    <>
      <NavBar />
      <main>
        <section className="pt-24 pb-12 bg-gradient-to-b from-brand-light to-white dark:from-gray-900 dark:to-gray-950">
          <PageContainer>
            <nav className="text-sm text-subtle mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-brand">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-brand font-semibold">{service.shortTitle}</span>
            </nav>
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-center">
              <div className="lg:w-1/2" data-aos="fade-right">
                <h1 className="text-3xl md:text-5xl xl:text-[3.25rem] font-bold text-brand mb-4">{service.headline}</h1>
                <p className="text-xl text-body font-medium mb-6">{service.subheadline}</p>
                <Link href="/contact" className="text-white bg-brand hover:bg-brand-dark inline-flex items-center px-6 py-3 text-lg shadow-xl rounded-2xl">
                  Get a Free Estimate →
                </Link>
              </div>
              <div className="lg:w-1/2" data-aos="fade-left">
                <PictureImage
                  src={service.heroImage}
                  alt={`${service.title} by Headquarters Moving LLC`}
                  width={1200}
                  height={675}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[16/9] max-h-80 xl:max-h-96 2xl:max-h-[28rem]"
                />
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="py-12 bg-white dark:bg-gray-950">
          <PageContainer>
            <div className="grid lg:grid-cols-3 gap-10">
              <article className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-brand mb-4">Overview</h2>
                <p className="text-lg text-body leading-relaxed mb-8">{service.intro}</p>
                {service.slug === 'office-furniture-installation' && (
                  <div className="mb-8 rounded-xl border border-brand-light dark:border-gray-700 bg-brand-light dark:bg-gray-900 p-5">
                    <p className="text-body">
                      We install, move, and reconfigure Herman Miller, Steelcase, Haworth, Knoll, Teknion, HON,
                      AIS, and other legacy panel systems.{' '}
                      <Link href="/office-furniture-systems" className="text-brand font-semibold hover:underline">
                        See the full list of furniture systems we handle →
                      </Link>
                    </p>
                  </div>
                )}
                <h2 className="text-2xl font-bold text-brand mb-4">What We Offer</h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  {service.features.map((feature) => (
                    <div key={feature.title} className="surface-card bg-gray-50 dark:bg-gray-900 rounded-xl p-5">
                      <h3 className="font-bold text-brand mb-2">{feature.title}</h3>
                      <p className="text-body">{feature.description}</p>
                    </div>
                  ))}
                </div>
                {service.faqs.length > 0 && (
                  <>
                    <h2 className="text-2xl font-bold text-brand mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4 mb-8">
                      {service.faqs.map((faq) => (
                        <details key={faq.question} className="surface-card bg-gray-50 dark:bg-gray-900 rounded-xl p-5 group">
                          <summary className="font-semibold text-brand cursor-pointer list-none flex justify-between items-center">
                            {faq.question}
                            <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span>
                          </summary>
                          <p className="mt-3 text-body">{faq.answer}</p>
                        </details>
                      ))}
                    </div>
                  </>
                )}
              </article>
              <aside>
                <div className="bg-brand text-white rounded-2xl p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-4">Why Choose Us</h2>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm">
                        <span className="text-green-300">✓</span> {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-brand-dark">
                    <p className="font-semibold mb-1">Call or Text</p>
                    <a href="tel:17722073720" className="text-2xl font-bold hover:underline">(772) 207-3720</a>
                  </div>
                </div>
              </aside>
            </div>
          </PageContainer>
        </section>

        {relatedServices.length > 0 && (
          <section className="py-12 surface-muted">
            <PageContainer>
              <h2 className="text-2xl font-bold text-brand text-center mb-8">Related Services</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((related) => (
                  <Link key={related.slug} href={`/services/${related.slug}`} className="surface-card rounded-xl shadow-lg overflow-hidden hover:shadow-2xl group">
                    <PictureImage src={related.image} alt={related.title} width={600} height={360} sizes="(min-width: 1024px) 33vw, 100vw" className="w-full h-40 xl:h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="p-4">
                      <h3 className="font-bold text-brand">{related.shortTitle}</h3>
                      <p className="text-sm text-subtle mt-1 line-clamp-2">{related.subheadline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </PageContainer>
          </section>
        )}
        <section className="py-12 cta">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">Contact Headquarters Moving LLC for a free estimate on {service.title.toLowerCase()}.</p>
            <Link href="/contact" className="bg-white text-brand hover:bg-gray-100 inline-flex items-center px-8 py-3 rounded-2xl font-bold text-lg">
              Request a Free Estimate
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
