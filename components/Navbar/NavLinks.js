import Link from 'next/link';

export default function NavLinks() {
  return (
    <>
      <Link className="px-4 font-extrabold text-gray-500 hover:text-accent" href="/about">
        About
      </Link>
      <Link className="px-4 font-extrabold text-gray-500 hover:text-accent" href="/services">
        Services
      </Link>
      <Link className="px-4 font-extrabold text-gray-500 hover:text-accent" href="/services/office-furniture-installation">
        Office Furniture
      </Link>
      <Link className="px-4 font-extrabold text-gray-500 hover:text-accent" href="/service-areas">
        Service Areas
      </Link>
      <Link className="px-4 font-extrabold text-gray-500 hover:text-accent" href="/contact">
        Contact Us
      </Link>
    </>
  );
}
