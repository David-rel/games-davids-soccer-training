import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://games.davidssoccertraining.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "David's Soccer Training | Games",
    template: "%s | David's Soccer Training Games",
  },
  description:
    "Fun interactive games for soccer players, families, and fans. Built by David's Soccer Training.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "David's Soccer Training Games",
    title: "David's Soccer Training | Games",
    description:
      "Fun interactive games for soccer players, families, and fans.",
    images: [
      {
        url: "/icon.png",
        width: 1080,
        height: 1080,
        alt: "David's Soccer Training Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David's Soccer Training | Games",
    description:
      "Fun interactive games for soccer players, families, and fans.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
