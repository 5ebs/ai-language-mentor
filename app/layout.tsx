import { Metadata, Viewport } from 'next';
import './globals.css';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Learn a New Language Online with AI',
  description:
    'Learn A New Language Online with the power of AI. Use one of our Mentors and learn a new language with a tutor that is always available for you.',
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#da532c',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
