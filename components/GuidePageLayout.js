import Link from 'next/link';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';
import { guides } from '@/lib/guides';

export default function GuidePageLayout({ guide }) {
  const relatedGuides = guides.filter((item) => guide.relatedSlugs.includes(item.slug));

  return (
    <>
      <NavBar />
      <main className="pt-24 pb-12 bg-white dark:bg-gray-950">
        <PageContainer>
          <nav className="text-sm text-subtle mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-brand">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-brand font-semibold">Guide</span>
          </nav>

          <header className="max-w-4xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-subtle mb-3">
              Facility Manager Guide · {guide.readMinutes} min read
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-brand mb-4">{guide.headline}</h1>
            <p className="text-xl text-body">{guide.subheadline}</p>
          </header>

          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              {guide.sections.map((section) => (
                <section key={section.title} className="mb-10">
                  <h2 className="text-2xl font-bold text-brand mb-4">{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="text-body leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-brand mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {guide.faqs.map((faq) => (
                    <details key={faq.question} className="surface-card bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 group">
                      <summary className="font-semibold text-brand cursor-pointer list-none flex justify-between items-center">
                        {faq.question}
                        <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span>
                      </summary>
                      <p className="mt-3 text-body">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <div className="surface-muted rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
                <h2 className="text-xl font-bold text-brand mb-3">Need help with your project?</h2>
                <p className="text-body mb-4">
                  Headquarters Moving LLC handles office furniture installation, cubicle reconfiguration, and commercial relocation across Florida.
                </p>
                <Link href="/contact" className="text-white bg-brand hover:bg-brand-dark inline-flex items-center px-6 py-3 rounded-2xl font-bold">
                  Get a Free Estimate →
                </Link>
              </div>
            </article>

            <aside className="space-y-6">
              {relatedGuides.length > 0 && (
                <div className="surface-card rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                  <h2 className="text-lg font-bold text-brand mb-4">Related Guides</h2>
                  <ul className="space-y-3">
                    {relatedGuides.map((item) => (
                      <li key={item.slug}>
                        <Link href={`/guides/${item.slug}`} className="text-brand font-semibold hover:underline text-sm">
                          {item.headline}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="surface-card rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                <h2 className="text-lg font-bold text-brand mb-4">Related Services</h2>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/services/office-furniture-installation" className="text-brand hover:underline">Office Furniture Installation</Link></li>
                  <li><Link href="/services/cubicle-installation" className="text-brand hover:underline">Cubicle Installation</Link></li>
                  <li><Link href="/services/commercial-moving" className="text-brand hover:underline">Commercial Moving</Link></li>
                  <li><Link href="/office-furniture-systems" className="text-brand hover:underline">Furniture Systems</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </PageContainer>
      </main>
      <Footer />
    </>
  );
}
