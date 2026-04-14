'use client'

/**
 * FlavorNest Vietnam — Sign Up Page
 * app/auth/signup/page.tsx
 *
 * Stack: React Hook Form + Zod + Framer Motion
 * Design: Warm dark overlay, glassmorphism card — đồng bộ Login page
 */

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Validation Schema ────────────────────────────────────────────────────────
const signUpSchema = z
    .object({
        displayName: z
            .string()
            .max(40, 'Tên tối đa 40 ký tự')
            .optional()
            .or(z.literal('')),
        email: z
            .string()
            .min(1, 'Vui lòng nhập email')
            .email('Email không hợp lệ'),
        password: z
            .string()
            .min(6, 'Mật khẩu tối thiểu 6 ký tự')
            .max(72, 'Mật khẩu tối đa 72 ký tự'),
        confirmPassword: z.string().min(1, 'Vui lòng xác nhận mật khẩu'),
    })
    .refine(data => data.password === data.confirmPassword, {
        message: 'Mật khẩu xác nhận không khớp',
        path: ['confirmPassword'],
    })

type SignUpForm = z.infer<typeof signUpSchema>

// ─── Icons (inline SVG — no extra deps) ──────────────────────────────────────
const IconMail = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
)
const IconLock = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
)
const IconUser = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
)
const IconEye = ({ off }: { off?: boolean }) => off ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" />
    </svg>
) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
)
const IconCheck = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
)

// ─── Field Component ──────────────────────────────────────────────────────────
interface FieldProps {
    label: string
    error?: string
    icon: React.ReactNode
    rightSlot?: React.ReactNode
    children: React.ReactNode
    optional?: boolean
}

