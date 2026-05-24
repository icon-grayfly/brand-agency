import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Fixed path with /google
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STAR STATION | Innovative Management Agency",
  description: "Growing enterprise brands, package architectures, and premium talents in Lagos, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}