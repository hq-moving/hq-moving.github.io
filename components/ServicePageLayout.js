import Link from 'next/link';
import Image from 'next/image';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import { services } from '@/lib/services';

export default function ServicePageLayout({ service, relatedServices = [] }) {
  return (
    <>
      <NavBar />
      <main>
        <section className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4 md:px-12">
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-900">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-blue-900">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-900 font-semibold">{service.shortTitle}</span>
            </nav>
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="lg:w-1/2" data-aos="fade-right">
                <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">{service.headline}</h1>
                <p className="text-xl text-gray-600 font-medium mb-6">{service.subheadline}</p>
                <Link href="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center px-6 py-3 text-lg shadow-xl rounded-2xl">
                  Get a Free Estimate →
                </Link>
              </div>
              <div className="lg:w-1/2" data-aos="fade-left">
                <Image
                  src={service.heroImage}
                  alt={`${service.title} by Headquarters Moving LLC`}
                  width={800}
                  height={400}
                  className="rounded-2xl shadow-2xl w-full object-cover max-h-96"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-12">
            <div className="grid lg:grid-cols-3 gap-10">
              <article className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.intro}</p>
                {service.slug === 'office-furniture-installation' && (
                  <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50 p-5">
                    <p className="text-gray-700">
                      We install, move, and reconfigure Herman Miller, Steelcase, Haworth, Knoll, Teknion, HON,
                      AIS, and other legacy panel systems.{' '}
                      <Link href="/office-furniture-systems" className="text-blue-900 font-semibold hover:underline">
                        See the full list of furniture systems we handle →
                      </Link>
                    </p>
                  </div>
                )}
                <h2 className="text-2xl font-bold text-blue-900 mb-4">What We Offer</h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  {service.features.map((feature) => (
                    <div key={feature.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <h3 className="font-bold text-blue-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
                {service.faqs.length > 0 && (
                  <>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4 mb-8">
                      {service.faqs.map((faq) => (
                        <details key={faq.question} className="bg-gray-50 rounded-xl p-5 border border-gray-100 group">
                          <summary className="font-semibold text-blue-900 cursor-pointer list-none flex justify-between items-center">
                            {faq.question}
                            <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span>
                          </summary>
                          <p className="mt-3 text-gray-600">{faq.answer}</p>
                        </details>
                      ))}
                    </div>
                  </>
                )}
              </article>
              <aside>
                <div className="bg-blue-900 text-white rounded-2xl p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-4">Why Choose Us</h2>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm">
                        <span className="text-green-300">✓</span> {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-blue-700">
                    <p className="font-semibold mb-1">Call or Text</p>
                    <a href="tel:17722073720" className="text-2xl font-bold hover:underline">(772) 207-3720</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {relatedServices.length > 0 && (
          <section className="py-12 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 md:px-12">
              <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">Related Services</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((related) => (
                  <Link key={related.slug} href={`/services/${related.slug}`} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl group">
                    <Image src={related.image} alt={related.title} width={400} height={160} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="p-4">
                      <h3 className="font-bold text-blue-900">{related.shortTitle}</h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{related.subheadline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-12 cta">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">Contact Headquarters Moving LLC for a free estimate on {service.title.toLowerCase()}.</p>
            <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 inline-flex items-center px-8 py-3 rounded-2xl font-bold text-lg">
              Request a Free Estimate
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
