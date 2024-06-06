"use client"

import { metadata } from './metadata';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const page = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col items-center">
          {(page != '/' && page != '/contact') && <Header/>}
          {children}
        </div>
      </body>
    </html>
  );
}
