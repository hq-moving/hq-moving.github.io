import Link from 'next/link';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import { buildMetadata } from '@/lib/seo';
import { guides } from '@/lib/guides';

export const metadata = buildMetadata({
  title: 'Office Relocation & Furniture Installation Guides | HQ Moving',
  description:
    'Expert guides for facility managers planning commercial office relocation, furniture installation, and cubicle system projects in Florida.',
  path: '/guides',
  keywords:
    'commercial office relocation guide, office furniture installation guide, cubicle systems Florida, facility manager office move',
});

export default function GuidesIndexPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24 pb-12 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold text-brand text-center mb-4">Facility Manager Guides</h1>
          <p className="text-xl text-body text-center max-w-3xl mx-auto mb-12">
            In-depth guides on commercial office relocation, furniture installation, and cubicle system management for Florida businesses.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="surface-card rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-accent transition-colors"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-subtle mb-2">{guide.readMinutes} min read</p>
                <h2 className="text-lg font-bold text-brand mb-3">{guide.headline}</h2>
                <p className="text-sm text-body">{guide.subheadline}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
