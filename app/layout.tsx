import "./globals.css";
import { Metadata } from "next";
import LayoutClient from "./layout-client";

export const metadata: Metadata = {
  title: "STAR STATION | Innovative Management & Branding Agency",
  description: "Elite innovative management company based in Lagos, Nigeria. Transforming corporate brands and talent through premium content production, TVCs, and creative strategy frameworks.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: '16x16', type: 'image/png' },
      { url: "/favicon-32x32.png", sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}