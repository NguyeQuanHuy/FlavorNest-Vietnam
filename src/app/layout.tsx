import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingProgress from '@/components/ReadingProgress'
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ── Viewport — prevents zoom, ensures proper mobile rendering ──
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1009" },
  ],
}

// ── SEO Metadata ──
export const metadata: Metadata = {
  title: {
    default: "FlavorNest Vietnam – Authentic Vietnamese Recipes Made Simple at Home",
    template: "%s | FlavorNest Vietnam",
  },
  description:
    "Your nest of authentic Vietnamese flavors. 100+ tested recipes from Hanoi, Hue and Saigon — made simple for every home kitchen.",
  keywords: ["Vietnamese recipes", "Pho", "Banh Mi", "Vietnamese food blog", "authentic Vietnamese cooking"],
  authors: [{ name: "FlavorNest Vietnam" }],
  creator: "FlavorNest Vietnam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flavor-nest-vietnam.vercel.app",
    siteName: "FlavorNest Vietnam",
    title: "FlavorNest Vietnam – Authentic Vietnamese Recipes",
    description: "100+ authentic Vietnamese recipes made simple at home.",
    images: [{
      url: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=1200&q=80",
      width: 1200,
      height: 630,
      alt: "FlavorNest Vietnam",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlavorNest Vietnam",
    description: "Authentic Vietnamese recipes made simple at home.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}    >
      <body
        className="min-h-full flex flex-col"
        style={{
          // Prevent content shift on mobile when scrollbar appears
          overflowX: "hidden",
          // Smooth scrolling
          scrollBehavior: "smooth",
          // Better text rendering on mobile
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          // Prevent tap highlight on mobile
          WebkitTapHighlightColor: "transparent",
          // Prevent text size adjustment on orientation change
          WebkitTextSizeAdjust: "100%",
        }}
      >
        <Navbar />
        <ReadingProgress />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
