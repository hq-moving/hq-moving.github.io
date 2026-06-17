import Link from 'next/link';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';

export default function BlogPostLayout({ post }) {
  const categoryLabel = post.category === 'case-study' ? 'Case Study' : 'Blog';

  return (
    <>
      <NavBar />
      <main className="pt-24 pb-12 bg-white dark:bg-gray-950">
        <PageContainer>
          <nav className="text-sm text-subtle mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-brand">Resources</Link>
            <span className="mx-2">/</span>
            <span className="text-brand font-semibold">{categoryLabel}</span>
          </nav>

          <header className="max-w-3xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-subtle mb-3">{categoryLabel}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-brand mb-4">{post.title}</h1>
            <p className="text-lg text-body">{post.excerpt}</p>
          </header>

          <article className="max-w-3xl">
            {post.sections.map((section) => (
              <section key={section.title} className="mb-8">
                <h2 className="text-xl font-bold text-brand mb-3">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-body leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <div className="mt-12 surface-muted rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
              <h2 className="text-xl font-bold text-brand mb-3">Planning a similar project?</h2>
              <p className="text-body mb-4">
                Headquarters Moving LLC serves Port St. Lucie and surrounding cities within 100 miles for office furniture installation and commercial relocation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="text-white bg-brand hover:bg-brand-dark inline-flex items-center px-6 py-3 rounded-2xl font-bold">
                  Get a Free Estimate
                </Link>
                <Link href="/guides" className="inline-flex items-center px-6 py-3 rounded-2xl font-bold text-brand border-2 border-accent">
                  View Guides
                </Link>
              </div>
            </div>
          </article>
        </PageContainer>
      </main>
      <Footer />
    </>
  );
}
