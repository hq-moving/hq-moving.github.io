import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import SEO, { localBusinessSchema } from '../components/SEO';

const serviceAreas = [
    {
        region: 'Treasure Coast',
        cities: ['Port Saint Lucie', 'Fort Pierce', 'Stuart', 'Jensen Beach', 'Hobe Sound', 'Vero Beach'],
    },
    {
        region: 'Palm Beach County',
        cities: ['West Palm Beach', 'Jupiter', 'Palm Beach Gardens', 'Boca Raton', 'Boynton Beach'],
    },
    {
        region: 'Space Coast & Central Florida',
        cities: ['Melbourne', 'Orlando', 'Lakeland', 'Daytona Beach'],
    },
    {
        region: 'South Florida',
        cities: ['Miami', 'Fort Lauderdale', 'Hollywood', 'Pompano Beach'],
    },
    {
        region: 'Statewide',
        cities: ['We travel throughout Florida for commercial furniture projects and large relocations'],
    },
];

const ServiceAreas = () => {
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            localBusinessSchema(),
            {
                '@type': 'WebPage',
                name: 'Service Areas - Headquarters Moving LLC',
                description: 'Office furniture installation and moving services across Florida and the Treasure Coast.',
                url: 'https://www.headquartersmoving.com/service-areas',
            },
        ],
    };

    return (
        <>
            <SEO
                title="Service Areas - Florida Office Furniture Installation & Moving"
                description="Headquarters Moving LLC serves Port Saint Lucie, the Treasure Coast, Palm Beach County, and all of Florida for office furniture installation and moving services."
                path="/service-areas"
                keywords="office furniture installation Port Saint Lucie, movers Treasure Coast, commercial movers Florida, cubicle installation Stuart"
                structuredData={structuredData}
            />
            <NavBar />
            <main className="pt-24 pb-12">
                <div className="max-w-6xl mx-auto px-4 md:px-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-blue-900 text-center mb-4">
                        Areas We Serve
                    </h1>
                    <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
                        Based in Port Saint Lucie, we provide office furniture installation and moving services
                        throughout the Treasure Coast and across Florida.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {serviceAreas.map((area) => (
                            <div key={area.region} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                                <h2 className="text-xl font-bold text-blue-900 mb-4">{area.region}</h2>
                                <ul className="space-y-2">
                                    {area.cities.map((city) => (
                                        <li key={city} className="text-gray-600 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-blue-900 rounded-full flex-shrink-0" />
                                            {city}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <section className="bg-blue-900 text-white rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Not Sure If We Cover Your Area?</h2>
                        <p className="text-lg mb-6 opacity-90">
                            Call us at (772) 207-3720 or send a message — we regularly travel for commercial
                            furniture projects and large-scale moves.
                        </p>
                        <Link
                            to="/contact"
                            className="bg-white text-blue-900 hover:bg-gray-100 inline-flex items-center px-8 py-3 rounded-2xl font-bold"
                        >
                            Get in Touch
                        </Link>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ServiceAreas;
