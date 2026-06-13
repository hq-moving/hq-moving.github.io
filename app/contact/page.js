import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import PictureImage from '@/components/PictureImage';
import PageContainer from '@/components/PageContainer';
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
      <main id="contact" className="pt-24 pb-12 bg-white dark:bg-gray-950">
        <PageContainer data-aos="zoom-in">
          <h1 className="text-3xl md:text-5xl font-bold text-brand mb-8 text-center">Contact Us</h1>
          <div className="mx-auto max-w-3xl 2xl:max-w-4xl space-y-8">
            <PictureImage
              src="/images/contact1.jpg"
              alt="Contact Headquarters Moving for office furniture installation and moving services"
              width={1400}
              height={788}
              sizes="(min-width: 1536px) 896px, 768px"
              className="rounded-2xl shadow-xl w-full h-auto object-cover max-h-[420px] md:max-h-[520px] xl:max-h-[560px]"
            />
            <ContactForm />
            <div className="w-full px-8 py-6 bg-brand rounded-2xl text-white">
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
            </div>
          </div>
        </PageContainer>
      </main>
      <Footer />
    </>
  );
}
