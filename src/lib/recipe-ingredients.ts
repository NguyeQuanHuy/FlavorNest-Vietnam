// ─────────────────────────────────────────────────────────────────────────────
//  src/lib/recipe-ingredients.ts  (server-only)
//  Reads the ingredient list straight from each recipe page at build time.
//  Supports the 3 formats used across the site:
//    1. ingredientSections: [{ title, items: [{ amount, unit, name, note }] }]
//    2. ingredients: [{ group, items: [{ name, amount: '300g', note }] }]
//    3. ingredients: [{ group, items: ['400g tapioca starch', ...] }]
// ─────────────────────────────────────────────────────────────────────────────

import fs from 'fs'
import path from 'path'

export type IngredientItem = { qty: string; name: string; note?: string }
export type IngredientSection = { title: string; items: IngredientItem[] }

const RECIPES_DIR = path.join(process.cwd(), 'src/app/recipes')
const HUBS = new Set(['breakfast', 'desserts', 'drinks', 'main-dishes', 'north', 'central', 'south', 'street-food'])
const STR = String.raw`(['"\x60])((?:\\.|(?!\1).)*)\1`

export function recipeSlugs(): string[] {
    try {
        return fs.readdirSync(RECIPES_DIR).filter(d =>
            !d.startsWith('_') && !d.startsWith('[') && !HUBS.has(d) &&
            fs.existsSync(path.join(RECIPES_DIR, d, 'page.tsx')),
        )
    } catch { return [] }
}

function field(obj: string, key: string): string | undefined {
    const m = obj.match(new RegExp(`\\b${key}\\s*:\\s*(?:${STR}|([\\d./½¼¾]+))`))
    if (!m) return undefined
    return (m[2] ?? m[3])?.replace(/\\(['"\x60])/g, '$1')
}

const clean = (s: string) => s.replace(/\s+/g, ' ').trim()
const short = (s?: string) => (s && s.length > 60 ? s.slice(0, 57).trimEnd() + '…' : s)

export function getRecipeIngredients(slug: string): IngredientSection[] {
    let src = ''
    try { src = fs.readFileSync(path.join(RECIPES_DIR, slug, 'page.tsx'), 'utf8') } catch { return [] }

    let start = src.indexOf('ingredientSections:')
    if (start < 0) start = src.search(/\bingredients\s*:\s*\[/)
    if (start < 0) return []
    let end = src.length
    for (const k of ['steps:', 'instructions:', 'method:', 'tips:']) {
        const j = src.indexOf(k, start)
        if (j > 0) end = Math.min(end, j)
    }

    const sections: IngredientSection[] = []
    let cur: IngredientSection | null = null
    const push = (it: IngredientItem) => {
        if (!cur) { cur = { title: '', items: [] }; sections.push(cur) }
        cur.items.push(it)
    }

    for (const line of src.slice(start, end).split('\n')) {
        const head = line.match(new RegExp(`^\\s*(?:title|group)\\s*:\\s*${STR}`))
        if (head && !/\bname\s*:/.test(line)) {
            cur = { title: clean(head[2]), items: [] }
            sections.push(cur)
            continue
        }
        // object item: { amount, unit, name, note }  /  { name, amount, note }
        if (/\bname\s*:/.test(line) && line.includes('{')) {
            const name = field(line, 'name')
            if (!name) continue
            const qty = [field(line, 'amount'), field(line, 'unit')].filter(Boolean).join(' ')
            push({ qty: clean(qty), name: clean(name), note: short(field(line, 'note')) })
            continue
        }
        // plain string item: "400g tapioca starch — note"
        const str = line.match(new RegExp(`^\\s*${STR}\\s*,?\\s*$`))
        if (str && cur) {
            const [main, note] = clean(str[2]).split(/\s+[—–-]\s+/, 2)
            const q = main.match(/^([\d½¼¾./–-]+\s*(?:kg|g|ml|l|L|tbsp|tsp|tablespoons?|teaspoons?|cups?|cloves?|pieces?|stalks?|bunch(?:es)?)?\.?)\s+(.*)$/i)
            push(q ? { qty: q[1], name: q[2], note: short(note) } : { qty: '', name: main, note: short(note) })
        }
    }
    return sections.filter(s => s.items.length > 0)
}
