// node scripts/fetch-ingredient-photos.mjs review   → finds candidates + small previews
// node scripts/fetch-ingredient-photos.mjs previews  → (re)download previews only
// node scripts/fetch-ingredient-photos.mjs final     → downloads chosen photos as webp + credits
// Source: Wikimedia Commons, freely licensed files only (CC0 / Public domain / CC BY / CC BY-SA).
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'public/images/ingredients')
const REVIEW = path.join(ROOT, 'scripts/_ingredient-review')
const PLAN = path.join(REVIEW, 'plan.json')
const CREDITS = path.join(ROOT, 'src/data/ingredient-photo-credits.json')
const UA = 'FlavorNestVietnam/1.0 (https://flavor-nest-vietnam.vercel.app)'
const sleep = ms => new Promise(r => setTimeout(r, ms))
const slugify = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const ITEMS = [
  ['Soy Sauce', 'soy sauce bowl'], ['Oyster Sauce', 'oyster sauce bottle'], ['Hoisin Sauce', 'hoisin sauce'], ['Shrimp Paste', 'shrimp paste mắm tôm'],
  ['Shallots', 'shallots onions'], ['Garlic', 'garlic bulbs'], ['Spring Onion / Scallion', 'scallions green onions'], ['Thai Basil', 'thai basil leaves'],
  ['Perilla / Shiso', 'perilla leaves'], ['Cilantro', 'cilantro coriander leaves'], ['Garlic Chives', 'garlic chives'], ['Vietnamese Coriander', 'Persicaria odorata'],
  ['Rice Paddy Herb', 'Limnophila aromatica'], ['Rice Vermicelli', 'rice vermicelli noodles'], ['Glass Noodles / Bean Thread', 'glass noodles'],
  ['Wide Rice Noodles (Mì Quảng)', 'mì quảng'], ['Rice Paper', 'rice paper bánh tráng'], ['Jasmine Rice', 'jasmine rice'], ['Glutinous / Sticky Rice', 'glutinous rice grains'],
  ['Rice Flour', 'rice flour'], ['Tapioca Starch', 'tapioca starch'], ['Star Anise', 'star anise'], ['Black Cardamom', 'black cardamom'], ['Annatto Seeds', 'annatto seeds'],
  ['Turmeric', 'turmeric root'], ['Coriander Seeds', 'coriander seeds'], ['Black Pepper', 'black peppercorns'], ['Pork Belly', 'pork belly raw'],
  ['Pork Bones (Marrow & Knuckle)', 'pork bones'], ['Shrimp', 'raw shrimp prawns'], ['Dried Shrimp', 'dried shrimp'], ['Dried Anchovies', 'dried anchovies'],
  ['Quail Eggs', 'quail eggs'], ['Water Spinach', 'water spinach rau muống'], ['Bitter Melon', 'bitter melon'], ['Daikon Radish', 'daikon radish'],
  ['Green Mango', 'green mango'], ['Lime', 'limes fruit'], ['Tamarind', 'tamarind pods'], ['Pineapple', 'pineapple fruit'], ['Guangdong Lime', 'calamansi'],
  ['Sweetened Condensed Milk', 'sweetened condensed milk'], ['Lard / Rendered Pork Fat', 'lard'], ['Rock Sugar', 'rock sugar'], ['Caramel Sauce (Nước Màu)', 'caramel sauce'],
  ['Agar Agar Powder', 'agar agar'], ['Pandan Leaves', 'pandan leaves'], ['Dried Lotus Seeds', 'lotus seeds'], ['Coconut Water', 'coconut water'],
]

const OK_LICENSE = /^(cc0|public domain|pd|cc by(-sa)? \d)/i
const BAD_TITLE = /drawing|illustration|diagram|map|logo|\.svg|\.gif|\.tif|herbarium|köhler|kohler|engraving|plate|botanical|stamp|label|package|packaging|advert|museum|book|scan/i

