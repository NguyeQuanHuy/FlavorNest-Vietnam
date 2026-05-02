// ─────────────────────────────────────────────────────────────
//  src/app/actions/users.ts
//  FlavorNest Vietnam — Server Actions cho User
//  - registerUserAction: tạo tài khoản mới (Credentials)
//  - getAllUsersAction: lấy danh sách user (admin/dashboard)
//  - getUserByEmail: helper cho auth.ts
// ─────────────────────────────────────────────────────────────

'use server'

import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { registerSchema } from '@/lib/validations/auth'
import { auth } from '@/auth'
import { isAdmin } from '@/lib/admin'

// ── Register: tạo user mới với email + password ──────────────
export async function registerUserAction(formData: {
    name: string
    email: string
    password: string
    confirmPassword: string
    agreeToTerms: boolean
}) {
    // 1. Validate
    const parsed = registerSchema.safeParse(formData)
    if (!parsed.success) {
        return {
            ok: false,
            error: 'VALIDATION_ERROR' as const,
            issues: parsed.error.flatten().fieldErrors,
        }
    }

    const { name, email, password } = parsed.data

    // 2. Check email tồn tại chưa
    const existing = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
    })
    if (existing) {
        return { ok: false, error: 'EMAIL_TAKEN' as const }
    }

    // 3. Hash password + tạo user
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                name,
                email: email.toLowerCase(),
                password: hashedPassword,
            },
            select: { id: true, name: true, email: true },
        })
        return { ok: true, user }
    } catch (e) {
        console.error('[registerUserAction]', e)
        return { ok: false, error: 'DB_ERROR' as const }
    }
}

// ── Helper: tìm user theo email (dùng trong auth.ts) ─────────
export async function getUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: { email: email.toLowerCase() },
    })
}

// ── List all users (admin only) ──────────────────────────────
export async function getAllUsersAction() {
    const session = await auth()
    if (!isAdmin(session?.user?.email)) {
        return { ok: false, error: 'FORBIDDEN' as const, users: [] as never[] }
    }

    try {
        const users = await prisma.user.findMany({
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
                createdAt: true,
                _count: {
                    select: { favorites: true },
                },
            },
        })
        return { ok: true, users }
    } catch (e) {
        console.error('[getAllUsersAction]', e)
        return { ok: false, error: 'DB_ERROR' as const, users: [] as never[] }
    }
}

// ── Delete user (admin only) ─────────────────────────────────
export async function deleteUserAction(userId: string) {
    const session = await auth()
    if (!isAdmin(session?.user?.email)) {
        return { ok: false, error: 'FORBIDDEN' as const }
    }

    // Không cho admin tự xoá chính mình
    if (session?.user?.id === userId) {
        return { ok: false, error: 'CANNOT_DELETE_SELF' as const }
    }

    try {
        await prisma.user.delete({
            where: { id: userId },
        })
        return { ok: true }
    } catch (e) {
        console.error('[deleteUserAction]', e)
        return { ok: false, error: 'DB_ERROR' as const }
    }
}