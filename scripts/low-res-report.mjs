// node scripts/low-res-report.mjs → docs/low-res-images.csv
// Lists recipe photos narrower than 700px, most visible recipes first.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const ROOT = process.cwd()
const PUB = path.join(ROOT, 'public')
const MIN = 700
const items = []
for (const f of fs.readdirSync(path.join(ROOT, 'src/data')).filter(f => /^recipes.*\.ts$/.test(f))) {
  const s = fs.readFileSync(path.join(ROOT, 'src/data', f), 'utf8')
  for (const block of s.split(/\n\s*\{\s*\n|\{ slug:/)) {
    const slug = block.match(/slug:\s*'([^']+)'/)?.[1] || block.match(/^\s*'([^']+)'/)?.[1]
    const image = block.match(/image:\s*'([^']+)'/)?.[1]
    const title = block.match(/title:\s*['"`]([^'"`]+)['"`]/)?.[1]
    if (slug && image && image.startsWith('/')) items.push({ slug, title: title || '', image })
  }
}
const seen = new Set(), rows = []
for (const it of items) {
  if (seen.has(it.slug)) continue
  seen.add(it.slug)
  const file = path.join(PUB, it.image)
  if (!fs.existsSync(file)) { rows.push({ ...it, width: 0, height: 0, problem: 'missing file' }); continue }
  const m = await sharp(file).metadata()
  if (m.width < MIN) rows.push({ ...it, width: m.width, height: m.height, problem: 'too small' })
}
rows.sort((a, b) => (a.problem === b.problem ? a.width - b.width : a.problem === 'too small' ? -1 : 1))
fs.mkdirSync(path.join(ROOT, 'docs'), { recursive: true })
const csv = ['slug,title,image,width,height,problem', ...rows.map(r => [r.slug, `"${r.title.replace(/"/g, '""')}"`, r.image, r.width, r.height, r.problem].join(','))].join('\n')
fs.writeFileSync(path.join(ROOT, 'docs/low-res-images.csv'), '﻿' + csv)
console.log('too small:', rows.filter(r => r.problem === 'too small').length, '| missing:', rows.filter(r => r.problem === 'missing file').length, '→ docs/low-res-images.csv')
