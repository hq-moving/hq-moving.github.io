import React from 'react';
import {Link} from 'react-router-dom';
import { services } from '../data/services';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-4xl mb-4">HEADQUARTERS MOVING</h3>
                            <div className='text-md font-medium text-gray-600'>
                                <a href="tel:17722073720">
                                    <h5>(772) 207-3720</h5>
                                </a><br />
                                <a href="mailto:headquartersmovers@gmail.com">
                                <h5>HeadquartersMovers@gmail.com</h5>
                                </a><br />
                                <p>Serving the Treasure Coast and all of Florida</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">SERVICES</h6>
                        <ul className="text-md">
                        {services.slice(0, 5).map((service) => (
                            <li key={service.slug} className="mb-2">
                                <Link to={`/services/${service.slug}`} className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                    {service.shortTitle}
                                </Link>
                            </li>
                        ))}
                        <li className="mb-2">
                            <Link to="/services" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out font-semibold">
                                All Services
                            </Link>
                        </li>
                        </ul>
                    </div>

                    <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">OTHER PLATFORMS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link to="https://www.google.com/search?q=Headquarters+Moving&stick=H4sIAAAAAAAA_-NgU1I1qDBJMU60TEs0NTdNS0o0SjO2MqiwSDZPSbIwNzMAiqckmRovYhX2SE1MKSxNLCpJLSpW8M0vy8xLBwBUByJcPwAAAA&hl=en&mat=CboT62px2PJoElcBmzl_pTlzEHzePD8Ll_2_ewwvikee4JOdpg_ytOJx_aAuX5tOH_me46aCEre7KXYJVw1YeidrfmtSzMi4nCrIj2ABeB5oAek-PxohlJWgX6U5er0j9M0&authuser=0#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                Google Business</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="https://www.homeadvisor.com/rated.HeadquartersMovingLLC.118783338.html" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                Find us on HomeAdvisor Powered by Angi</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="https://www.angi.com/companylist/us/fl/port-st-lucie/headquarters-moving-llc-reviews-10657889.htm" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                Angi Profile and Reviews</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="https://www.thumbtack.com/fl/port-saint-lucie/movers/headquarters-moving-llc/service/538343591400620035" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                Thumbtack</Link>
                        </li>
                        
                        </ul>
                    </div>

                    <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">REVIEWS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link to="https://g.page/r/CVPb-gl2uH2MEAI/review" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                Leave a Google Review</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="https://www.angi.com/write-review/26643364" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                Leave an Angi Review</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="https://www.homeadvisor.com/review/118783338?hired=unknown" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                Leave a HomeAdvisor Review</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link to="/about" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/services" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/service-areas" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Service Areas</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/contact" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</Link>
                        </li>                            
                        </ul>
                    </div>
                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <Link to="/" className=" hover:text-gray-900">
                        Headquarters Moving LLC
                    </Link>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
