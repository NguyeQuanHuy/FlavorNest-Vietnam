// ─────────────────────────────────────────────────────────────
//  src/lib/admin.ts
//  FlavorNest Vietnam — Admin whitelist
// ─────────────────────────────────────────────────────────────

export const ADMIN_EMAILS = [
    'teoburi2001@gmail.com',
] as const

export function isAdmin(email: string | null | undefined): boolean {
    if (!email) return false
    return ADMIN_EMAILS.includes(email.toLowerCase() as (typeof ADMIN_EMAILS)[number])
}