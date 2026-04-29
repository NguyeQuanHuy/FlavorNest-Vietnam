// ─────────────────────────────────────────────────────────────────────────────
//  src/auth.ts
//  FlavorNest Vietnam — Auth.js v5 Configuration
// ─────────────────────────────────────────────────────────────────────────────

import NextAuth from 'next-auth'
import type { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'
import Facebook from 'next-auth/providers/facebook'
import Credentials from 'next-auth/providers/credentials'
import { loginSchema } from '@/lib/validations/auth'

export const authConfig: NextAuthConfig = {
    // 1. Cấu hình các trang tùy chỉnh
    pages: {
        signIn: '/auth/signin',
        error: '/auth/signin',
    },

    // 2. Chiến lược lưu trữ session (dùng JWT cho nhanh và nhẹ)
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 ngày
    },

    // 3. Các phương thức đăng nhập
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
        Facebook({
            clientId: process.env.AUTH_FACEBOOK_ID,
            clientSecret: process.env.AUTH_FACEBOOK_SECRET,
        }),
        Credentials({
            name: 'credentials',
            async authorize(credentials) {
                // Kiểm tra định dạng dữ liệu bằng Zod trước khi xử lý
                const parsed = loginSchema.safeParse(credentials)

                if (!parsed.success) return null

                const { email, password } = parsed.data

                // Lazy import để tránh edge runtime issues với bcryptjs
                const { prisma } = await import('@/lib/prisma')
                const bcrypt = (await import('bcryptjs')).default

                const user = await prisma.user.findUnique({
                    where: { email: email.toLowerCase() },
                })

                // User không tồn tại HOẶC đăng nhập bằng OAuth (không có password)
                if (!user || !user.password) return null

                const valid = await bcrypt.compare(password, user.password)
                if (!valid) return null

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                }
            },
        }),
    ],

    // 4. Các hàm xử lý trung gian (Callbacks)
    callbacks: {
        // ── Lưu OAuth user vào DB (Google/Facebook) ──
        async signIn({ user, account }) {
            // Credentials đã verify từ DB rồi → bỏ qua
            if (account?.provider === 'credentials') return true

            if (!user.email) return false

            // Lazy import tránh edge runtime
            const { prisma } = await import('@/lib/prisma')

            try {
                const existing = await prisma.user.findUnique({
                    where: { email: user.email.toLowerCase() },
                })

                if (!existing) {
                    // Tạo user mới từ OAuth profile
                    const created = await prisma.user.create({
                        data: {
                            email: user.email.toLowerCase(),
                            name: user.name ?? null,
                            image: user.image ?? null,
                            emailVerified: new Date(),
                        },
                    })
                    user.id = created.id
                } else {
                    // User đã có → đồng bộ id thật từ DB vào object user
                    user.id = existing.id
                    // Update avatar/name nếu OAuth provider có data mới
                    if (
                        (user.image && user.image !== existing.image) ||
                        (user.name && user.name !== existing.name)
                    ) {
                        await prisma.user.update({
                            where: { id: existing.id },
                            data: {
                                name: user.name ?? existing.name,
                                image: user.image ?? existing.image,
                            },
                        })
                    }
                }

                return true
            } catch (e) {
                console.error('[signIn callback]', e)
                return false
            }
        },

        // Chạy khi JWT được tạo/cập nhật
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id
            }
            if (account) {
                token.provider = account.provider
            }
            return token
        },
        // Chạy khi Session được kiểm tra (Client-side)
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
                // @ts-ignore
                session.user.provider = token.provider as string
            }
            return session
        },
        // Kiểm tra quyền truy cập trang
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const protectedPaths = ['/account', '/favorites']
            const isProtected = protectedPaths.some(p => nextUrl.pathname.startsWith(p))

            if (isProtected && !isLoggedIn) {
                return false
            }
            return true
        },
    },

    // 5. Bảo mật
    trustHost: true,
    secret: process.env.AUTH_SECRET,
}

// ĐÂY LÀ DÒNG QUAN TRỌNG NHẤT ĐỂ FIX LỖI MIDDLEWARE CỦA BẠN:
export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)