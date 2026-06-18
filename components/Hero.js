import Link from 'next/link';
import PictureImage from '@/components/PictureImage';
import NavBar from '@/components/Navbar/NavBar';
import PageContainer from '@/components/PageContainer';

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <NavBar />
      <PageContainer className="pt-24 pb-8 lg:pb-12" data-aos="zoom-in">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 xl:gap-14 py-4 text-center lg:text-left">
          <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
            <h1 className="mb-4 text-3xl md:text-5xl xl:text-[3.25rem] 2xl:text-6xl font-bold text-brand leading-tight">
              Office Furniture Installation &amp; Moving Across Florida
            </h1>
            <a
              href="tel:17722073720"
              className="inline-block text-3xl sm:text-4xl xl:text-5xl font-extrabold text-accent mb-4 hover:text-brand hover:underline"
            >
              (772) 207-3720
            </a>
            <p className="text-sm font-semibold uppercase tracking-wide text-subtle mb-5">
              Call or text for a free estimate
            </p>
            <p className="text-lg xl:text-xl font-semibold tracking-tight mb-5 text-subtle max-w-2xl lg:max-w-none">
              Headquarters Moving LLC is your trusted partner for office furniture installation, cubicle setup,
              workspace reconfiguration, and interstate moving in Florida — plus relocations and commercial furniture
              installation projects nationwide.
            </p>
            <div className="mb-4 flex flex-col sm:flex-row sm:flex-wrap gap-3 md:mb-8">
              <Link href="/contact" className="text-white bg-brand hover:bg-brand-dark inline-flex items-center justify-center px-6 py-3 text-lg shadow-xl rounded-2xl">
                Free Estimate →
              </Link>
              <Link href="/services/office-furniture-installation" className="inline-flex items-center justify-center px-6 py-3 text-lg text-brand dark:text-white bg-white dark:bg-gray-900 border-2 border-accent hover:bg-accent-light dark:hover:bg-gray-800 shadow-xl rounded-2xl">
                Office Furniture Services
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center" data-aos="fade-up" data-aos-delay="700">
            <PictureImage
              src="/images/officefurniture1.jpg"
              alt="Office furniture installation by Headquarters Moving LLC"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full max-w-xl lg:max-w-none rounded-2xl shadow-2xl object-cover aspect-[4/3]"
              priority
            />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
