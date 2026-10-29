// ─────────────────────────────────────────────────────────────────────────────
//  app/api/ingredients/[slug]/route.ts
//  Pre-rendered at build time: one tiny JSON per recipe → served from the CDN.
//  Used by the long-press ingredient peek on /recipes (mobile).
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse } from 'next/server'
import { getRecipeIngredients, recipeSlugs } from '@/lib/recipe-ingredients'

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
    return recipeSlugs().map(slug => ({ slug }))
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const sections = getRecipeIngredients(slug)
    return NextResponse.json({ slug, sections })
}
