'use client';

import { useEffect, useState } from 'react';
import { applyTheme, readStoredTheme } from '@/lib/theme';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(readStoredTheme());
  }, []);

  const toggleTheme = () => {
    const next = !readStoredTheme();
    applyTheme(next);
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-lg p-2 text-brand hover:bg-brand-light dark:hover:bg-gray-800 transition-colors"
    >
      {isDark ? (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3.5a6.5 6.5 0 0 0 11.5 11z" />
        </svg>
      )}
    </button>
  );
}
