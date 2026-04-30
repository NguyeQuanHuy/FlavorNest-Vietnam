'use client'

/**
 * FlavorNest Vietnam — Main Dishes Page
 * src/app/recipes/main-dishes/page.tsx
 */

import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo, useEffect, useCallback } from 'react'
import { Utensils, Clock, Globe, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useFavorites } from '@/hooks/useFavorites'

// ─── Data ─────────────────────────────────────────────────────────────────────
const RECIPES: Recipe[] = [
    {
        slug: 'thit-kho-tau',
        title: 'Caramelised Pork & Eggs',
        subtitle: 'Thit kho tau',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Easy', time: '1.5 hrs',
        rating: '4.9', reviews: 312, cal: 480, tag: 'Comfort Classic', tagColor: '#D97706',
        description: "Pork belly glistens amber under a caramel lacquer that catches the light like dark honey. Slow-braised for hours in coconut water with whole boiled eggs and deep palm-sugar caramel, the fat turns silky while the yolks drink up the sauce. Spooned over hot rice on a rainy afternoon, it tastes like every Vietnamese grandmother's kitchen.",
        tags: ['Pork', 'Eggs', 'Slow Cook', 'Coconut'],
    },
    {
        slug: 'ca-kho-to',
        title: 'Clay Pot Caramelised Fish',
        subtitle: 'Ca kho to',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Easy', time: '45 min',
        rating: '4.8', reviews: 198, cal: 320, tag: 'Southern Icon', tagColor: '#059669',
        description: "Thick catfish fillets arrive still bubbling, coated in a near-black caramel that smells of burnt sugar, ginger and chilli. Layered with fish sauce, pork fat and cracked pepper, then braised slowly in an earthenware pot until the sauce clings like varnish. The pot keeps sizzling at the table — one sniff and no one waits politely for rice.",
        tags: ['Fish', 'Caramel', 'Clay Pot', 'Spicy'],
    },
    {
        slug: 'bo-luc-lac',
        title: 'Shaking Beef',
        subtitle: 'Bo luc lac',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Easy', time: '25 min',
        rating: '4.9', reviews: 276, cal: 420, tag: 'Restaurant Favourite', tagColor: '#7C3AED',
        description: "Cubes of tender beef hit a screaming-hot wok with butter, garlic and oyster sauce, caramelising in seconds while the cook 'shakes' the pan to toss them. The crust is deep and glossy; the centre stays blushing pink. Served on peppery watercress with a lime-salt-pepper dip — the Saigon steakhouse classic French colonists left behind.",
        tags: ['Beef', 'Wok', 'Quick', 'French-Inspired'],
    },
    {
        slug: 'ga-kho-gung',
        title: 'Ginger Braised Chicken',
        subtitle: 'Ga kho gung',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c7?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Easy', time: '40 min',
        rating: '4.7', reviews: 143, cal: 360, tag: 'Weeknight Hero', tagColor: '#EA580C',
        description: "Bone-in chicken thighs simmer in fish sauce, palm sugar and a generous fistful of julienned young ginger until the sauce reduces to a sticky, fragrant glaze. The ginger turns sweet and mellow, the skin burnished mahogany. A weeknight staple in every Northern household — cheap, fast, and the kind of dish that makes plain rice feel like home.",
        tags: ['Chicken', 'Ginger', 'Quick', 'Family'],
    },
    {
        slug: 'suon-nuong-a',
        title: 'Lemongrass Pork Ribs',
        subtitle: 'Suon nuong sa',
        image: 'https://images.unsplash.com/photo-1558030137-a56c1b004fa3?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Medium', time: '2 hrs',
        rating: '4.8', reviews: 167, cal: 510, tag: 'Grill Night', tagColor: '#D97706',
        description: "Ribs marinate overnight in crushed lemongrass, garlic, fish sauce and a whisper of honey, then meet glowing charcoal until the edges char and the fat renders into smoke. Each bite is sweet, smoky and citrus-bright, with that unmistakable Saigon street-corner perfume. Serve with broken rice, pickled carrots and a fried egg — cơm tấm, the city's favourite dinner.",
        tags: ['Pork', 'Grilled', 'Lemongrass', 'BBQ'],
    },
    {
        slug: 'ca-chien-sot-ca',
        title: 'Crispy Fish in Tomato Sauce',
        subtitle: 'Ca chien sot ca',
        image: 'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Easy', time: '30 min',
        rating: '4.6', reviews: 112, cal: 340, tag: 'Northern Home Cook', tagColor: '#0284C7',
        description: "A whole pan-fried fish, skin shattering-crisp, bathes in a vibrant tomato sauce loud with scallions and dill. The crunch of the crust against the tangy sauce is pure Hanoi home cooking — unfussy, balanced, endlessly comforting. It's the dish every Northern mother makes when she wants to show love without saying anything at all.",
        tags: ['Fish', 'Tomato', 'Crispy', 'Quick'],
    },
    {
        slug: 'dau-hu-sot-ca',
        title: 'Tofu in Tomato Sauce',
        subtitle: 'Dau hu sot ca',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Easy', time: '20 min',
        rating: '4.7', reviews: 189, cal: 220, tag: 'Vegan Favourite', tagColor: '#059669',
        description: "Golden squares of fried tofu, crisp at the edges and custardy inside, simmer in a bright tomato-scallion sauce until they soak up every drop. Humble, vegan, and on the table of nearly every Vietnamese family at least once a week. Proof that the best comfort food needs nothing more than three ingredients and a little patience.",
        tags: ['Tofu', 'Vegan', 'Tomato', 'Quick'],
    },
    {
        slug: 'bo-nuong-la-lot',
        title: 'Beef in Betel Leaf',
        subtitle: 'Bo nuong la lot',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Medium', time: '45 min',
        rating: '4.8', reviews: 134, cal: 380, tag: 'Party Dish', tagColor: '#BE185D',
        description: "Seasoned ground beef — perfumed with lemongrass, garlic and a hint of five-spice — wrapped snugly in glossy betel leaves, then grilled until the leaves blister and release their peppery, smoky aroma. One of Vietnam's great party dishes, eaten in rice paper rolls with herbs, pickles and nước chấm, fingers sticky, beer cold, everyone talking at once.",
        tags: ['Beef', 'Grilled', 'Herbs', 'Wraps'],
    },
    {
        slug: 'cha-ca-la-vong',
        title: "Hanoi Turmeric Fish with Dill",
        subtitle: 'Cha ca La Vong',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Medium', time: '40 min',
        rating: '4.9', reviews: 221, cal: 350, tag: "Hanoi's Best", tagColor: '#D97706',
        description: "Arguably Hanoi's greatest dish. Snakehead fillets marinate in turmeric and galangal-fermented shrimp paste, then finish sizzling tableside in a pan of dill and spring onion so abundant it looks like a green bouquet. Eaten with rice vermicelli, roasted peanuts, fresh herbs and mắm tôm — a ritual invented on Chả Cá Street and jealously guarded for 150 years.",
        tags: ['Fish', 'Turmeric', 'Dill', 'Heritage'],
    },
    {
        slug: 'bun-rieu',
        title: 'Crab & Tomato Noodle Soup',
        subtitle: 'Bún Riêu',
        image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Medium', time: '1.5 hrs',
        rating: '4.8', reviews: 187, cal: 410, tag: 'Market Classic', tagColor: '#DC2626',
        description: "A crimson broth built from fresh paddy crab and ripe tomatoes, crowned with fluffy crab-and-egg rafts that float like clouds. The sour note comes from fermented rice vinegar and a whisper of shrimp paste. Ladled over rice vermicelli with a mountain of water spinach, perilla and banana blossom, it's Hanoi's favourite rainy-day lunch.",
        tags: ['Crab', 'Tomato', 'Noodles', 'Tangy'],
    },
    {
        slug: 'banh-canh-cua',
        title: 'Thick Tapioca Noodles with Crab',
        subtitle: 'Bánh Canh Cua',
        image: 'https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Medium', time: '1 hr',
        rating: '4.7', reviews: 156, cal: 480, tag: 'Saigon Street', tagColor: '#D97706',
        description: "Fat, chewy tapioca-and-rice noodles suspended in a velvety orange broth thickened to a near-gravy with crab fat. Generous chunks of mud crab, quail eggs and pork knuckle bob at the surface, finished with cilantro and a crack of black pepper. Eaten with chopsticks and a spoon — slurping is mandatory, table manners optional.",
        tags: ['Crab', 'Noodles', 'Rich', 'Saigon'],
    },
    {
        slug: 'canh-chua-ca',
        title: 'Southern Sour Fish Soup',
        subtitle: 'Canh Chua Cá',
        image: 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Easy', time: '40 min',
        rating: '4.8', reviews: 174, cal: 290, tag: 'Mekong Favourite', tagColor: '#059669',
        description: "The Mekong Delta in a bowl — a bright, herbaceous broth soured with tamarind, sweetened with pineapple, and scattered with tomato wedges, okra and elephant-ear stems. Chunks of catfish simmer just until tender, then the whole thing is showered with rice paddy herb and fried garlic. Tart, sweet, savoury and fragrant in a single spoonful.",
        tags: ['Fish', 'Tamarind', 'Pineapple', 'Herbs'],
    },
    {
        slug: 'canh-kho-qua-nhoi-thit',
        title: 'Stuffed Bitter Melon Soup',
        subtitle: 'Canh Khổ Qua Nhồi Thịt',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Medium', time: '1 hr',
        rating: '4.6', reviews: 128, cal: 260, tag: 'Lunar New Year', tagColor: '#7C3AED',
        description: "Whole bitter melons hollowed out and stuffed with seasoned pork and wood ear mushrooms, then simmered in a clear pork broth until the skin turns jade-green and tender. The name khổ qua means 'bitterness passes' — eaten at Tết to leave the previous year's hardships behind. Bitter, savoury, unexpectedly comforting.",
        tags: ['Pork', 'Bitter Melon', 'Tết', 'Soup'],
    },
    {
        slug: 'canh-rau-ngot-thit-bam',
        title: 'Sweet Leaf Soup with Minced Pork',
        subtitle: 'Canh Rau Ngót Thịt Băm',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Easy', time: '20 min',
        rating: '4.7', reviews: 156, cal: 140, tag: 'Daily Staple', tagColor: '#059669',
        description: "A clear, jade-green broth where bruised sweet leaves release their slightly nutty, almost sweet flavour into lightly seasoned pork stock. The minced pork forms tender flecks throughout. Every Northern household has this soup on the table at least twice a week — cooling in summer, nourishing year-round, ready in the time it takes to cook a pot of rice.",
        tags: ['Vegetables', 'Pork', 'Light', 'Quick'],
    },
    {
        slug: 'rau-muong-xao-toi',
        title: 'Stir-Fried Water Spinach with Garlic',
        subtitle: 'Rau Muống Xào Tỏi',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Easy', time: '10 min',
        rating: '4.8', reviews: 203, cal: 120, tag: 'Everyday Green', tagColor: '#059669',
        description: "Water spinach hits a screaming wok with smashed garlic, a splash of fish sauce and nothing else — cooked so fast the stems stay crunchy and the leaves barely wilt. The national green vegetable of Vietnam, served at every family meal from Hanoi to the Mekong. Ten minutes, three ingredients, impossible to get tired of.",
        tags: ['Vegan', 'Garlic', 'Quick', '3-Ingredient'],
    },
    {
        slug: 'trung-chien',
        title: 'Vietnamese Fried Egg Omelette',
        subtitle: 'Trứng Chiên',
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Easy', time: '10 min',
        rating: '4.6', reviews: 142, cal: 220, tag: 'Home Cook', tagColor: '#D97706',
        description: "Eggs beaten with a splash of fish sauce, a handful of spring onion and sometimes a spoonful of minced pork, fried in generous oil until the edges go lace-crisp and the centre stays just set. The unsung hero of Vietnamese home cooking — cheap, fast, and the dish every student learns to make when they leave home.",
        tags: ['Eggs', 'Quick', 'Family', 'Budget'],
    },
    {
        slug: 'thit-rang-chay-canh',
        title: 'Caramelised Crispy Pork',
        subtitle: 'Thịt Rang Cháy Cạnh',
        image: 'https://images.unsplash.com/photo-1625398407937-2993c7d2b33b?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Easy', time: '35 min',
        rating: '4.8', reviews: 189, cal: 430, tag: 'Rice Killer', tagColor: '#EA580C',
        description: "Cubes of pork belly slow-fried in their own fat until the edges turn mahogany-black and shatter-crisp, glazed with fish sauce caramel and finished with black pepper. The name means 'burnt edges' — and those burnt edges are the whole point. Eaten with steamed rice and nothing else needed, it disappears faster than any other dish on the table.",
        tags: ['Pork', 'Caramel', 'Crispy', 'Rice'],
    },
    {
        slug: 'ga-kho-sa-ot',
        title: 'Lemongrass Chilli Chicken',
        subtitle: 'Gà Kho Sả Ớt',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
        region: 'Central', difficulty: 'Easy', time: '45 min',
        rating: '4.8', reviews: 167, cal: 390, tag: 'Central Fire', tagColor: '#DC2626',
        description: "Chicken thighs braised with a small mountain of minced lemongrass, bird's eye chilli and fish sauce caramel until the sauce clings like glaze and the kitchen smells like a Hue market. Spicier and more aromatic than its Northern cousin, this is the dish that explains why Central Vietnamese cooking has its own devoted following.",
        tags: ['Chicken', 'Lemongrass', 'Spicy', 'Central'],
    },
    {
        slug: 'canh-thit-bam',
        title: 'Clear Soup with Minced Pork',
        subtitle: 'Canh Thịt Băm',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Easy', time: '20 min',
        rating: '4.5', reviews: 118, cal: 160, tag: 'Weeknight Basic', tagColor: '#0284C7',
        description: "A clear, gentle broth with minced pork poached into tender flecks, often brightened with winter melon, gourd or young mustard greens. The soup Vietnamese mothers make when they want something easy, comforting and respectful of a small budget. Unshowy, deeply home-cooking, and proof that the quietest dishes are often the ones that define a cuisine.",
        tags: ['Pork', 'Light', 'Quick', 'Comfort'],
    },
    {
        slug: 'thit-kho-hot-vit',
        title: 'Caramelised Pork Belly with Eggs',
        subtitle: 'Thịt Kho Hột Vịt',
        image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Medium', time: '90 min',
        rating: '4.9', reviews: 312, cal: 580, tag: 'Lunar New Year', tagColor: '#DC2626',
        description: "Chunks of tender pork belly and hard-boiled eggs braised in fresh coconut water and fish sauce until the meat melts at the touch of a chopstick. This golden-hued stew is the soul of Southern Vietnamese cuisine, especially during Tet (Lunar New Year). The balance of savory-sweet flavors and the richness of the caramelised sauce make it a true comfort masterpiece that tastes even better the next day.",
        tags: ['Pork Belly', 'Eggs', 'Slow-cooked', 'Traditional'],
    },
    {
        slug: 'com-rang-trung',
        title: 'Vietnamese Egg Fried Rice',
        subtitle: 'Cơm Rang Trứng',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Easy', time: '15 min',
        rating: '4.6', reviews: 128, cal: 350, tag: 'Quick Meal', tagColor: '#059669',
        description: "The ultimate comfort food found in every Vietnamese kitchen. Day-old cold rice is tossed in a screaming hot wok with golden egg yolks and fragrant scallions until every grain is toasted and separated. Simple, humble, and deeply satisfying.",
        tags: ['Rice', 'Eggs', 'Quick', 'Budget'],
    },
    {
        slug: 'com-chien-hai-san',
        title: 'Seafood Fried Rice',
        subtitle: 'Cơm Chiên Hải Sản',
        image: 'https://images.unsplash.com/photo-1512058560366-cd242d5930df?auto=format&fit=crop&w=900&q=80',
        region: 'Central', difficulty: 'Medium', time: '25 min',
        rating: '4.8', reviews: 215, cal: 480, tag: 'Coastal Classic', tagColor: '#0284C7',
        description: "A premium twist on fried rice featuring succulent shrimp, tender squid, and sweet peas. The rice is fried until slightly crispy, absorbing the savory essence of the seafood and the aroma of fried garlic. A staple at seaside restaurants across Vietnam.",
        tags: ['Seafood', 'Rice', 'Savory', 'Premium'],
    },
    {
        slug: 'trung-chien-thit',
        title: 'Minced Pork Omelette',
        subtitle: 'Trứng Chiên Thịt',
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80',
        region: 'Central', difficulty: 'Easy', time: '15 min',
        rating: '4.7', reviews: 184, cal: 310, tag: 'Home Cook', tagColor: '#D97706',
        description: "Beaten eggs mixed with seasoned minced pork and thin shallot slices, pan-fried until the edges are golden-crisp and lacy. This hearty omelette is a beloved side dish that turns a simple bowl of rice into a complete, nourishing meal.",
        tags: ['Eggs', 'Pork', 'High-Protein', 'Family'],
    },
    {
        slug: 'com-chien-duong-chau',
        title: 'Yangzhou Fried Rice',
        subtitle: 'Cơm Chiên Dương Châu',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Medium', time: '30 min',
        rating: '4.9', reviews: 420, cal: 520, tag: 'Party Favorite', tagColor: '#B91C1C',
        description: "A colorful mosaic of flavors featuring diced Chinese sausage (Lap Xuong), char siu pork, shrimp, and mixed vegetables. Every bite is a balance of sweet, savory, and smoky, making it the star of Vietnamese banquet tables.",
        tags: ['Rice', 'Sausage', 'Colorful', 'Festive'],
    },
    {
        slug: 'tom-rim-man-ngot',
        title: 'Caramelised Savory Shrimp',
        subtitle: 'Tôm Rim Mặn Ngọt',
        image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Easy', time: '20 min',
        rating: '4.8', reviews: 156, cal: 280, tag: 'Rice Killer', tagColor: '#EA580C',
        description: "Whole shrimp simmered in a sticky, garlic-infused fish sauce caramel until the shells turn translucent and crispy. The perfect balance of salty and sweet that compels you to keep reaching for more rice.",
        tags: ['Seafood', 'Caramel', 'Savory', 'Quick'],
    },
    {
        slug: 'banh-beo-phu-yen',
        title: 'Water Fern Rice Cakes',
        subtitle: 'Bánh Bèo',
        image: 'https://images.unsplash.com/photo-1625244695851-1fc873994270?auto=format&fit=crop&w=900&q=80',
        region: 'Central', difficulty: 'Hard', time: '60 min',
        rating: '4.9', reviews: 289, cal: 210, tag: 'Hue Specialty', tagColor: '#7C3AED',
        description: "Delicate, steamed rice discs topped with savory dried shrimp flakes, crispy pork rinds, and scallion oil. Served with a special sweet-and-spicy fish sauce, these 'fern cakes' are the jewel of Central Vietnamese street food.",
        tags: ['Rice Flour', 'Shrimp', 'Street Food', 'Delicate'],
    },
    {
        slug: 'banh-mi-cha-ca',
        title: 'Fish Cake Banh Mi',
        subtitle: 'Bánh Mì Chả Cá',
        image: 'https://images.unsplash.com/photo-1600454021970-351eff4a6554?auto=format&fit=crop&w=900&q=80',
        region: 'Central', difficulty: 'Easy', time: '10 min',
        rating: '4.7', reviews: 312, cal: 420, tag: 'Street Breakfast', tagColor: '#059669',
        description: "A crispy baguette stuffed with hot, fried fish cakes, pungent Vietnamese coriander (rau ram), and a zesty garlic-chili sauce. A specialty of coastal towns that has become a favorite morning grab-and-go across the country.",
        tags: ['Bread', 'Fish Cake', 'Quick', 'Street Food'],
    },
    {
        slug: 'nem-nuong',
        title: 'Grilled Pork Sausage Skewers',
        subtitle: 'Nem Nướng',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
        region: 'Central', difficulty: 'Medium', time: '45 min',
        rating: '4.9', reviews: 245, cal: 380, tag: 'Nha Trang Style', tagColor: '#7C3AED',
        description: "Springy, savory-sweet pork patties grilled over charcoal. A specialty of Nha Trang, traditionally wrapped in rice paper with crispy fried rolls, fresh herbs, and a signature warm peanut dipping sauce.",
        tags: ['Pork', 'Grilled', 'Skewers', 'Central'],
    },
    {
        slug: 'thit-nuong-xien',
        title: 'Street Style Pork Skewers',
        subtitle: 'Thịt Nướng Xiên',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Easy', time: '30 min',
        rating: '4.8', reviews: 189, cal: 320, tag: 'Street Snack', tagColor: '#059669',
        description: "The quintessential aroma of Hanoi's afternoons. Thin slices of pork shoulder marinated in lemongrass, honey, and sesame oil, grilled fast over hot coals until the edges are caramelized and smoky.",
        tags: ['Pork', 'Street Food', 'Quick', 'Grilled'],
    },
    {
        slug: 'ga-nuong-mat-ong',
        title: 'Honey Glazed Grilled Chicken',
        subtitle: 'Gà Nướng Mật Ong',
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Easy', time: '40 min',
        rating: '4.7', reviews: 156, cal: 450, tag: 'Family Dinner', tagColor: '#D97706',
        description: "Juicy chicken thighs bathed in a glossy amber glaze of wild honey and five-spice powder. The skin is rendered crispy and sweet, while the meat remains tender and infused with aromatic spices.",
        tags: ['Chicken', 'Honey', 'Grilled', 'Kid-friendly'],
    },
    {
        slug: 'ga-nuong-muoi-ot',
        title: 'Chili Salt Grilled Chicken',
        subtitle: 'Gà Nướng Muối Ớt',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Medium', time: '50 min',
        rating: '4.9', reviews: 212, cal: 410, tag: 'Spicy Kick', tagColor: '#DC2626',
        description: "A bold, rustic dish where chicken is rubbed with a fiery paste of Tay Ninh chili salt and crushed bird's eye chilies. Grilled until the skin is shatter-crisp and the heat resonates in every bite.",
        tags: ['Chicken', 'Spicy', 'Grilled', 'Southern'],
    },
    {
        slug: 'vit-quay',
        title: 'Vietnamese Roasted Duck',
        subtitle: 'Vịt Quay',
        image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Hard', time: '120 min',
        rating: '4.9', reviews: 342, cal: 620, tag: 'Festive Roast', tagColor: '#B91C1C',
        description: "Aromatic duck with glass-like crispy skin and juicy meat infused with star anise and cinnamon. A centerpiece of Northern celebrations, served with a thick, savory soy-based dipping sauce.",
        tags: ['Duck', 'Roast', 'Festive', 'Traditional'],
    },
    {
        slug: 'heo-quay',
        title: 'Crispy Roasted Pork Belly',
        subtitle: 'Heo Quay',
        image: 'https://images.unsplash.com/photo-1593448323291-04e088197167?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Hard', time: '90 min',
        rating: '4.9', reviews: 512, cal: 580, tag: 'Crispy Gold', tagColor: '#EA580C',
        description: "Famous for its 'shatter-crisp' crackling skin and melting layers of fat. This pork belly is meticulously poked and salted before roasting to achieve a bubbly, golden texture that is addictive.",
        tags: ['Pork Belly', 'Roast', 'Crispy', 'Southern'],
    },
    {
        slug: 'ca-nuong-trui',
        title: 'Straw-Roasted Snakehead Fish',
        subtitle: 'Cá Nướng Trui',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Medium', time: '40 min',
        rating: '4.8', reviews: 167, cal: 290, tag: 'Mekong Rustic', tagColor: '#059669',
        description: "The soul of Mekong Delta cuisine. Whole fish is skewered on bamboo, buried in rice straw, and set ablaze. The charred skin is scraped away to reveal steaming, smoky, and incredibly sweet white flesh.",
        tags: ['Fish', 'Rustic', 'Grilled', 'Southern'],
    },
    {
        slug: 'ca-nuong-giay-bac',
        title: 'Foil-Wrapped Grilled Fish',
        subtitle: 'Cá Nướng Giấy Bạc',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80',
        region: 'Central', difficulty: 'Easy', time: '35 min',
        rating: '4.7', reviews: 134, cal: 310, tag: 'Seafood Feast', tagColor: '#0284C7',
        description: "Delicate white fish steamed-grilled in its own juices with julienned ginger, galangal, and scallions. The foil wrap locks in all the umami, creating a tender and aromatic seafood experience.",
        tags: ['Fish', 'Ginger', 'Healthy', 'Central'],
    },
    {
        slug: 'muc-nuong-sa-te',
        title: 'Spicy Sate Grilled Squid',
        subtitle: 'Mực Nướng Sa Tế',
        image: 'https://images.unsplash.com/photo-1533630846283-6878262f489b?auto=format&fit=crop&w=900&q=80',
        region: 'Central', difficulty: 'Easy', time: '20 min',
        rating: '4.8', reviews: 198, cal: 260, tag: 'Beach BBQ', tagColor: '#DC2626',
        description: "Fresh squid scored and marinated in a fiery lemongrass sate paste. Grilled quickly over high heat until the tentacles curl and the sauce caramelizes into a spicy, smoky crust.",
        tags: ['Squid', 'Spicy', 'Seafood', 'Quick'],
    },
    {
        slug: 'com-tam-suon-bi-cha',
        title: 'Broken Rice with Grilled Pork & Egg Meatloaf',
        subtitle: 'Cơm Tấm Sườn Bì Chả',
        image: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Medium', time: '60 min',
        rating: '4.9', reviews: 856, cal: 650, tag: 'Saigon Signature', tagColor: '#B91C1C',
        description: "The quintessential breakfast of Saigon. Fragrant broken rice grains topped with a charcoal-grilled pork chop, shredded pork skin (bi), and a savory steamed egg meatloaf (cha). Served with a side of sweet-and-sour fish sauce and pickled vegetables, it is a harmonious explosion of smoky, savory, and tangy flavors.",
        tags: ['Pork Chop', 'Rice', 'Signature', 'Southern'],
    },
    {
        slug: 'com-ga-hoi-an',
        title: 'Hoi An Chicken Rice',
        subtitle: 'Cơm Gà Hội An',
        image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=900&q=80',
        region: 'Central', difficulty: 'Medium', time: '50 min',
        rating: '4.8', reviews: 412, cal: 520, tag: 'Ancient Town Flavor', tagColor: '#D97706',
        description: "An elegant dish from the ancient town of Hoi An. The rice is cooked in chicken broth and turmeric to achieve a beautiful golden hue, then topped with shredded free-range chicken, thin onions, and Vietnamese coriander. The secret lies in the tiny bowl of rich giblet gravy and the spicy chili jam served on the side.",
        tags: ['Chicken', 'Turmeric Rice', 'Central', 'Traditional'],
    },
    {
        slug: 'nem-chua',
        title: 'Cured Fermented Pork',
        subtitle: 'Nem Chua',
        image: 'https://images.unsplash.com/photo-1583090752239-8bd2bb205096?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Hard', time: '48 hour',
        rating: '4.8', reviews: 215, cal: 150, tag: 'Traditional Snack', tagColor: '#DC2626',
        description: "A unique Vietnamese delicacy made from fresh ground pork, sliced pigskin, and a blend of garlic, chili, and peppercorns. Wrapped in banana leaves and left to ferment naturally, it develops a signature sour, spicy, and garlicky tang that is addictive.",
        tags: ['Pork', 'Fermented', 'Snack', 'Northern'],
    },
    {
        slug: 'bun-cha-gio',
        title: 'Rice Vermicelli with Spring Rolls',
        subtitle: 'Bún Chả Giò',
        image: 'https://images.unsplash.com/photo-1544070078-a212eda27b49?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Medium', time: '40 min',
        rating: '4.7', reviews: 342, cal: 480, tag: 'Quick Lunch', tagColor: '#059669',
        description: "A refreshing noodle bowl featuring crispy fried spring rolls (cha gio) served over fresh rice vermicelli and a bed of shredded lettuce, herbs, and cucumber. Drizzled with 'nuoc mam pha' and topped with peanuts for a perfect balance of hot, cold, crunchy, and soft.",
        tags: ['Noodles', 'Spring Rolls', 'Southern', 'Lunch'],
    },
    {
        slug: 'ga-xao-sa-ot',
        title: 'Lemongrass & Chili Stir-fry Chicken',
        subtitle: 'Gà Xào Sả Ớt',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Easy', time: '25 min',
        rating: '4.6', reviews: 189, cal: 320, tag: 'Rice Killer', tagColor: '#D97706',
        description: "A spicy and highly aromatic stir-fry that is a staple in Vietnamese family meals. Tender chicken pieces are tossed with minced lemongrass, turmeric, and bird's eye chilies, creating a vibrant yellow dish that makes it impossible to eat just one bowl of rice.",
        tags: ['Chicken', 'Spicy', 'Lemongrass', 'Quick'],
    },
    {
        slug: 'banh-hoi-chao-long',
        title: 'Woven Rice Vermicelli with Pork Congee',
        subtitle: 'Bánh Hỏi Cháo Lòng',
        image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=900&q=80',
        region: 'Central', difficulty: 'Hard', time: '2.5 hrs',
        rating: '4.9', reviews: 94, cal: 460, tag: 'Phu Yen Pride', tagColor: '#0284C7',
        description: "The dawn breakfast of Phú Yên — feather-light woven mats of rice vermicelli served alongside a bowl of silky pork congee studded with offal, fresh herbs and a crack of black pepper. The vermicelli arrives painted with scallion oil; the congee carries the depth of bones simmered since 4am. Eaten together, never apart.",
        tags: ['Pork', 'Rice', 'Congee', 'Hometown'],
    },
]
const FILTERS = ['All', 'Easy', 'Medium', 'Hard']
const REGIONS = ['All Regions', 'Northern', 'Central', 'Southern']
const DIFF_COLOR: Record<string, string> = { Easy: '#10b981', Medium: '#f59e0b', Hard: '#ef4444' }
const LS_KEY = 'fn_favorites'

