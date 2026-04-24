'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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
    if (res?.error) setError('Email hoặc mật khẩu không đúng.')
    else window.location.href = '/'
  }

  const handleGoogle = () => {
    signIn('google', { callbackUrl: '/' })
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#F5EDE3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          background: '#fff',
          borderRadius: 20,
          padding: '48px 40px',
          width: '100%',
          maxWidth: 420,
          boxShadow: '0 8px 48px rgba(75,46,26,0.10)',
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <p style={{ color: '#D97706', fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 6 }}>
            FlavorNest Vietnam
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 28,
              color: '#2D1A0E',
              margin: 0,
            }}
          >
            Chào mừng trở lại
          </h1>
          <p style={{ color: '#9B7B60', fontSize: 14, marginTop: 8 }}>
            Đăng nhập để lưu công thức yêu thích
          </p>
        </div>

        {/* Google */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGoogle}
          style={{
            width: '100%',
            padding: '12px 0',
            borderRadius: 12,
            border: '1.5px solid #E8D9C8',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            fontSize: 15,
            color: '#2D1A0E',
            cursor: 'pointer',
            marginBottom: 24,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Đăng nhập với Google
        </motion.button>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 24,
          }}
        >
          <div style={{ flex: 1, height: 1, background: '#E8D9C8' }} />
          <span style={{ color: '#B09080', fontSize: 13 }}>hoặc</span>
          <div style={{ flex: 1, height: 1, background: '#E8D9C8' }} />
        </div>

        {/* Form */}
        <form onSubmit={handleCredentials} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ fontSize: 13, color: '#4B2E1A', fontWeight: 600, display: 'block', marginBottom: 6 }}>
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="ban@example.com"
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: 10,
                border: '1.5px solid #E8D9C8',
                fontSize: 15,
                outline: 'none',
                fontFamily: "'DM Sans', sans-serif",
                color: '#2D1A0E',
                background: '#FDFAF7',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div>
            <label style={{ fontSize: 13, color: '#4B2E1A', fontWeight: 600, display: 'block', marginBottom: 6 }}>
              Mật khẩu
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: 10,
                border: '1.5px solid #E8D9C8',
                fontSize: 15,
                outline: 'none',
                fontFamily: "'DM Sans', sans-serif",
                color: '#2D1A0E',
                background: '#FDFAF7',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: '#DC2626', fontSize: 13, margin: 0, textAlign: 'center' }}
            >
              {error}
            </motion.p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '13px 0',
              borderRadius: 12,
              border: 'none',
              background: loading ? '#C9A07A' : '#4B2E1A',
              color: '#fff',
              fontSize: 16,
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              marginTop: 4,
              transition: 'background 0.2s',
            }}
          >
            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </motion.button>
        </form>

        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 14, color: '#9B7B60' }}>
          Chưa có tài khoản?{' '}
          <a href="/auth/register" style={{ color: '#D97706', fontWeight: 600, textDecoration: 'none' }}>
            Đăng ký
          </a>
        </p>
      </motion.div>
    </main>
  )
}
