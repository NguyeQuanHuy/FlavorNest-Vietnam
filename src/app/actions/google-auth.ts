'use server'

/**
 * FlavorNest Vietnam — Google Auth Server Action
 * src/app/actions/google-auth.ts
 *
 * Tách riêng vì signIn() của NextAuth v5 chỉ chạy được ở Server
 */

import { signIn } from '@/auth'

export async function googleSignIn() {
    await signIn('google', { redirectTo: '/?welcome=1' })
}
