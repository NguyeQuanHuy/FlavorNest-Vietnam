// ─────────────────────────────────────────────────────────────────────────────
//  src/lib/site-translate.ts
//  Whole-site machine translation via Google's website translator.
//  Privacy: the Google script is only loaded AFTER a visitor picks a language
//  (nothing is sent to Google for visitors who stay in English).
//  The choice is stored in the `googtrans` cookie that Google itself reads.
// ─────────────────────────────────────────────────────────────────────────────

export interface SiteLang { code: string; native: string; english: string }

export const SITE_LANGS: SiteLang[] = [
    { code: 'en', native: 'English', english: 'Original' },
    { code: 'vi', native: 'Tiếng Việt', english: 'Vietnamese' },
    { code: 'de', native: 'Deutsch', english: 'German' },
    { code: 'fr', native: 'Français', english: 'French' },
    { code: 'es', native: 'Español', english: 'Spanish' },
    { code: 'it', native: 'Italiano', english: 'Italian' },
    { code: 'ja', native: '日本語', english: 'Japanese' },
    { code: 'ko', native: '한국어', english: 'Korean' },
    { code: 'zh-CN', native: '中文', english: 'Chinese' },
    { code: 'th', native: 'ไทย', english: 'Thai' },
]

const COOKIE = 'googtrans'

export function currentSiteLang(): string {
    if (typeof document === 'undefined') return 'en'
    const m = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]+\/([^;]+)/)
    const code = m ? decodeURIComponent(m[1]) : 'en'
    return SITE_LANGS.some(l => l.code === code) ? code : 'en'
}

function writeCookie(value: string, maxAge: number) {
    const host = location.hostname
    const base = `${COOKIE}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`
    document.cookie = base
    // Google may also have set it on the parent domain — clear/set both
    if (host.includes('.') && !/^\d+\.\d+\.\d+\.\d+$/.test(host)) document.cookie = `${base}; domain=${host}`
}

export function setSiteLang(code: string) {
    if (code === 'en') writeCookie('', 0)
    else writeCookie(`/en/${code}`, 60 * 60 * 24 * 365)
    location.reload()
}
