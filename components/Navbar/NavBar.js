'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import PictureImage from '@/components/PictureImage';
import NavLinks from '@/components/Navbar/NavLinks';
import ThemeToggle from '@/components/ThemeToggle';
import SiteSearch from '@/components/SiteSearch';

export default function NavBar() {
  const [top, setTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setTop(window.pageYOffset <= 10);
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const navSurface = !top
    ? 'bg-white dark:bg-gray-900 shadow-lg'
    : 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm';

  return (
    <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${navSurface}`}>
      <div className="flex flex-row justify-between items-center gap-3 py-2 px-4 md:px-8 lg:px-12">
        <div className="flex flex-row items-center font-semibold shrink-0">
          <Link href="/" className="inline-flex items-center gap-2 sm:gap-3 py-1">
            <PictureImage
              src="/images/hqtranslarge.png"
              alt="Headquarters Moving LLC"
              width={200}
              height={80}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
            <span className="font-extrabold text-base sm:text-xl text-brand leading-tight text-left uppercase">
              Headquarters Moving
            </span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 max-w-md lg:max-w-lg mx-2 lg:mx-6">
          <SiteSearch />
        </div>

        <div className="flex items-center shrink-0">
          <ThemeToggle />
          <button
            type="button"
            className="p-4 lg:p-8 rounded-lg lg:hidden text-brand"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
          <div className="hidden lg:inline-block p-5">
            <NavLinks />
          </div>
        </div>
      </div>
      <div className={`fixed transition-transform duration-300 ease-in-out flex justify-center left-0 w-full h-auto rounded-md p-8 md:p-12 surface-card lg:hidden shadow-xl top-14 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-6 w-full max-w-md">
          <SiteSearch id="mobile-site-search" onNavigate={() => setIsOpen(false)} />
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
