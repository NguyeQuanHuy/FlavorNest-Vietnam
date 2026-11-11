import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: __dirname,
  },
  // Old / mistyped recipe URLs → the real page (301)
  async redirects() {
    return [
      { source: '/recipes/bun-cha-ha-noi', destination: '/recipes/bun-cha-hanoi', permanent: true },
      { source: '/recipes/canh-chua-ca', destination: '/recipes/canh-chua-ca-tre', permanent: true },
      { source: '/recipes/suon-nuong-a', destination: '/recipes/suon-nuong-sa', permanent: true },
    ];
  },
  images: {
    qualities: [75, 80, 85],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1600],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
