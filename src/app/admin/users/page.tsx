// ─────────────────────────────────────────────────────────────
//  src/app/admin/users/page.tsx
//  FlavorNest Vietnam — Admin: list all users
// ─────────────────────────────────────────────────────────────

import { getAllUsersAction } from '@/app/actions/users'
import { UsersTable } from './UsersTable'

export default async function AdminUsersPage() {
    const result = await getAllUsersAction()

    return (
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <header style={{ marginBottom: 32 }}>
                <p
                    style={{
                        color: '#D97706',
                        fontSize: 13,
                        letterSpacing: 3,
                        textTransform: 'uppercase',
                        margin: 0,
                    }}
                >
                    Admin Dashboard
                </p>
                <h1
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 36,
                        color: '#2D1A0E',
                        margin: '4px 0 0',
                    }}
                >
                    Users
                </h1>
                <p style={{ color: '#9B7B60', fontSize: 14, marginTop: 8 }}>
                    Total: {result.ok ? result.users.length : 0} registered users
                </p>
            </header>

            {result.ok ? (
                <UsersTable users={result.users} />
            ) : (
                <p style={{ color: '#DC2626' }}>
                    Error loading users: {result.error}
                </p>
            )}
        </div>
    )
}