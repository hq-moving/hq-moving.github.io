import Link from 'next/link';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, localBusinessSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact Us - Free Moving & Furniture Installation Estimate',
  description: 'Contact Headquarters Moving LLC for a free estimate. Call (772) 207-3720.',
  path: '/contact',
  keywords: 'contact Headquarters Moving, free moving estimate Florida',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <NavBar />
      <div id="contact" className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
          <ContactForm />
          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl text-white">
            <h2 className="text-2xl">Our Office is Located in</h2>
            <p className="text-gray-400">Port Saint Lucie, Florida</p>
            <h2 className="text-2xl mt-6">Call Us or Text Us</h2>
            <p className="text-gray-400">Tel: 772-207-3720</p>
            <h2 className="text-2xl mt-6">Send an E-mail</h2>
            <p className="text-gray-400">Headquartersmovers@gmail.com</p>
            <div className="mt-5 space-y-1">
              <a className="text-gray-400 block" href="tel:17722073720">Click here to Call Us!</a>
              <a className="text-gray-400 block" href="sms:17722073720">Click here to Text Us!</a>
              <a className="text-gray-400 block" href="mailto:headquartersmovers@gmail.com">Click here to Email Us!</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
