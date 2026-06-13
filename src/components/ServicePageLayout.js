import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import Footer from './Footer';
import SEO, { localBusinessSchema, serviceSchema } from './SEO';

const ServicePageLayout = ({ service, relatedServices = [] }) => {
    const path = `/services/${service.slug}`;

    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            localBusinessSchema(service.title),
            serviceSchema(service.title, service.metaDescription, path),
            ...(service.faqs.length > 0
                ? [
                      {
                          '@type': 'FAQPage',
                          mainEntity: service.faqs.map((faq) => ({
                              '@type': 'Question',
                              name: faq.question,
                              acceptedAnswer: {
                                  '@type': 'Answer',
                                  text: faq.answer,
                              },
                          })),
                      },
                  ]
                : []),
        ],
    };

    return (
        <>
            <SEO
                title={service.title}
                description={service.metaDescription}
                path={path}
                keywords={service.keywords}
                structuredData={structuredData}
            />
            <NavBar />
            <main>
                <section className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white">
                    <div className="max-w-6xl mx-auto px-4 md:px-12">
                        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                            <Link to="/" className="hover:text-blue-900">
                                Home
                            </Link>
                            <span className="mx-2">/</span>
                            <Link to="/services" className="hover:text-blue-900">
                                Services
                            </Link>
                            <span className="mx-2">/</span>
                            <span className="text-blue-900 font-semibold">{service.shortTitle}</span>
                        </nav>
                        <div className="flex flex-col lg:flex-row gap-10 items-center">
                            <div className="lg:w-1/2" data-aos="fade-right">
                                <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
                                    {service.headline}
                                </h1>
                                <p className="text-xl text-gray-600 font-medium mb-6">{service.subheadline}</p>
                                <Link
                                    to="/contact"
                                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center px-6 py-3 text-lg shadow-xl rounded-2xl"
                                >
                                    Get a Free Estimate
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </div>
                            <div className="lg:w-1/2" data-aos="fade-left">
                                <img
                                    src={service.heroImage}
                                    alt={`${service.title} by Headquarters Moving LLC`}
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

                                <h2 className="text-2xl font-bold text-blue-900 mb-4">What We Offer</h2>
                                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                                    {service.features.map((feature) => (
                                        <div
                                            key={feature.title}
                                            className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                                        >
                                            <h3 className="font-bold text-blue-900 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>

                                {service.faqs.length > 0 && (
                                    <>
                                        <h2 className="text-2xl font-bold text-blue-900 mb-4">
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-4 mb-8">
                                            {service.faqs.map((faq) => (
                                                <details
                                                    key={faq.question}
                                                    className="bg-gray-50 rounded-xl p-5 border border-gray-100 group"
                                                >
                                                    <summary className="font-semibold text-blue-900 cursor-pointer list-none flex justify-between items-center">
                                                        {faq.question}
                                                        <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl">
                                                            +
                                                        </span>
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
                                                <svg
                                                    className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 pt-6 border-t border-blue-700">
                                        <p className="font-semibold mb-1">Call or Text</p>
                                        <a href="tel:17722073720" className="text-2xl font-bold hover:underline">
                                            (772) 207-3720
                                        </a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {relatedServices.length > 0 && (
                    <section className="py-12 bg-gray-100">
                        <div className="max-w-6xl mx-auto px-4 md:px-12">
                            <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">
                                Related Services
                            </h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedServices.map((related) => (
                                    <Link
                                        key={related.slug}
                                        to={`/services/${related.slug}`}
                                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
                                    >
                                        <img
                                            src={related.image}
                                            alt={related.title}
                                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="p-4">
                                            <h3 className="font-bold text-blue-900">{related.shortTitle}</h3>
                                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                                {related.subheadline}
                                            </p>
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
                        <p className="text-xl mb-6">
                            Contact Headquarters Moving LLC for a free estimate on {service.title.toLowerCase()}.
                        </p>
                        <Link
                            to="/contact"
                            className="bg-white text-blue-900 hover:bg-gray-100 inline-flex items-center px-8 py-3 rounded-2xl font-bold text-lg"
                        >
                            Request a Free Estimate
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ServicePageLayout;
