// ─────────────────────────────────────────────────────────────────────────────
//  app/stories/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import StoriesClient from './_components/StoriesClient'
import { STORIES } from '@/data/stories-data'

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

// Only list stories that have their own page (others would open an empty template)
const hasPage = (slug: string) => fs.existsSync(path.join(process.cwd(), 'src/app/stories', slug, 'page.tsx'))

export default function StoriesPage() {
    const stories = STORIES.filter(s => hasPage(s.slug))
    return (
        <div className="min-h-screen bg-[#F5EDE3]">
            <StoriesClient stories={stories} />
        </div>
    )
}
