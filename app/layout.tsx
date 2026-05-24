import "./globals.css";
import { Metadata } from "next";
import LayoutClient from "./layout-client";

export const metadata: Metadata = {
  title: {
    default: "STAR STATION | Innovative Management & Corporate Branding Agency",
    template: "%s | STAR STATION"
  },
  description: "Elite innovative management collective specializing in premium corporate identity restructuring, television commercial production, bespoke product package layout engineering, and strategic asset optimization frameworks.",
  keywords: [
    "Innovative Brand Management", "Corporate Package Design Lagos", "Television Commercial Production Nigeria", 
    "Dangote Pasta Design Team", "Guinness World Record Film Activation", "Trace Naija Media Partners", 
    "Premium Creative Content Strategy", "International Brand Consulting Agency", "Star Station Lekki"
  ],
  authors: [{ name: "Star Station Engineering Hub" }],
  creator: "Star Station Inc.",
  metadataBase: new URL("https://brand-agency-coral.vercel.app"),
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  openGraph: {
    title: "STAR STATION | Premium Management & Structural Brand Strategy",
    description: "Transforming corporate systems and media narratives across global markets.",
    url: "https://brand-agency-coral.vercel.app",
    siteName: "Star Station Inc.",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className="overflow-x-hidden">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}