import Link from 'next/link';
import PictureImage from '@/components/PictureImage';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, localBusinessSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About Headquarters Moving LLC',
  description:
    "Learn about Headquarters Moving LLC — Florida's trusted partner for office furniture installation, commercial relocation, and residential moving.",
  path: '/about',
  keywords: 'about Headquarters Moving, Florida moving company, office furniture installers Port Saint Lucie',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <NavBar />
      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">About Headquarters Moving LLC</h1>
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-1/2">
              <PictureImage src="/images/about1.png" alt="Headquarters Moving team" width={800} height={600} className="rounded-2xl shadow-xl w-full h-auto" />
            </div>
            <div className="lg:w-1/2 space-y-6 text-lg text-gray-600">
              <p>Headquarters Moving LLC is a full-service moving and office furniture installation company based in Port Saint Lucie, Florida.</p>
              <p>Our team has built a strong reputation for <strong className="text-blue-900">office furniture installation</strong> — assembling workstations, configuring cubicle systems, and managing decommissioning projects with precision and care.</p>
              <Link href="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center px-6 py-3 text-lg shadow-xl rounded-2xl mt-4">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
