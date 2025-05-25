import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const Gilroy = localFont({
  src: [
    {
      path: '../public/fonts/Gilroy-Regular.ttf',
      weight: '400', 
      style: 'regular', 
    },
    {
      path: '../public/fonts/Gilroy-Medium.ttf',
      weight: '500', 
      style: 'medium', 
    },
    {
      path: '../public/fonts/Gilroy-Bold.ttf',
      weight: '700', 
      style: 'bold', 
    },
    {
      path: '../public/fonts/Gilroy-Heavy.ttf',
      weight: '900', 
      style: 'black', 
    },
  ],
  variable: '--font-gilroy', 
})
const  PlayPen= localFont({
  src: [
    {
      path: '../public/fonts/PlaypenSansArabic-Regular.ttf',
      weight: '400', 
      style: 'regular', 
    },
  ],
  variable: '--font-playpen', 
})

export const metadata = {
  title: {
    default: "Billo POS",
    template: "%s | Billo POS",
  },
  description: 'Affordable POS system for small food & beverage businesses in Malaysia. Start from only RM2 per day!',
  keywords: ['POS system', 'Malaysia POS', 'restaurant POS', 'cafe POS', 'affordable POS'],
  authors: [{ name: 'Billo O' }],
       creator: 'Billo',
  publisher: 'Billo',
  metadataBase: new URL('https://billo.my'),
      alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Billo - Budget-Friendly POS System',
    description: 'Affordable POS system for small businesses in Malaysia',
    url: 'https://billo.my',
    siteName: 'Billo POS',
    images: [
      {
        url: 'https://billo.my/favicons/android-chrome-512x512.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_MY', // Malaysia locale
    type: 'website',
  },
 robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${Gilroy.variable} ${PlayPen.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
