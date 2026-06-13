'use client';

import { useMemo, useState } from 'react';
import { getAllSearchableSystems } from '@/lib/furnitureSystems';

export default function FurnitureSystemsSearch() {
  const [query, setQuery] = useState('');
  const allSystems = useMemo(() => getAllSearchableSystems(), []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return allSystems;

    return allSystems.filter(
      (item) =>
        item.name.toLowerCase().includes(normalized) ||
        item.manufacturer.toLowerCase().includes(normalized) ||
        item.category.toLowerCase().includes(normalized)
    );
  }, [allSystems, query]);

  return (
    <section className="mb-12" aria-labelledby="systems-search-heading">
      <h2 id="systems-search-heading" className="text-2xl font-bold text-brand mb-3">
        Search Manufacturers &amp; Systems
      </h2>
      <p className="text-body mb-4">
        Facility managers and project coordinators often search by exact furniture system name. Use the
        search below to confirm we work with your manufacturer or panel system.
      </p>
      <label htmlFor="system-search" className="sr-only">
        Search office furniture manufacturers and systems
      </label>
      <input
        id="system-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Herman Miller AO2, Steelcase Answer, Haworth Premise..."
        className="input-field max-w-xl shadow-sm focus:border-accent focus:ring-2 focus:ring-accent-light"
      />
      <p className="mt-2 text-sm text-subtle">
        Showing {filtered.length} of {allSystems.length} manufacturers and systems
      </p>
      <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[32rem] overflow-y-auto pr-1">
        {filtered.map((item) => (
          <li
            key={`${item.manufacturer}-${item.name}`}
            className="surface-card rounded-lg border border-gray-100 dark:border-gray-800 px-4 py-3 shadow-sm"
          >
            <p className="font-semibold text-brand">{item.name}</p>
            <p className="text-sm text-body">{item.manufacturer}</p>
            <p className="text-xs text-subtle mt-1">{item.category}</p>
          </li>
        ))}
      </ul>
      {filtered.length === 0 && (
        <p className="mt-4 text-body">
          No exact match found.{' '}
          <a href="tel:17722073720" className="text-brand font-semibold hover:underline">
            Call (772) 207-3720
          </a>{' '}
          — we likely still handle your system.
        </p>
      )}
    </section>
  );
}
