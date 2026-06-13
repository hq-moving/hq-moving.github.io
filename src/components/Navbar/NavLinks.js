import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <>
            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/about">
                About
            </Link>
            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/services">
                Services
            </Link>
            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/services/office-furniture-installation">
                Office Furniture
            </Link>
            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/service-areas">
                Service Areas
            </Link>
            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact">
                Contact Us
            </Link>
        </>
    )
}

export default NavLinks;
