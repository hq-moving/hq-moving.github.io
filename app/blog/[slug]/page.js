import { notFound } from 'next/navigation';
import BlogPostLayout from '@/components/BlogPostLayout';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, buildBlogStructuredData } from '@/lib/seo';
import { getBlogPostBySlug, getBlogSlugs } from '@/lib/blog';

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${params.slug}`,
    keywords: 'office relocation Florida, facility manager guide, commercial office moving',
  });
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={buildBlogStructuredData(post)} />
      <BlogPostLayout post={post} />
    </>
  );
}
