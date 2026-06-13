import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import SEO, { localBusinessSchema } from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title="Office Furniture Installation & Moving Services in Florida"
                description="Headquarters Moving LLC specializes in office furniture installation, cubicle setup, and commercial moving across the Treasure Coast and Florida. Get a free estimate today."
                path="/"
                keywords="office furniture installation Florida, cubicle installation, commercial moving Treasure Coast, office reconfiguration, Headquarters Moving"
                structuredData={localBusinessSchema()}
            />
            <Hero />
            <Intro />
            <Services />
            <Footer />
        </>
    )
}

export default Home;
