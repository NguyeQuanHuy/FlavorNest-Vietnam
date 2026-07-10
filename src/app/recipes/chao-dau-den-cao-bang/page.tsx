'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-dau-den-cao-bang',
    title: `Cao Bằng Black Bean Congee`,
    subtitle: `Cháo Đậu Đen — The Tày morning congee of Cao Bằng: black beans and pork simmered with ginger until the beans dissolve into a deep purple-black broth.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cháo đậu đen is the morning food of the Tày people of Cao Bằng — a thick, deeply coloured congee made by simmering black beans (đậu đen, Vigna mungo or black soybean) with glutinous rice, pork bones, and a generous amount of fresh ginger until the beans have partially dissolved into the broth, turning it a striking deep purple-black with a thick, slightly viscous body. The colour alone distinguishes it from every other Vietnamese congee — nothing else in the Vietnamese breakfast repertoire is this dark.\n\nThe Tày communities of Cao Bằng have eaten cháo đậu đen as a morning staple for generations, particularly in the winter months when the limestone plateau temperatures drop to near freezing before dawn. The black bean is valued in Tày folk medicine as a warming, kidney-nourishing food — the same function assigned to black beans in traditional Chinese medicine, reflecting the deep cultural overlap between the Tày communities and the Zhuang people of adjacent Guangxi. The ginger is not background flavouring but a primary ingredient in quantities that make the congee genuinely warming — the physiological warmth from the gingerol compounds spreading through the body within minutes of the first bowl.\n\nThe congee base is a mixture of glutinous rice and regular jasmine rice — the glutinous rice provides the thick, slightly sticky body that makes Tày cháo different from the looser Vietnamese congee of the lowlands, while the jasmine rice lightens the texture so it remains pourable. The black beans are cooked separately until just beginning to split, then added to the congee in the final 30 minutes so they continue breaking down into the broth without completely dissolving — leaving some whole beans as textural anchors in each bowl.`,
    ingredientSections: [
        {
            title: `Congee base`,
            items: [
                { amount: 150, unit: 'g', name: `glutinous rice (gao nep)`, note: `washed — the Tày thickening agent` },
                { amount: 80, unit: 'g', name: `jasmine rice (gao te)`, note: `washed — lightens the glutinous base` },
                { amount: 1.8, unit: 'L', name: `pork bone broth or water` },
            ],
        },
        {
            title: `Black beans`,
            items: [
                { amount: 150, unit: 'g', name: `dried black beans (dau den)`, note: `soaked overnight 8 hours — Vigna mungo or black soybean; both work` },
                { amount: 600, unit: 'ml', name: `water`, note: `for pre-cooking the beans` },
            ],
        },
        {
            title: `Pork and aromatics`,
            items: [
                { amount: 300, unit: 'g', name: `pork spare ribs (suon heo)`, note: `blanched and rinsed` },
                { amount: 50, unit: 'g', name: `fresh ginger (gung tuoi)`, note: `half sliced thick for the broth, half julienned fine for serving — the Cao Bằng warming quantity` },
                { amount: 3, name: `shallots, charred` },
                { amount: 2, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 20, unit: 'g', name: `rock sugar` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, unit: 'tbsp', name: `sesame oil`, note: `drizzled at serving — the Tày finishing touch` },
            ],
        },
        {
            title: `Optional Tày additions`,
            items: [
                { amount: 2, unit: 'tbsp', name: `roasted peanuts, crushed`, note: `scattered over the surface` },
                { amount: 1, unit: 'tsp', name: `hat doi seeds, toasted and crushed`, note: `the Cao Bằng spice — pinch over each bowl` },
            ],
        },
    ],
    steps: [
        {
            title: `Pre-cook the black beans`,
            description: `Drain soaked black beans. Boil in fresh cold water at a full rolling boil for 10 minutes — this destroys lectins in the bean skins. Drain, discard water. Return to pot with 600ml fresh water. Simmer uncovered 30-40 minutes until the beans are just beginning to split at the skin — the interior is completely soft but most beans are still whole. The cooking liquid will turn deep purple-black. Reserve both the beans and the purple cooking liquid — both go into the congee. The purple liquid is the source of the congee's dramatic colour.`,
            tip: `The two-step black bean cooking — initial lectin-destroying boil with water discarded, followed by the actual cooking in fresh water — is the food safety step that most recipes skip. Black beans contain haemagglutinin lectins that cause nausea if inadequately cooked. The rolling boil for 10 minutes at temperatures above 95°C destroys the lectins; the subsequent gentle simmer softens the beans. Never cook black beans from raw in a slow cooker or at temperatures below boiling — the lectins survive at temperatures below 80°C.`,
        },
        {
            title: `Build the pork broth`,
            description: `Blanch pork ribs in boiling water 5 minutes, rinse. Combine with charred shallots, thick ginger slices, and 1.8 L water or pork bone broth. Bring to a boil, skim foam thoroughly 10 minutes. Reduce to a low simmer 45 minutes until ribs are tender and the broth is flavoured. Season with fish sauce, rock sugar, and salt. The broth should be clean and lightly savoury — the black beans will provide the dominant colour and body in the finished congee.`,
        },
        {
            title: `Cook the glutinous-jasmine rice blend`,
            description: `Add washed glutinous rice and jasmine rice directly to the simmering pork broth. Stir to separate the grains. Cook over medium-low heat uncovered, stirring every 10 minutes, for 35-40 minutes. The glutinous rice will begin dissolving and thickening the broth — the congee will progress from a thin, brothy consistency to a thick, viscous porridge. The jasmine rice grains will remain visible as distinct elements while the glutinous rice integrates into the broth body. This blend produces the specific Tày texture: thicker than lowland Vietnamese congee but less uniform than southern broken-rice congee.`,
        },
        {
            title: `Add the black beans and purple liquid`,
            description: `Add the pre-cooked black beans and their reserved purple cooking liquid to the congee. Stir to combine. The congee will transform immediately from pale beige to a deep purple-grey — the anthocyanin pigments from the black bean skins dissolving into the rice starch matrix. Simmer together 20-25 minutes, stirring frequently. Some beans will break down further into the broth; others will remain whole. This combination of dissolved and whole beans is the texture target — not a smooth purple purée, but a thick congee with bean pieces of varying integrity suspended throughout.`,
            tip: `The anthocyanin pigments that colour the congee are pH-sensitive — they turn more purple in alkaline conditions and more red in acidic conditions. A squeeze of lime into the finished bowl will shift the colour slightly toward red-purple at the point of contact. This colour change is not just visual — the acid also brightens the congee's flavour by cutting through the starchiness of the glutinous rice and amplifying the black bean's earthy depth. The Tày tradition of squeezing lime into cháo đậu đen at serving is both flavour calibration and inadvertent colour chemistry.`,
        },
        {
            title: `Finish with julienned ginger and sesame oil`,
            description: `In the final 5 minutes, stir the julienned fresh ginger into the simmering congee. Unlike the thick slices added at the beginning (which are removed or left as aromatic background), the fine julienne is intended to be eaten — each thread delivers a sharp, immediate ginger warmth that the dissolved ginger from the long simmer cannot. Add the rib meat removed from the bone if desired. Check seasoning — the black beans add their own earthiness and the purple cooking liquid is slightly bitter, so the congee may need more salt or rock sugar than expected.`,
        },
        {
            title: `Serve the Tày morning way`,
            description: `Ladle the deep purple-black congee into bowls — it should pour slowly, thick but not stiff. Arrange pork rib pieces alongside or within the bowl. Scatter spring onion, fried shallots, julienned ginger threads, and coarse black pepper over the surface. Drizzle sesame oil. If using hạt dổi: crush a small pinch directly over the bowl — its resinous-camphor aroma rising from the hot congee surface is the Cao Bằng olfactory signature. Serve with lime. In Cao Bằng's Tày villages, cháo đậu đen is eaten before dawn in winter — the bowl warming the hands before the day's farm work begins, the ginger warming the body from within. The colour of the congee — almost black in the dim morning light — is considered auspicious.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}