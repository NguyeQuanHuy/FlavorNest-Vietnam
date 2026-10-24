'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-cha-ca-quy-nhon',
  title: `Bún Chả Cá Quy Nhơn (Fish Cake Noodle Soup — Quy Nhơn Style)`,
  subtitle: `Bún in a clear, ginger-bright, fish-bone broth — topped with two kinds of chả cá: one steamed (dense, bouncy, grey-white, pure myosin gel), one fried (golden, crispy-edged, airy, the same gel but expanded by oil's heat). The Quy Nhơn breakfast that puts the same fish in two textures in the same bowl, and lets the broth — clean, light, tasting of the sea that Quy Nhơn faces — carry both.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '2 hr',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/bun-cha-ca-quy-nhon.jpg',
  intro: `Bún chả cá is not unique to Quy Nhơn — Nha Trang has its version, Đà Nẵng has its version, Phan Thiết has its version — but Quy Nhơn's version is the one the Vietnamese food canon has settled on as the standard, because Quy Nhơn's version does something the others do not: it serves TWO kinds of chả cá in the same bowl, and the two are made from the SAME fish paste but processed by different methods (steamed vs fried), producing different textures from identical ingredients. The bowl is a controlled experiment in processing: same input, two outputs, one broth.

The fish paste — the base for both kinds of chả cá — is the myosin-gel technology this collection has documented across seven recipes (chạo tôm, chả cá Phú Quốc, nem nướng, giò lụa, etc.), here applied to fish: mackerel, or barracuda, or lizardfish (cá nhồng, the Quy Nhơn preference — a long, thin, firm-fleshed predator whose muscle produces an exceptionally strong myosin gel because of its high myosin-to-sarcoplasmic-protein ratio). The fish is filleted, the flesh is scraped from the skin, salt is added, and the mass is pounded or processed until it becomes a smooth, sticky, elastic paste — the same transformation the giò lụa's pork underwent, the same salt-extracted, mechanically cross-linked myosin network, applied to a different species.

THE STEAMED CHẢ CÁ (chả cá hấp): the paste is shaped into a flat slab, wrapped in banana leaf or plastic, and steamed. The result: a dense, firm, bouncy, grey-white block that slices cleanly and springs back when pressed — the fish equivalent of the giò lụa, with the same silk-smooth cross-section and the same bounce-test quality (drop a slice: if it bounces, the gel is good). The steamed chả cá's texture is PURE GEL — the myosin network, set by heat, unmodified by any secondary process.

THE FRIED CHẢ CÁ (chả cá chiên): the same paste is shaped into smaller pieces (balls, flat cakes or irregular chunks) and DEEP-FRIED. The oil's 170-180°C heat does two things the steam's 100°C did not: it dehydrates the surface (producing a golden, crispy, Maillard-crusted exterior), and it causes the paste's interior moisture to flash to steam, expanding the gel's network and producing an AERATED, SPONGY, LIGHTER texture than the steamed version. The fried chả cá is crispy outside and porous inside — it absorbs broth like a sponge when placed in the bowl, swelling and softening and releasing its absorbed broth with each bite. The fried chả cá is the gel AFTER the oil has remodelled it: expanded, aerated, absorbent.

