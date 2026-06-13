import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/seo';

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <Hero />
      <Intro />
      <Services />
      <Footer />
    </>
  );
}
