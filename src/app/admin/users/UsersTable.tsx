// ─────────────────────────────────────────────────────────────
//  src/app/admin/users/UsersTable.tsx
//  FlavorNest Vietnam — Client component: users table + delete
// ─────────────────────────────────────────────────────────────

'use client'

import { useState, useTransition } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { deleteUserAction } from '@/app/actions/users'

interface UserRow {
    id: string
    name: string | null
    email: string
    image: string | null
    createdAt: Date | string
    _count: { favorites: number }
}

export function UsersTable({ users }: { users: UserRow[] }) {
    const router = useRouter()
    const [pending, startTransition] = useTransition()
    const [confirmId, setConfirmId] = useState<string | null>(null)
    const [error, setError] = useState<string>('')

    const handleDelete = (userId: string) => {
        setError('')
        startTransition(async () => {
            const res = await deleteUserAction(userId)
            if (!res.ok) {
                if (res.error === 'CANNOT_DELETE_SELF') {
                    setError('Bạn không thể tự xoá tài khoản admin của mình.')
                } else if (res.error === 'FORBIDDEN') {
                    setError('Không có quyền xoá user.')
                } else {
                    setError('Lỗi khi xoá user. Thử lại.')
                }
                setConfirmId(null)
                return
            }
            setConfirmId(null)
            router.refresh()
        })
    }

    const formatDate = (d: Date | string) => {
        const date = typeof d === 'string' ? new Date(d) : d
        return date.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
    }

    const getInitials = (name: string | null, email: string) => {
        const source = name || email
        return source.slice(0, 2).toUpperCase()
    }

    if (users.length === 0) {
        return (
            <div
                style={{
                    background: '#fff',
                    padding: 48,
                    borderRadius: 16,
                    textAlign: 'center',
                    color: '#9B7B60',
                }}
            >
                Chưa có user nào đăng ký.
            </div>
        )
    }

    return (
        <>
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{
                            background: '#FEF2F2',
                            border: '1px solid #FCA5A5',
                            color: '#DC2626',
                            padding: '12px 16px',
                            borderRadius: 12,
                            fontSize: 14,
                            marginBottom: 16,
                        }}
                    >
                        {error}
                    </motion.div>
                )}
            </AnimatePresence>

            <div
                style={{
                    background: '#fff',
                    borderRadius: 16,
                    overflow: 'hidden',
                    boxShadow: '0 4px 24px rgba(75,46,26,0.06)',
                }}
            >
                <table
                    style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: 14,
                    }}
                >
                    <thead>
                        <tr
                            style={{
                                background: '#FAF5EE',
                                textAlign: 'left',
                                color: '#4B2E1A',
                                fontWeight: 600,
                            }}
                        >
                            <th style={{ padding: '14px 20px' }}>User</th>
                            <th style={{ padding: '14px 20px' }}>Email</th>
                            <th style={{ padding: '14px 20px' }}>Joined</th>
                            <th style={{ padding: '14px 20px', textAlign: 'center' }}>
                                Favorites
                            </th>
                            <th
                                style={{ padding: '14px 20px', textAlign: 'right' }}
                            >
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u => (
                            <tr
                                key={u.id}
                                style={{
                                    borderTop: '1px solid #F0E6D9',
                                    color: '#2D1A0E',
                                }}
                            >
                                <td style={{ padding: '14px 20px' }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 12,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                background:
                                                    'linear-gradient(135deg, #D97706, #F59E0B)',
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 700,
                                                fontSize: 13,
                                                overflow: 'hidden',
                                                flexShrink: 0,
                                            }}
                                        >
                                            {u.image ? (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img
                                                    src={u.image}
                                                    alt={u.name || u.email}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                            ) : (
                                                getInitials(u.name, u.email)
                                            )}
                                        </div>
                                        <span style={{ fontWeight: 600 }}>
                                            {u.name || '—'}
                                        </span>
                                    </div>
                                </td>
                                <td style={{ padding: '14px 20px', color: '#6B5444' }}>
                                    {u.email}
                                </td>
                                <td style={{ padding: '14px 20px', color: '#6B5444' }}>
                                    {formatDate(u.createdAt)}
                                </td>
                                <td
                                    style={{
                                        padding: '14px 20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <span
                                        style={{
                                            display: 'inline-block',
                                            minWidth: 28,
                                            padding: '3px 10px',
                                            borderRadius: 999,
                                            background: '#FEF3E0',
                                            color: '#D97706',
                                            fontWeight: 700,
                                            fontSize: 12,
                                        }}
                                    >
                                        {u._count.favorites}
                                    </span>
                                </td>
                                <td
                                    style={{
                                        padding: '14px 20px',
                                        textAlign: 'right',
                                    }}
                                >
                                    {confirmId === u.id ? (
                                        <div
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: 8,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: 12,
                                                    color: '#DC2626',
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Sure?
                                            </span>
                                            <button
                                                onClick={() => handleDelete(u.id)}
                                                disabled={pending}
                                                style={{
                                                    padding: '6px 12px',
                                                    borderRadius: 8,
                                                    border: 'none',
                                                    background: '#DC2626',
                                                    color: '#fff',
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    cursor: pending
                                                        ? 'wait'
                                                        : 'pointer',
                                                    fontFamily: 'inherit',
                                                }}
                                            >
                                                {pending ? '...' : 'Yes'}
                                            </button>
                                            <button
                                                onClick={() => setConfirmId(null)}
                                                disabled={pending}
                                                style={{
                                                    padding: '6px 12px',
                                                    borderRadius: 8,
                                                    border: '1px solid #E8D9C8',
                                                    background: '#fff',
                                                    color: '#4B2E1A',
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    cursor: 'pointer',
                                                    fontFamily: 'inherit',
                                                }}
                                            >
                                                No
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => setConfirmId(u.id)}
                                            style={{
                                                padding: '6px 14px',
                                                borderRadius: 8,
                                                border: '1px solid #FCA5A5',
                                                background: '#FEF2F2',
                                                color: '#DC2626',
                                                fontSize: 12,
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                fontFamily: 'inherit',
                                            }}
                                        >
                                            Delete
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}