import Link from 'next/link';
import PictureImage from '@/components/PictureImage';
import { getServiceBySlug } from '@/lib/services';
const footerServiceSlugs = [
  'office-furniture-installation',
  'cubicle-installation',
  'interstate-installation-moving',
  'commercial-moving',
  'residential-moving',
];

export default function Footer() {
  return (
    <footer>
      <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
        <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
          <div className="col-span-12 lg:col-span-4">
            <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
              <Link href="/" className="inline-block mb-4">
                <PictureImage
                  src="/images/hqtranslarge.png"
                  alt="Headquarters Moving LLC"
                  width={280}
                  height={120}
                  className="mx-auto w-full max-w-[220px] h-auto object-contain"
                />
              </Link>
              <a href="tel:17722073720" className="block font-medium">(772) 207-3720</a>
              <a href="mailto:headquartersmovers@gmail.com" className="block font-medium mt-1">HeadquartersMovers@gmail.com</a>
              <p className="mt-3 text-sm leading-relaxed">
                Office furniture installation, cubicle setup, reconfiguration, and interstate moving in Florida — plus
                relocations and commercial furniture installation projects nationwide.
              </p>            </div>
          </div>
          <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 mx-auto">
            <h6 className="text-[#013289] text-xl font-bold mb-4">SERVICES</h6>
            <ul className="text-md space-y-2">
              {footerServiceSlugs.map((slug) => {
                const service = getServiceBySlug(slug);
                return (
                  <li key={slug}>
                    <Link href={`/services/${slug}`} className="text-[#013289] hover:text-gray-900">
                      {service.shortTitle}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href="/services" className="text-[#013289] hover:text-gray-900 font-semibold">All Services</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 mx-auto">
            <h6 className="text-[#013289] text-xl font-bold mb-4">REVIEWS</h6>
            <ul className="text-md space-y-2">
              <li>
                <a
                  href="https://g.page/r/CVPb-gl2uH2MEAI/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Leave a Google Review
                </a>
              </li>
              <li>
                <a
                  href="https://www.angi.com/write-review/26643364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Leave an Angi Review
                </a>
              </li>
              <li>
                <a
                  href="https://www.homeadvisor.com/review/118783338?hired=unknown"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Leave a HomeAdvisor Review
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 mx-auto">
            <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
            <ul className="text-md space-y-2">
              <li><Link href="/about" className="text-[#013289] hover:text-gray-900">About</Link></li>
              <li><Link href="/services" className="text-[#013289] hover:text-gray-900">Services</Link></li>
              <li><Link href="/office-furniture-systems" className="text-[#013289] hover:text-gray-900">Furniture Systems</Link></li>
              <li><Link href="/service-areas" className="text-[#013289] hover:text-gray-900">Service Areas</Link></li>
              <li><Link href="/contact" className="text-[#013289] hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center py-4">
          <p className="text-sm text-gray-500">
            Copyright © {new Date().getFullYear()}{' '}
            <Link href="/" className="hover:text-blue-900">Headquarters Moving LLC</Link>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
