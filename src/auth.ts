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
        signIn: '/login',      // Khi chưa đăng nhập sẽ bị đá về đây
        error: '/login',       // Khi có lỗi cũng quay về đây
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

                // Chỗ này là nơi kiểm tra User trong Database thật
                // Hiện tại đang để chế độ DEMO: Chấp nhận mọi email/pass đúng định dạng
                const { email, password } = parsed.data

                if (email && password.length >= 8) {
                    return {
                        id: '1',
                        name: 'FlavorNest Chef',
                        email: email,
                        image: 'https://images.unsplash.com/photo-1577214459173-ee34fm7a0807?q=80&w=100&auto=format&fit=crop',
                    }
                }

                return null
            },
        }),
    ],

    // 4. Các hàm xử lý trung gian (Callbacks)
    callbacks: {
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
            const isProtectedRoute = nextUrl.pathname.startsWith('/profile') ||
                nextUrl.pathname.startsWith('/favorites')

            if (isProtectedRoute) {
                if (isLoggedIn) return true
                return false // Đá về trang login
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