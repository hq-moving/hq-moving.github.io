'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { searchSite } from '@/lib/searchIndex';

export default function SiteSearch({ className = '', onNavigate, id: idProp }) {
  const generatedId = useId();
  const inputId = idProp ?? generatedId;
  const listboxId = `${inputId}-listbox`;

  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const results = open && query.trim().length >= 2 ? searchSite(query) : [];

  useEffect(() => {
    setActiveIndex(results.length > 0 ? 0 : -1);
  }, [query, results.length]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect() {
    setOpen(false);
    setQuery('');
    onNavigate?.();
  }

  function handleKeyDown(event) {
    if (!open || results.length === 0) {
      if (event.key === 'Escape') {
        setOpen(false);
        inputRef.current?.blur();
      }
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % results.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index) => (index <= 0 ? results.length - 1 : index - 1));
    } else if (event.key === 'Escape') {
      setOpen(false);
    } else if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault();
      window.location.href = results[activeIndex].href;
      handleSelect();
    }
  }

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <label htmlFor={inputId} className="sr-only">
        Search the website
      </label>
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3-3" />
        </svg>
        <input
          ref={inputRef}
          id={inputId}
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search site…"
          role="combobox"
          aria-expanded={open && results.length > 0}
          aria-controls={listboxId}
          aria-autocomplete="list"
          autoComplete="off"
          className="input-field w-full min-w-[14rem] py-2 pl-9 pr-3 text-sm shadow-sm focus:border-accent focus:ring-2 focus:ring-accent-light"
        />
      </div>

      {open && query.trim().length >= 2 && (
        <div
          id={listboxId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-2 max-h-80 overflow-y-auto rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl"
        >
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-subtle">No results for &ldquo;{query}&rdquo;</p>
          ) : (
            <ul>
              {results.map((result, index) => (
                <li key={`${result.href}-${result.title}`} role="option" aria-selected={index === activeIndex}>
                  <Link
                    href={result.href}
                    onClick={handleSelect}
                    className={`block px-4 py-3 border-b border-gray-100 dark:border-gray-800 last:border-b-0 transition-colors ${
                      index === activeIndex
                        ? 'bg-brand-light dark:bg-gray-800'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-subtle">{result.category}</span>
                    <span className="block font-semibold text-brand text-sm mt-0.5">{result.title}</span>
                    <span className="block text-xs text-body mt-1 line-clamp-2">{result.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
