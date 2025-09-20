import type { Metadata } from 'next';
import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
  metadataBase: process.env.URL ? new URL(process.env.URL) : undefined,

  title: 'Isak Granqvist - Full Stack Software Developer',
  description:
    'Full stack software developer. Visit my website to learn more about my skills and portfolio. If you need to get in touch with me, you can send an email to contact@granqvist.dev.',
  keywords: [
    'Full stack development',
    'Web application development',
    'Mobile app development',
    'Cloud computing',
    'Data analysis',
    'User experience design',
    'Project management',
    'Agile development methodologies',
  ],
  openGraph: {
    title: 'Software Development Done Right: Your Go-To Developer',
    description:
      'Full stack software developer. Visit my website to learn more about my skills and portfolio.',
    images: {
      url: '/png/og.png',
    },
    url: 'https://granqvist.dev',
  },
  twitter: {
    title: 'Software Development Done Right: Your Go-To Developer',
    description:
      'Full stack software developer. Visit my website to learn more about my skills and portfolio.',
    images: {
      url: '/png/og.png',
    },
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      <GoogleTagManager gtmId="G-Y3KR93HTBB" />

      <body className="pre-load">{children}</body>
    </html>
  );
}
