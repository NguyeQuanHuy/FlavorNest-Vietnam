'use client';
import StoryLayout, { StoryData } from '../../stories/_components/StoryLayout';

const story: StoryData = {
    slug: 'choose-meat-fish',
    category: 'How To',
    categoryHref: '/how-to',
    tag: 'Essential',
    tagColor: '#D97706',
    title: 'How to Choose Meat and Fish for Vietnamese Cooking',
    subtitle: 'What Vietnamese home cooks look for at the market — and why freshness is the only non-negotiable',
    date: 'June 2026',
    readTime: '8 min read',
    heroImage: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1600&q=85',
    sections: [
        { body: 'In Vietnam, the market happens at 5am. By 7am, the best fish are gone. By 9am, serious cooks have already gone home and started cooking. This reflects a fundamental truth about Vietnamese cooking: the quality of the raw ingredient determines the quality of the dish more than any technique or seasoning. Choosing well at the source is the first and most important cooking skill.' },
        { heading: 'How to Choose Pork', body: 'Vietnamese cooking uses pork more than any other protein. Look for pork with a pale pink to rose-red colour. The flesh should be firm and slightly moist but not wet or sticky. Press it gently: good pork springs back. Old pork leaves a dent. The fat should be white and firm, never yellow or soft. For pork belly, you want equal layers of fat and lean meat, at least three visible layers.', pullQuote: 'The Vietnamese market test for pork: press, smell, look at the fat. Three seconds, three answers.' },
        { heading: 'How to Choose Chicken', body: 'Free-range chicken is the Vietnamese standard. The flesh is leaner and slightly tougher than industrial chicken, which means it needs longer cooking but produces far more flavour. Look for skin that is pale yellow to gold, not white. The flesh underneath should be pink, not grey. Avoid any chicken that smells sour or has a sticky surface. For pho ga, buy a whole bird with the head and feet if possible.', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d11d36?auto=format&fit=crop&w=1200&q=85', imageCaption: 'Free-range Vietnamese chicken — leaner, more flavourful, worth the extra cost' },
        { heading: 'How to Choose Beef', body: 'For pho bo, the beef must be sliced paper-thin and placed raw in the bowl. This means the beef must be impeccably fresh. Choose lean cuts: eye of round, sirloin, or flank. The colour should be bright cherry red. Brown edges indicate oxidation and age. Freeze the beef for 30 minutes before slicing — this firms it up and makes paper-thin slices possible without a deli slicer.', pullQuote: 'For pho bo, the beef must be good enough to eat raw. That is the standard.' },
        { heading: 'How to Choose Fish', body: 'Fresh fish has no smell. This is the most important rule in Vietnamese fish buying. A fresh fish smells of the sea — clean, faintly oceanic, slightly mineral. It does not smell of fish. Look at the eyes: they should be clear, bright, and slightly protruding. The gills should be bright red, not brown or grey. The skin should be firm and slightly slippery, not mushy or dry. Buy whole fish whenever possible.', image: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=1200&q=85', imageCaption: 'Clear eyes, bright gills, firm flesh — the three signs of a fresh fish' },
        { heading: 'How to Choose Shrimp and Seafood', body: 'Fresh shrimp should be translucent, slightly bluish-grey, and firm. The shell should be tight against the flesh. If the head falls off when you pick up the shrimp, it has been dead too long. For crab and shellfish, buy live whenever possible. A live crab moves when you touch it. A live clam or mussel closes when tapped. Live seafood cooked immediately is incomparably better than anything that has been dead for hours.' },
        { heading: 'The Market Routine', body: 'Vietnamese home cooks do not plan their menu before going to the market. They go to the market and let the best-looking ingredients decide what they will cook. If the pork belly looks exceptional today, cook pork. If the fishmonger has live tiger prawns, cook prawns. The recipe is a framework; the ingredient is the destination. Go early, bring cash, and build a relationship with your butcher and fishmonger.', pullQuote: 'Vietnamese cooks do not plan the menu before the market. The market plans the menu.' },
    ],
    relatedLinks: [
        { label: 'How to Balance Vietnamese Flavors', href: '/how-to/balance-flavors', emoji: '⚖️' },
        { label: 'How to Season Vietnamese Food', href: '/how-to/season-vietnamese-food', emoji: '🧂' },
        { label: 'Browse All Ingredients', href: '/ingredients', emoji: '🌿' },
    ],
};

export default function Page() {
    return <StoryLayout story={story} />;
}