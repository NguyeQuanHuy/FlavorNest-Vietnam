'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { useRef, useState, useEffect } from 'react';

export default function BunBoHueStoryPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    const { scrollYProgress } = useScroll({
        target: mounted ? scrollRef : undefined,
        offset: ['start start', 'end end'],
    });

    const progressBar = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    // ── SEO Article Schema ──
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Bún Bò Huế: The Spicy Imperial Soup Vietnam Forgot to Brag About',
        description:
            'The history, technique, and cultural depth of Bún Bò Huế — Vietnam\'s royal-court spicy beef noodle soup. From the kitchens of the Nguyễn emperors to the global food spotlight, this is the dish that should be as famous as phở, and almost is.',
        image: 'https://flavor-nest-vietnam.vercel.app/images/stories/bun-bo-hue-hero.jpg',
        author: {
            '@type': 'Person',
            name: 'Quan Huy Nguyen',
        },
        publisher: {
            '@type': 'Organization',
            name: 'FlavorNest Vietnam',
            logo: {
                '@type': 'ImageObject',
                url: 'https://flavor-nest-vietnam.vercel.app/logo.png',
            },
        },
        datePublished: '2026-05-19',
        dateModified: '2026-05-19',
        keywords:
            'bun bo hue, vietnamese spicy beef noodle soup, hue cuisine, vietnamese royal cuisine, nguyen dynasty food, bun bo hue history, vietnamese noodle soup, central vietnam food',
    };

    return (
        <>
            <Script
                id="bun-bo-hue-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <article ref={scrollRef} style={{ backgroundColor: '#FAFAF7' }}>
                {/* Reading Progress Bar */}
                <motion.div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        height: '3px',
                        backgroundColor: '#BE185D',
                        width: progressBar,
                        zIndex: 100,
                        transformOrigin: 'left',
                    }}
                />

                {/* ── HERO SECTION ── */}
                <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0 }}>
                        <Image
                            src="/images/stories/bun-bo-hue-hero.jpg"
                            alt="A steaming bowl of bún bò Huế with chili oil, lemongrass, and pork knuckle"
                            fill
                            priority
                            quality={85}
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,8,4,0.85) 0%, rgba(26,8,18,0.78) 60%, rgba(35,12,22,0.7) 100%)' }} />
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 65% 50%, rgba(190,24,93,0.18) 0%, transparent 55%)', pointerEvents: 'none' }} />

                    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', position: 'relative', width: '100%' }}>
                        <motion.nav
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 28 }}
                        >
                            {[['Home', '/'], ['Stories', '/stories'], ['Imperial Cuisine', '']].map(([label, href], i) => (
                                <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    {i > 0 && <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>}
                                    {href ? <Link href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                        : <span style={{ color: '#F472B6', fontWeight: 600 }}>{label}</span>}
                                </span>
                            ))}
                        </motion.nav>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}
                        >
                            <div style={{ width: 32, height: 2, background: '#F472B6' }} />
                            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.24em', color: '#F472B6', textTransform: 'uppercase' }}>Imperial Cuisine · Longread</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 8vw, 104px)', fontWeight: 700, color: 'white', margin: '0 0 32px', lineHeight: 0.95, letterSpacing: '-0.02em' }}
                        >
                            Bún Bò<br /><span style={{ color: '#F472B6', fontStyle: 'italic', fontWeight: 400 }}>Huế.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(17px, 2vw, 20px)', maxWidth: 640, lineHeight: 1.7, margin: 0 }}
                        >
                            The spicy, lemongrass-deep noodle soup that came out of the royal kitchens of an imperial city — and why most of Vietnam quietly thinks it is better than phở.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ delay: 1.5, duration: 2.5, repeat: Infinity }}
                        style={{
                            position: 'absolute',
                            bottom: '24px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '11px',
                            letterSpacing: '2px',
                            fontFamily: 'DM Sans, sans-serif',
                            textAlign: 'center',
                        }}
                    >
                        SCROLL TO READ ↓
                    </motion.div>
                </section>

                {/* Article Body */}
                <div
                    style={{
                        maxWidth: '780px',
                        margin: '0 auto',
                        padding: '80px 24px 40px',
                        fontFamily: 'Georgia, "Iowan Old Style", "Palatino Linotype", serif',
                        color: '#2D1A0E',
                    }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontSize: '1.45rem',
                            lineHeight: 1.65,
                            fontStyle: 'italic',
                            color: '#4B2E1A',
                            marginBottom: '48px',
                            paddingLeft: '24px',
                            borderLeft: '3px solid #BE185D',
                        }}
                    >
                        The first sip is unmistakable. A wave of lemongrass arrives at the front of the palate, followed by the brick-red heat of chili oil, followed by a long savory bass note from fermented shrimp paste. The broth does not whisper. It announces itself.
                    </motion.p>

                    <Section>
                        <DropCap>I</DropCap>n any honest ranking of Vietnamese noodle soups, <em>phở</em> is famous for reasons that have a great deal to do with marketing and very little to do with cooking. The dish is well-known. The dish travels. The dish is the easiest of Vietnam's noodle traditions for a Western palate to enter. None of these facts make it the best. Ask a Vietnamese chef — quietly, after the tourists have left — and a striking number will tell you that the most ambitious bowl in Vietnamese cuisine is not phở. It is <em>bún bò Huế</em>.
                    </Section>

                    <Section>
                        Translated literally, the name means "Huế beef noodles." The translation undersells the dish. Bún bò Huế is a long-simmered broth of beef and pork bones, intensely spiked with lemongrass, brick-red with chili oil, slightly funky with fermented shrimp paste, ladled over thick round rice noodles, and topped with a small architecture of protein: slices of rare beef, chunks of pork knuckle, sometimes pork blood cubes, sometimes a circle of crab-and-pork sausage called <em>chả Huế</em>. A platter of herbs, banana flower shavings, and lime wedges arrives alongside. The eater finishes the dish at the table.
                    </Section>

                    <Section>
                        It is a complicated bowl. It is also, by general agreement among the people who have eaten both, more complicated than phở — deeper, hotter, more theatrical, more brazenly spiced. Phở is restrained Hanoi cooking, descended from French colonial economy. Bún bò Huế is loud central Vietnamese cooking, descended from a royal court that had centuries to perfect what abundance could do to a kitchen.
                    </Section>

                    <PullQuote>
                        "Phở got the headlines. Bún bò Huế got the technique."
                    </PullQuote>

                    <InlineImage
                        src="/images/stories/bun-bo-hue-broth.jpg"
                        alt="A close-up of bún bò Huế broth, glowing red with chili oil and lemongrass"
                        caption="The broth: beef and pork bones simmered with lemongrass, finished with annatto oil for color and fermented shrimp paste for depth. Hours of work for one bowl."
                    />

                    <H2>The Kitchen of an Empire</H2>

                    <Section>
                        To understand bún bò Huế, you first have to understand Huế. The city sits on the Perfume River in central Vietnam, an hour's flight south of Hanoi, and from 1802 to 1945 it was the capital of the country. The Nguyễn dynasty — the last imperial family of Vietnam — held court here through ten emperors and a hundred and forty-three years of patronage, war, and unhurried bureaucracy. They built the Imperial Citadel that still dominates the city today. They commissioned the royal tombs that sit, on misty hills outside town, in the same Confucian geometry the dynasty had used for generations. And they ate.
                    </Section>

                    <Section>
                        The cooking of the Nguyễn court was the most refined cuisine Vietnam has ever produced. By some estimates, of the roughly two thousand seven hundred dishes documented in Vietnamese culinary history, nearly seventeen hundred originated in Huế — almost two-thirds of the country's traditional dishes coming from a city that has never represented more than two or three percent of its population. This is not an accident. A royal court produces food the way a royal court produces poetry: in volume, with patronage, with the time and resources to obsess over technique.
                    </Section>

                    <Section>
                        Huế cuisine, as a category, is identifiable by certain qualities. The dishes are small — many are served in tiny portions that emphasize precision over abundance. They are colorful — a Huế meal looks like a watercolor. They are aggressively seasoned — central Vietnam grows the country's hottest chilies and the cuisine reflects it. And they are ceremonial — most royal dishes were designed to be eaten as part of a larger composed meal, not as a standalone main course.
                    </Section>

                    <Section>
                        Bún bò Huế is the great exception. It is the one Huế dish that is unambiguously a meal in itself — substantial, working-class, generous. It is, in some quiet way, the city's gift back to the people who had no access to the imperial kitchen.
                    </Section>

                    <SectionDivider />

                    <H2>From Village Ritual to National Dish</H2>

                    <Section>
                        The origins of bún bò Huế are not, despite the elegant story most travel articles tell, a direct invention of the imperial court. According to Mai Thị Trà, a 91-year-old Huế culinary artisan whose research on the cuisine of her city is the closest thing to a primary source available, the dish has roots in something humbler — and older — than royal cooking.
                    </Section>

                    <Section>
                        It began, she has said in interviews, with spiritual ritual. In the villages around Huế, after a ceremonial offering of beef during a festival, the meat was traditionally not wasted. The leftover beef was cooked into a broth and served with sticky rice. This was the proto-version of bún bò — a village dish, simple, born from the practical refusal to discard the sacred meal after the spirits had been honored.
                    </Section>

                    <Section>
                        Over centuries, rice vermicelli — <em>bún</em> — became cheaper, more abundant, and increasingly preferred over sticky rice for everyday eating. The village dish evolved. Sticky rice gave way to noodles. Plain broth gave way to the lemongrass-and-chili character that defined Huế cooking. New toppings appeared as the dish moved from village kitchens into the city: pork knuckle for body, crab-and-pork rolls (<em>chả Huế</em>) for refinement, blood cubes for the traditional eaters who valued every part of the animal. By the late nineteenth century, the dish we now call bún bò Huế had taken essentially its modern shape.
                    </Section>

                    <Section>
                        The legend that bún bò Huế was invented in the royal court is partly true — many of the refinements that distinguish a great bowl from a mediocre one were developed by court cooks, who had the time and the imperial patronage to obsess over the precise lemongrass-to-broth ratio, the exact shade of red the annatto oil should produce, the specific cut of pork knuckle that gave the best gelatin. But the dish itself is older than the dynasty. The court took an existing village soup and refined it. They did not invent it.
                    </Section>

                    <PullQuote>
                        Bún bò Huế is what happens when a village dish gets handed to a royal kitchen — and survives the encounter.
                    </PullQuote>

                    <H2>The Architecture of a Bowl</H2>

                    <Section>
                        A proper bún bò Huế has, at minimum, eight distinct components. Each is doing something specific. Skip one, and the bowl will tell on you.
                    </Section>

                    <Section>
                        <strong>The broth:</strong> A long-simmered stock of beef leg bones and pork neck bones, typically eight to ten hours, building body from marrow and collagen. The lemongrass goes in early, in generous bundles, and the kitchen smells of it for the entire day.
                    </Section>

                    <Section>
                        <strong>The seasoning paste:</strong> Fermented shrimp paste (<em>mắm ruốc Huế</em>) is the secret weapon. A spoonful stirred into the broth in the last hour adds a deep funky savoriness that nothing else in the kitchen can replicate. Tourists who skip this ingredient end up with a broth that tastes like a vague pho with chili.
                    </Section>

                    <Section>
                        <strong>The chili oil:</strong> Annatto seeds heated in oil with chili and garlic produce the brick-red oil that gives the broth its signature color and its first wave of heat. The color is not for show — annatto's slight earthy bitterness is part of the flavor.
                    </Section>

                    <Section>
                        <strong>The noodles:</strong> Thick round rice vermicelli, distinctly different from the flat noodles of phở. The roundness matters — the noodles need to be substantial enough to stand up to the assertive broth.
                    </Section>

                    <Section>
                        <strong>The beef:</strong> Slices of rare beef shank, sometimes brisket, sometimes a small amount of raw eye-of-round that cooks in the hot broth at the table.
                    </Section>

                    <Section>
                        <strong>The pork knuckle:</strong> A chunk of slow-braised pork knuckle, gelatinous and rich, that anchors the bowl. In traditional Huế cooking this is essential. Skip it, and the bowl loses its body.
                    </Section>

                    <Section>
                        <strong>The chả Huế:</strong> A crab-and-pork roll, steamed, sliced into rounds. This is the imperial touch — a refined element that the village version of bún bò did not have, added during the centuries when the dish was being polished by court cooks.
                    </Section>

                    <Section>
                        <strong>The herb plate:</strong> Banana blossom shavings (essential), bean sprouts, sawtooth coriander, perilla, Thai basil, lime wedges. The eater adds them at the table, in handfuls, to taste.
                    </Section>

                    <InlineImage
                        src="/images/stories/bun-bo-hue-toppings.jpg"
                        alt="A platter of bún bò Huế toppings — pork knuckle, beef, chả, herbs"
                        caption="The toppings: pork knuckle, sliced beef shank, chả Huế (crab-and-pork roll), banana blossom shavings, perilla, sawtooth coriander, lime. The eater assembles the bowl."
                    />

                    <SectionDivider />

                    <H2>The Anthony Bourdain Test</H2>

                    <Section>
                        Anthony Bourdain, who spent more time eating in Vietnam than perhaps any Western chef of his generation, famously used bún bò Huế as a relationship-screening device. On an episode of Parts Unknown, asked what he looked for in a romantic partner, he answered without hesitation: someone who would eat bún bò Huế — pork blood cubes and all — without flinching. "If she said, 'Oh, I don't know, there's blood and stuff in there,' that would be a relationship-ender to me. I'm not kidding."
                    </Section>

                    <Section>
                        Bourdain's test was funny but not arbitrary. Bún bò Huế is, in a real way, the bowl that separates curious eaters from committed ones. The blood cubes are not the issue — pig blood, coagulated and cubed, is a mild ingredient in flavor terms, more about texture than taste. The issue is what the bowl represents. Pho is approachable. Bánh mì is approachable. Bún bò Huế asks more of you. The broth is hotter, the herbs are stronger, the toppings are less polite. To eat it well is to accept that Vietnamese cooking does not, when it gets serious, simplify itself for foreign palates.
                    </Section>

                    <Section>
                        This is also the dish's biggest obstacle to global fame. For thirty years, phở has been the dish Vietnam exported and the West embraced. Bún bò Huế stayed home — partly because the ingredients (fermented shrimp paste, annatto oil, banana blossom) were harder to source abroad, partly because the flavor profile was harder to translate. The dish was, for a long time, Vietnam's secret. It is not anymore.
                    </Section>

                    <PullQuote>
                        Phở left Vietnam in the 1970s. Bún bò Huế stayed home, almost on purpose, for another forty years.
                    </PullQuote>

                    <H2>The Bowl Goes Global</H2>

                    <Section>
                        Since the early 2020s, bún bò Huế has been quietly catching up. Vietnamese-American restaurants in Southern California, Houston, and Boston have started serving it alongside phở. Dedicated bún bò Huế shops have opened in Sydney, Paris, and Berlin. Food media has caught on — search interest in "bún bò Huế" on Google has grown steadily year over year since 2022, while interest in "phở recipe" has plateaued.
                    </Section>

                    <Section>
                        What is interesting about this rise is that the dish has barely changed in the process. Pho, when it traveled, was simplified. The Saigon and Hanoi versions diverged abroad into a single homogenized "Vietnamese phở" that bore only partial resemblance to either original. Bún bò Huế has resisted this. The diaspora versions — at the best shops, at least — still use real <em>mắm ruốc</em>. They still include the pork knuckle. They still serve the herb plate the way Huế cooks intend. The dish has held its shape because the dish's most committed eaters are themselves Huế natives, and they do not allow the recipe to drift.
                    </Section>

                    <Section>
                        This is a small, important fact about food culture. Some dishes survive globalization by adapting. Other dishes survive it by refusing. Bún bò Huế has done the second. The recipe a chef in Houston serves in 2026 is recognizably the recipe a small restaurant on Nguyễn Du street in Huế served in 1986, which was recognizably the recipe the imperial kitchens served in 1886, which was recognizably the recipe villagers cooked around Huế in 1786 after a festival ended and the spirits had been honored.
                    </Section>

                    <SectionDivider />

                    <H2>Where to Eat the Real Thing</H2>

                    <Section>
                        If you find yourself in Huế and want to eat bún bò Huế at its source, three places are worth knowing:
                    </Section>

                    <Section>
                        <strong>Bún Bò Mụ Rớt, 4 Nguyễn Công Trứ.</strong> The single most famous bún bò Huế shop in the city. The recipe has not changed in three generations. The shop opens at five in the morning and is usually sold out by ten. The broth costs around fifty thousand đồng — about two euros — and is, by general consensus, the benchmark against which every other bowl in Vietnam is measured.
                    </Section>

                    <Section>
                        <strong>Bún Bò Bà Tuyết, 47 Nguyễn Công Trứ.</strong> A few doors down from Mụ Rớt, with a quieter atmosphere and a slightly less assertive broth. The pork knuckle here is, in my view, the best in the city — slow-braised until the gelatin coats your lips.
                    </Section>

                    <Section>
                        <strong>The Đông Ba market stalls.</strong> The central market in Huế has, at any given morning, three or four bún bò vendors set up at the food court inside. The bowls cost less than at the standalone shops, the seating is rougher, and the broth is — sometimes — every bit as good. Look for the stall with the longest line of locals at seven a.m.
                    </Section>

                    <Section>
                        Outside Huế, the best bún bò Huế in Vietnam is widely considered to be in Saigon — specifically the cluster of Huế-immigrant restaurants in Phú Nhuận and Bình Thạnh districts, where Huế families displaced after 1975 built a small culinary outpost. The bowl at Bún Bò Huế Đông Ba in Phú Nhuận is, on a good day, indistinguishable from the original.
                    </Section>

                    <H2>How to Eat Bún Bò Huế Properly</H2>

                    <Section>
                        The bowl arrives at the table, hot enough that the chili oil is still moving. The herb platter arrives separately. The first thing to do is taste the broth — a single spoonful, plain, before adding anything. This is how you judge the kitchen. A good bún bò Huế broth is intense from the first sip — lemongrass forward, then heat, then the deep umami of the shrimp paste — but it is not muddied. The components separate cleanly on the tongue.
                    </Section>

                    <Section>
                        Then add. A small handful of banana blossom for crunch. A few sprigs of perilla and sawtooth coriander, torn rather than chopped. A squeeze of lime. A few slices of bird's-eye chili if the heat is not yet sufficient. Stir gently. Try a noodle. Add more herbs.
                    </Section>

                    <Section>
                        Eat with chopsticks in one hand and a soup spoon in the other. Alternate noodles, broth, meat, herbs. The bowl is not meant to be drunk like phở — it is too dense, too aggressive — but the broth at the bottom, scooped with the spoon and finished after the noodles, is the best part. By the time you reach it, the broth has absorbed everything you added to the bowl: the lime, the herbs, the chili, the small pieces of meat that escaped your chopsticks. That last spoonful, more than any other bite, is the dish.
                    </Section>

                    <PullQuote>
                        The first sip tells you about the kitchen. The last spoonful tells you about the dish.
                    </PullQuote>

                    <SectionDivider />

                    <H2>A Final Note</H2>

                    <Section>
                        It is morning on Nguyễn Công Trứ street in Huế. The shop has been open for an hour. The owner, a woman in her sixties who learned the recipe from her mother who learned it from her mother, is ladling broth into bowls at a pace that suggests the line outside will be cleared by ten. The lemongrass smell has filled the entire block. Inside, a small group of regulars — judging by the way they sit — has been eating here for at least twenty of the four hundred years the dish has, in some form, existed.
                    </Section>

                    <Section>
                        Bún bò Huế is, in the end, a portrait of central Vietnam. A village dish, lifted by a royal court, returned to the people, refined over four centuries, defended by a diaspora that has refused to let it be simplified. It is hotter than phở. It is louder than phở. It is more complicated than phở. By any reasonable standard, it is also better. Vietnam, with characteristic modesty, has not been in a hurry to point this out.
                    </Section>

                    <Section>
                        The lemongrass is on the stove. The broth is ready. The bowl is waiting. Some dishes need a marketing campaign. Some dishes only need to be tasted.
                    </Section>

                    <SectionDivider />

                    {/* Tags */}
                    <div
                        style={{
                            marginTop: '32px',
                            display: 'flex',
                            gap: '8px',
                            flexWrap: 'wrap',
                        }}
                    >
                        {['#BunBoHue', '#Hue', '#NguyenDynasty', '#VietnameseNoodleSoup', '#ImperialCuisine', '#CentralVietnam', '#Longread'].map(tag => (
                            <span
                                key={tag}
                                style={{
                                    padding: '6px 14px',
                                    backgroundColor: 'rgba(190,24,93,0.08)',
                                    color: '#BE185D',
                                    borderRadius: '999px',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    fontFamily: 'DM Sans, sans-serif',
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Related */}
                    <div
                        style={{
                            marginTop: '48px',
                            padding: '32px',
                            backgroundColor: '#F5EDE3',
                            borderRadius: '20px',
                        }}
                    >
                        <p
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '11px',
                                color: '#BE185D',
                                fontWeight: 700,
                                letterSpacing: '2px',
                                marginBottom: '16px',
                            }}
                        >
                            CONTINUE READING
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <Link href="/stories/symphony-of-hanois-dawn" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                The Symphony of Hanoi's Dawn (Phở) →
                            </Link>
                            <Link href="/stories/the-soul-of-vietnamese-cooking-fish-sauce" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                The Soul of Vietnamese Cooking: Fish Sauce →
                            </Link>
                            <Link href="/stories/vietnamese-herb-plate-guide" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                The Vietnamese Herb Plate Guide →
                            </Link>
                            <Link href="/stories/the-art-of-banh-mi" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                The Art of Bánh Mì →
                            </Link>
                        </div>
                    </div>

                    <div style={{ marginTop: '48px', textAlign: 'center' }}>
                        <Link href="/stories" style={{ color: '#BE185D', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
                            ← Back to all stories
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
}

// ── Sub-components ──

function Section({ children }: { children: React.ReactNode }) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            style={{
                fontSize: '1.15rem',
                lineHeight: 1.85,
                marginBottom: '28px',
                color: '#2D1A0E',
            }}
        >
            {children}
        </motion.p>
    );
}

function H2({ children }: { children: React.ReactNode }) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 700,
                color: '#2D1A0E',
                marginTop: '40px',
                marginBottom: '20px',
                lineHeight: 1.2,
            }}
        >
            {children}
        </motion.h2>
    );
}

