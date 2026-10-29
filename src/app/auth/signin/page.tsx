'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, Loader2, ArrowRight } from 'lucide-react'

const inputClass =
  'w-full rounded-xl border border-[#E8D9C8] bg-[#FDFAF7] py-3.5 pl-11 pr-4 text-[15px] text-[#2D1A0E] outline-none transition placeholder:text-[#B8A08A] focus:border-[#D97706] focus:bg-white focus:ring-4 focus:ring-[#D97706]/10'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPw, setShowPw] = useState(false)

  const handleCredentials = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })
    setLoading(false)
    if (res?.error) setError('Invalid email or password.')
    else window.location.href = '/'
  }

  const handleGoogle = () => {
    signIn('google', { callbackUrl: '/' })
  }

  return (
    <main
      className="flex min-h-screen items-center justify-center px-4 pb-10 pt-[92px] min-[641px]:pt-[120px]"
      style={{ background: '#F5EDE3', fontFamily: "'DM Sans', sans-serif" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="grid w-full max-w-[1040px] overflow-hidden lg:grid-cols-[1.05fr_1fr]"
        style={{ background: '#fff', borderRadius: 28, boxShadow: '0 24px 80px -24px rgba(75,46,26,0.25)' }}
      >
        {/* ── Left: food visual (desktop only) ── */}
        <div className="relative hidden min-h-[600px] lg:block">
          <Image
            src="/images/recipes/pho-bo-ha-noi.jpg"
            alt="A steaming bowl of Hanoi beef pho"
            fill
            priority
            sizes="(max-width: 1024px) 0px, 540px"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(29,16,8,0.92) 0%, rgba(29,16,8,0.35) 50%, rgba(29,16,8,0.05) 100%)' }}
          />
          <div className="absolute inset-x-0 bottom-0 p-10">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.5 }}>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-8" style={{ background: '#D97706' }} />
                <span className="text-[11px] font-bold uppercase" style={{ color: '#F59E0B', letterSpacing: '0.18em' }}>
                  Your kitchen, saved
                </span>
              </div>
              <p className="text-[30px] font-bold leading-[1.15]" style={{ fontFamily: "'Playfair Display', serif", color: '#fff' }}>
                Every recipe you love, <em style={{ color: '#F59E0B' }}>one tap away.</em>
              </p>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed" style={{ color: 'rgba(245,237,227,0.75)' }}>
                Save favorites, track your cooking and pick up right where you left off.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="flex flex-col justify-center px-6 py-10 sm:px-12 sm:py-14">
          <div className="mx-auto w-full max-w-[380px]">
            <p className="mb-2 text-[11px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.18em' }}>
              Welcome back
            </p>
            <h1 className="text-[34px] font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#2D1A0E' }}>
              Sign in
            </h1>
            <p className="mt-2 text-[15px]" style={{ color: '#8A6E58' }}>
              Log in to save your favorite recipes.
            </p>

            {/* Google */}
            <motion.button
              type="button"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogle}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border border-[#E8D9C8] bg-white py-3.5 text-[15px] font-medium transition-colors hover:border-[#D9C3AC] hover:bg-[#FDFAF7]"
              style={{ color: '#2D1A0E' }}
            >
              <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden>
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              Continue with Google
            </motion.button>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1" style={{ background: '#EFE3D5' }} />
              <span className="text-[12px] uppercase" style={{ color: '#B09080', letterSpacing: '0.12em' }}>or with email</span>
              <div className="h-px flex-1" style={{ background: '#EFE3D5' }} />
            </div>

            {/* Form */}
            <form onSubmit={handleCredentials} className="flex flex-col gap-4" noValidate={false}>
              <div>
                <label htmlFor="signin-email" className="mb-1.5 block text-[13px] font-semibold" style={{ color: '#4B2E1A' }}>
                  Email
                </label>
                <div className="relative">
                  <Mail size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#B8A08A' }} aria-hidden />
                  <input
                    id="signin-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="signin-password" className="mb-1.5 block text-[13px] font-semibold" style={{ color: '#4B2E1A' }}>
                  Password
                </label>
                <div className="relative">
                  <Lock size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#B8A08A' }} aria-hidden />
                  <input
                    id="signin-password"
                    type={showPw ? 'text' : 'password'}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Your password"
                    className={`${inputClass} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(v => !v)}
                    aria-label={showPw ? 'Hide password' : 'Show password'}
                    className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg transition-colors hover:bg-[#F5EDE3]"
                    style={{ color: '#8A6E58' }}
                  >
                    {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.p
                    role="alert"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="rounded-xl px-4 py-3 text-[13px] font-medium"
                    style={{ background: '#FEF2F2', color: '#B91C1C', border: '1px solid #FECACA' }}
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={loading ? undefined : { y: -1 }}
                whileTap={loading ? undefined : { scale: 0.98 }}
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-[15px] font-semibold text-white transition-colors"
                style={{
                  background: loading ? '#B98A5E' : '#2D1A0E',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  boxShadow: '0 10px 24px -10px rgba(45,26,14,0.6)',
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#D97706' }}
                onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#2D1A0E' }}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Logging in…
                  </>
                ) : (
                  <>
                    Log in <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>
            </form>

            <p className="mt-8 text-center text-[14px]" style={{ color: '#8A6E58' }}>
              New to FlavorNest?{' '}
              <Link href="/auth/register" className="font-semibold transition-colors hover:underline" style={{ color: '#D97706' }}>
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