The broth is the third protagonist: fish bones (from the same fish the paste was made from — the filleting produces bones that become the broth's raw material, a zero-waste circuit), simmered with ginger, scallion and a restrained hand of fish sauce, for 45-60 minutes, then strained to clarity. The broth is LIGHT — lighter than a phở broth, lighter than a bún bò Huế broth, and carrying only one flavour: fish, supported by ginger, and nothing else. The lightness is the broth's job: it must carry the two chả cá without competing, and a heavy broth would drown the delicate textural contrast between steamed-and-fried that the bowl is designed to showcase.`,
  ingredientSections: [
    {
      title: 'The fish paste (for both steamed and fried chả cá)',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'firm white fish fillets (mackerel, barracuda, lizardfish or snapper), skin and bones removed',
          note: `The fish must be VERY fresh — the same freshness requirement the giò lụa's pork demanded, for the same reason: myosin degrades post-mortem, and degraded myosin produces a weak gel. Day-of-catch fish produces the bounciest chả cá. The flesh should be scraped from the fillet with a spoon (scraping separates the muscle fibres from the connective tissue, producing a purer paste with fewer tough strands).`,
        },
        { amount: 10, unit: 'g', name: 'salt (1.5-2% of fish weight)', note: `The myosin extractor — same role, same ratio as the giò lụa.` },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'ground white pepper' },
        { amount: 1, unit: 'tbsp', name: 'cornstarch or tapioca starch', note: `A small amount — strengthens the gel slightly and improves the fried version's crispness.` },
        { amount: 2, unit: 'tbsp', name: 'ice-cold water', note: `The temperature insurance — same as the giò lụa. Cold paste = strong gel.` },
      ],
    },
    {
      title: 'The fish-bone broth',
      items: [
        { amount: 500, unit: 'g', name: 'fish bones, heads and trimmings (from the filleting)', note: `Rinse well, remove gills (bitter). The bones = the broth. Zero waste: the fish becomes paste AND broth.` },
        { amount: 2.5, unit: 'L', name: 'water' },
        { amount: 30, unit: 'g', name: 'ginger, bruised and sliced' },
        { amount: 3, name: 'scallions, knotted' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
      ],
    },
    {
      title: 'The bowl',
      items: [
        { amount: 500, unit: 'g', name: 'bún (round rice vermicelli), blanched' },
        { amount: 200, unit: 'g', name: 'bean sprouts, blanched 15 seconds' },
        { amount: 100, unit: 'g', name: 'rau sống: lettuce, húng quế, rau răm' },
        { amount: 4, name: 'scallions, sliced' },
        { amount: 30, unit: 'g', name: 'hành phi (fried shallots)' },
        { amount: 2, unit: 'tbsp', name: 'mỡ hành (scallion oil)' },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 3, unit: 'tbsp', name: 'mắm nêm or nước mắm pha, on the side' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the paste, split in two — one half steamed, one half fried',
      description: `PASTE: cut the fish fillets into chunks. Process in a food processor with salt, fish sauce, sugar, pepper and ice-cold water — pulse 30 seconds, then process continuously 2-3 minutes until the paste is: smooth, sticky (clings to an inverted spoon), elastic (stretches 3-4 cm), and pale grey-white. Add the starch in the last 15 seconds. The paste is ready when it passes the giò lụa's stick test and stretch test.

SPLIT the paste in half — 300 g for steaming, 300 g for frying.

STEAMED CHẢ CÁ: shape the first half into a flat slab (roughly 15 x 8 x 2 cm) on a piece of oiled banana leaf or plastic wrap. Wrap tightly — the same tight, air-free wrapping the giò lụa used. Steam over boiling water 20-25 minutes. Cool. Unwrap. The slab is: firm, bouncy, grey-white, smooth-surfaced, with the same poreless cross-section the giò lụa displayed. Slice into pieces 1 cm thick, 3 x 4 cm. Each slice should BOUNCE when dropped from 10 cm.

FRIED CHẢ CÁ: shape the second half into small flat cakes (5 cm diameter, 1.5 cm thick) or into balls (3 cm diameter). Deep-fry at 170-175°C for 4-5 minutes — the cakes puff slightly (the internal moisture flashes to steam and expands the gel network), the surface turns golden-brown (the Maillard reaction between the fish's amino acids and the starch's sugars), and the interior becomes SPONGY — aerated, porous, lighter than the steamed version.

Drain. The fried chả cá is: golden outside, spongy inside, and — when squeezed — springs back slowly (the expanded, air-pocketed gel network is more compliant than the steamed version's dense, un-expanded gel). Set aside.`,
      tip: `The steamed-vs-fried chả cá pair demonstrates the effect of PROCESSING on a SINGLE GEL: the myosin network in both is identical (same fish, same salt, same pounding, same cross-linking), but the steamed version's gel is COMPACT (set at 100°C under atmospheric pressure, no expansion, no dehydration — the network locks in its original density), while the fried version's gel is EXPANDED (the oil's 170°C+ flash-evaporates the interior moisture, the steam inflates the network like a balloon, and the network's cross-links stretch to accommodate the expansion, then lock in the expanded state as the surface dehydrates and rigidifies). Same gel, different thermodynamics, different textures. The bowl contains BOTH to demonstrate the range a single myosin paste can produce — from dense-bounce to airy-sponge — by changing nothing except the cooking medium.`,
    },
    {
      title: 'Simmer the fish-bone broth — 45 minutes, clear, light, one flavour',
      description: `Rinse the fish bones and heads under cold water — remove all blood and any remaining gills. Place in a pot with 2.5 L cold water, ginger and scallion. Bring to a boil. SKIM immediately and continuously for 5 minutes — fish broth produces more scum than meat broth (the fish's blood proteins coagulate faster and in larger quantities), and the first 5 minutes of skimming determine the broth's final clarity.

Reduce to a bare simmer. Cook 45 minutes — NOT LONGER. Fish bones release their gelatin faster than pork or beef bones (fish collagen's denaturation temperature is lower — roughly 40°C vs mammalian collagen's 60°C — so it dissolves faster), and a fish broth simmered past 60 minutes begins to taste BITTER (the bones' phospholipids break down into bitter lysophospholipids, and the skin's trimethylamine oxide converts to the "fishy" trimethylamine). The 45-minute window extracts the gelatin and the flavour without extracting the bitter.

Strain through a fine sieve lined with cheesecloth. The broth should be: pale gold, clear (hold it to the light — transparent), clean-tasting (fish, ginger, salt — no fishiness, no bitterness), and lightly gelatinous (the fish collagen's rapid dissolution produces a perceptible body within 45 minutes).

Season: fish sauce, salt, sugar. The broth's final taste: the sea, warmed by ginger, salted by fish sauce, and nothing else.`,
      tip: `Fish broth's 45-minute maximum is a critical difference from the beef and pork broths this collection has documented (which simmer 2-12 hours). Fish collagen is structurally weaker than mammalian collagen (fewer inter-chain cross-links, lower proline and hydroxyproline content), which means it dissolves into gelatin at lower temperatures and in less time — but it also means the BONES degrade faster, releasing off-flavour compounds (bitter phospholipid breakdown products, fishy trimethylamine) that the shorter cook avoids. The fish broth is a SPRINT, not a marathon: extract what you need in 45 minutes and stop. The mammalian broth is a marathon: extract what you need over 2-12 hours and benefit from the extra time. Different bones, different timelines, different stop-signals.`,
    },
    {
      title: 'Assemble the bowl — bún, both chả cá, broth, the two-texture experiment',
      description: `BLANCH the bún in boiling water 10 seconds — drain, divide into 6 bowls. Add blanched bean sprouts.

Place 2-3 slices of STEAMED chả cá on one side of the bowl. Place 2 FRIED chả cá pieces on the other side. The two kinds — grey-white dense slices vs golden spongy cakes — sit side by side, the same fish in two forms.

Ladle the hot, clear, ginger-scented fish broth over — enough to submerge the bún and half-submerge the chả cá. The broth's heat warms the steamed slices (which stay firm and bouncy in the hot liquid) and penetrates the fried cakes (which absorb the broth through their spongy, aerated pores, swelling slightly and softening from crispy to broth-saturated in 30 seconds).

Top: sliced scallion, hành phi, a drizzle of mỡ hành, herbs. Set lime, chili and mắm nêm on the side.

THE TWO-TEXTURE EATING: the first bite of steamed chả cá — dense, bouncy, the myosin gel snapping under the tooth, the fish flavour concentrated in the compact network, the texture holding for 3-4 chews before yielding. The first bite of fried chả cá — the broth-soaked sponge compresses under the tooth and RELEASES its absorbed broth in a warm, fish-scented flood (the same broth-release the miến gà's absorbent noodle provided, here from a fish cake rather than a noodle), the texture softer, airier, dissolving faster. Two bites, same fish, different processing, different physics, different mouthfeel. The bowl is a DEMONSTRATION: of what salt and pounding do to muscle (both), of what steam does to a gel (compacts it), and of what oil does to a gel (expands it).

Squeeze lime into the broth. Tear herbs into the bowl. Dip the chả cá pieces in mắm nêm if desired — the mắm nêm's fermented funk against the clean fish broth is the flavour contrast the central coast's palate seeks.

Bún chả cá Quy Nhơn is the collection's clearest MYOSIN-GEL DEMONSTRATION — the bowl that shows, in a single serving, the full range of a single protein technology: same paste → steamed (dense bounce) and fried (airy sponge), in a broth made from the same fish's bones, seasoned by the same sea's fish sauce. One fish, three products (paste, broth, two textures), zero waste, one bowl.`,
      tip: `The fried chả cá's broth-absorption in the bowl is a capillary-action phenomenon identical to the lotus stem's dressing-absorption: the fried gel's expanded, aerated network contains channels (where the steam pockets were) that are roughly 0.5-1 mm in diameter — narrow enough for capillary force to draw the broth inward. A fried chả cá placed in hot broth absorbs roughly 2x its own weight in liquid within 60 seconds, and each bite releases the absorbed broth as a warm, flavoured burst. The steamed chả cá, by contrast, absorbs almost nothing (its compact, un-aerated gel has no channels for the broth to enter). The two textures in the same broth demonstrate absorption vs. impermeability — sponge vs. stone — and the mouth is the laboratory.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