async function api(params) {
  const u = 'https://commons.wikimedia.org/w/api.php?' + new URLSearchParams({ format: 'json', origin: '*', ...params })
  for (let t = 0; t < 3; t++) {
    const r = await fetch(u, { headers: { 'User-Agent': UA } })
    if (r.status === 429) { await sleep(5000); continue }
    return r.json()
  }
  throw new Error('rate limited')
}
async function download(url, file) {
  for (let t = 0; t < 3; t++) {
    const r = await fetch(url, { headers: { 'User-Agent': UA } })
    if (r.status === 429) { await sleep(5000); continue }
    if (!r.ok) throw new Error('HTTP ' + r.status)
    fs.writeFileSync(file, Buffer.from(await r.arrayBuffer()))
    return
  }
  throw new Error('rate limited')
}
const thumb = (url0, w) => {
  const url = url0.split('?')[0]
  // https://upload.wikimedia.org/wikipedia/commons/a/ab/File.jpg → /thumb/a/ab/File.jpg/{w}px-File.jpg
  const m = url.match(/^(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons)\/(\w)\/(\w\w)\/(.+)$/)
  return m ? `${m[1]}/thumb/${m[2]}/${m[3]}/${m[4]}/${w}px-${m[4]}` : url
}
const strip = s => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

async function review() {
  fs.mkdirSync(REVIEW, { recursive: true })
  const plan = []
  for (const [name, q] of ITEMS) {
    const d = await api({ action: 'query', generator: 'search', gsrnamespace: '6', gsrsearch: `${q} filetype:bitmap`, gsrlimit: '15', prop: 'imageinfo', iiprop: 'url|size|mime|extmetadata', iiextmetadatafilter: 'LicenseShortName|Artist|ImageDescription' })
    const pages = Object.values(d.query?.pages ?? {}).sort((a, b) => a.index - b.index)
    const cands = pages.map(p => ({ title: p.title, ii: p.imageinfo?.[0] })).filter(c => c.ii &&
      /jpeg|png/.test(c.ii.mime) && c.ii.width >= 1000 && c.ii.width / c.ii.height < 2.2 && c.ii.height / c.ii.width < 1.6 &&
      OK_LICENSE.test(c.ii.extmetadata?.LicenseShortName?.value || '') && !BAD_TITLE.test(c.title))
      .slice(0, 3)
      .map(c => ({ title: c.title, url: c.ii.url, w: c.ii.width, h: c.ii.height, license: c.ii.extmetadata.LicenseShortName.value, artist: strip(c.ii.extmetadata.Artist?.value).slice(0, 80), page: c.ii.descriptionurl }))
    const slug = slugify(name)
    for (let i = 0; i < cands.length; i++) {
      try { await download(thumb(cands[i].url, 330), path.join(REVIEW, `${slug}__${i}.jpg`)) } catch (e) { cands[i].err = String(e) }
      await sleep(900)
    }
    plan.push({ name, slug, choice: cands.length ? 0 : null, cands })
    console.log(`${cands.length ? '✓' : '✗'} ${name} (${cands.length})`)
    await sleep(900)
  }
  fs.writeFileSync(PLAN, JSON.stringify(plan, null, 2))
}

async function final() {
  const plan = JSON.parse(fs.readFileSync(PLAN, 'utf8'))
  const credits = fs.existsSync(CREDITS) ? JSON.parse(fs.readFileSync(CREDITS, 'utf8')) : {}
  for (const it of plan) {
    if (it.choice === null || it.choice === undefined) continue
    const c = it.cands[it.choice]
    const tmp = path.join(REVIEW, `${it.slug}__final.jpg`)
    try {
      await download(thumb(c.url, 1280), tmp)
      const info = await sharp(tmp).rotate().resize({ width: 1000, height: 750, fit: 'cover', position: 'attention' }).webp({ quality: 78 }).toFile(path.join(OUT, `${it.slug}.webp`))
      credits[it.slug] = { artist: c.artist || 'Unknown', license: c.license, source: c.page }
      console.log(`✓ ${it.slug}.webp ${Math.round(info.size / 1024)}KB`)
    } catch (e) { console.log(`✗ ${it.slug}: ${e}`) }
    await sleep(900)
  }
  fs.writeFileSync(CREDITS, JSON.stringify(credits, null, 2))
}

async function previews() {
  const plan = JSON.parse(fs.readFileSync(PLAN, 'utf8'))
  for (const it of plan) for (let i = 0; i < it.cands.length; i++) {
    const c = it.cands[i]
    try { await download(thumb(c.url, 330), path.join(REVIEW, `${it.slug}__${i}.jpg`)); delete c.err } catch (e) { c.err = String(e) }
    await sleep(700)
  }
  fs.writeFileSync(PLAN, JSON.stringify(plan, null, 2))
  console.log('errors:', plan.flatMap(x => x.cands).filter(c => c.err).length)
}

const mode = process.argv[2]
if (mode === 'review') await review()
else if (mode === 'previews') await previews()
else if (mode === 'final') await final()
else console.log('usage: review | final')
