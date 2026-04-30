import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingProgress from '@/components/ReadingProgress'
import { Playfair_Display, DM_Sans } from "next/font/google";
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
  title: {
    default: "FlavorNest Vietnam – Authentic Vietnamese Recipes Made Simple at Home",
    template: "%s | FlavorNest Vietnam",
  },
  description:
    "Your nest of authentic Vietnamese flavors. 100+ tested recipes from Hanoi, Hue and Saigon — made simple for every home kitchen.",
  keywords: ["Vietnamese recipes", "Pho", "Banh Mi", "Vietnamese food blog", "authentic Vietnamese cooking"],
  authors: [{ name: "FlavorNest Vietnam" }],
  creator: "FlavorNest Vietnam",
  verification: {
    google: 'uWW4XXIzgki21f1o-KFkiDqE1z_DU7Io--zpuPBBV5g',
  },
  metadataBase: new URL("https://flavor-nest-vietnam.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flavor-nest-vietnam.vercel.app",
    siteName: "FlavorNest Vietnam",
    title: "FlavorNest Vietnam – Authentic Vietnamese Recipes",
    description: "100+ authentic Vietnamese recipes made simple at home.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FlavorNest Vietnam – Authentic Vietnamese Recipes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlavorNest Vietnam",
    description: "Authentic Vietnamese recipes made simple at home.",
    images: ["/og-image.png"],
  },
  manifest: "/site.webmanifest",
  themeColor: "#D97706",
  other: {
    "apple-mobile-web-app-title": "FlavorNest VN",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="preload" as="image" href="/hero-bg.jpg" fetchPriority="high" />
      </head>
      <body
        className="min-h-full flex flex-col font-body"
        style={{
          overflowX: "hidden",
          scrollBehavior: "smooth",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          WebkitTapHighlightColor: "transparent",
          WebkitTextSizeAdjust: "100%",
        }}
      >
        <AuthProvider>
          <FavoritesProvider>
          <Navbar />
          <ReadingProgress />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          </FavoritesProvider>
        </AuthProvider>
        <GoogleAnalytics gaId="G-C13NDX0TWN" />
      </body>
    </html>
  );
}
