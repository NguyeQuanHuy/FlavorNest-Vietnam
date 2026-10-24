'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'chao-luon-binh-dinh',
  title: `Cháo Lươn Bình Định (Eel Congee with Toasted Rice Paper — Central Coast Style)`,
  subtitle: `Paddy eel — turmeric-fried, golden, crispy-edged — set atop a thick rice congee and served with a sheet of bánh tráng nướng (charcoal-toasted rice paper) that the eater shatters by hand and stirs into the porridge, turning the soft cháo into a half-porridge, half-cracker, crunch-in-every-spoonful bowl that exists nowhere but the Bình Định coastline.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/chao-luon-binh-dinh.jpg',
  intro: `This collection already holds a cháo lươn — the Nghệ An version, documented as a northern-central breakfast, iron-rich, dual-ginger-designed, served with bánh mướt. The Bình Định version is its southern-central cousin, and the differences — though the animal is the same and the porridge base is the same — are specific enough to warrant a separate page, because the Bình Định version does something the Nghệ An version does not: it adds BÁNH TRÁNG NƯỚNG (charcoal-toasted rice paper) to the bowl, and the addition transforms the cháo from a soft, porridge-only experience into a soft-AND-crunchy, porridge-AND-cracker hybrid that is texturally unique in the Vietnamese congee canon.

