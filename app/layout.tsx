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

export const metadata = {
  title: "BillO",
    description: "The budget-friendly POS system made for small food & beverage businesses.",

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
        className={`${Gilroy.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
