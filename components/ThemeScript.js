import { THEME_STORAGE_KEY } from '@/lib/theme';

export default function ThemeScript() {
  const script = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var t=localStorage.getItem(k);var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
