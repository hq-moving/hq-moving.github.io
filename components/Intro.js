import Link from 'next/link';
import PictureImage from '@/components/PictureImage';
import PageContainer from '@/components/PageContainer';

export default function Intro() {
  return (
    <PageContainer className="py-8 lg:py-12" id="about">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-8 xl:gap-14 py-4 text-center lg:text-left" data-aos="fade-up">
        <div className="lg:w-1/2 flex justify-center items-center">
          <PictureImage
            src="/images/commercialmoving1.jpg"
            alt="Headquarters Moving commercial relocation service"
            width={1200}
            height={900}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center px-0 lg:px-4" data-aos="zoom-in" data-aos-delay="500">
          <h2 className="text-3xl xl:text-4xl text-brand font-bold leading-tight">
            Florida&apos;s trusted partner for office furniture installation and commercial moving.
          </h2>
          <p className="my-3 text-lg xl:text-xl text-gray-600 font-semibold">
            We specialize in office furniture installation — cubicle systems, desk assembly, workspace reconfiguration,
            and full commercial relocations — tailored to your business needs.
          </p>
          <p className="my-3 text-lg xl:text-xl text-gray-600 font-semibold">
            With skilled installers, careful planning, and responsive communication, we minimize downtime and deliver
            workspaces that are ready for your team from day one.
          </p>
          <Link href="/contact" className="text-white bg-brand hover:bg-brand-dark inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 my-4 text-lg shadow-xl rounded-2xl">
            Contact us →
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
