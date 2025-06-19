import "./globals.css";
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins', // optional for CSS variables
  display: 'swap', // ensures text remains visible during webfont load
})

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
    default: "SANOFTPOS",
    template: "%s | SANOFTPOS",
  },
  description: 'Affordable POS system for small restaurants & retail in Malaysia.',
  keywords: ['POS system', 'Malaysia POS', 'restaurant POS', 'cafe POS', 'affordable POS'],
  authors: [{ name: 'SANOFTPOS' }],
       creator: 'SANOFTPOS',
  publisher: 'SANOFTPOS',
  metadataBase: new URL('https://sanoftpos.com'),
      alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SANOFTPOS - Budget-Friendly POS System',
    description: 'Affordable POS system for small businesses in Malaysia',
    url: 'https://sanoftpos.com',
    siteName: 'SANOFTPOS',
    images: [
      {
        url: 'https://sanoftpos.com/favicons/android-chrome-512x512.png',
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
        className={`${Gilroy.variable} ${PlayPen.variable} ${poppins.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
