import Link from 'next/link';
import PictureImage from '@/components/PictureImage';
import NavBar from '@/components/Navbar/NavBar';

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <NavBar />
      <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
        <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
          <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
            <h1 className="mb-4 md:text-5xl text-3xl font-bold text-blue-900">
              Office Furniture Installation &amp; Moving Across Florida
            </h1>
            <a
              href="tel:17722073720"
              className="inline-block text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4 hover:underline"
            >
              (772) 207-3720
            </a>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-5">
              Call or text for a free estimate
            </p>
            <p className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
              Headquarters Moving LLC is your trusted partner for office furniture installation, cubicle setup,
              workspace reconfiguration, and interstate moving in Florida — plus relocations and commercial furniture
              installation projects nationwide.
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <Link href="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                Free Estimate →
              </Link>
              <Link href="/services/office-furniture-installation" className="inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg text-blue-900 bg-white border-2 border-blue-900 hover:bg-blue-50 shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                Office Furniture Services
              </Link>
            </div>
          </div>
          <div className="flex lg:justify-end items-center w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
            <PictureImage
              src="/images/officefurniture1.jpg"
              alt="Office furniture installation by Headquarters Moving LLC"
              width={800}
              height={600}
              className="mx-auto lg:ml-auto lg:mr-0 w-full max-w-lg rounded-2xl shadow-2xl object-cover aspect-[4/3]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