function PullQuote({ children }: { children: React.ReactNode }) {
    return (
        <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
                margin: '48px 0',
                padding: '24px 0',
                borderTop: '2px solid #BE185D',
                borderBottom: '2px solid #BE185D',
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                lineHeight: 1.4,
                color: '#BE185D',
                textAlign: 'center',
                fontWeight: 400,
            }}
        >
            {children}
        </motion.blockquote>
    );
}

function DropCap({ children }: { children: React.ReactNode }) {
    return (
        <span
            style={{
                float: 'left',
                fontFamily: 'Playfair Display, serif',
                fontSize: '5rem',
                fontWeight: 700,
                lineHeight: 0.85,
                color: '#BE185D',
                paddingRight: '12px',
                paddingTop: '6px',
            }}
        >
            {children}
        </span>
    );
}

function SectionDivider() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '48px 0',
                gap: '12px',
            }}
        >
            {[0, 1, 2].map(i => (
                <span
                    key={i}
                    style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#BE185D',
                        opacity: 0.6,
                    }}
                />
            ))}
        </div>
    );
}

function InlineImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
    return (
        <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            style={{ margin: '56px 0' }}
        >
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 10',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: '#EFE6DA',
                    boxShadow: '0 16px 40px rgba(190,24,93,0.12)',
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    quality={85}
                    sizes="(max-width: 780px) 100vw, 780px"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <figcaption
                style={{
                    marginTop: '14px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: '#8B6F5A',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    lineHeight: 1.6,
                    padding: '0 8px',
                }}
            >
                {caption}
            </figcaption>
        </motion.figure>
    );
}
