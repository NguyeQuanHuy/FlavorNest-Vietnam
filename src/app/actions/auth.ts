'use server'

import { signIn, signOut } from '@/auth'
import { AuthError } from 'next-auth'

export interface ActionResult {
    success: boolean
    message: string
}

// ── Lệnh đăng nhập bằng Email/Mật khẩu ───────────────────────────────────────
export async function loginWithCredentials(
    email: string,
    password: string,
    callbackUrl = '/',
): Promise<ActionResult> {
    try {
        // Gọi hàm signIn của NextAuth
        await signIn('credentials', {
            email,
            password,
            redirectTo: callbackUrl
        })
        return { success: true, message: 'Đăng nhập thành công! Đang chuyển hướng...' }
    } catch (err) {
        if (err instanceof AuthError) {
            switch (err.type) {
                case 'CredentialsSignin':
                    return { success: false, message: 'Email hoặc mật khẩu không chính xác.' }
                case 'CallbackRouteError':
                    return { success: false, message: 'Lỗi kết nối. Vui lòng thử lại.' }
                default:
                    return { success: false, message: 'Đã xảy ra lỗi không xác định.' }
            }
        }
        // Cực kỳ quan trọng: re-throw lỗi redirect của Next.js
        throw err
    }
}

// ── Lệnh đăng xuất ────────────────────────────────────────────────────────────
export async function logout() {
    await signOut({ redirectTo: '/' })
}

// ── Các hàm phụ trợ khác (nếu cần dùng Google/Facebook) ────────────────────────
export async function signInWithGoogle(callbackUrl = '/') {
    await signIn('google', { redirectTo: callbackUrl })
}