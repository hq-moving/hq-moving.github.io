import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import PictureImage from '@/components/PictureImage';
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
      <main id="contact" className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4 lg:px-20" data-aos="zoom-in">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-8 text-center">Contact Us</h1>
          <div className="mx-auto max-w-3xl space-y-8">
            <PictureImage
              src="/images/contact1.jpg"
              alt="Contact Headquarters Moving for office furniture installation and moving services"
              width={1200}
              height={675}
              className="rounded-2xl shadow-xl w-full h-auto object-cover max-h-[420px] md:max-h-[520px]"
            />
            <ContactForm />
            <div className="w-full px-8 py-6 bg-blue-900 rounded-2xl text-white">
              <h2 className="text-2xl text-white">Our Office is Located in</h2>
              <p className="text-white mt-1">Port Saint Lucie, Florida</p>
              <a
                href="tel:17722073720"
                className="block text-2xl md:text-4xl font-bold text-white mt-6 hover:underline"
              >
                Call Us (772) 207-3720
              </a>
              <a
                href="sms:17722073720"
                className="block text-2xl md:text-4xl font-bold text-white mt-3 hover:underline"
              >
                Text Us
              </a>
              <h2 className="text-2xl mt-6 text-white">Email</h2>
              <a
                href="mailto:headquartersmovers@gmail.com"
                className="block text-2xl md:text-4xl font-bold text-white mt-2 hover:underline break-all"
              >
                Headquartersmovers@gmail.com
              </a>
            </div>          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
