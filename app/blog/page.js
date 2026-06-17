import Link from 'next/link';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import { buildMetadata } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';

export const metadata = buildMetadata({
  title: 'Office Moving & Furniture Installation Resources | HQ Moving',
  description:
    'Articles, checklists, and case studies for facility managers planning office relocation, IT decommissioning, and furniture installation in Florida.',
  path: '/blog',
  keywords:
    'office relocation checklist, IT decommissioning office move, phased office move, office furniture decommissioning',
});

export default function BlogIndexPage() {
  const articles = blogPosts.filter((post) => post.category === 'blog');
  const caseStudies = blogPosts.filter((post) => post.category === 'case-study');

  return (
    <>
      <NavBar />
      <main className="pt-24 pb-12 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold text-brand text-center mb-4">Resources</h1>
          <p className="text-xl text-body text-center max-w-3xl mx-auto mb-12">
            Practical articles and case studies for facility managers, project coordinators, and corporate relocation teams.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-brand mb-6">Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="surface-card rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-accent transition-colors"
                >
                  <h3 className="text-lg font-bold text-brand mb-2">{post.title}</h3>
                  <p className="text-sm text-body">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand mb-6">Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="surface-card rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-accent transition-colors"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-subtle mb-2">Case Study</p>
                  <h3 className="text-lg font-bold text-brand mb-2">{post.title}</h3>
                  <p className="text-sm text-body">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
