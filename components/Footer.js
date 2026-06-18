import Link from 'next/link';
import PictureImage from '@/components/PictureImage';
import { getServiceBySlug } from '@/lib/services';
import { GOOGLE_REVIEW_URL } from '@/lib/reviews';
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
      <div className="footer max-w-full mx-auto px-4 sm:px-6 surface-muted border-t border-b border-gray-200 dark:border-gray-800 py-30">
        <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 dark:border-gray-800 lg:ml-11">
          <div className="col-span-12 lg:col-span-4">
            <div className="box-border border-b-4 border-accent p-8 bg-gray-200 dark:bg-gray-800 text-body text-center rounded-lg xl:w-80 mx-auto">
              <Link href="/" className="inline-block mb-4">
                <PictureImage
                  src="/images/hqtranslarge.png"
                  alt="Headquarters Moving LLC"
                  width={280}
                  height={120}
                  className="mx-auto w-full max-w-[220px] h-auto object-contain"
                />
              </Link>
              <a href="tel:17722073720" className="block font-medium text-accent">(772) 207-3720</a>
              <a href="mailto:headquartersmovers@gmail.com" className="block font-medium mt-1">HeadquartersMovers@gmail.com</a>
              <p className="mt-3 text-sm leading-relaxed">
                Office furniture installation, cubicle setup, reconfiguration, and interstate moving in Florida — plus
                relocations and commercial furniture installation projects nationwide.
              </p>            </div>
          </div>
          <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 mx-auto">
            <h6 className="text-brand text-xl font-bold mb-4">EXPLORE</h6>
            <ul className="text-md space-y-2">
              <li><Link href="/about" className="text-brand hover:text-gray-900 dark:hover:text-white">About</Link></li>
              <li><Link href="/services" className="text-brand hover:text-gray-900 dark:hover:text-white">Services</Link></li>
              <li><Link href="/office-furniture-systems" className="text-brand hover:text-gray-900 dark:hover:text-white">Furniture Systems</Link></li>
              <li><Link href="/locations" className="text-brand hover:text-gray-900 dark:hover:text-white">Locations</Link></li>
              <li><Link href="/service-areas" className="text-brand hover:text-gray-900 dark:hover:text-white">Service Areas</Link></li>
              <li><Link href="/guides" className="text-brand hover:text-gray-900 dark:hover:text-white">Guides</Link></li>
              <li><Link href="/blog" className="text-brand hover:text-gray-900 dark:hover:text-white">Resources</Link></li>
              <li><Link href="/contact" className="text-brand hover:text-gray-900 dark:hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 mx-auto">
            <h6 className="text-brand text-xl font-bold mb-4">SERVICES</h6>
            <ul className="text-md space-y-2">
              {footerServiceSlugs.map((slug) => {
                const service = getServiceBySlug(slug);
                return (
                  <li key={slug}>
                    <Link href={`/services/${slug}`} className="text-brand hover:text-gray-900 dark:hover:text-white">
                      {service.shortTitle}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href="/services" className="text-brand hover:text-gray-900 dark:hover:text-white font-semibold">All Services</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 mx-auto">
            <h6 className="text-brand text-xl font-bold mb-4">REVIEWS</h6>
            <ul className="text-md space-y-2">
              <li>
                <Link href="/reviews" className="text-brand hover:text-gray-900 dark:hover:text-white">
                  Reviews
                </Link>
              </li>
              <li>
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-gray-900 dark:hover:text-white hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Leave a Google Review
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center py-4">
          <p className="text-sm text-subtle">
            Copyright © {new Date().getFullYear()}{' '}
            <Link href="/" className="hover:text-brand">Headquarters Moving LLC</Link>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
