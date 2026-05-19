import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingProgress from '@/components/ReadingProgress'
import { Playfair_Display, DM_Sans, Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google"
import AuthProvider from "@/components/providers/AuthProvider";
import { FavoritesProvider } from "@/context/FavoritesContext";

// ── Display font — editorial serif for headings ──
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// ── Body font — clean geometric sans for readability ──
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

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
  description: 'Your nest of authentic Vietnamese flavors. 180+ tested recipes from Hanoi, Hue and Saigon — made simple for every home kitchen.',
  alternates: {
    canonical: '/', // ⬅️ Trỏ về chính nó, không phải domain khác
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flavor-nest-vietnam.vercel.app',
    siteName: 'FlavorNest Vietnam',
    title: 'FlavorNest Vietnam – Authentic Vietnamese Recipes',
    description: 'Your nest of authentic Vietnamese flavors. 180+ tested recipes made simple at home.',
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
      className={`${playfair.variable} ${dmSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <link rel="preload" as="image" href="/hero-bg.jpg" fetchPriority="high" />
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
        <GoogleAnalytics gaId="G-C13NDX0TWN" />
      </body>
    </html>
  );
}
