// ─────────────────────────────────────────────────────────────────────────────
//  src/app/api/keep-alive/route.ts
//  Vercel Cron gọi mỗi ngày → query nhẹ để Supabase Free không bị auto-pause
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
    // Vercel Cron tự gửi header này khi có biến CRON_SECRET
    const secret = process.env.CRON_SECRET
    if (secret && request.headers.get('authorization') !== `Bearer ${secret}`) {
        return NextResponse.json({ ok: false }, { status: 401 })
    }

    try {
        const users = await prisma.user.count()
        return NextResponse.json({ ok: true, users, at: new Date().toISOString() })
    } catch (e) {
        console.error('[keep-alive]', e)
        return NextResponse.json({ ok: false }, { status: 500 })
    }
}
