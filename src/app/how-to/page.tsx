// ─────────────────────────────────────────────────────────────────────────────
//  app/how-to/page.tsx — server wrapper so the hub gets its own SEO metadata
//  (metadata here applies to /how-to only, not to the individual guides)
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import HowToClient from './_components/HowToClient'

export const metadata: Metadata = {
    title: 'How to Cook Vietnamese Food: Technique Guides | FlavorNest Vietnam',
    description:
        'Practical guides to Vietnamese cooking techniques: crystal-clear broth, rolling rice paper, caramel sauce, kho braising, phin coffee, wok care and more.',
    alternates: { canonical: '/how-to' },
    openGraph: {
        title: 'How to Cook Vietnamese Food — Technique Guides',
        description: 'The building blocks of Vietnamese cooking, explained step by step.',
        url: '/how-to',
        type: 'website',
    },
}

export default function HowToPage() {
    return <HowToClient />
}
