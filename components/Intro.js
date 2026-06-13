import Link from 'next/link';
import Image from 'next/image';

export default function Intro() {
  return (
    <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
      <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
          <Image
            src="/images/wrap.jpg"
            alt="Headquarters Moving furniture wrapping service"
            width={800}
            height={600}
            className="rounded-t float-right w-full h-auto"
          />
        </div>
        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
          <h2 className="text-3xl text-blue-900 font-bold">
            Florida&apos;s trusted partner for office furniture installation and commercial moving.
          </h2>
          <p className="my-3 text-xl text-gray-600 font-semibold">
            We specialize in office furniture installation — cubicle systems, desk assembly, workspace reconfiguration,
            and full commercial relocations — tailored to your business needs.
          </p>
          <p className="my-3 text-xl text-gray-600 font-semibold">
            With skilled installers, careful planning, and responsive communication, we minimize downtime and deliver
            workspaces that are ready for your team from day one.
          </p>
          <Link href="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
            Contact us →
          </Link>
        </div>
      </div>
    </div>
  );
}
