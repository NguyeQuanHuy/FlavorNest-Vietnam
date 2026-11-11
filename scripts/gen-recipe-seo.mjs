// scripts/gen-recipe-seo.mjs
// Runs before every build (see package.json "build").
// 1. Reads every src/app/recipes/<slug>/page.tsx → title / subtitle / heroImage
// 2. Adds shortDescription from src/data/recipes.ts when available
// 3. Writes src/data/recipe-seo.generated.json
// 4. Creates a tiny layout.tsx (metadata only) in any recipe folder that has none
//    → every recipe gets its own <title>, description, canonical and OG image.
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const RECIPES_DIR = path.join(ROOT, 'src/app/recipes')
const OUT = path.join(ROOT, 'src/data/recipe-seo.generated.json')
const LISTING = new Set(['north', 'central', 'south', 'drinks', 'desserts', 'breakfast', 'main-dishes', 'street-food'])

const str = key => new RegExp(`\\b${key}:\\s*(?:'((?:[^'\\\\]|\\\\.)*)'|"((?:[^"\\\\]|\\\\.)*)"|\`((?:[^\`\\\\]|\\\\.)*)\`)`, 's')
const pick = (src, key) => {
    const m = src.match(str(key))
    if (!m) return ''
    return (m[1] ?? m[2] ?? m[3] ?? '').replace(/\\(['"`\\])/g, '$1').replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim()
}
const hasVi = s => /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(s)
const clip = (s, n = 155) => {
    if (s.length <= n) return s
    const cut = s.slice(0, n)
    return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:—–-]$/, '').trim() + '…'
}

// shortDescription per slug from src/data/recipes.ts
const shortDesc = {}
try {
    const data = fs.readFileSync(path.join(ROOT, 'src/data/recipes.ts'), 'utf8')
    const re = /slug:\s*['"]([a-z0-9-]+)['"][\s\S]*?shortDescription:\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`)/g
    let m
    while ((m = re.exec(data))) {
        if (!(m[1] in shortDesc)) shortDesc[m[1]] = (m[2] ?? m[3] ?? m[4] ?? '').replace(/\\(['"`\\])/g, '$1').trim()
    }
} catch { /* optional */ }

const seo = {}
let created = 0
for (const slug of fs.readdirSync(RECIPES_DIR).sort()) {
    if (slug.startsWith('[') || slug.startsWith('_') || LISTING.has(slug)) continue
    const dir = path.join(RECIPES_DIR, slug)
    const pagePath = path.join(dir, 'page.tsx')
    if (!fs.existsSync(pagePath)) continue
    const src = fs.readFileSync(pagePath, 'utf8')

    let title = pick(src, 'title')
    const subtitle = pick(src, 'subtitle')
    const image = pick(src, 'heroImage')
    if (!title) continue

    // add the Vietnamese name when the English title lacks it ("Bánh Canh Chả Cá — …" → "(Bánh Canh Chả Cá)")
    if (!hasVi(title)) {
        const head = subtitle.split(/\s[—–-]\s/)[0].trim()
        if (head && head !== subtitle && hasVi(head) && head.length <= 40) title = `${title} (${head})`
    }
    if (!/recipe/i.test(title)) title += ' Recipe'

    const sd = shortDesc[slug] ?? ''
    // page subtitle is the curated one-liner; recipes.ts shortDescription is often step 1 → fallback only
    const description = clip(subtitle.length >= 60 ? subtitle : sd.length >= 60 ? sd : subtitle || sd || `How to make ${title} — authentic Vietnamese home cooking.`)

    seo[slug] = { title, description, ...(image ? { image } : {}) }

    const layoutPath = path.join(dir, 'layout.tsx')
    if (!fs.existsSync(layoutPath)) {
        fs.writeFileSync(layoutPath,
            `import { recipeMetadata } from '../_lib/recipe-seo';\n\n` +
            `export const metadata = recipeMetadata('${slug}');\n\n` +
            `export default function Layout({ children }: { children: React.ReactNode }) {\n    return children;\n}\n`)
        created++
    }
}

fs.writeFileSync(OUT, JSON.stringify(seo, null, 1) + '\n')
// slugs that have a real page → recipes.ts hides cards of recipes without one
fs.writeFileSync(path.join(ROOT, 'src/data/recipe-pages.generated.json'), JSON.stringify(Object.keys(seo)) + '\n')
console.log(`[recipe-seo] ${Object.keys(seo).length} recipes → ${path.relative(ROOT, OUT)} · ${created} layout(s) created`)
