// ─────────────────────────────────────────────────────────────
//  src/app/actions/favorites.ts
//  FlavorNest Vietnam — Server Actions cho Favorites
//  Yêu cầu: user phải đăng nhập (session)
// ─────────────────────────────────────────────────────────────

'use server'

import { auth } from '@/auth'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export interface FavoriteRecipeData {
    slug: string
    title: string
    image: string
    category?: string
    cookTime?: string
    subtitle?: string
    difficulty?: string
}

// ── Toggle favorite (add nếu chưa có, xoá nếu đã có) ─────────
export async function toggleFavoriteAction(recipe: FavoriteRecipeData) {
    const session = await auth()
    if (!session?.user?.id) {
        return { ok: false, error: 'UNAUTHORIZED' as const }
    }

    const userId = session.user.id
    console.log('[toggle] userId:', userId, 'slug:', recipe.slug)
    
    try {
        const existing = await prisma.favorite.findUnique({
            where: {
                userId_recipeSlug: { userId, recipeSlug: recipe.slug },
            },
        })

        if (existing) {
            await prisma.favorite.delete({
                where: { id: existing.id },
            })
            revalidatePath('/favorites')
            revalidatePath('/account')
            return { ok: true, action: 'removed' as const }
        }

        await prisma.favorite.create({
            data: {
                userId,
                recipeSlug: recipe.slug,
                recipeData: recipe as object,
            },
        })
        revalidatePath('/favorites')
        revalidatePath('/account')
        return { ok: true, action: 'added' as const }
    } catch (e) {
        console.error('[toggleFavoriteAction]', e)
        return { ok: false, error: 'DB_ERROR' as const }
    }
}

// ── Lấy toàn bộ favorites của user hiện tại ──────────────────
export async function getMyFavoritesAction() {
    const session = await auth()
    if (!session?.user?.id) return []

    const rows = await prisma.favorite.findMany({
        where: { userId: session.user.id },
        orderBy: { savedAt: 'desc' },
    })

    return rows.map(r => ({
        ...(r.recipeData as unknown as FavoriteRecipeData),
        savedAt: r.savedAt.getTime(),
        id: r.id,
    }))
}

// ── Xoá 1 favorite theo slug ─────────────────────────────────
export async function removeFavoriteAction(slug: string) {
    const session = await auth()
    if (!session?.user?.id) {
        return { ok: false, error: 'UNAUTHORIZED' as const }
    }

    try {
        await prisma.favorite.delete({
            where: {
                userId_recipeSlug: {
                    userId: session.user.id,
                    recipeSlug: slug,
                },
            },
        })
        revalidatePath('/favorites')
        revalidatePath('/account')
        return { ok: true }
    } catch (e) {
        console.error('[removeFavoriteAction]', e)
        return { ok: false, error: 'DB_ERROR' as const }
    }
}

// ── Xoá tất cả favorites của user ────────────────────────────
export async function clearFavoritesAction() {
    const session = await auth()
    if (!session?.user?.id) {
        return { ok: false, error: 'UNAUTHORIZED' as const }
    }

    try {
        await prisma.favorite.deleteMany({
            where: { userId: session.user.id },
        })
        revalidatePath('/favorites')
        revalidatePath('/account')
        return { ok: true }
    } catch (e) {
        console.error('[clearFavoritesAction]', e)
        return { ok: false, error: 'DB_ERROR' as const }
    }
}
