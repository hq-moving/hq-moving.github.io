import Link from 'next/link';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, buildReviewsStructuredData } from '@/lib/seo';
import { GOOGLE_REVIEW_URL, googleReviews, getReviewStats } from '@/lib/reviews';

export const metadata = buildMetadata({
  title: 'Customer Reviews',
  description:
    'Read Google reviews for Headquarters Moving LLC — office furniture installation, commercial relocation, and residential moving on the Treasure Coast and across Florida.',
  path: '/reviews',
  keywords:
    'Headquarters Moving reviews, Google reviews movers Port Saint Lucie, office furniture installation reviews Florida',
});

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < rating ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const { count, average } = getReviewStats();

  return (
    <>
      <JsonLd data={buildReviewsStructuredData()} />
      <NavBar />
      <main className="pt-24 pb-12 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-brand mb-4">Customer Reviews</h1>
            <p className="text-xl text-body max-w-3xl mx-auto mb-6">
              Real feedback from customers who hired Headquarters Moving for office furniture installation,
              commercial relocation, and residential moves across Florida.
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 surface-muted rounded-2xl px-8 py-6 border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <StarRating rating={5} />
                <span className="text-2xl font-bold text-brand">{average.toFixed(1)}</span>
                <span className="text-subtle">({count} Google reviews)</span>
              </div>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-brand hover:bg-brand-dark inline-flex items-center px-6 py-3 rounded-2xl font-semibold shadow-lg"
              >
                Leave a Google Review
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {googleReviews.map((review) => (
              <article
                key={review.id}
                className="surface-card rounded-xl shadow-lg p-6 flex flex-col gap-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold text-brand">{review.author}</h2>
                    <p className="text-sm text-subtle">
                      {review.isLocalGuide ? 'Local Guide · ' : ''}
                      {review.authorDetail ? `${review.authorDetail} · ` : ''}
                      Google review · {review.dateLabel}
                    </p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>

                {review.highlights?.length ? (
                  <ul className="flex flex-wrap gap-2">
                    {review.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-xs font-semibold uppercase tracking-wide text-brand bg-brand/10 dark:bg-accent/10 px-3 py-1 rounded-full"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <blockquote className="text-body leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</blockquote>

                {review.services?.length ? (
                  <p className="text-sm text-subtle">
                    <span className="font-semibold text-brand">Services:</span> {review.services.join(', ')}
                  </p>
                ) : null}
              </article>
            ))}
          </div>

          <section className="bg-brand text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Worked With Us Recently?</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Your feedback helps other businesses and families choose a mover they can trust. It only takes a
              minute on Google.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand px-8 py-3 rounded-2xl font-bold inline-block dark:bg-gray-900 dark:text-white dark:border-2 dark:border-accent"
              >
                Write a Google Review
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-2xl font-bold inline-block hover:bg-white hover:text-brand dark:hover:bg-gray-900 dark:hover:text-accent dark:hover:border-accent"
              >
                Request a Quote
              </Link>
            </div>
          </section>

          <p className="text-center text-sm text-subtle mt-8">
            Reviews shown here are from Google.{' '}
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              View all reviews on Google
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
