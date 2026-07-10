'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nem-nuong-da-lat',
    title: `Đà Lạt Grilled Pork Sausage Rolls`,
    subtitle: `Nem Nướng Đà Lạt — Highland grilled pork sausage wrapped in soft rice paper with highland vegetables, fresh herbs, and a thick hoisin-peanut dipping sauce.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Nem nướng Đà Lạt occupies a distinct position in the nem nướng family — neither the Nha Trang version (served with rice crackers and a thin fish sauce) nor the Bình Dương version (eaten with bánh hỏi), but a highland adaptation that uses the cool climate's exceptional produce as its defining variable. The pork sausage is grilled over charcoal in the same hand-pounded style as Nha Trang, but the wrapping vegetables are entirely Đà Lạt: butter lettuce grown at altitude, kohlrabi shredded thin, mustard greens, Đà Lạt cucumber (smaller, crisper, less watery than lowland varieties), and perilla that grows year-round in the cool soil of the Lang Biang plateau.\n\nThe dipping sauce is the element that most clearly marks this as a highland dish: a thick hoisin and roasted peanut sauce, thinned with coconut water rather than plain water, with a spoonful of rendered pork lard stirred in at the end to give it a richness and gloss that the coastal versions — which use water — never achieve. The coconut water adds a faint sweetness and a very subtle tropical note that contrasts with the cool-weather vegetables in a way that has become one of the identifying flavour signatures of Đà Lạt nem nướng.\n\nThe sausage itself is made by hand: pork shoulder and pork fatback are pounded together with garlic, fish sauce, sugar, and a specific ratio of baking powder that creates the characteristic "bounce" (độ dai) of good nem nướng — the spring under the teeth when the outer char gives way to the interior. This bounce is what experienced nem nướng eaters evaluate first. A sausage without bounce has been made with pre-ground commercial pork; a sausage with bounce has been pounded by hand or pulsed in a processor with careful attention to texture.`,
    ingredientSections: [
        {
            title: `Nem nướng sausage paste`,
            items: [
                { amount: 400, unit: 'g', name: `pork shoulder (thit heo nac vai)`, note: `very cold — 15 min freezer before processing` },
                { amount: 100, unit: 'g', name: `pork fatback (mo luong)`, note: `minced fine — provides the fat that renders during grilling` },
                { amount: 5, name: `garlic cloves, minced to paste` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1.5, unit: 'tbsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `baking powder`, note: `the bounce agent — do not substitute with baking soda` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
                { amount: 1, unit: 'tbsp', name: `tapioca starch (bot nang)` },
            ],
        },
        {
            title: `Đà Lạt highland wrap vegetables`,
            items: [
                { amount: 1, name: `head Đà Lạt butter lettuce (xa lach Da Lat)`, note: `leaves separated` },
                { amount: 150, unit: 'g', name: `kohlrabi (su hao)`, note: `peeled and shredded thin` },
                { amount: 100, unit: 'g', name: `Đà Lạt cucumber`, note: `cut into thin batons` },
                { amount: 1, name: `bunch perilla (tia to)` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 50, unit: 'g', name: `mustard greens (cai xanh)`, note: `young leaves only — the highland addition` },
                { amount: 150, unit: 'g', name: `bean sprouts (gia do)`, note: `briefly blanched 20 seconds` },
            ],
        },
        {
            title: `Rice paper`,
            items: [
                { amount: 20, name: `sheets soft rice paper (banh trang uot)`, note: `22cm diameter — dipped in warm water 3 seconds to soften` },
            ],
        },
        {
            title: `Đà Lạt hoisin-peanut dipping sauce`,
            items: [
                { amount: 4, unit: 'tbsp', name: `hoisin sauce (tuong hoisin)` },
                { amount: 3, unit: 'tbsp', name: `roasted peanut butter (or crushed roasted peanuts blended smooth)` },
                { amount: 3, unit: 'tbsp', name: `coconut water (nuoc dua)`, note: `not coconut milk — the clear liquid; the Đà Lạt distinction` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `rice vinegar` },
                { amount: 1, unit: 'tbsp', name: `pork lard (mo heo) or neutral oil`, note: `stirred in at end — gives gloss and richness` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, minced` },
                { amount: 2, unit: 'tbsp', name: `roasted peanuts, crushed coarsely`, note: `scattered over sauce at serving` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the sausage paste — the bounce technique`,
            description: `Chill pork shoulder in the freezer for 15 minutes until very cold but not frozen. Cut into chunks and pulse in a food processor 8-10 times until a coarse, slightly sticky mince forms — stop before it becomes smooth paste. The texture should still show some meat fibre. Transfer to a bowl. Add minced fatback, garlic paste, fish sauce, sugar, baking powder, black pepper, sesame oil, and tapioca starch. Mix by throwing the paste against the inside of the bowl repeatedly for 3-4 minutes — lift a handful and drop it down firmly. The paste will become progressively tackier and more elastic. When it stretches slightly when pulled rather than tearing, it is ready. The baking powder creates micro-bubbles during grilling that produce the bounce. Refrigerate 30 minutes.`,
            tip: `The baking powder quantity (0.5 tsp per 500g meat) is precise — too little and the sausage is dense with no spring; too much and it has a chemical aftertaste and expands unevenly on the grill. Do not use self-raising flour or baking soda as substitutes. The bounce (độ dai) that results is tested by pressing a cooked piece between two fingers — it should spring back immediately and completely. No spring = under-mixed or wrong fat ratio. Partial spring = good. Full immediate spring = perfect.`,
        },
        {
            title: `Shape and skewer`,
            description: `Soak bamboo skewers in water 20 minutes. Wet your hands with cold water. Take approximately 40g of chilled paste and mould around the top third of a skewer, shaping into a smooth cylinder about 8cm long and 2.5cm in diameter. The paste should grip the skewer firmly — press it on in sections rather than trying to wrap it all at once. Smooth the surface with wet fingers. The sausage should be even in diameter throughout for uniform cooking. Refrigerate shaped skewers on a tray until ready to grill.`,
        },
        {
            title: `Make the Đà Lạt dipping sauce`,
            description: `Heat a small pan over medium heat. Add minced garlic and cook in a splash of oil for 30 seconds until fragrant but not coloured. Add hoisin sauce, peanut butter, coconut water, fish sauce, sugar, and rice vinegar. Stir over low heat for 2 minutes until smooth and combined — the peanut butter will loosen in the warm liquid. Remove from heat. Stir in pork lard or neutral oil — it will emulsify into the warm sauce giving it a glossy sheen. Add minced chili. The sauce should be thick enough to coat the back of a spoon but pourable. If too thick, add 1 tbsp more coconut water. Transfer to individual dipping bowls and scatter crushed peanuts over the surface.`,
            tip: `The coconut water instead of plain water is the Đà Lạt distinction that elevates this sauce above the standard Vietnamese hoisin-peanut version. Coconut water contains natural sugars and electrolytes that give the sauce a rounded sweetness and a very faint tropical note. It also thins the sauce more gently than water — the resulting consistency is glossier and clings better to the sausage surface. Use fresh coconut water from a whole coconut if available; packaged coconut water with no additives is the alternative.`,
        },
        {
            title: `Prepare highland vegetables`,
            description: `Wash and dry all herbs and lettuces. Shred kohlrabi on a mandoline or box grater into thin 5cm strips — toss with a pinch of salt, rest 5 minutes, and squeeze gently to remove excess moisture. Blanch bean sprouts in boiling water for exactly 20 seconds — drain and spread on a plate to cool. Cut Đà Lạt cucumber into thin batons. Arrange all vegetables, herbs, and blanched sprouts on a large communal plate. The highland vegetable plate for Đà Lạt nem nướng is more varied than coastal versions — the cool climate allows mustard greens and kohlrabi to grow year-round, and these are what give the rolls their distinctive bite.`,
        },
        {
            title: `Grill the sausages over charcoal`,
            description: `Prepare charcoal grill with medium-hot coals. Brush grill grate with oil. Place skewers on the grate and grill turning every 2 minutes for a total of 10-12 minutes. The surface should develop a deep golden-brown char with darker marks where the paste contacted the grate. Press the sausage at 10 minutes — it should feel firm and spring back immediately (the bounce test). The fat from the fatback will render and drip onto the coals, creating fragrant smoke that bastes the exterior. In Đà Lạt, the cool air means the sausages cool faster than at sea level — serve within 3 minutes of removing from the grill.`,
            tip: `If using a gas grill or cast iron grill pan: preheat to the highest temperature, lightly oil the surface, and grill 3-4 minutes per side on high heat. The char marks are important — they provide a flavour contrast to the sweet dipping sauce. A pale, steamed-looking surface on nem nướng indicates insufficient heat and produces a sausage with no caramelised exterior. The char is not aesthetic; it is flavour.`,
        },
        {
            title: `Wrap and eat`,
            description: `Dip one rice paper sheet in warm water for 3 seconds — just until pliable but still slightly firm. Lay flat on a plate. Place a lettuce leaf in the lower third. Add a few strips of kohlrabi, cucumber batons, a perilla leaf, mint, rau răm, and a pinch of mustard greens. Slide a nem nướng sausage off its skewer and place on top of the vegetables. Add a small amount of bean sprouts. Roll the bottom edge up over the filling, fold the sides in, and roll forward into a tight cylinder. Dip the entire roll into the hoisin-peanut sauce — submerge the end and rotate to coat the side. Eat in two bites.`,
            tip: `The mustard greens inside the Đà Lạt roll are what most clearly distinguish it from Nha Trang and coastal nem nướng. The slight bitterness and peppery note of young mustard greens cuts through the sweet hoisin sauce and the rich pork fat of the sausage in a way that milder lettuces cannot. Use only the youngest, most tender inner leaves — older mustard greens are too fibrous and intensely bitter. In Germany, young mustard greens are available at Asian grocery stores (Senfblätter) or can be grown from seed on a windowsill year-round.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}