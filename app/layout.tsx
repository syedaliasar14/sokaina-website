"use client"

import { metadata } from './metadata';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { usePathname } from "next/navigation";
import localFont from 'next/font/local'

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
  src: './Garet-Book.woff2',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const page = usePathname();

  return (
    <html lang="en">
      <body className={myFont.className}>
        <div className="min-h-screen flex flex-col items-center">
          {(page != '/' && page != '/contact') && <Header/>}
          {children}
        </div>
      </body>
    </html>
  );
}
