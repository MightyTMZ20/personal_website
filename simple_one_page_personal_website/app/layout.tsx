import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cherie Chen | Portfolio',
  description: 'Personal portfolio showcasing my work, experience, and skills in web development and design.',
  keywords: ['cherie chen', 'high school'],
  authors: [{ name: 'Cherie Chen' }],
  creator: 'Cherie Chen',
  openGraph: {
    images: [
      {
        url: 'https://tom-zhang-personal-site.vercel.app/current_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Cherie Chen Portfolio',
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Your Name | Portfolio',
  //   description: 'Personal portfolio showcasing my work, experience, and skills in web development and design.',
  //   creator: '@yourusername',
  //   images: ['/og-image.jpg'],
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
  // verification: {
  //   google: 'your-google-verification-code', // Students can add this later
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yourwebsite.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}