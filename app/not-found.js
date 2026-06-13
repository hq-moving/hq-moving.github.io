import Link from 'next/link';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main className="pt-32 pb-20 text-center px-4">
        <h1 className="text-4xl font-bold text-brand mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
        <Link href="/" className="text-white bg-brand px-6 py-3 rounded-2xl font-semibold">
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
