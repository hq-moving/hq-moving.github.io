import Link from 'next/link';
import PictureImage from '@/components/PictureImage';
import PageContainer from '@/components/PageContainer';
import { homepageServices } from '@/lib/services';

export default function Services() {
  return (
    <div id="services" className="surface-muted py-12 xl:py-16">
      <section data-aos="zoom-in-down">
        <PageContainer>
          <div className="my-4 py-4">
            <h2 className="my-2 text-center text-3xl xl:text-4xl text-brand uppercase font-bold">services</h2>
            <div className="flex justify-center">
              <div className="w-24 border-b-4 border-accent" />
            </div>
            <p className="mt-4 mx-auto max-w-4xl text-center text-xl lg:text-2xl font-semibold text-brand">
              Professional office furniture installation, interstate moving, and installation services across Florida and beyond.
            </p>
          </div>
          <div data-aos="fade-down" data-aos-delay="600">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-8">
              {homepageServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="surface-card transition-all ease-in-out duration-400 overflow-hidden text-gray-700 dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-brand hover:text-white rounded-lg shadow-2xl p-3 group block"
                >
                  <PictureImage
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={360}
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="rounded-t group-hover:scale-[1.08] transition duration-1000 ease-in-out w-full h-40 sm:h-44 xl:h-52 2xl:h-56 object-cover"
                  />
                  <div className="m-2 text-justify text-sm xl:text-base">
                    <h3 className="font-semibold my-4 text-xl xl:text-2xl text-center">{service.title}</h3>
                    <p className="font-medium line-clamp-4">{service.subheadline}</p>
                    <span className="block text-center mt-4 font-bold text-accent group-hover:text-white">Learn more →</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8 xl:mt-12">
              <Link href="/services" className="text-white bg-brand hover:bg-brand-dark inline-flex items-center px-8 py-3 rounded-2xl font-semibold text-lg">
                View All Services
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
