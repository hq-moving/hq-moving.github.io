import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import SEO, { localBusinessSchema } from '../components/SEO';
import wrapImg from '../images/wrap.jpg';

const About = () => {
    return (
        <>
            <SEO
                title="About Headquarters Moving LLC"
                description="Learn about Headquarters Moving LLC — Florida's trusted partner for office furniture installation, commercial relocation, and residential moving across the Treasure Coast."
                path="/about"
                keywords="about Headquarters Moving, Florida moving company, office furniture installers Port Saint Lucie"
                structuredData={localBusinessSchema()}
            />
            <NavBar />
            <main className="pt-24 pb-12">
                <div className="max-w-6xl mx-auto px-4 md:px-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
                        About Headquarters Moving LLC
                    </h1>
                    <div className="flex flex-col lg:flex-row gap-10 items-start">
                        <div className="lg:w-1/2">
                            <img
                                src={wrapImg}
                                alt="Headquarters Moving team preparing furniture for transport"
                                className="rounded-2xl shadow-xl w-full"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-6 text-lg text-gray-600">
                            <p>
                                Headquarters Moving LLC is a full-service moving and office furniture installation
                                company based in Port Saint Lucie, Florida. We serve the Treasure Coast and businesses
                                and families throughout the state.
                            </p>
                            <p>
                                While we handle residential and commercial relocations, our team has built a strong
                                reputation for <strong className="text-blue-900">office furniture installation</strong>
                                — assembling workstations, configuring cubicle systems, reconfiguring layouts, and
                                managing decommissioning projects with precision and care.
                            </p>
                            <p>
                                Our mission is simple: make every move and every installation smooth, seamless, and
                                stress-free. We combine skilled labor, careful planning, and responsive communication
                                so you always know what to expect.
                            </p>
                            <h2 className="text-2xl font-bold text-blue-900 pt-4">What Sets Us Apart</h2>
                            <ul className="space-y-3">
                                {[
                                    'Dedicated project coordination for commercial clients',
                                    'Flexible scheduling including evenings and weekends',
                                    'Experienced installers familiar with major furniture brands',
                                    'Combined moving and installation for single-vendor convenience',
                                    'Transparent pricing with free estimates',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="text-blue-900 font-bold">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/contact"
                                className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center px-6 py-3 text-lg shadow-xl rounded-2xl mt-4"
                            >
                                Contact Us Today
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default About;
