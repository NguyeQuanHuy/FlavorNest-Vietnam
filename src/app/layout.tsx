import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingProgress from '@/components/ReadingProgress'
// Fonts are self-hosted via @fontsource (bundled at build, no network fetch → no flaky Google Fonts builds)
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/800.css";
import "@fontsource/playfair-display/900.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/500-italic.css";
import "@fontsource/playfair-display/600-italic.css";
import "@fontsource/playfair-display/700-italic.css";
import "@fontsource/playfair-display/800-italic.css";
import "@fontsource/playfair-display/900-italic.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource-variable/fraunces/soft.css"; // wordmark: soft, rounded serif
import { GoogleAnalytics } from "@next/third-parties/google"
import AuthProvider from "@/components/providers/AuthProvider";
import { FavoritesProvider } from "@/context/FavoritesContext";
import SiteTranslate from "@/components/SiteTranslate";

// ── Viewport — prevents zoom, ensures proper mobile rendering ──
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5EDE3" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1009" },
  ],
}

// ── SEO Metadata ──
export const metadata: Metadata = {
  metadataBase: new URL('https://flavor-nest-vietnam.vercel.app'), // ⬅️ ĐỔI thành URL THẬT
  title: {
    default: 'FlavorNest Vietnam – Authentic Vietnamese Recipes',
    template: '%s | FlavorNest Vietnam', // ⬅️ Quan trọng! Cho phép từng page set title riêng
  },
  description: 'Your nest of authentic Vietnamese flavors. 880+ tested recipes from Hanoi, Hue and Saigon — made simple for every home kitchen.',
  // canonical is set per page (homepage: src/app/page.tsx, recipes: recipes/_lib/recipe-seo.ts) — never globally
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flavor-nest-vietnam.vercel.app',
    siteName: 'FlavorNest Vietnam',
    title: 'FlavorNest Vietnam – Authentic Vietnamese Recipes',
    description: 'Your nest of authentic Vietnamese flavors. 880+ tested recipes made simple at home.',
    images: [
      {
        url: '/og-image.png', // Host trên domain của bạn, không Unsplash
        width: 1200,
        height: 630,
        alt: 'FlavorNest Vietnam – Authentic Vietnamese Recipes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlavorNest Vietnam',
    description: 'Authentic Vietnamese recipes made simple at home.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'uWW4XXIzgki21f1o-KFkiDqE1z_DU7Io--zpuPBBV5g',
  },
  themeColor: '#1C1009',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link rel="preload" as="image" href="/hero-bg.jpg" fetchPriority="high" /><link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className="min-h-full flex flex-col font-body"
        style={{
          overflowX: "hidden",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          WebkitTapHighlightColor: "transparent",
          WebkitTextSizeAdjust: "100%",
        }}
      >
        <AuthProvider>
          <FavoritesProvider>
            <Navbar />
            <noscript>
              <nav aria-label="Main navigation" style={{ padding: '12px 24px', background: '#2D1A0E', display: 'flex', gap: 24 }}>
                <a href="/" style={{ color: '#F5EDE3', fontWeight: 700 }}>FlavorNest Vietnam</a>
                <a href="/recipes" style={{ color: '#F5EDE3' }}>Recipes</a>
                <a href="/stories" style={{ color: '#F5EDE3' }}>Stories</a>
                <a href="/about" style={{ color: '#F5EDE3' }}>About</a>
              </nav>
            </noscript>
            <ReadingProgress />
            <main className="flex-1">{children}</main>
            <Footer />
          </FavoritesProvider>
        </AuthProvider>
        <SiteTranslate />
        <GoogleAnalytics gaId="G-C13NDX0TWN" />
      </body>
    </html>
  );
}
