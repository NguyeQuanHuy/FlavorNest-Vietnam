// ─────────────────────────────────────────────────────────────────────────────
//  lib/validations/auth.ts
//  FlavorNest Vietnam — Zod validation schemas for auth forms
//  Used by React Hook Form for client-side + server-side validation
// ─────────────────────────────────────────────────────────────────────────────

import { z } from 'zod'

// ── Re-usable field rules ──────────────────────────────────────────────────
const emailField = z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')

const passwordField = z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Must contain at least one number')

// ── Login schema ───────────────────────────────────────────────────────────
export const loginSchema = z.object({
    email: emailField,
    password: z.string().min(1, 'Password is required'),
    rememberMe: z.boolean().optional().default(false),
})

export type LoginFormData = z.infer<typeof loginSchema>

// ── Register schema ────────────────────────────────────────────────────────
export const registerSchema = z
    .object({
        name: z
            .string()
            .min(2, 'Name must be at least 2 characters')
            .max(50, 'Name must be under 50 characters')
            .regex(/^[a-zA-ZÀ-ỹ\s]+$/, 'Name can only contain letters and spaces'),
        email: emailField,
        password: passwordField,
        confirmPassword: z.string().min(1, 'Please confirm your password'),
        agreeToTerms: z.boolean().refine(v => v === true, 'You must agree to the Terms of Service'),
    })
    .refine(data => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    })

export type RegisterFormData = z.infer<typeof registerSchema>

// ── Forgot-password schema ─────────────────────────────────────────────────
export const forgotPasswordSchema = z.object({
    email: emailField,
})

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>