function Field({ label, error, icon, rightSlot, children, optional }: FieldProps) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.02em' }}>
                    {label}
                </label>
                {optional && (
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>Tùy chọn</span>
                )}
            </div>
            <div style={{ position: 'relative' }}>
                {/* Left icon */}
                <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: error ? '#FCA5A5' : 'rgba(255,255,255,0.35)', pointerEvents: 'none', display: 'flex' }}>
                    {icon}
                </span>
                {children}
                {/* Right slot (eye toggle) */}
                {rightSlot && (
                    <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', display: 'flex' }}>
                        {rightSlot}
                    </span>
                )}
            </div>
            {/* Inline error */}
            <AnimatePresence>
                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -4, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -4, height: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ fontSize: 12, color: '#FCA5A5', margin: 0, display: 'flex', alignItems: 'center', gap: 5 }}
                    >
                        <span>⚠</span> {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SignUpPage() {
    const router = useRouter()
    const [showPw, setShowPw] = useState(false)
    const [showCpw, setShowCpw] = useState(false)
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [apiError, setApiError] = useState('')

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignUpForm>({
        resolver: zodResolver(signUpSchema),
        mode: 'onBlur',
    })

    const passwordValue = watch('password', '')

    // Password strength indicator
    const pwStrength = (() => {
        if (!passwordValue) return 0
        let score = 0
        if (passwordValue.length >= 6) score++
        if (passwordValue.length >= 10) score++
        if (/[A-Z]/.test(passwordValue)) score++
        if (/[0-9]/.test(passwordValue)) score++
        if (/[^A-Za-z0-9]/.test(passwordValue)) score++
        return score
    })()

    const pwLabel = ['', 'Yếu', 'Trung bình', 'Khá', 'Mạnh', 'Rất mạnh'][pwStrength] || ''
    const pwColor = ['', '#ef4444', '#f59e0b', '#eab308', '#22c55e', '#10b981'][pwStrength] || ''

    // ── Submit ──────────────────────────────────────────────────────────────────
    const onSubmit = async (data: SignUpForm) => {
        setStatus('loading')
        setApiError('')

        try {
            // ── Replace with your real API call ──────────────────────────────────
            // const res = await fetch('/api/auth/register', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({
            //     email: data.email,
            //     password: data.password,
            //     name: data.displayName || '',
            //   }),
            // })
            // if (!res.ok) {
            //   const err = await res.json()
            //   throw new Error(err.message || 'Đăng ký thất bại')
            // }
            // ─────────────────────────────────────────────────────────────────────

            // Simulated success (remove when real API ready)
            await new Promise(r => setTimeout(r, 1400))

            setStatus('success')
            // Redirect after welcome animation
            setTimeout(() => router.push('/recipes'), 2200)

        } catch (err: unknown) {
            setStatus('error')
            setApiError(err instanceof Error ? err.message : 'Đã có lỗi xảy ra. Vui lòng thử lại.')
        }
    }

    // Input base style
    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '13px 14px 13px 44px',
        background: 'rgba(255,255,255,0.07)',
        border: '1.5px solid rgba(255,255,255,0.12)',
        borderRadius: 14,
        color: 'white',
        fontSize: 14,
        fontFamily: 'inherit',
        outline: 'none',
        transition: 'border-color 0.2s, background 0.2s',
    }

    return (
        <main style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Sans', system-ui, sans-serif", padding: '100px 16px 40px' }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');
        * { box-sizing: border-box; }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 100px rgba(75,46,26,0.6) inset !important;
          -webkit-text-fill-color: white !important;
        }
        .fn-input:focus {
          border-color: rgba(217,119,6,0.7) !important;
          background: rgba(255,255,255,0.1) !important;
        }
        .fn-input.error-field {
          border-color: rgba(252,165,165,0.5) !important;
        }
        .eye-btn {
          background: none; border: none; cursor: pointer;
          color: rgba(255,255,255,0.38); padding: 2px;
          transition: color 0.15s; display: flex; align-items: center;
        }
        .eye-btn:hover { color: rgba(255,255,255,0.7); }
      `}</style>

            {/* Background image */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
                <Image
                    src="https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1800&q=80"
                    alt="Vietnamese food background"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
                    quality={85}
                    priority
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(45,26,14,0.92) 0%, rgba(75,46,26,0.85) 100%)' }} />
            </div>

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                style={{
                    position: 'relative', zIndex: 1,
                    width: '100%', maxWidth: 420,
                    background: 'rgba(30,16,6,0.72)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 28,
                    padding: '36px 32px 32px',
                    boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
                }}
            >
                {/* ── SUCCESS STATE ── */}
                <AnimatePresence>
                    {status === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{
                                position: 'absolute', inset: 0, borderRadius: 28,
                                background: 'rgba(20,10,4,0.96)',
                                display: 'flex', flexDirection: 'column',
                                alignItems: 'center', justifyContent: 'center',
                                gap: 16, padding: 32, textAlign: 'center', zIndex: 10,
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 20 }}
                                style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, #D97706, #F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
                            >
                                <IconCheck />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: 'white', margin: '0 0 8px' }}>
                                    Chào mừng đến FlavorNest! 🎉
                                </p>
                                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: 0 }}>
                                    Tài khoản của bạn đã được tạo thành công. Đang chuyển hướng đến trang công thức...
                                </p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── HEADER ── */}
                <div style={{ textAlign: 'center', marginBottom: 28 }}>
                    {/* Logo icon */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #D97706, #F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 26 }}
                    >
                        🍜
                    </motion.div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: 'white', margin: '0 0 6px' }}>
                        Tạo tài khoản
                    </h1>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', margin: 0 }}>
                        Tham gia cộng đồng FlavorNest Vietnam
                    </p>
                </div>

                {/* ── FORM ── */}
                <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

                    {/* Display name */}
                    <Field label="Tên hiển thị" icon={<IconUser />} error={errors.displayName?.message} optional>
                        <input
                            {...register('displayName')}
                            className={`fn-input ${errors.displayName ? 'error-field' : ''}`}
                            style={inputStyle}
                            placeholder="Nguyễn Văn A"
                            autoComplete="name"
                        />
                    </Field>

                    {/* Email */}
                    <Field label="Email" icon={<IconMail />} error={errors.email?.message}>
                        <input
                            {...register('email')}
                            className={`fn-input ${errors.email ? 'error-field' : ''}`}
                            style={inputStyle}
                            type="email"
                            placeholder="chef@flavornest.vn"
                            autoComplete="email"
                        />
                    </Field>

                    {/* Password */}
                    <Field
                        label="Mật khẩu"
                        icon={<IconLock />}
                        error={errors.password?.message}
                        rightSlot={
                            <button type="button" className="eye-btn" onClick={() => setShowPw(v => !v)} aria-label="Toggle password visibility">
                                <IconEye off={!showPw} />
                            </button>
                        }
                    >
                        <input
                            {...register('password')}
                            className={`fn-input ${errors.password ? 'error-field' : ''}`}
                            style={{ ...inputStyle, paddingRight: 44 }}
                            type={showPw ? 'text' : 'password'}
                            placeholder="Tối thiểu 6 ký tự"
                            autoComplete="new-password"
                        />
                    </Field>

                    {/* Password strength bar */}
                    {passwordValue && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            style={{ marginTop: -8 }}
                        >
                            <div style={{ display: 'flex', gap: 4, marginBottom: 4 }}>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} style={{ flex: 1, height: 3, borderRadius: 100, background: i <= pwStrength ? pwColor : 'rgba(255,255,255,0.1)', transition: 'background 0.3s' }} />
                                ))}
                            </div>
                            <p style={{ fontSize: 11, color: pwColor, margin: 0, textAlign: 'right', fontWeight: 600 }}>{pwLabel}</p>
                        </motion.div>
                    )}

                    {/* Confirm password */}
                    <Field
                        label="Xác nhận mật khẩu"
                        icon={<IconLock />}
                        error={errors.confirmPassword?.message}
                        rightSlot={
                            <button type="button" className="eye-btn" onClick={() => setShowCpw(v => !v)} aria-label="Toggle confirm password visibility">
                                <IconEye off={!showCpw} />
                            </button>
                        }
                    >
                        <input
                            {...register('confirmPassword')}
                            className={`fn-input ${errors.confirmPassword ? 'error-field' : ''}`}
                            style={{ ...inputStyle, paddingRight: 44 }}
                            type={showCpw ? 'text' : 'password'}
                            placeholder="Nhập lại mật khẩu"
                            autoComplete="new-password"
                        />
                    </Field>

                    {/* API Error */}
                    <AnimatePresence>
                        {status === 'error' && apiError && (
                            <motion.div
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 12, padding: '10px 14px', fontSize: 13, color: '#FCA5A5', display: 'flex', alignItems: 'center', gap: 8 }}
                            >
                                <span>⚠️</span> {apiError}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Submit */}
                    <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            marginTop: 4,
                            width: '100%', padding: '14px',
                            background: status === 'loading'
                                ? 'rgba(217,119,6,0.6)'
                                : 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
                            border: 'none', borderRadius: 14,
                            color: 'white', fontSize: 15, fontWeight: 700,
                            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                            fontFamily: 'inherit', letterSpacing: '0.02em',
                            transition: 'opacity 0.2s',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        }}
                    >
                        {status === 'loading' ? (
                            <>
                                <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                                    style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%' }}
                                />
                                Đang tạo tài khoản...
                            </>
                        ) : (
                            'Đăng Ký Miễn Phí 🎉'
                        )}
                    </motion.button>
                </form>

                {/* ── DIVIDER ── */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '20px 0' }}>
                    <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}>hoặc</span>
                    <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
                </div>

                {/* ── GOOGLE SIGN IN (placeholder) ── */}
                <button
                    type="button"
                    style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 14, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'background 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                    Tiếp tục với Google
                </button>

                {/* ── FOOTER ── */}
                <p style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: '20px 0 0' }}>
                    Đã có tài khoản?{' '}
                    <Link href="/login" style={{ color: '#D97706', fontWeight: 600, textDecoration: 'none' }}>
                        Đăng nhập
                    </Link>
                </p>

                <p style={{ textAlign: 'center', margin: '12px 0 0' }}>
                    <Link href="/" style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5, transition: 'color 0.15s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
                    >
                        ← Quay lại trang chủ
                    </Link>
                </p>
            </motion.div>
        </main>
    )
}