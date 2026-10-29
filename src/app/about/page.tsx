// ─────────────────────────────────────────────────────────────────────────────
//  app/about/page.tsx — server wrapper (SEO metadata) for the About page
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import AboutClient from './_components/AboutClient'

export const metadata: Metadata = {
    title: 'About — A Phú Yên Kitchen in Germany',
    description:
        'FlavorNest Vietnam is written by Nguyen Quan Huy, who grew up on the Phú Yên coast and now cooks his way back home from a small kitchen in Thuringia, Germany.',
    alternates: { canonical: '/about' },
    openGraph: {
        title: 'About FlavorNest Vietnam',
        description: 'A Phú Yên kitchen, rebuilt one recipe at a time in Germany.',
        url: '/about',
        images: [{ url: '/images/about/ganh-da-dia.webp', width: 1920, height: 1280, alt: 'Gành Đá Đĩa basalt columns on the Phú Yên coast' }],
    },
}

export default function AboutPage() {
    return <AboutClient />
}
