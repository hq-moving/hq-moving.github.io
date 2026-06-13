import Link from 'next/link';
import Image from 'next/image';
import { homepageServices } from '@/lib/services';

export default function Services() {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900" />
          </div>
          <p className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Professional office furniture installation, intrastate moving, and installation services across Florida.
          </p>
        </div>
        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {homepageServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group block"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={160}
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-full h-40 object-cover"
                />
                <div className="m-2 text-justify text-sm">
                  <h3 className="font-semibold my-4 text-2xl text-center">{service.title}</h3>
                  <p className="text-md font-medium line-clamp-4">{service.subheadline}</p>
                  <span className="block text-center mt-4 font-bold text-blue-900 group-hover:text-white">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center px-8 py-3 rounded-2xl font-semibold text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