Bánh tráng nướng — rice paper toasted over charcoal until it puffs, blisters and crisps into a rigid, cracker-like sheet — is the central coast's universal crunch-delivery device: it appears beside the mì Quảng (where it is broken and scattered on top of the shallow noodle broth), beside the bê thui (where it is the wrapping for the straw-fired beef), and now beside — and INSIDE — the cháo lươn, where it is shattered into shards by the eater's hand and stirred into the hot porridge seconds before eating. The shards absorb the porridge's moisture on their outer surface (softening the outermost starch layer) while retaining their dry, rigid, air-pocketed interior for 2-3 minutes — producing a mouthfeel that is simultaneously smooth (the porridge), crunchy (the cracker's un-softened interior) and chewy (the cracker's partially softened exterior). The three textures exist simultaneously in the same spoonful, and they exist for only 2-3 minutes before the cracker fully softens and the crunch is gone. The cháo lươn Bình Định is a TIMED bowl — another countdown, another window, another reason to eat fast.

The eel preparation differs from the Nghệ An version's too: where the northern version simmers the eel in the congee's stock (producing a dual-eel — dissolved in the broth AND fried on top), the Bình Định version keeps the eel ENTIRELY SEPARATE from the porridge until the moment of serving. The eel is de-boned, turmeric-fried in a wok to golden crispness, and laid on top of the finished cháo as a standalone topping — crispy, golden, turmeric-crusted, carrying NO porridge moisture on its surface. The separation means the eel arrives at the tongue DRY and CRISPY (it has not sat in the hot porridge absorbing moisture), and the contrast between the dry, crispy, turmeric-fried eel and the wet, soft, rice porridge is sharper than the Nghệ An version's, where the eel has already spent time in the liquid and has softened.

Three crunch sources in one bowl: the bánh tráng nướng (pneumatic crunch from the air-pocketed, blistered rice paper), the fried eel (Maillard crunch from the turmeric-and-protein crust), and the fried shallots on top (caramelised crunch from the allium's sugar). Three different crunch mechanisms — pneumatic, Maillard and caramel — in a bowl of soft porridge. The Bình Định cháo lươn is the collection's crunchiest congee.`,
  ingredientSections: [
    {
      title: 'The eel',
      items: [
        { amount: 400, unit: 'g', name: 'paddy eel (lươn), cleaned, de-slimed, de-boned, cut 5 cm pieces', note: `Same eel, same preparation as the Nghệ An cháo lươn. De-bone by slitting along the back and pulling the spine. De-slime with salt and vinegar.` },
        { amount: 1, unit: 'tbsp', name: 'ground turmeric' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 3, unit: 'tbsp', name: 'neutral oil (for frying)' },
      ],
    },
    {
      title: 'The congee',
      items: [
        { amount: 200, unit: 'g', name: 'plain rice, rinsed' },
        { amount: 1.4, unit: 'L', name: 'water or light stock' },
        { amount: 15, unit: 'g', name: 'ginger, bruised' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'Bánh tráng nướng (toasted rice paper)',
      items: [
        {
          amount: 8,
          name: 'sheets of bánh tráng (dried rice paper), 22 cm rounds',
          note: `Standard dried rice paper — the same sheets the gỏi cuốn and the bánh xèo wrapping used. Here they are TOASTED, not dampened. The toasting transforms the flexible, translucent, chewy rice paper into a rigid, opaque, blistered, cracker-like disc.`,
        },
      ],
    },
    {
      title: 'Toppings',
      items: [
        { amount: 4, unit: 'tbsp', name: 'fried shallots (hành phi)' },
        { amount: 30, unit: 'g', name: 'ginger, julienned (raw — the dual-ginger)', note: `The Bình Định version's dual-ginger: cooked ginger in the congee (zingerone, mellow) + raw ginger julienned on top (gingerol, sharp). Third appearance of the dual-ginger design.` },
        { amount: 4, name: 'scallions, sliced' },
        { amount: 30, unit: 'g', name: 'coriander, chopped' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
        { amount: 2, name: 'limes, in wedges' },
        { amount: 2, name: 'red chilies, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Cook the congee, fry the eel separately — they meet only in the bowl',
      description: `CONGEE: cook exactly as the cháo trắng: rice + water + ginger + salt, simmer 40-45 minutes, stirring every 8 minutes, until the grains dissolve to a smooth porridge. Season with fish sauce. The congee should be THICK — thicker than the Nghệ An version, because the bánh tráng shards will absorb moisture and thin the porridge within minutes. A cháo that is perfect-consistency when served will be too thin after the crackers go in. Start thick; the crackers will bring it to balance.

EEL: toss the eel pieces with turmeric and fish sauce. Heat oil in a wok over high heat. Fry the eel 2-3 minutes per side — the turmeric crust forms (golden, Maillard-crusted, the curcumin's colour fixed by the heat), the flesh inside is just cooked through (opaque, flaking), and the edges are CRISPY (the thin edges of each piece dehydrate in the oil and vitrify into a thin, glass-crisp, turmeric-gold shell). Lift out onto a rack — do NOT set on paper towel (the towel absorbs the crispy surface's oil and softens the crust). The fried eel should be: golden, crispy-edged, dry-surfaced, and separate from the porridge until the moment of assembly.`,
      tip: `The SEPARATION of eel and congee — frying separately, assembling only in the bowl — is the Bình Định version's key structural difference from the Nghệ An version (which simmers the eel in the congee stock, producing a softer, broth-moistened, less crispy eel). The separation preserves the eel's Maillard crust: a turmeric-fried eel placed on HOT congee retains its crispness for 3-4 minutes (the porridge's moisture attacks the crust from below, but the crust's oil-sealed surface resists for a window). The same eel SIMMERED in the congee for even 5 minutes loses its crust entirely (the sustained liquid contact dissolves the Maillard surface). Separation = crunch preservation. Immersion = crunch destruction. The Bình Định cook chose separation, and the crunch is the reward.`,
    },
    {
      title: 'Toast the bánh tráng over charcoal — 15 seconds, the paper becomes a cracker',
      description: `Hold a dried rice-paper sheet 5-8 cm above a gas flame, a charcoal ember or an electric burner. Rotate slowly — the rice paper puffs, blisters and whitens within 5-8 seconds per section as the residual moisture in the starch flashes to steam and inflates the sheet's micro-thin layers. Continue rotating until the entire sheet is: puffed (roughly 3x its original thickness), blistered (hundreds of small, individual, air-filled bubbles across the surface — the same blistering the chả giò's rice-paper wrapper produced during frying, here produced by dry heat), rigid (the dehydrated starch has passed through its glass transition and is now a CRACKER, not a paper), and faintly charred in spots (the charcoal's direct contact produces small, dark, smoky spots that contribute a toasted-grain aroma).

The entire toasting takes 15-20 seconds per sheet. Under-toasted: the sheet is still flexible, not fully puffed, and will not shatter. Over-toasted: the sheet burns (rice paper goes from toasted to charred in 3 seconds — the margin is razor-thin). The toasting is a 15-second performance of attention and timing.

Set the toasted sheets aside — they are rigid, stable at room temperature for hours, and ready to be shattered into the bowl.`,
      tip: `The bánh tráng nướng's blistered structure is the same AGGREGATE CRUNCH the chả giò's fried rice-paper crust produced — hundreds of individual air-filled starch bubbles, each one a separate crisp unit that pops independently under the tooth. The blistering mechanism is identical in both cases (dry-heat or oil-heat → residual moisture flashes to steam → steam inflates the gluten-free starch matrix at individual points → each inflation point sets to a rigid, glass-like bubble as the starch dehydrates). The difference: the chả giò's blisters form IN OIL (producing a fried, oil-coated, golden crunch), while the bánh tráng nướng's blisters form IN DRY AIR (producing a dry, oil-free, white, lighter crunch). Same physics, different medium, different crunch weight. The toasted version is LIGHTER — no oil weight, no oil coating — and its lightness is what allows it to absorb porridge moisture slowly (oil-coated blisters repel water and stay crunchy longer; dry blisters absorb water and soften faster, which is DESIRED here — the partial softening IS the textural target).`,
    },
    {
      title: 'Assemble — eel on porridge, shatter the cracker into the bowl, eat in the 3-minute window',
      description: `Ladle the thick, hot congee into bowls. Lay the crispy turmeric-fried eel pieces on top — 4-5 pieces per bowl, arranged in a golden cluster at the centre, their crispy surfaces DRY and facing upward (do not submerge — the crispness survives only on the surface, and the porridge's heat below is already beginning its 3-minute assault on the eel's underside).

Scatter fried shallots, raw ginger julienne, scallion, coriander and pepper over the eel. Set lime and chili on the side.

NOW — THE CRACKER: take a toasted bánh tráng sheet and SHATTER it by hand over the bowl — press with both palms, crack into irregular shards 3-5 cm across, and let the shards fall onto the porridge's surface. Some shards land flat (they begin absorbing from their undersides immediately). Some land at angles (one edge in the porridge, one edge in the air — the submerged edge softens while the exposed edge stays crunchy). The shards settle into the hot porridge like ice floes on a warm sea.

THE 3-MINUTE WINDOW: eat NOW. Each spoonful gathers: porridge (soft, hot, ginger-scented, rice-starchy), a shard of bánh tráng (the underside softened to chewy by 30 seconds of porridge contact, the top still crunchy-dry-blistered — a dual-texture shard that is soft-below-and-crunchy-above in the same bite), a piece of fried eel (crispy surface, flaking interior, turmeric-gold), a filament of raw ginger (sharp gingerol sting), a fried shallot (sweet caramel crumble).

Minute 1: maximum contrast — the shards are mostly crunchy, the eel is fully crispy, and the porridge is the only soft thing.

Minute 2: the shards are half-soft, half-crunchy — the interesting minute, where every bite contains BOTH textures from the SAME shard, and the mouth cannot predict which texture it will get from which part of the shard.

Minute 3: the shards are mostly soft — the cracker has become a thick, chewy, porridge-saturated layer in the bowl, and the texture has shifted from crunch-dominant to chew-dominant. The eel's edges are still crispy (the oil-sealed Maillard crust has survived), but its underside has surrendered.

Minute 5: the shards are fully soft, the eel is fully moistened, and the bowl is a thick, uniform, eel-and-cracker-saturated porridge that is delicious but no longer contains the crunch contrast the first 3 minutes provided.

Squeeze lime at minute 2. Bite chili at minute 3. The bowl's character ARC — from crispy-and-contrasting (minute 1) to unified-and-soft (minute 5) — is the eating experience the Bình Định cháo lươn is designed to provide, and the arc is the argument for eating fast: the best version of this bowl exists for 180 seconds, and every second past 180 is a second of crunch you will not get back.`,
      tip: `The Bình Định cháo lươn is the collection's second TIMED BOWL (after the miến gà's 7-minute window), and its 3-minute window is the shortest in the collection — shorter because the bánh tráng nướng's DRY, OIL-FREE blisters absorb moisture faster than the miến gà's STARCH-MATRIX noodle. The absorption rate hierarchy is now: bánh tráng nướng in hot porridge (fastest — dry starch blisters, no oil barrier, 3 min to soft) > miến gà in hot broth (fast — mung-bean starch matrix, 7 min to over-soft) > phở in hot broth (slow — rice-starch surface, partially impermeable, 15+ min to soft). The crunch's survival time in hot liquid is determined by the cracker's OIL CONTENT (oil repels water and extends crunch) and its STARCH TYPE (porous starch absorbs faster than dense starch). The Bình Định cháo lươn's oil-free, porous, blistered cracker is the FASTEST-absorbing crunch vehicle in the collection, and its 3-minute window is the consequence.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
