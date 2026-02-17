import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Wyandanch Library | Open Source Finance Education',
  description:
    'A free, open source curriculum for learning investing and quantitative finance from first principles. 38 readings across 8 progressive levels.',
  keywords: [
    'finance education',
    'investing curriculum',
    'quantitative finance',
    'value investing',
    'open source',
    'free education',
  ],
  authors: [{ name: 'Wyandanch Library' }],
  metadataBase: new URL('https://wyandanchlibrary.com'),
  openGraph: {
    title: 'Wyandanch Library',
    description:
      'Free, open source education in investing and quantitative finance. From Menger to machine learning.',
    url: 'https://wyandanchlibrary.com',
    siteName: 'Wyandanch Library',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Wyandanch Library — Open Source Finance Education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wyandanch Library',
    description:
      'Free, open source finance education. 38 readings across 8 levels — from Menger to machine learning.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} style={{ backgroundColor: '#0a0a0a' }}>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
