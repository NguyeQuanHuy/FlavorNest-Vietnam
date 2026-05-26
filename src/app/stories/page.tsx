// ─────────────────────────────────────────────────────────────────────────────
//  app/stories/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import StoriesClient from './_components/StoriesClient'
import { STORIES } from '@/data/stories-data'

export type { Story } from '@/data/stories-data'
export const metadata: Metadata = {
    title: 'Kitchen Stories | FlavorNest Vietnam',
    description: 'Discover the history, culture and people behind authentic Vietnamese cuisine.',
}

// Định nghĩa kiểu dữ liệu (Types)
export type { CategoryColor } from './_components/StoriesClient'
import type { CategoryColor } from './_components/StoriesClient'

export interface Story {
    slug: string
    category: string
    categoryColor: CategoryColor
    title: string
    subtitle: string
    excerpt: string
    image: string
    imageAlt: string
    tag: string
    tagColor: CategoryColor
    readTime: string
    publishedAt: string
    featured: boolean
}

export default function StoriesPage() {
    return (
        <div className="min-h-screen bg-[#F5EDE3] dark:bg-[#1C1009]">
            <StoriesClient stories={STORIES} />
        </div>
    )
}
