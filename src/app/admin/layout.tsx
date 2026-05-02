// ─────────────────────────────────────────────────────────────
//  src/app/admin/layout.tsx
//  FlavorNest Vietnam — Admin layout (server-side auth gate)
// ─────────────────────────────────────────────────────────────

import { auth } from '@/auth'
import { isAdmin } from '@/lib/admin'
import { redirect } from 'next/navigation'

export const metadata = {
    title: 'Admin | FlavorNest Vietnam',
    robots: { index: false, follow: false },
}

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth()

    if (!session?.user) {
        redirect('/auth/signin?callbackUrl=/admin/users')
    }

    if (!isAdmin(session.user.email)) {
        redirect('/')
    }

    return (
        <main
            style={{
                minHeight: '100vh',
                background: '#F5EDE3',
                fontFamily: "'DM Sans', sans-serif",
                padding: '120px 24px 48px',
            }}
        >
            {children}
        </main>
    )
}