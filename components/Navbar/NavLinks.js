import Link from 'next/link';

const navLinkClass =
  'px-4 font-extrabold text-gray-500 dark:text-gray-300 hover:text-accent transition duration-200';

export default function NavLinks({ layout = 'horizontal', onNavigate }) {
  const isStacked = layout === 'stacked';
  const contactClass = isStacked
    ? 'w-full text-center px-6 py-3 rounded-2xl font-extrabold text-white bg-brand hover:bg-brand-dark shadow-md transition duration-200'
    : 'ml-2 px-5 py-2.5 rounded-2xl font-extrabold text-white bg-brand hover:bg-brand-dark shadow-md transition duration-200 inline-flex items-center justify-center';

  const wrapperClass = isStacked ? 'flex flex-col space-y-4' : 'inline-flex items-center flex-wrap justify-end';

  return (
    <div className={wrapperClass}>
      <Link className={navLinkClass} href="/services" onClick={onNavigate}>
        Services
      </Link>
      <Link
        className={navLinkClass}
        href="/services/office-furniture-installation"
        onClick={onNavigate}
      >
        Office Furniture
      </Link>
      <Link className={navLinkClass} href="/service-areas" onClick={onNavigate}>
        Service Areas
      </Link>
      <Link className={navLinkClass} href="/reviews" onClick={onNavigate}>
        Reviews
      </Link>
      <Link className={contactClass} href="/contact" onClick={onNavigate}>
        Contact Us
      </Link>
    </div>
  );
}
