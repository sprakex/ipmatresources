import 'katex/dist/katex.css';

import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { appName } from '@/lib/shared';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sprakex.github.io/ipmat-resources-test'),
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider search={{ options: { type: 'static', api: '/search-index.json' } }}>{children}</RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
