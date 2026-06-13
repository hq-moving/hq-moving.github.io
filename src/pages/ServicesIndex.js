import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import SEO, { localBusinessSchema } from '../components/SEO';
import { services, officeServices } from '../data/services';

const ServicesIndex = () => {
    return (
        <>
            <SEO
                title="Moving & Office Furniture Installation Services"
                description="Explore Headquarters Moving LLC services: office furniture installation, cubicle setup, office reconfiguration, commercial moving, and residential relocations across Florida."
                path="/services"
                keywords="moving services Florida, office furniture installation, cubicle installation, commercial moving, residential movers"
                structuredData={localBusinessSchema()}
            />
            <NavBar />
            <main className="pt-24 pb-12">
                <div className="max-w-6xl mx-auto px-4 md:px-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-blue-900 text-center mb-4">
                        Our Services
                    </h1>
                    <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
                        Headquarters Moving LLC delivers professional office furniture installation and full-service
                        moving solutions across the Treasure Coast and all of Florida.
                    </p>

                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-blue-900 mb-2 uppercase tracking-wide">
                            Office Furniture Installation
                        </h2>
                        <div className="w-24 border-b-4 border-blue-900 mb-6" />
                        <p className="text-gray-600 mb-8 max-w-3xl">
                            Our core specialty. From cubicle systems to executive suites, we handle every phase of
                            commercial furniture projects so your workspace is productive from day one.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {officeServices.map((service) => (
                                <Link
                                    key={service.slug}
                                    to={`/services/${service.slug}`}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 group"
                                >
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="p-5">
                                        <h3 className="font-bold text-xl text-blue-900 mb-2">{service.title}</h3>
                                        <p className="text-gray-600 text-sm">{service.subheadline}</p>
                                        <span className="inline-block mt-4 text-blue-900 font-semibold text-sm group-hover:underline">
                                            Learn more →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-blue-900 mb-2 uppercase tracking-wide">
                            Moving Services
                        </h2>
                        <div className="w-24 border-b-4 border-blue-900 mb-6" />
                        <div className="grid sm:grid-cols-2 gap-6">
                            {services
                                .filter((s) => ['commercial-moving', 'residential-moving'].includes(s.slug))
                                .map((service) => (
                                    <Link
                                        key={service.slug}
                                        to={`/services/${service.slug}`}
                                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 group flex flex-col sm:flex-row"
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="sm:w-48 h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
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
};

export default ServicesIndex;
