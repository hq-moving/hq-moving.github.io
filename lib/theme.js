export const THEME_STORAGE_KEY = 'hq-theme';

export function applyTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
}

export function readStoredTheme() {
  return document.documentElement.classList.contains('dark');
}
