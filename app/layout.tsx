import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // choose what you actually need
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Green Hero",
    template: "%s | Green Hero",
  },
  description: "Green Hero — Recycling and Waste Management Platform.",
  keywords: ["green", "sustainability", "eco", "landing", "product", "climate"],
  authors: [{ name: "Green Hero", url: "https://greenhero.live" }],
  creator: "Green Hero Team",
  publisher: "Green Hero",
  metadataBase: new URL("https://greenhero.live"),
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  openGraph: {
    title: "Green Hero — Sustainable landing",
    description:
      "Build eco-friendly habits with Green Hero — sustainable products, tips, and community.",
    url: "https://greenhero.live",
    siteName: "Green Hero",
    images: [
      {
        url: "/phone/og-image.png",
        width: 1200,
        height: 630,
        alt: "Green Hero preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Hero",
    description: "Build eco-friendly habits with Green Hero.",
    images: ["/phone/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
