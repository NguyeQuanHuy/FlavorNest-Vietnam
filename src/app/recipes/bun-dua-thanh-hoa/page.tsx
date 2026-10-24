'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Bún Đũa Thanh Hóa — Thanh Hóa Chopstick-Thick Noodles
//  Thanh Hóa #6
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  1. MACRO-NOODLE DIAMETER SCALING LAWS —
//     3-5 mm diameter vs standard bún 1-2 mm,
//     surface-to-volume ratio ↓ 2.5-5×,
//     Biot number Bi = hL/k > 1 → internal
//     temperature gradient during cooking,
//     core-shell dual-texture architecture
//  2. RICE STARCH GEL FRACTURE MECHANICS AT
//     LARGE CROSS-SECTION — critical flaw size
//     (Griffith criterion) scales with diameter,
//     thicker noodle tolerates more internal defects
//     → unique "chewy-snappy" fracture vs thin
//     noodle's clean break, mastication work 3-5×
//  3. RIÊU CUA CRAB PROTEIN RAFT FLOTATION —
//     crab meat proteins (tropomyosin, arginine
//     kinase) heat-denature at 55-65°C forming
//     buoyant protein-air raft that rises to surface
//     carrying trapped fat droplets and carotenoid
//     pigments → orange foam cap
//  4. FERMENTED SHRIMP PASTE (MẮM TÔM) VOLATILE
//     AMINE HEADSPACE — TMA, DMA, putrescine at
//     sub-threshold individual concentrations create
//     SUPRA-THRESHOLD ensemble via olfactory
//     cross-adaptation, the "funk" that divides
//     Vietnamese diners
//  5. FRIED TOFU PROTEIN-STARCH SPONGE MATRIX —
//     deep-fried tofu: surface dehydration creates
//     rigid crust while interior steam-puffs to
//     open-cell foam, sponge absorbs broth at 150-200%
//     capacity via capillary suction
//  6. THANH HÓA NOODLE-MAKING HERITAGE —
//     hand-extruded through bamboo press (khuôn ép),
//     chopstick-diameter is deliberate ergonomic
//     choice for chopstick eating, Hàm Rồng/Đông Sơn
//     district specialization
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'bun-dua-thanh-hoa',
  title: 'Bún Đũa Thanh Hóa (Thanh Hóa Chopstick-Thick Rice Noodles with Crab Soup)',
  subtitle: 'Noodle diameter scales from 1-2 mm to 3-5 mm reducing S/V ratio 2.5-5× and pushing Biot number above 1 creating core-shell dual-texture, Griffith critical flaw size increases proportionally allowing chewy-snappy fracture mechanics, crab tropomyosin denatures at 55-65°C forming buoyant protein-air raft carrying carotenoid pigments, and mắm tôm volatile amines create supra-threshold ensemble via olfactory cross-adaptation.',
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/bun-dua-thanh-hoa.jpg',

  intro: `Bún đũa Thanh Hóa is Vietnam's most DIMENSIONALLY PROVOCATIVE noodle — a rice vermicelli scaled up to the diameter of a CHOPSTICK (3-5 mm, approximately 3× the standard bún diameter of 1-2 mm). This seemingly minor dimensional change triggers a CASCADE of physical and textural consequences that make bún đũa a fundamentally different eating experience from standard bún, governed by SCALING LAWS that affect heat transfer, fracture mechanics, sauce interaction, and even the biomechanics of mastication.

The CENTRAL MECHANISM is MACRO-NOODLE DIAMETER SCALING LAWS. When a cylindrical noodle's diameter increases from 1.5 mm to 4 mm, the SURFACE-TO-VOLUME RATIO decreases by a factor of 2.7 (S/V = 4/d for a cylinder, where d is diameter). This reduction in S/V ratio has cascading consequences: (1) During cooking, the BIOT NUMBER (Bi = hL/k, where h is the convective heat transfer coefficient, L is the characteristic length d/4, and k is the thermal conductivity of rice starch gel ≈ 0.6 W/m·K) increases from Bi < 0.1 for thin bún (uniform temperature throughout the cross-section) to Bi > 1 for bún đũa (significant internal temperature gradient). This means that when bún đũa is cooked, the OUTER SHELL gelatinizes fully and firms up while the CORE may still be slightly under-gelatinized — producing a CORE-SHELL DUAL-TEXTURE architecture where the exterior is firm and slightly resilient while the interior is softer and more yielding. This is the "al dente" of Vietnamese noodles — a textural complexity that thin bún cannot achieve because its uniform cross-section gelatinizes simultaneously throughout. (2) The lower S/V ratio means LESS SURFACE AREA per unit mass for broth to contact. Standard bún is designed to absorb broth and flavor through its large surface area; bún đũa resists absorption, remaining a distinct textural entity in the bowl rather than becoming a flavor-soaked matrix. The noodle maintains its IDENTITY — you taste the rice starch itself, not just the broth it has absorbed.

The FRACTURE MECHANICS of large-diameter noodles obey the GRIFFITH CRITERION for brittle fracture, which states that the critical stress for crack propagation is σ_c = √(2Eγ/πa), where E is the elastic modulus, γ is the surface energy, and a is the CRITICAL FLAW SIZE. For a given material (rice starch gel), the critical flaw size scales with the specimen's characteristic dimension — larger specimens tolerate larger internal defects before catastrophic fracture. In practical terms, this means bún đũa has a DIFFERENT FRACTURE BEHAVIOR than thin bún: thin bún (d = 1.5 mm) fractures CLEANLY with minimal deformation (brittle fracture — the crack propagates across the entire cross-section almost instantaneously), while bún đũa (d = 4 mm) fractures in a "CHEWY-SNAPPY" mode — the noodle deforms significantly under jaw compression before eventually fracturing, and the fracture propagates slowly, producing a satisfying SNAP that engages both tactile (jaw proprioception) and auditory (bone-conducted sound) perception. The total MASTICATION WORK (force × displacement integrated over the chewing cycle) for bún đũa is 3-5× higher than for thin bún — not because the material is harder, but because there is more material to deform. This increased mastication work contributes to SATIETY (the jaw muscles send proprioceptive signals to the hypothalamus that correlate with food intake), making a bowl of bún đũa more filling than an equal-weight bowl of thin bún.

The RIÊU CUA (crab soup) component showcases the PROTEIN RAFT FLOTATION phenomenon. Fresh crab meat is pounded or processed into a fine paste with water, creating a suspension of dissolved and partially dissolved proteins — primarily TROPOMYOSIN (the dominant muscle protein in crustaceans, ~20% of total protein) and ARGININE KINASE (an energy metabolism enzyme). When this suspension is slowly heated in the broth, the proteins begin to DENATURE at 55-65°C. As they denature, they aggregate into a network that traps AIR BUBBLES (incorporated during the pounding/mixing process) and FAT DROPLETS (from the crab's hepatopancreas, the "gạch cua" or crab paste). This protein-air-fat network is BUOYANT — less dense than the surrounding broth — and it rises to the surface as a cohesive RAFT. The raft carries with it ASTAXANTHIN pigments from the crab shell and hepatopancreas, producing the characteristic ORANGE FOAM CAP that crowns a properly made riêu cua. This protein raft serves the same function as the "raft" in French consommé clarification — it physically sweeps suspended particles upward, CLARIFYING the broth below — but in riêu cua, the raft itself is eaten, not discarded.

MẮM TÔM (fermented shrimp paste) is the polarizing condiment that accompanies bún đũa — a VOLATILE AMINE HEADSPACE system that creates one of the most complex olfactory experiences in Vietnamese cuisine. Fermented shrimp paste contains TRIMETHYLAMINE (TMA, the primary "fishy" odor compound), DIMETHYLAMINE (DMA), PUTRESCINE (1,4-diaminobutane), CADAVERINE (1,5-diaminopentane), and numerous other biogenic amines — each at concentrations BELOW its individual odor detection threshold. However, these sub-threshold compounds interact through OLFACTORY CROSS-ADAPTATION — the simultaneous presence of multiple odorants at sub-threshold concentrations can produce a SUPRA-THRESHOLD perception (the ensemble is perceived even though no individual component would be). This is the neurological basis of mắm tôm's unique "funk" — it doesn't smell like any single compound, but rather like a COMPLEX, INDESCRIBABLE aroma that is the emergent property of dozens of sub-threshold volatile amines interacting in the olfactory bulb. Adding a few drops of lime juice to mắm tôm before serving protonates the free amines (R-NH₂ + H⁺ → R-NH₃⁺), converting them to their NON-VOLATILE salt forms and dramatically reducing the headspace amine concentration — this is why lime is always served with mắm tôm.

FRIED TOFU in bún đũa functions as a PROTEIN-STARCH SPONGE MATRIX — a dual-structure food with a rigid, dehydrated CRUST and a steam-puffed, open-cell FOAM interior. During deep-frying at 170-180°C, the tofu surface rapidly dehydrates (water activity drops from 0.99 to 0.3 in the outer 2-3 mm), creating a dense, protein-crosslinked crust with glass-like brittleness. Meanwhile, the water in the tofu interior generates STEAM that cannot escape through the sealed crust, inflating the interior into an OPEN-CELL FOAM with pore sizes of 0.5-2 mm. When this fried tofu is placed in the hot broth, the open-cell foam interior acts as a CAPILLARY SPONGE — the broth is drawn into the pores by capillary suction (Laplace pressure ΔP = 2γ/r, where γ is the broth surface tension and r is the pore radius), filling the tofu with 150-200% of its dry weight in flavored broth. The fried tofu becomes a BROTH RESERVOIR that releases concentrated flavor when bitten — a burst of crab-tomato-mắm tôm broth delivered from within a crispy-skinned package.

Bún đũa's chopstick diameter is not arbitrary — it is an ERGONOMIC DESIGN optimized for the Vietnamese chopstick eating system. Standard thin bún requires the diner to gather multiple strands with chopsticks to achieve a satisfying mouthful — a process that involves complex chopstick manipulation and often results in broth splashing. Bún đũa's larger diameter means that a SINGLE NOODLE or two-three noodles provide an adequate mouthful, simplifying the chopstick pickup and reducing the mechanical complexity of eating. The noodle diameter (3-5 mm) closely matches the diameter of the chopstick itself (3-5 mm) — hence the name "bún đũa" (chopstick noodle) — creating a visual and tactile HARMONY between tool and food. This ergonomic optimization reflects Thanh Hóa's practical, agricultural approach to food design: the noodle is shaped for efficient eating during busy work days, not for aesthetic refinement.`,

  ingredientSections: [
    {
      title: 'Macro Noodles — Scaled Rice Starch Gel',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'bún đũa (thick rice noodles, 3-5 mm diameter)',
          note: 'If unavailable, substitute bún bò Huế noodles (similar diameter). Standard thin bún CANNOT replicate the core-shell texture and fracture mechanics. Cook until the outer shell is firm but the core retains slight give — the Bi > 1 dual-texture.',
        },
      ],
    },
    {
      title: 'Riêu Cua Broth — Protein Raft System',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'fresh crab meat (cua đồng), pounded to fine paste with 200 ml water',
          note: 'Paddy field crab preferred. The pounding incorporates air bubbles that become trapped in the denatured protein raft. Strain through a sieve to remove shell fragments.',
        },
        {
          amount: 2,
          unit: 'unit',
          name: 'medium tomatoes, quartered',
        },
        {
          amount: 1,
          unit: 'liter',
          name: 'pork bone broth or water',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'cooking oil',
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'fish sauce',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'annatto oil (dầu điều)',
          note: 'Bixin pigment enhances the orange color of the raft.',
        },
      ],
    },
    {
      title: 'Accompaniments — Sponge + Funk',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'fried tofu (đậu phụ rán), cut into triangles',
          note: 'CAPILLARY SPONGE — open-cell foam interior absorbs 150-200% its weight in broth. Add to bowl just before serving for maximum broth uptake.',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'mắm tôm (fermented shrimp paste)',
          note: 'Volatile amine headspace — serve with lime wedges to protonate amines (R-NH₂→R-NH₃⁺) and reduce volatility.',
        },
        {
          amount: 1,
          unit: 'bunch',
          name: 'water spinach (rau muống), blanched',
        },
        {
          amount: 1,
          unit: 'bunch',
          name: 'fresh herbs: perilla (tía tô), kinh giới',
        },
        {
          amount: 2,
          unit: 'unit',
          name: 'lime wedges',
        },
        {
          amount: 1,
          unit: 'unit',
          name: 'fresh chili, sliced',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Build the riêu cua broth — protein raft formation, 20 minutes',
      description: `HEAT oil and annatto oil in a large pot over medium heat. SAUTÉ the quartered tomatoes for 3-4 minutes until softened and the oil takes on an orange hue from the dissolved bixin and lycopene.

ADD the pork bone broth (or water) and bring to a GENTLE SIMMER — not a rolling boil. Season with fish sauce.

SLOWLY pour the strained crab paste suspension into the simmering broth in a THIN STREAM while stirring gently in ONE DIRECTION. The gentle, unidirectional stirring helps the denaturing crab proteins aggregate into a COHESIVE RAFT rather than dispersing into small, unattractive flecks.

STOP STIRRING once all the crab paste is added. Reduce heat to LOW (barely simmering, 80-85°C). Over the next 5-10 minutes, watch the PROTEIN RAFT form: the denatured tropomyosin and arginine kinase proteins aggregate, trapping air bubbles and fat droplets, and the buoyant network rises to the surface as a cohesive ORANGE-TINGED FOAM CAP. Do NOT stir or disturb the raft once it begins forming — any agitation will break it into fragments.

The broth beneath the raft should be CLEAR and golden-orange — the raft has clarified it by sweeping suspended particles upward, exactly like a French consommé raft.`,
      tip: `THE PROTEIN RAFT — CONSOMMÉ SCIENCE IN A VIETNAMESE CONTEXT: The crab protein raft in riêu cua and the egg-white raft in French consommé operate on IDENTICAL physics: proteins denature at 55-65°C, aggregate into a porous network, and rise to the surface carrying trapped particles (clarification) and fat (flavor concentration). The key difference is the BUOYANCY SOURCE: in consommé, the raft is held up by convective currents from below; in riêu cua, the raft is intrinsically buoyant because the pounded crab paste incorporates AIR during processing (the same principle as whipped egg whites). The raft's orange color comes from ASTAXANTHIN released from the crab's hepatopancreas (the "gạch" — the fatty, flavorful organ that is the most prized part of the crab). This astaxanthin, freed from its crustacyanin binding protein by the heat of cooking, partitions into the fat droplets trapped within the raft, creating a concentrated, intensely colored cap.`,
    },
    {
      title: 'Cook the bún đũa — core-shell gelatinization, 8-10 minutes',
      description: `BRING a large pot of water to a ROLLING BOIL. Add the bún đũa noodles. The large diameter means these noodles require LONGER COOKING than standard bún — approximately 8-10 minutes versus 2-3 minutes for thin bún.

COOK to the "AL DENTE" point — the outer 1-1.5 mm shell should be fully gelatinized (translucent, firm, slightly resistant to bite) while the core retains a slightly DENSER, MORE OPAQUE texture indicating incomplete gelatinization. Test by biting a noodle: the tooth should encounter firm resistance at the surface, then yield slightly at the center. This CORE-SHELL DUAL TEXTURE is the hallmark of properly cooked bún đũa and the direct result of the Biot number exceeding 1 — heat has not penetrated uniformly to the center.

DRAIN and rinse briefly with cold water to arrest further gelatinization and remove surface starch (which would make the noodles sticky and clump together). The cold rinse also sets the outer shell's gel structure, strengthening the firm exterior texture.

PORTION into individual serving bowls.`,
      tip: `FRACTURE MECHANICS — WHY THICK NOODLES CHEW DIFFERENTLY: The eating experience of bún đũa is dominated by its FRACTURE BEHAVIOR during chewing, which is fundamentally different from thin bún. According to the Griffith criterion, the stress required to propagate a crack through a material is σ_c ∝ 1/√a, where a is the flaw size. In a thin noodle (d = 1.5 mm), even small internal flaws (0.1-0.2 mm air pockets or density variations) are a significant fraction of the cross-section, so the noodle fractures easily and CLEANLY — snap, and it's in two pieces. In bún đũa (d = 4 mm), the same absolute flaw size is a much smaller fraction of the cross-section, so the noodle can sustain more stress before fracturing — it DEFORMS elastically, then partially plastically, before finally snapping. This extended deformation sequence engages the jaw's PROPRIOCEPTIVE SYSTEM (Ruffini endings, Golgi tendon organs) more intensely and for longer than thin bún's instant snap, producing a chewing experience that feels more SUBSTANTIAL and SATISFYING.`,
    },
    {
      title: 'Assemble and serve — the macro-noodle bowl',
      description: `PLACE the cooked bún đũa in serving bowls. Top with fried tofu triangles (place them IN the bowl so they begin absorbing broth immediately via capillary suction into their open-cell foam interior).

LADLE the hot riêu cua broth over the noodles, ensuring each bowl receives a generous portion of the ORANGE PROTEIN RAFT (spoon it gently from the surface of the pot to keep it intact). The raft pieces should sit on top of the broth, floating like islands.

ARRANGE blanched water spinach and fresh herbs alongside the bowl. Serve with lime wedges, sliced chili, and a small dish of MẮM TÔM.

TO EAT: Pick up 1-2 bún đũa noodles with chopsticks — note how the single-noodle pickup is effortless compared to gathering a bundle of thin bún. Dip in mắm tôm mixed with a SQUEEZE OF LIME (the acid protonates the volatile amines, reducing the headspace intensity while preserving the flavor contribution). Bite through the noodle — feel the firm shell give way to the softer core, and note the satisfying SNAP of the fracture. Bite the fried tofu and experience the BURST of absorbed broth from the sponge interior. The textural progression should be: snappy noodle → creamy crab raft → broth-burst tofu → crunchy water spinach → aromatic herbs.`,
      tip: `FRIED TOFU AS CAPILLARY SPONGE — 150-200% ABSORPTION: The fried tofu in bún đũa is not just a protein source — it's an engineered BROTH DELIVERY DEVICE. The deep-frying process creates a dual-structure material: a rigid, dehydrated CRUST (2-3 mm thick, aw 0.3) surrounding an open-cell FOAM interior (pore size 0.5-2 mm). When placed in hot broth, the Laplace pressure ΔP = 2γ/r at each pore opening drives capillary suction — broth is pulled into the foam structure against gravity, filling the pores with flavored liquid. For a pore radius of 1 mm and broth surface tension of 0.040 N/m, the capillary pressure is approximately 80 Pa — sufficient to draw broth 8 mm upward against gravity, more than enough to fill a tofu cube. The total absorption capacity is 150-200% of the dry tofu weight, meaning a 20 g piece of fried tofu absorbs 30-40 g of broth. When bitten, this stored broth is RELEASED in a concentrated burst — delivering a mouthful of crab-tomato-shrimp paste broth from within the tofu itself.`,
    },
  ],
};

export default function BunDuaThanhHoaPage() {
  return <RecipeLayout recipe={recipe} />;
}
