import './globals.css';
import AosInit from '@/components/AosInit';
import { buildMetadata } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    title: 'Office Furniture Installation & Moving Services in Florida',
    description:
      'Headquarters Moving LLC specializes in office furniture installation, cubicle setup, and commercial moving across the Treasure Coast and Florida.',
    path: '/',
    keywords:
      'office furniture installation Florida, cubicle installation, commercial moving Treasure Coast, office reconfiguration, Headquarters Moving',
  }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