// ─── Helpers ──────────────────────────────────────────────────────────────────
function loadFavSlugs(): Set<string> {
    try {
        const raw = localStorage.getItem(LS_KEY)
        if (!raw) return new Set()
        const arr = JSON.parse(raw)
        return new Set(arr.map((x: string | { slug: string }) => typeof x === 'string' ? x : x.slug))
    } catch { return new Set() }
}

function saveFav(recipe: Recipe, add: boolean) {
    try {
        const raw = localStorage.getItem(LS_KEY)
        let arr: object[] = raw ? JSON.parse(raw) : []
        if (add) {
            if (!arr.some((x: object) => (x as { slug: string }).slug === recipe.slug)) {
                arr.push({
                    id: recipe.slug,
                    slug: recipe.slug,
                    title: recipe.title,
                    image: recipe.image,
                    category: 'Main Dish',
                    cookTime: recipe.time,
                    savedAt: Date.now(),
                })
            }
        } else {
            arr = arr.filter((x: object) => (x as { slug: string }).slug !== recipe.slug)
        }
        localStorage.setItem(LS_KEY, JSON.stringify(arr))
    } catch {}
}

// ─── Heart Button ─────────────────────────────────────────────────────────────
function HeartBtn({ recipe }: { recipe: Recipe }) {
    const { toggle, isFavorite, mounted } = useFavorites()
    const liked = mounted && isFavorite(recipe.slug)
    const [burst, setBurst] = useState(false)
    const [toast, setToast] = useState<'added' | 'removed' | null>(null)

    const handleToggle = useCallback((e: React.MouseEvent) => {
        e.preventDefault(); e.stopPropagation()
        const next = !liked
        toggle({
            id: recipe.slug,
            slug: recipe.slug,
            title: recipe.title,
            image: recipe.image,
            category: 'Main Dish',
            cookTime: recipe.time,
        })
        if (next) setBurst(true)
        setToast(next ? 'added' : 'removed')
        setTimeout(() => setBurst(false), 600)
        setTimeout(() => setToast(null), 2000)
    }, [liked, recipe, toggle])

    return (
        <div style={{ position: 'absolute', bottom: 14, right: 14 }}>
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }}
                        style={{ position: 'absolute', bottom: 44, right: 0, background: liked ? '#4B2E1A' : 'rgba(75,46,26,0.75)', color: 'white', fontSize: 11, fontWeight: 600, padding: '5px 12px', borderRadius: 100, whiteSpace: 'nowrap', pointerEvents: 'none' }}
                    >
                        {toast === 'added' ? '♥ Saved' : '✕ Removed'}
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button onClick={handleToggle} whileTap={{ scale: 0.82 }} aria-label={liked ? 'Remove from favorites' : 'Save recipe'}
                style={{ width: 36, height: 36, borderRadius: '50%', background: liked ? 'rgba(217,119,6,0.92)' : 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)', border: liked ? 'none' : '1px solid rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: liked ? '0 4px 16px rgba(217,119,6,0.35)' : '0 2px 8px rgba(0,0,0,0.15)', transition: 'background 0.25s, box-shadow 0.25s', position: 'relative', overflow: 'hidden' }}
            >
                {burst && <motion.span initial={{ scale: 0.6, opacity: 0.8 }} animate={{ scale: 2.2, opacity: 0 }} transition={{ duration: 0.5 }} style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(217,119,6,0.3)', pointerEvents: 'none' }} />}
                <motion.svg width="16" height="16" viewBox="0 0 24 24" animate={burst ? { scale: [1, 1.35, 1] } : { scale: 1 }} transition={{ duration: 0.35 }}>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={liked ? 'white' : 'none'} stroke={liked ? 'none' : 'rgba(75,46,26,0.5)'} strokeWidth="1.8" strokeLinecap="round" />
                </motion.svg>
            </motion.button>
        </div>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MainDishesPage() {
    const [diff, setDiff] = useState('All')
    const [region, setRegion] = useState('All Regions')

    const filtered = useMemo(() =>
        RECIPES.filter(r => (diff === 'All' || r.difficulty === diff) && (region === 'All Regions' || r.region === region))
        , [diff, region])

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,700;0,800;1,600;1,700&display=swap');
                * { box-sizing: border-box; }
                .r-card { background: white; border-radius: 24px; overflow: hidden; border: 1px solid rgba(75,46,26,0.07); text-decoration: none; display: block; transition: transform 0.33s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s, border-color 0.2s; }
                .r-card:hover { transform: translateY(-7px); box-shadow: 0 28px 60px rgba(75,46,26,0.13); border-color: rgba(217,119,6,0.22); }
                .r-card:hover .r-img { transform: scale(1.07); }
                .r-img { transition: transform 0.55s ease; }
                .pill { border: 1.5px solid rgba(75,46,26,0.12); border-radius: 100px; padding: 7px 18px; font-size: 13px; font-weight: 500; color: rgba(75,46,26,0.55); background: transparent; cursor: pointer; transition: all 0.18s; white-space: nowrap; font-family: inherit; }
                .pill:hover { color: #D97706; border-color: rgba(217,119,6,0.38); }
                .pill.on { background: #4B2E1A; color: white; border-color: #4B2E1A; }
                .tag { font-size: 10px; font-weight: 600; color: rgba(75,46,26,0.45); background: rgba(75,46,26,0.05); padding: 3px 9px; border-radius: 6px; letter-spacing: 0.03em; }
            `}</style>

            {/* ── HERO ── */}
            <section style={{ background: 'linear-gradient(135deg, #FEF3E2 0%, #FDEAC8 55%, #F5EDE3 100%)', paddingTop: 120, paddingBottom: 72, padding: '88px 24px 48px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 40, right: '6%', width: 280, height: 280, borderRadius: '50%', background: 'rgba(217,119,6,0.07)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    {/* Breadcrumb */}
                    <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 24 }}>
                        {[['Home', '/'], ['Recipes', '/recipes'], ['Main Dishes', '']].map(([label, href], i) => (
                            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                {i > 0 && <span style={{ color: 'rgba(75,46,26,0.3)' }}>›</span>}
                                {href ? <Link href={href} style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                    : <span style={{ color: '#D97706', fontWeight: 600 }}>{label}</span>}
                            </span>
                        ))}
                    </nav>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                        <div style={{ width: 32, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>The Heart of the Table</span>
                    </div>

                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, color: '#2D1A0E', margin: '0 0 18px', lineHeight: 1.0 }}>
                        Vietnamese<br /><span style={{ color: '#D97706', fontStyle: 'italic' }}>Main Dishes</span>
                    </h1>

                    <p style={{ color: 'rgba(75,46,26,0.62)', fontSize: 17, maxWidth: 500, lineHeight: 1.75, margin: '0 0 36px' }}>
                        From slow-braised clay pots to fiery wok dishes — these are the recipes that define the Vietnamese dining table. Passed down through generations, perfected by time.
                    </p>

                    {/* Stats */}
                    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                        {[
                            { Icon: Utensils, val: `${RECIPES.length}`, lbl: 'Recipes' },
                            { Icon: Clock, val: '20 min', lbl: 'Quickest' },
                            { Icon: Globe, val: '3', lbl: 'Regions' },
                            { Icon: Star, val: '4.8', lbl: 'Avg Rating' },
                        ].map(({ Icon, val, lbl }) => (
                            <div key={lbl}>
                                <Icon size={16} strokeWidth={1.8} color="#D97706" style={{ marginBottom: 4 }} />
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#2D1A0E', lineHeight: 1 }}>{val}</div>
                                <div style={{ fontSize: 11, color: 'rgba(75,46,26,0.45)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{lbl}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FILTER BAR ── */}
            <div style={{ position: 'sticky', top: 72, zIndex: 40, background: 'rgba(250,250,247,0.96)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(75,46,26,0.07)', padding: '12px 24px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 8, overflowX: 'auto', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(75,46,26,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0 }}>Difficulty</span>
                    {FILTERS.map(f => <button key={f} onClick={() => setDiff(f)} className={`pill ${diff === f ? 'on' : ''}`}>{f}</button>)}
                    <div style={{ width: 1, height: 22, background: 'rgba(75,46,26,0.1)', margin: '0 6px', flexShrink: 0 }} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(75,46,26,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0 }}>Region</span>
                    {REGIONS.map(r => <button key={r} onClick={() => setRegion(r)} className={`pill ${region === r ? 'on' : ''}`}>{r}</button>)}
                    <span style={{ marginLeft: 'auto', fontSize: 13, color: 'rgba(75,46,26,0.38)', flexShrink: 0, fontWeight: 500 }}>{filtered.length} recipes</span>
                </div>
            </div>

            {/* ── GRID ── */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 96px' }}>
                <AnimatePresence mode="wait">
                    <motion.div key={`${diff}-${region}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: 24 }}>
                        {filtered.map((recipe, i) => (
                            <motion.div key={recipe.slug} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
                                <Link href={`/recipes/${recipe.slug}`} className="r-card">
                                    {/* Image */}
                                    <div style={{ position: 'relative', height: 230, overflow: 'hidden', background: '#f0ebe4' }}>
                                        <Image src={recipe.image} alt={`${recipe.title} — ${recipe.subtitle} Vietnamese recipe`} fill className="r-img" style={{ objectFit: 'cover' }} sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" quality={80} />
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)' }} />

                                        {/* Tag */}
                                        <div style={{ position: 'absolute', top: 14, left: 14, background: recipe.tagColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '5px 13px', borderRadius: 100 }}>{recipe.tag}</div>

                                        {/* Time */}
                                        <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.38)', backdropFilter: 'blur(6px)', color: 'white', fontSize: 11, fontWeight: 500, padding: '5px 11px', borderRadius: 100 }}>⏱ {recipe.time}</div>

                                        {/* Difficulty */}
                                        <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 5 }}>
                                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: DIFF_COLOR[recipe.difficulty] }} />
                                            <span style={{ color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>{recipe.difficulty}</span>
                                        </div>

                                        {/* Calories */}
                                        <div style={{ position: 'absolute', bottom: 14, right: 54, color: 'rgba(255,255,255,0.65)', fontSize: 10, fontWeight: 600 }}>{recipe.cal} kcal</div>

                                        <HeartBtn recipe={recipe} />
                                    </div>

                                    {/* Body */}
                                    <div style={{ padding: '18px 20px 22px' }}>
                                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#D97706', textTransform: 'uppercase', marginBottom: 6 }}>{recipe.region} Vietnam</div>
                                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#2D1A0E', margin: '0 0 3px', lineHeight: 1.2 }}>{recipe.title}</h2>
                                        <p style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)', fontStyle: 'italic', margin: '0 0 10px' }}>{recipe.subtitle}</p>
                                        <p style={{ fontSize: 13.5, color: 'rgba(75,46,26,0.62)', lineHeight: 1.68, margin: '0 0 14px' }}>{recipe.description}</p>
                                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
                                            {recipe.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 13, borderTop: '1px solid rgba(75,46,26,0.07)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                                <span style={{ color: '#D97706', fontSize: 13, fontWeight: 700 }}>★ {recipe.rating}</span>
                                                <span style={{ color: 'rgba(75,46,26,0.32)', fontSize: 12 }}>({recipe.reviews})</span>
                                            </div>
                                            <span style={{ fontSize: 12, fontWeight: 600, color: '#D97706' }}>View Recipe →</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(75,46,26,0.38)' }}>
                        <div style={{ fontSize: 44, marginBottom: 12 }}>🍖</div>
                        <p style={{ fontSize: 16, fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>No recipes match this filter.</p>
                    </div>
                )}
            </section>

            {/* ── OTHER CATEGORIES ── */}
            <section style={{ borderTop: '1px solid rgba(75,46,26,0.08)', padding: '64px 32px 88px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Keep Exploring</span>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 700, color: '#2D1A0E', margin: '0 0 36px' }}>More to Discover</h2>
                    <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                        {[
                            { label: 'Breakfast', sub: 'The morning ritual', Icon: Clock, href: '/recipes/breakfast' },
                            { label: 'Desserts', sub: 'Sweet endings', Icon: Star, href: '/recipes/desserts' },
                            { label: 'Street Food', sub: 'On streets everywhere', Icon: Utensils, href: '/recipes/street-food' },
                            { label: 'Specialty Drinks', sub: 'Sip Vietnam', Icon: Globe, href: '/recipes/drinks' },
                        ].map(({ label, sub, Icon, href }) => (
                            <Link key={href} href={href} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '24px 32px', borderRadius: 20, border: '1px solid rgba(75,46,26,0.1)', background: 'white', textDecoration: 'none', transition: 'all 0.22s', minWidth: 170 }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(217,119,6,0.4)'; el.style.background = '#FEF3E2'; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 12px 32px rgba(217,119,6,0.12)'; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(75,46,26,0.1)'; el.style.background = 'white'; el.style.transform = 'none'; el.style.boxShadow = 'none'; }}
                            >
                                <Icon size={26} strokeWidth={1.6} color="#D97706" />
                                <span style={{ fontSize: 14, fontWeight: 700, color: '#2D1A0E' }}>{label}</span>
                                <span style={{ fontSize: 11, color: 'rgba(75,46,26,0.5)', fontStyle: 'italic' }}>{sub}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
'sử dụng khách hàng'
