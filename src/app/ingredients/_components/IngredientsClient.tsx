'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, ShoppingBasket, Refrigerator, Repeat, Lightbulb, UtensilsCrossed, Star } from 'lucide-react';
import PHOTO_CREDITS from '@/data/ingredient-photo-credits.json';

// ── Data ────────────────────────────────────────────────────────────────────


const CATEGORIES = [
    'All', 'Sauces & Condiments', 'Herbs & Aromatics', 'Noodles & Rice',
    'Spices', 'Proteins', 'Vegetables', 'Fruits & Souring Agents',
    'Dairy & Fats', 'Pantry Staples',
] as const;

type Category = typeof CATEGORIES[number];

interface Ingredient {
    name: string;
    nameVi: string;
    category: Category;
    flavor: string;
    usedIn: string;
    substitute?: string;
    buying: string;
    storing: string;
    essential: boolean;
    note?: string;
}

export const INGREDIENTS: Ingredient[] = [
    // ── Sauces & Condiments ──
    {
        name: 'Fish Sauce', nameVi: 'Nước Mắm',
        category: 'Sauces & Condiments',
        flavor: 'Intensely salty, savory, deeply umami — the backbone of Vietnamese flavor',
        usedIn: 'Everything — dipping sauces, marinades, soups, stir-fries, braises',
        buying: 'Phú Quốc brand (40°N or 50°N) or Red Boat. Only ingredient: anchovies + salt.',
        storing: 'Room temp before opening. Refrigerate after. Lasts years.',
        essential: true,
        note: 'The single most important ingredient in Vietnamese cooking. No substitute fully replicates it.',
    },
    {
        name: 'Soy Sauce', nameVi: 'Nước Tương',
        category: 'Sauces & Condiments',
        flavor: 'Salty, slightly sweet, less funky than fish sauce',
        usedIn: 'Marinades, stir-fries, some braised dishes, vegetarian cooking',
        substitute: 'Fish sauce (for non-vegetarian)',
        buying: 'Pearl River Bridge, Lee Kum Kee, or Kikkoman. Light soy for general use, dark soy for color.',
        storing: 'Indefinitely at room temperature.',
        essential: true,
    },
    {
        name: 'Oyster Sauce', nameVi: 'Dầu Hào',
        category: 'Sauces & Condiments',
        flavor: 'Thick, sweet-savory, slightly caramel, rich umami',
        usedIn: 'Stir-fries, marinades, vegetables, noodle dishes',
        substitute: 'Hoisin sauce (sweeter) or soy sauce + sugar',
        buying: 'Lee Kum Kee Premium Oyster Sauce. Vegetarian version uses mushrooms.',
        storing: 'Refrigerate after opening. Lasts 6 months.',
        essential: true,
    },
    {
        name: 'Hoisin Sauce', nameVi: 'Tương Hoisin',
        category: 'Sauces & Condiments',
        flavor: 'Sweet, thick, slightly spiced — like a Vietnamese BBQ sauce',
        usedIn: 'Phở condiment, spring roll dipping sauce, marinades for grilled meats',
        buying: 'Lee Kum Kee or Koon Chun brands. Available at most Asian grocery stores.',
        storing: 'Refrigerate after opening. Lasts months.',
        essential: false,
    },
    {
        name: 'Shrimp Paste', nameVi: 'Mắm Ruốc / Mắm Tôm',
        category: 'Sauces & Condiments',
        flavor: 'Intensely funky, fermented, briny — the most pungent ingredient in Vietnamese cooking',
        usedIn: 'Bún bò Huế broth (mắm ruốc), bún đậu mắm tôm dipping sauce',
        buying: 'Vietnamese grocery stores. Mắm ruốc Huế for bún bò Huế. Mắm tôm for Hanoi dishes. Not interchangeable.',
        storing: 'Refrigerate after opening. Lasts months.',
        essential: false,
        note: 'Confrontational smell, extraordinary flavor when used correctly. A small amount goes a very long way.',
    },
    {
        name: 'Maggi Seasoning Sauce', nameVi: 'Nước Maggi',
        category: 'Sauces & Condiments',
        flavor: 'Concentrated savory-umami, slightly sweet, complex',
        usedIn: 'Bánh mì finishing drizzle, marinades, fried rice, stir-fries',
        buying: 'Any supermarket. The Vietnamese version (imported) has a slightly different formula from the European version.',
        storing: 'Indefinitely at room temperature.',
        essential: false,
        note: 'The secret ingredient in bánh mì that ties all flavors together. Introduced by European trade, now feels completely indigenous.',
    },
    {
        name: 'Rice Vinegar', nameVi: 'Giấm Gạo',
        category: 'Sauces & Condiments',
        flavor: 'Mild, clean acidity — gentler than Western white vinegar',
        usedIn: 'Pickled vegetables (đồ chua), dipping sauces, dressings',
        substitute: 'White wine vinegar (use less — more acidic)',
        buying: 'Any Asian grocery store. Unseasoned, not seasoned (which has added sugar and salt).',
        storing: 'Indefinitely at room temperature.',
        essential: true,
    },
    {
        name: 'Coconut Milk', nameVi: 'Nước Cốt Dừa',
        category: 'Sauces & Condiments',
        flavor: 'Rich, slightly sweet, tropical — the defining flavor of southern Vietnamese cooking',
        usedIn: 'Thịt kho hột vịt, bánh xèo batter, chè desserts, some soups',
        buying: 'Full-fat canned coconut milk. Shake before opening. Aroy-D or Chaokoh brands.',
        storing: 'Canned: indefinitely. Opened: refrigerate, use within 3 days.',
        essential: true,
    },

    // ── Herbs & Aromatics ──
    {
        name: 'Lemongrass', nameVi: 'Sả',
        category: 'Herbs & Aromatics',
        flavor: 'Bright citrus, floral, slightly ginger-like — the defining aromatic of central and southern Vietnamese cooking',
        usedIn: 'Bún bò Huế, lẩu, marinades for grilled meats, curry',
        substitute: 'Lemon zest + a little ginger (approximation only)',
        buying: 'Asian grocery stores fresh (preferred) or frozen. Use only the pale inner stalk.',
        storing: 'Fresh: plastic-wrapped, refrigerate 2 weeks. Freeze whole stalks for months.',
        essential: true,
    },
    {
        name: 'Galangal', nameVi: 'Riềng',
        category: 'Herbs & Aromatics',
        flavor: 'Sharp, piney, more medicinal than ginger — distinct and irreplaceable',
        usedIn: 'Phở spice bundle, some Central Vietnamese dishes, pickled galangal',
        substitute: 'Ginger (similar role, different flavor)',
        buying: 'Asian grocery stores. Fresh preferred, dried/powdered acceptable for broths.',
        storing: 'Fresh: refrigerate up to 2 weeks. Frozen: months.',
        essential: false,
    },
    {
        name: 'Shallots', nameVi: 'Hành Tím',
        category: 'Herbs & Aromatics',
        flavor: 'More intense and complex than onions, slightly sweet when cooked',
        usedIn: 'Fried shallots (crispy topping for everything), phở broth, marinades',
        buying: 'Any grocery store. Smaller shallots are more pungent.',
        storing: 'Cool dark place, 2-3 weeks. Fried shallots: airtight jar, 2 weeks.',
        essential: true,
        note: 'Crispy fried shallots are used as a topping across hundreds of Vietnamese dishes. Make a large batch and store.',
    },
    {
        name: 'Garlic', nameVi: 'Tỏi',
        category: 'Herbs & Aromatics',
        flavor: 'Pungent raw, sweet and mellow when cooked, essential in virtually everything',
        usedIn: 'Stir-fries, marinades, dipping sauces, soups — appears in 90% of Vietnamese recipes',
        buying: 'Any grocery store. Fresh whole heads, not pre-minced (loses flavor quickly).',
        storing: 'Whole head: cool dark place, 1 month. Peeled: refrigerate, use within 1 week.',
        essential: true,
    },
    {
        name: 'Ginger', nameVi: 'Gừng',
        category: 'Herbs & Aromatics',
        flavor: 'Warm, spicy, slightly sweet — both aromatic and medicinal',
        usedIn: 'Phở broth (charred whole), gà kho gừng, ginger fish sauce, tea',
        buying: 'Any grocery store. Young ginger (pale skin) is milder; mature ginger (brown skin) is stronger.',
        storing: 'Room temperature up to 2 weeks. Refrigerate or freeze for longer storage.',
        essential: true,
    },
    {
        name: 'Spring Onion / Scallion', nameVi: 'Hành Lá',
        category: 'Herbs & Aromatics',
        flavor: 'Mild onion with fresh grassy note — used both raw and cooked',
        usedIn: 'Phở topping, scallion oil (dầu hành), cơm tấm, soups, stir-fries',
        buying: 'Any grocery store. Use entire plant — green tops for garnish, white base for cooking.',
        storing: 'Stand in water at room temperature or refrigerate in damp paper towel. 2 weeks.',
        essential: true,
    },
    {
        name: 'Thai Basil', nameVi: 'Húng Quế',
        category: 'Herbs & Aromatics',
        flavor: 'Anise, clove, slightly peppery — more assertive than Italian basil',
        usedIn: 'Phở herb plate (southern style), bánh xèo, bún thịt nướng',
        substitute: 'Italian basil (milder, less anise)',
        buying: 'Asian grocery stores reliably. Look for firm stems, no wilting.',
        storing: 'Stand in water at room temperature. Do not refrigerate — bruises leaves.',
        essential: true,
    },
    {
        name: 'Perilla / Shiso', nameVi: 'Tía Tô',
        category: 'Herbs & Aromatics',
        flavor: 'Complex — mint, anise, slight bitterness, faintly cumin-like',
        usedIn: 'Bún chả, grilled meats, some northern soups, wrapping for nem lụi',
        substitute: 'Japanese shiso (same plant, slightly different variety)',
        buying: 'Vietnamese grocery stores. Japanese shiso at Japanese grocers.',
        storing: 'Wrap in damp paper towel, refrigerate. Use within 5 days.',
        essential: false,
    },
    {
        name: 'Mint', nameVi: 'Húng Lủi / Bạc Hà',
        category: 'Herbs & Aromatics',
        flavor: 'Clean, cool, refreshing — the cooling counterpoint in rich or spicy dishes',
        usedIn: 'Gỏi cuốn, bún chả, salads, noodle bowls',
        substitute: 'Spearmint is close. Peppermint too strong.',
        buying: 'Available everywhere.',
        storing: 'Stand in water at room temperature. 1 week.',
        essential: true,
    },
    {
        name: 'Cilantro', nameVi: 'Ngò Rí / Rau Mùi',
        category: 'Herbs & Aromatics',
        flavor: 'Bright, citrusy, slightly soapy to some (genetic variation)',
        usedIn: 'Phở topping, bánh mì, soups, spring rolls, marinades',
        substitute: 'Flat-leaf parsley (visually similar, flavor different)',
        buying: 'Available everywhere. Use stems as well as leaves.',
        storing: 'Stand in water in refrigerator, loosely covered. Up to 2 weeks.',
        essential: true,
    },
    {
        name: 'Garlic Chives', nameVi: 'Hẹ',
        category: 'Herbs & Aromatics',
        flavor: 'Garlic-forward, grassy, more pungent than regular chives',
        usedIn: 'Bánh canh hẹ Phú Yên (essential), bún cá, stir-fries',
        substitute: 'Regular chives + small amount of minced garlic',
        buying: 'Asian grocery stores (Chinese chives or garlic chives)',
        storing: 'Refrigerate in damp paper towel. 5-7 days.',
        essential: false,
    },
    {
        name: 'Vietnamese Coriander', nameVi: 'Rau Răm',
        category: 'Herbs & Aromatics',
        flavor: 'Sharp, peppery, slightly bitter — the most distinctive and polarizing herb',
        usedIn: 'Bún đậu mắm tôm, gỏi (salads), hột vịt lộn (balut)',
        buying: 'Vietnamese grocery stores only.',
        storing: 'Refrigerate in damp paper towel. 1 week.',
        essential: false,
    },
    {
        name: 'Rice Paddy Herb', nameVi: 'Ngò Ôm',
        category: 'Herbs & Aromatics',
        flavor: 'Citrusy, slightly cumin-like, uniquely complex',
        usedIn: 'Canh chua (essential), bún cá — defining flavor of Mekong Delta cooking',
        buying: 'Vietnamese grocery stores in established Vietnamese communities.',
        storing: 'Stand in water at room temperature. Use within 2-3 days.',
        essential: false,
        note: 'No substitute. If unavailable, omit rather than replace.',
    },

    // ── Noodles & Rice ──
    {
        name: 'Flat Rice Noodles (Bánh Phở)', nameVi: 'Bánh Phở',
        category: 'Noodles & Rice',
        flavor: 'Neutral, silky, slightly chewy — the canvas for phở broth',
        usedIn: 'Phở, hủ tiếu, stir-fried rice noodles',
        buying: 'Fresh (refrigerated) preferred. Dried acceptable. Asian grocery stores.',
        storing: 'Fresh: refrigerate, use within 3 days. Dried: pantry, indefinitely.',
        essential: true,
        note: 'Never cook in the broth — cook separately, drain, then add broth.',
    },
    {
        name: 'Rice Vermicelli', nameVi: 'Bún',
        category: 'Noodles & Rice',
        flavor: 'Thin, round, springy — lighter than flat noodles',
        usedIn: 'Bún bò Huế, bún chả, bún thịt nướng, gỏi cuốn',
        buying: 'Dried rice vermicelli at any Asian grocery store.',
        storing: 'Dried: pantry, indefinitely. Cooked: refrigerate, use within 2 days.',
        essential: true,
    },
    {
        name: 'Glass Noodles / Bean Thread', nameVi: 'Miến',
        category: 'Noodles & Rice',
        flavor: 'Nearly flavorless, translucent, chewy when cooked',
        usedIn: 'Miến gà (chicken glass noodle soup), spring roll filling, soups',
        buying: 'Any Asian grocery store. Soak in cold water 20 min before using.',
        storing: 'Dried: pantry, indefinitely.',
        essential: false,
    },
    {
        name: 'Wide Rice Noodles (Mì Quảng)', nameVi: 'Mì Quảng',
        category: 'Noodles & Rice',
        flavor: 'Wide, flat, turmeric-yellow when made correctly, slightly chewy',
        usedIn: 'Mì Quảng exclusively',
        buying: 'Specialty Vietnamese grocery stores. Regular wide rice noodles + turmeric is an acceptable substitute.',
        storing: 'Dried: pantry. Fresh: refrigerate, use within 2 days.',
        essential: false,
    },
    {
        name: 'Rice Paper', nameVi: 'Bánh Tráng',
        category: 'Noodles & Rice',
        flavor: 'Neutral, slightly chewy when hydrated',
        usedIn: 'Gỏi cuốn (fresh spring rolls), wrapping for grilled meats',
        buying: '22cm rounds for spring rolls. Vietnamese brands thinner and more pliable.',
        storing: 'Pantry, indefinitely. Keep completely dry.',
        essential: true,
    },
    {
        name: 'Jasmine Rice', nameVi: 'Gạo Tẻ',
        category: 'Noodles & Rice',
        flavor: 'Fragrant, slightly sticky, individual grains separate cleanly',
        usedIn: 'Every Vietnamese meal as the base starch',
        buying: 'ST25 (Sóc Trăng) variety — multiple-time World\'s Best Rice winner. Available at Asian grocery stores.',
        storing: 'Airtight container, cool dark place. Indefinitely.',
        essential: true,
    },
    {
        name: 'Glutinous / Sticky Rice', nameVi: 'Gạo Nếp',
        category: 'Noodles & Rice',
        flavor: 'Sticky, dense, slightly sweet — entirely different from jasmine rice',
        usedIn: 'Xôi (sticky rice dishes), bánh chưng, bánh tét, some desserts',
        buying: 'Asian grocery stores. Must be soaked 4+ hours before cooking.',
        storing: 'Airtight container, pantry. Indefinitely.',
        essential: false,
        note: 'Not interchangeable with jasmine rice. Different starch composition, different technique.',
    },
    {
        name: 'Rice Flour', nameVi: 'Bột Gạo',
        category: 'Noodles & Rice',
        flavor: 'Neutral, produces light crispy coatings and silky steamed sheets',
        usedIn: 'Bánh xèo batter, bánh cuốn, bánh ướt',
        buying: 'Fine-ground rice flour at Asian grocery stores. Not glutinous rice flour (different product).',
        storing: 'Airtight container, pantry. Up to 1 year.',
        essential: false,
    },
    {
        name: 'Tapioca Starch', nameVi: 'Bột Năng',
        category: 'Noodles & Rice',
        flavor: 'Neutral — adds elasticity, chewiness, and translucency',
        usedIn: 'Bánh ướt, bánh canh, as thickener for soups and sauces',
        substitute: 'Cornstarch (produces cloudier, less elastic result)',
        buying: 'Erawan brand (green packaging). Asian grocery stores.',
        storing: 'Airtight container, pantry. Up to 1 year.',
        essential: false,
    },

    // ── Spices ──
    {
        name: 'Star Anise', nameVi: 'Hoa Hồi',
        category: 'Spices',
        flavor: 'Warm, licorice-adjacent, sweet when heated — the defining spice of phở',
        usedIn: 'Phở broth, bún bò Huế, some braised dishes',
        buying: 'Whole pods — never ground. Lạng Sơn province star anise is most fragrant.',
        storing: 'Airtight container, dark cupboard. Up to 1 year.',
        essential: true,
        note: 'Always toast in a dry pan before using. 3-4 pods per 3L of broth — use sparingly.',
    },
    {
        name: 'Cinnamon (Vietnamese)', nameVi: 'Quế',
        category: 'Spices',
        flavor: 'Sweeter and more complex than Cassia cinnamon — Vietnamese cinnamon is considered the finest in the world',
        usedIn: 'Phở spice bundle, some sweet dishes',
        buying: 'Vietnamese cinnamon (Saigon cinnamon) has highest cinnamaldehyde content. Available online and at specialty stores.',
        storing: 'Whole sticks in airtight container. Up to 2 years.',
        essential: true,
    },
    {
        name: 'Black Cardamom', nameVi: 'Thảo Quả',
        category: 'Spices',
        flavor: 'Smoky, camphor-like, earthy — adds depth and slight smokiness to broth',
        usedIn: 'Phở spice bundle — crack open the pod before adding',
        buying: 'Asian grocery stores or online. Do not substitute green cardamom (completely different flavor).',
        storing: 'Whole pods, airtight container. Up to 1 year.',
        essential: false,
    },
    {
        name: 'Annatto Seeds', nameVi: 'Hạt Điều Màu',
        category: 'Spices',
        flavor: 'Mildly earthy — primarily a natural food dye giving orange-red color',
        usedIn: 'Mì Quảng oil, bún bò Huế, grilled meats — the color base of central Vietnamese cooking',
        buying: 'Asian and Latin grocery stores (used in Latin cuisine too). Also called achiote seeds.',
        storing: 'Airtight container, pantry. Up to 1 year.',
        essential: false,
        note: 'Used to make annatto oil — heat slowly in neutral oil until deep orange, strain seeds, use oil for color and subtle flavor.',
    },
    {
        name: 'Turmeric', nameVi: 'Nghệ',
        category: 'Spices',
        flavor: 'Earthy, slightly bitter, warm — gives the distinctive yellow color',
        usedIn: 'Bánh xèo batter, mì Quảng, chả cá Lã Vọng, some curries',
        buying: 'Any grocery store. Fresh turmeric (like small ginger) available at Asian stores for more intense flavor.',
        storing: 'Powder: airtight container, 1 year. Fresh: refrigerate, 2 weeks.',
        essential: false,
    },
    {
        name: 'Coriander Seeds', nameVi: 'Hạt Ngò',
        category: 'Spices',
        flavor: 'Warm, citrusy, floral — part of the phở spice bundle',
        usedIn: 'Phở broth, some marinades',
        buying: 'Any grocery store. Whole seeds — toast before using.',
        storing: 'Whole seeds, airtight container. Up to 1 year.',
        essential: false,
    },
    {
        name: 'Black Pepper', nameVi: 'Tiêu Đen',
        category: 'Spices',
        flavor: 'Sharp heat, complex aromatics — Vietnam is one of the world\'s largest pepper producers',
        usedIn: 'Marinades, braised dishes, dipping sauces (muối tiêu chanh)',
        buying: 'Whole peppercorns from Phú Quốc or Đắk Lắk if available — among the finest in the world.',
        storing: 'Whole peppercorns in airtight container. Grind fresh for maximum flavor.',
        essential: true,
    },

    // ── Proteins ──
    {
        name: 'Pork Belly', nameVi: 'Ba Chỉ / Thịt Ba Rọi',
        category: 'Proteins',
        flavor: 'Rich, fatty, tender — the most versatile pork cut in Vietnamese cooking',
        usedIn: 'Thịt kho hột vịt, bún chả, bánh mì filling, bún thịt nướng',
        buying: 'Any butcher or grocery store. Skin-on for braised dishes.',
        storing: 'Refrigerate raw, use within 2 days. Freeze up to 3 months.',
        essential: true,
    },
    {
        name: 'Pork Bones (Marrow & Knuckle)', nameVi: 'Xương Heo',
        category: 'Proteins',
        flavor: 'Rich marrow and collagen — the foundation of clear, body-full broths',
        usedIn: 'Phở broth base, bún bò Huế, hủ tiếu broth',
        buying: 'Butcher or Asian grocery store. Ask for them split.',
        storing: 'Freeze if not using within 1 day.',
        essential: false,
        note: 'Always blanch in boiling water 10 minutes and rinse thoroughly before using — this is what keeps phở broth crystal clear.',
    },
    {
        name: 'Shrimp', nameVi: 'Tôm',
        category: 'Proteins',
        flavor: 'Sweet, briny, clean ocean flavor',
        usedIn: 'Gỏi cuốn, bánh xèo, chả giò, mì Quảng, canh chua',
        buying: 'Fresh preferred. Frozen acceptable — thaw in cold water.',
        storing: 'Use fresh within 1 day. Frozen up to 3 months.',
        essential: false,
    },
    {
        name: 'Dried Shrimp', nameVi: 'Tôm Khô',
        category: 'Proteins',
        flavor: 'Concentrated, intensely savory, slightly sweet — adds deep umami',
        usedIn: 'Bún thang broth, some canh, rice paper tossed salads, bánh cuốn topping',
        buying: 'Asian grocery stores. Small size preferred. Orange-pink color, not grey.',
        storing: 'Airtight container, refrigerate. Up to 3 months.',
        essential: false,
    },
    {
        name: 'Dried Anchovies', nameVi: 'Cá Cơm Khô',
        category: 'Proteins',
        flavor: 'Clean oceanic umami — subtler than fish sauce',
        usedIn: 'Bánh canh hẹ broth (essential), bún cá, central Vietnamese soups',
        buying: 'Asian grocery stores. Small ones (2-3cm) are best. Smell for freshness.',
        storing: 'Airtight bag, refrigerate. Up to 3 months.',
        essential: false,
    },
    {
        name: 'Quail Eggs', nameVi: 'Trứng Cút',
        category: 'Proteins',
        flavor: 'Rich, creamy yolk — richer than chicken eggs relative to size',
        usedIn: 'Mì Quảng, thịt kho hột vịt (sometimes), bánh bao filling, street food',
        buying: 'Asian grocery stores. Hard boil 7 minutes for perfect set yolk.',
        storing: 'Refrigerate. Use within 2 weeks.',
        essential: false,
    },

    // ── Vegetables ──
    {
        name: 'Water Spinach', nameVi: 'Rau Muống',
        category: 'Vegetables',
        flavor: 'Mild, slightly grassy, tender stems and leaves',
        usedIn: 'Rau muống xào tỏi (stir-fried with garlic) — the most common Vietnamese vegetable dish',
        buying: 'Asian grocery stores. Also called morning glory or swamp cabbage.',
        storing: 'Refrigerate in plastic bag. Use within 3 days.',
        essential: true,
    },
    {
        name: 'Bean Sprouts', nameVi: 'Giá Đỗ',
        category: 'Vegetables',
        flavor: 'Crunchy, mildly sweet, fresh',
        usedIn: 'Phở herb plate (southern style), hủ tiếu, bún bò Huế, bánh xèo',
        buying: 'Any grocery store. Use within 2 days of purchase.',
        storing: 'Refrigerate, use quickly — they deteriorate fast.',
        essential: false,
        note: 'Traditional Hanoi phở does not use bean sprouts. Southern phở does. This is a meaningful regional distinction.',
    },
    {
        name: 'Banana Blossom', nameVi: 'Hoa Chuối',
        category: 'Vegetables',
        flavor: 'Slightly bitter, astringent, absorbs sauces well',
        usedIn: 'Bún bò Huế accompaniment, bánh mì filling, some salads',
        substitute: 'Shredded green cabbage (texture only, flavor different)',
        buying: 'Asian grocery stores. Canned available if fresh not found.',
        storing: 'Soak shredded banana blossom in water + lemon juice to prevent browning. Use same day.',
        essential: false,
    },
    {
        name: 'Bitter Melon', nameVi: 'Khổ Qua',
        category: 'Vegetables',
        flavor: 'Distinctly bitter — an acquired taste that plays a specific role in Vietnamese cooking',
        usedIn: 'Canh khổ qua nhồi thịt (stuffed bitter melon soup) — essential at Tết in southern households',
        buying: 'Asian grocery stores. Look for firm, pale green melons.',
        storing: 'Refrigerate up to 1 week.',
        essential: false,
        note: '"Khổ qua" literally means "bitterness passes" — eating it at Tết sends the hardships of the old year away.',
    },
    {
        name: 'Daikon Radish', nameVi: 'Củ Cải Trắng',
        category: 'Vegetables',
        flavor: 'Mild, slightly peppery raw, sweet and tender when cooked',
        usedIn: 'Đồ chua (pickled for bánh mì), phở broth, soups',
        buying: 'Asian grocery stores and many mainstream stores.',
        storing: 'Refrigerate up to 2 weeks.',
        essential: true,
    },
    {
        name: 'Green Mango', nameVi: 'Xoài Xanh',
        category: 'Vegetables',
        flavor: 'Sour, firm, crunchy — used as a vegetable, not a fruit',
        usedIn: 'Bánh tráng trộn (rice paper salad), gỏi xoài (mango salad), some canh chua',
        buying: 'Asian grocery stores. Must be genuinely unripe — firm and sour.',
        storing: 'Room temperature, use within 3-4 days.',
        essential: false,
    },

    // ── Fruits & Souring Agents ──
    {
        name: 'Lime', nameVi: 'Chanh',
        category: 'Fruits & Souring Agents',
        flavor: 'Bright, clean acidity — the primary souring agent in Vietnamese cooking',
        usedIn: 'Nước chấm, phở table condiment, trà chanh, marinades',
        buying: 'Any grocery store. Key limes or regular limes both work.',
        storing: 'Room temperature up to 1 week, refrigerate for longer.',
        essential: true,
        note: 'Always fresh — never bottled lime juice. The essential oils from fresh lime make a measurable difference.',
    },
    {
        name: 'Tamarind', nameVi: 'Me Chua',
        category: 'Fruits & Souring Agents',
        flavor: 'Sour, fruity, complex — the souring agent of southern Vietnamese cooking',
        usedIn: 'Canh chua (sweet and sour fish soup), pad thai-style dishes, some satays',
        substitute: 'Lime juice (simpler, less complex)',
        buying: 'Tamarind paste/concentrate in jars (convenient) or pulp blocks (more flavor). Asian grocery stores.',
        storing: 'Paste: refrigerate after opening, 6 months. Pulp block: cool dark place, indefinitely.',
        essential: false,
    },
    {
        name: 'Pineapple', nameVi: 'Thơm / Dứa',
        category: 'Fruits & Souring Agents',
        flavor: 'Sweet-tart, tropical — used for both sweetness and acidity',
        usedIn: 'Canh chua (essential alongside tamarind), some stir-fries, caramelized pork',
        buying: 'Any grocery store. Fresh preferred for canh chua.',
        storing: 'Room temperature until ripe, refrigerate after cutting.',
        essential: false,
    },
    {
        name: 'Guangdong Lime', nameVi: 'Chanh Quảng Đông',
        category: 'Fruits & Souring Agents',
        flavor: 'More fragrant than regular lime — floral, slightly resinous, intensely aromatic skin oils',
        usedIn: 'Trà chanh giã tay (hand-pounded lime tea) — the defining ingredient',
        substitute: 'Regular lime (less fragrant, still works)',
        buying: 'Asian grocery stores. Also called "perfume lime" or "nước hoa lime".',
        storing: 'Room temperature up to 1 week.',
        essential: false,
        note: 'The trending ingredient of 2025-2026 — the key to the viral trà chanh giã tay.',
    },

    // ── Dairy & Fats ──
    {
        name: 'Sweetened Condensed Milk', nameVi: 'Sữa Đặc Có Đường',
        category: 'Dairy & Fats',
        flavor: 'Intensely sweet, thick, slightly caramelized',
        usedIn: 'Cà phê sữa đá (essential), cà phê trứng, bánh flan, some desserts',
        buying: 'Any grocery store. Longevity or Nestle Carnation brands.',
        storing: 'Unopened: pantry, indefinitely. Opened: refrigerate, use within 2 weeks.',
        essential: true,
        note: 'Always sweetened condensed milk, not evaporated milk — they are completely different products.',
    },
    {
        name: 'Lard / Rendered Pork Fat', nameVi: 'Mỡ Heo',
        category: 'Dairy & Fats',
        flavor: 'Rich, savory, with a mild pork note — adds depth and silkiness',
        usedIn: 'Traditional scallion oil, some fried rice, bánh cuốn filling',
        buying: 'Asian grocery stores or render yourself from pork belly fat.',
        storing: 'Refrigerate, up to 3 months.',
        essential: false,
        note: 'Replaced by neutral vegetable oil in modern cooking, but traditionalists maintain it gives a better flavor in scallion oil (dầu hành).',
    },

    // ── Pantry Staples ──
    {
        name: 'Rock Sugar', nameVi: 'Đường Phèn',
        category: 'Pantry Staples',
        flavor: 'Less sweet than regular sugar, slight molasses note — rounder sweetness',
        usedIn: 'Phở broth, thịt kho hột vịt, caramelized dishes',
        substitute: 'Regular white sugar (use 75% of the amount — rock sugar is less sweet)',
        buying: 'Asian grocery stores — irregular golden-amber crystals or large chunks.',
        storing: 'Airtight container, indefinitely.',
        essential: false,
    },
    {
        name: 'Caramel Sauce (Nước Màu)', nameVi: 'Nước Màu',
        category: 'Pantry Staples',
        flavor: 'Bitter-sweet, deeply colored — adds color and depth to braised dishes',
        usedIn: 'Thịt kho hột vịt, cá kho tộ, some marinades — the dark color of braised dishes',
        buying: 'Asian grocery stores (bottled) or make by caramelizing sugar until dark amber.',
        storing: 'Refrigerate after opening. Months.',
        essential: false,
    },
    {
        name: 'Agar Agar Powder', nameVi: 'Bột Rau Câu',
        category: 'Pantry Staples',
        flavor: 'Neutral — a plant-based gelling agent that sets firmer than gelatin',
        usedIn: 'Đông sương / thạch rau câu (Vietnamese agar jelly)',
        substitute: 'Gelatin (sets softer, melts at room temperature — different result)',
        buying: 'Asian grocery stores. Powder form preferred over flakes.',
        storing: 'Airtight container, pantry. Up to 2 years.',
        essential: false,
        note: 'Unlike gelatin, agar sets at room temperature and holds its shape in heat. This makes it ideal for the Vietnamese summer.',
    },
    {
        name: 'Pandan Leaves', nameVi: 'Lá Dứa',
        category: 'Pantry Staples',
        flavor: 'Floral, vanilla-like, slightly grassy — the "vanilla of Southeast Asia"',
        usedIn: 'Xôi lá dứa (pandan sticky rice), some desserts, flavoring coconut milk dishes',
        buying: 'Asian grocery stores — fresh, frozen, or extract. Fresh or frozen preferred.',
        storing: 'Freeze fresh leaves for months without significant flavor loss.',
        essential: false,
    },
    {
        name: 'Dried Lotus Seeds', nameVi: 'Hạt Sen Khô',
        category: 'Pantry Staples',
        flavor: 'Mild, slightly starchy, subtly sweet',
        usedIn: 'Chè hạt sen (lotus seed sweet soup), some congee, sam bo luong',
        buying: 'Asian grocery stores — dried (needs soaking) or canned (ready to use).',
        storing: 'Dried: airtight container, up to 1 year. Canned: refrigerate after opening.',
        essential: false,
    },
    {
        name: 'Coconut Water', nameVi: 'Nước Dừa',
        category: 'Pantry Staples',
        flavor: 'Lightly sweet, clean, subtly coconut — not as rich as coconut milk',
        usedIn: 'Thịt kho hột vịt (essential — do not substitute with tap water)',
        buying: 'Fresh young coconuts or Coco Rico coconut soda (substitute used by diaspora communities). Canned/boxed coconut water also works.',
        storing: 'Fresh: use immediately. Canned: pantry, then refrigerate after opening.',
        essential: false,
        note: 'The coconut water in thịt kho hột vịt is not optional. It gives the braising liquid a sweetness and depth that water cannot replicate.',
    },
];

// ── Component ────────────────────────────────────────────────────────────────


// ── Visuals ─────────────────────────────────────────────────────────────────

const CAT_STYLE: Record<string, { emoji: string; color: string; tint: string }> = {
    'Sauces & Condiments': { emoji: '🍶', color: '#7A4A22', tint: '#F6E7D5' },
    'Herbs & Aromatics': { emoji: '🌿', color: '#2F6B2F', tint: '#E3F0DC' },
    'Noodles & Rice': { emoji: '🍜', color: '#0B6A8F', tint: '#DFF0F6' },
    'Spices': { emoji: '🌶️', color: '#9A3412', tint: '#FBE4D8' },
    'Proteins': { emoji: '🦐', color: '#B42318', tint: '#FBE3E1' },
    'Vegetables': { emoji: '🥬', color: '#15803D', tint: '#E0F3E6' },
    'Fruits & Souring Agents': { emoji: '🍋', color: '#A16207', tint: '#FBF1CC' },
    'Dairy & Fats': { emoji: '🥛', color: '#8A6A3B', tint: '#F4ECDF' },
    'Pantry Staples': { emoji: '🫙', color: '#5B4636', tint: '#EFE7DC' },
}

/** One emoji per ingredient for the illustrated tiles (used when there is no photo yet) */
const EMOJI: Record<string, string> = {
    'Fish Sauce': '🐟', 'Soy Sauce': '🫗', 'Oyster Sauce': '🦪', 'Hoisin Sauce': '🫙', 'Shrimp Paste': '🦐', 'Maggi Seasoning Sauce': '🍶',
    'Rice Vinegar': '🍶', 'Coconut Milk': '🥥', 'Lemongrass': '🌾', 'Galangal': '🫚', 'Shallots': '🧅', 'Garlic': '🧄', 'Ginger': '🫚',
    'Spring Onion / Scallion': '🧅', 'Thai Basil': '🌿', 'Perilla / Shiso': '🍃', 'Mint': '🌿', 'Cilantro': '🌿', 'Garlic Chives': '🌱',
    'Vietnamese Coriander': '🌿', 'Rice Paddy Herb': '🌱', 'Flat Rice Noodles (Bánh Phở)': '🍜', 'Rice Vermicelli': '🍜',
    'Glass Noodles / Bean Thread': '🍜', 'Wide Rice Noodles (Mì Quảng)': '🍜', 'Rice Paper': '🫓', 'Jasmine Rice': '🍚',
    'Glutinous / Sticky Rice': '🍙', 'Rice Flour': '🌾', 'Tapioca Starch': '🥣', 'Star Anise': '⭐', 'Cinnamon (Vietnamese)': '🪵',
    'Black Cardamom': '🫘', 'Annatto Seeds': '🔴', 'Turmeric': '🟠', 'Coriander Seeds': '🟤', 'Black Pepper': '⚫',
    'Pork Belly': '🥓', 'Pork Bones (Marrow & Knuckle)': '🦴', 'Shrimp': '🦐', 'Dried Shrimp': '🦐', 'Dried Anchovies': '🐟',
    'Quail Eggs': '🥚', 'Water Spinach': '🥬', 'Bean Sprouts': '🌱', 'Banana Blossom': '🌸', 'Bitter Melon': '🥒',
    'Daikon Radish': '🥕', 'Green Mango': '🥭', 'Lime': '🍋', 'Tamarind': '🫛', 'Pineapple': '🍍', 'Guangdong Lime': '🍋',
    'Sweetened Condensed Milk': '🥛', 'Lard / Rendered Pork Fat': '🧈', 'Rock Sugar': '🧊', 'Caramel Sauce (Nước Màu)': '🍯',
    'Agar Agar Powder': '🍮', 'Pandan Leaves': '🍃', 'Dried Lotus Seeds': '🪷', 'Coconut Water': '🥥',
}

/** Taste tags read from each ingredient's own flavor description (nothing invented) */
const TASTES: { tag: string; color: string; re: RegExp }[] = [
    { tag: 'Salty', color: '#475569', re: /salt/i },
    { tag: 'Umami', color: '#7C2D12', re: /umami|savou?ry/i },
    { tag: 'Sweet', color: '#BE185D', re: /sweet|caramel|honey/i },
    { tag: 'Sour', color: '#A16207', re: /sour|tart|tang|acid/i },
    { tag: 'Spicy', color: '#DC2626', re: /spic|hot|heat|pepper|chil/i },
    { tag: 'Bitter', color: '#3F6212', re: /bitter/i },
    { tag: 'Aromatic', color: '#15803D', re: /aroma|fragran|perfum|floral|citrus|lemon|anise|licorice|minty|herbal/i },
    { tag: 'Rich', color: '#92400E', re: /rich|creamy|fatty|buttery/i },
    { tag: 'Funky', color: '#6D28D9', re: /funk|pungent|ferment/i },
    { tag: 'Smoky', color: '#57534E', re: /smok/i },
    { tag: 'Nutty', color: '#78350F', re: /nutt/i },
    { tag: 'Neutral', color: '#64748B', re: /neutral|mild|subtle|delicate/i },
]
const tastesOf = (flavor: string) => TASTES.filter(t => t.re.test(flavor)).slice(0, 3)

const slugify = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const PHOTO_ALIAS: Record<string, string> = { 'Mint': 'vietnamese-mint', 'Flat Rice Noodles (Bánh Phở)': 'rice-noodles' }
function photoFor(name: string, photos: Set<string>): string | null {
    const candidates = [PHOTO_ALIAS[name], slugify(name), slugify(name.replace(/\(.*?\)/g, '')), slugify(name.split('/')[0])].filter(Boolean) as string[]
    for (const c of candidates) for (const ext of ['jpg', 'webp', 'png']) if (photos.has(`${c}.${ext}`)) return `/images/ingredients/${c}.${ext}`
    return null
}

const CREDITS = PHOTO_CREDITS as Record<string, { artist: string; license: string; source: string }>
function creditFor(photo: string | null) {
    if (!photo) return null
    const slug = photo.split('/').pop()!.replace(/\.(jpg|webp|png)$/, '')
    return CREDITS[slug] ?? null
}

const serif = { fontFamily: "'Playfair Display', Georgia, serif" }
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd')

function Visual({ ing, photo, size = 'card' }: { ing: Ingredient; photo: string | null; size?: 'card' | 'hero' | 'chip' }) {
    const st = CAT_STYLE[ing.category] ?? CAT_STYLE['Pantry Staples']
    const fs = size === 'hero' ? 'text-[84px]' : size === 'chip' ? 'text-[30px]' : 'text-[52px]'
    if (photo) {
        return <Image src={photo} alt={ing.name} fill sizes={size === 'hero' ? '(max-width:640px) 100vw, 560px' : size === 'chip' ? '96px' : '(max-width:640px) 50vw, 280px'} className="object-cover" />
    }
    return (
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: `radial-gradient(circle at 30% 25%, #ffffffaa 0%, transparent 55%), ${st.tint}` }}>
            <span className={`${fs} drop-shadow-[0_6px_10px_rgba(0,0,0,0.12)]`} aria-hidden>{EMOJI[ing.name] ?? st.emoji}</span>
        </div>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
export default function IngredientsClient({ photoFiles, recipeCount }: { photoFiles: string[]; recipeCount: number }) {
    const photos = useMemo(() => new Set(photoFiles), [photoFiles])
    const [activeCategory, setActiveCategory] = useState<Category>('All')
    const [search, setSearch] = useState('')
    const [essentialOnly, setEssentialOnly] = useState(false)
    const [open, setOpen] = useState<Ingredient | null>(null)

    const counts = useMemo(() => {
        const m: Record<string, number> = { All: INGREDIENTS.length }
        INGREDIENTS.forEach(i => { m[i.category] = (m[i.category] ?? 0) + 1 })
        return m
    }, [])
    const essentials = useMemo(() => INGREDIENTS.filter(i => i.essential), [])

    const q = normalize(search.trim())
    const filtered = INGREDIENTS.filter(ing =>
        (activeCategory === 'All' || ing.category === activeCategory) &&
        (!essentialOnly || ing.essential) &&
        (!q || normalize(`${ing.name} ${ing.nameVi} ${ing.flavor} ${ing.usedIn}`).includes(q)))

    useEffect(() => {
        if (!open) return
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
        window.addEventListener('keydown', onKey)
        return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
    }, [open])

    return (
        <main className="min-h-screen" style={{ background: '#FBF8F4', fontFamily: "'DM Sans', sans-serif" }}>

            {/* ═══ HERO ═══ */}
            <header className="px-5 pb-10 pt-28 sm:px-6 sm:pt-36" style={{ background: '#F5EDE3' }}>
                <div className="mx-auto max-w-[1200px]">
                    <div className="mb-4 flex items-center gap-2">
                        <span className="h-px w-8" style={{ background: '#D97706' }} />
                        <span className="text-[11px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.18em' }}>The Vietnamese pantry</span>
                    </div>
                    <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                            <h1 className="font-bold leading-[1.04]" style={{ ...serif, fontSize: 'clamp(2.1rem, 5.2vw, 3.8rem)', color: '#2D1A0E' }}>
                                Know your <em style={{ color: '#D97706' }}>ingredients</em>
                            </h1>
                            <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.65)' }}>
                                {INGREDIENTS.length} ingredients in {CATEGORIES.length - 1} groups — what each tastes like, where to buy it and how to keep it fresh.
                            </p>
                        </div>
                        <div className="relative w-full lg:max-w-[400px]">
                            <Search size={18} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2" style={{ color: '#B8A08A' }} aria-hidden />
                            <label htmlFor="ing-search" className="sr-only">Search ingredients</label>
                            <input
                                id="ing-search" type="search" value={search} onChange={e => setSearch(e.target.value)}
                                placeholder="Search: nước mắm, lemongrass…"
                                className="h-14 w-full rounded-full border border-[#E8D9C8] bg-white pl-12 pr-12 text-[16px] text-[#2D1A0E] shadow-[0_10px_30px_-16px_rgba(75,46,26,0.35)] outline-none placeholder:text-[#B8A08A] focus:border-[#D97706] focus:ring-4 focus:ring-[#D97706]/10 sm:text-[15px] [&::-webkit-search-cancel-button]:hidden"
                            />
                            {search && (
                                <button onClick={() => setSearch('')} aria-label="Clear search" className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full hover:bg-[#F5EDE3]" style={{ color: '#8A6E58' }}><X size={16} /></button>
                            )}
                        </div>
                    </div>

                    {/* Starter kit */}
                    {!search && activeCategory === 'All' && (
                        <div className="mt-10">
                            <div className="mb-3 flex items-baseline justify-between">
                                <h2 className="text-[18px] font-bold" style={{ ...serif, color: '#2D1A0E' }}>Start here: the {essentials.length} essentials</h2>
                                <button onClick={() => { setEssentialOnly(true); document.getElementById('ing-grid')?.scrollIntoView({ behavior: 'smooth' }) }} className="text-[13px] font-semibold hover:text-[#D97706]" style={{ color: '#4B2E1A' }}>See all →</button>
                            </div>
                            <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden">
                                {essentials.map(ing => (
                                    <button key={ing.name} onClick={() => setOpen(ing)} className="group w-[88px] flex-shrink-0 text-center">
                                        <span className="relative mx-auto block h-[76px] w-[76px] overflow-hidden rounded-full border-2 border-white shadow-[0_8px_20px_-10px_rgba(45,26,14,0.5)] transition-transform group-hover:-translate-y-0.5">
                                            <Visual ing={ing} photo={photoFor(ing.name, photos)} size="chip" />
                                        </span>
                                        <span className="mt-2 line-clamp-2 block text-[12px] font-semibold leading-tight" style={{ color: '#2D1A0E' }}>{ing.name.replace(/\s*\(.*\)/, '')}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* ═══ FILTER CHIPS (sticky) ═══ */}
            <nav aria-label="Ingredient groups" className="sticky top-[61px] z-30 border-y border-[rgba(75,46,26,0.08)] backdrop-blur-xl min-[641px]:top-[85px]" style={{ background: 'rgba(251,248,244,0.92)' }}>
                <div className="mx-auto flex max-w-[1200px] items-center gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden">
                    {CATEGORIES.map(cat => {
                        const on = activeCategory === cat
                        const st = CAT_STYLE[cat]
                        return (
                            <button
                                key={cat}
                                aria-pressed={on}
                                onClick={() => setActiveCategory(cat)}
                                className="relative flex flex-shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-[13.5px] font-medium"
                                style={{ color: on ? '#fff' : '#4B2E1A' }}
                            >
                                {on && <motion.span layoutId="ing-chip" className="absolute inset-0 rounded-full" style={{ background: '#2D1A0E' }} transition={{ type: 'spring', stiffness: 420, damping: 36 }} />}
                                {!on && <span className="absolute inset-0 rounded-full border border-[rgba(75,46,26,0.12)] bg-white" />}
                                {st && <span className="relative" aria-hidden>{st.emoji}</span>}
                                <span className="relative">{cat}</span>
                                <span className="relative text-[11px]" style={{ opacity: 0.55 }}>{counts[cat]}</span>
                            </button>
                        )
                    })}
                </div>
            </nav>

            {/* ═══ GRID ═══ */}
            <section id="ing-grid" className="mx-auto max-w-[1200px] scroll-mt-40 px-5 pb-20 pt-6 sm:px-6">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[14px]" style={{ color: 'rgba(75,46,26,0.6)' }} aria-live="polite">
                        <strong style={{ color: '#2D1A0E' }}>{filtered.length}</strong> ingredients{search && <> for “{search}”</>}
                    </p>
                    <label className="flex cursor-pointer items-center gap-2 text-[13.5px] font-medium" style={{ color: '#4B2E1A' }}>
                        <input type="checkbox" checked={essentialOnly} onChange={e => setEssentialOnly(e.target.checked)} className="h-4 w-4 accent-[#D97706]" />
                        Essentials only
                    </label>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                    {filtered.map((ing, i) => {
                        const photo = photoFor(ing.name, photos)
                        const st = CAT_STYLE[ing.category]
                        return (
                            <motion.button
                                key={ing.name}
                                layout
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(i, 12) * 0.02, duration: 0.25 }}
                                onClick={() => setOpen(ing)}
                                className="group flex flex-col overflow-hidden rounded-2xl bg-white text-left outline-none transition-shadow hover:shadow-[0_18px_40px_-20px_rgba(45,26,14,0.45)] focus-visible:ring-2 focus-visible:ring-[#D97706]"
                                style={{ border: '1px solid rgba(75,46,26,0.08)' }}
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.05]">
                                        <Visual ing={ing} photo={photo} />
                                    </div>
                                    {ing.essential && (
                                        <span className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10.5px] font-bold backdrop-blur" style={{ color: '#B45309' }}>
                                            <Star size={11} fill="#D97706" color="#D97706" /> Essential
                                        </span>
                                    )}
                                </div>
                                <div className="flex flex-1 flex-col p-3.5 sm:p-4">
                                    <p className="text-[10.5px] font-bold uppercase" style={{ color: st?.color, letterSpacing: '0.08em' }}>{ing.category}</p>
                                    <h3 className="mt-1 text-[16px] font-bold leading-snug sm:text-[17px]" style={{ ...serif, color: '#2D1A0E' }}>{ing.name}</h3>
                                    <p className="text-[13px] italic" style={{ ...serif, color: 'rgba(75,46,26,0.55)' }}>{ing.nameVi}</p>
                                    <div className="mt-auto flex flex-wrap gap-1 pt-3">
                                        {tastesOf(ing.flavor).map(t => (
                                            <span key={t.tag} className="rounded-full px-2 py-0.5 text-[11px] font-semibold" style={{ background: `${t.color}14`, color: t.color }}>{t.tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.button>
                        )
                    })}
                </div>

                {filtered.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-[22px] font-bold" style={{ ...serif, color: '#2D1A0E' }}>No ingredients found</p>
                        <p className="mt-2 text-[15px]" style={{ color: 'rgba(75,46,26,0.6)' }}>Try English or Vietnamese without accents — “nuoc mam”, “basil”.</p>
                        <button onClick={() => { setSearch(''); setActiveCategory('All'); setEssentialOnly(false) }} className="mt-6 rounded-full px-6 py-3 text-[14px] font-semibold text-white" style={{ background: '#2D1A0E' }}>Reset</button>
                    </div>
                )}
            </section>

            {/* ═══ CTA ═══ */}
            <section className="px-5 pb-20 sm:px-6">
                <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-6 rounded-[28px] px-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-12" style={{ background: '#2D1A0E' }}>
                    <div>
                        <h2 className="text-[28px] font-bold leading-tight text-white" style={serif}>Ready to cook with them?</h2>
                        <p className="mt-2 text-[15px]" style={{ color: 'rgba(245,237,227,0.65)' }}>{recipeCount} authentic recipes use the ingredients on this page.</p>
                    </div>
                    <Link href="/recipes" className="group flex items-center gap-2 rounded-full px-7 py-4 text-[14px] font-semibold text-white" style={{ background: '#D97706', textDecoration: 'none' }}>
                        Browse recipes <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>

            {/* ═══ DETAIL SHEET ═══ */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div className="fixed inset-0 z-[120]" style={{ background: 'rgba(20,11,5,0.5)', backdropFilter: 'blur(3px)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)} />
                        <motion.div
                            role="dialog" aria-modal="true" aria-label={open.name}
                            className="fixed inset-x-0 bottom-0 z-[121] flex max-h-[90vh] flex-col overflow-hidden rounded-t-[28px] bg-[#FBF8F4] sm:inset-auto sm:left-1/2 sm:top-1/2 sm:max-h-[86vh] sm:w-[560px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[28px]"
                            initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }}
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            <div className="relative h-[200px] flex-shrink-0 sm:h-[240px]">
                                <Visual ing={open} photo={photoFor(open.name, photos)} size="hero" />
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,11,5,0.55), transparent 55%)' }} />
                                <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur" style={{ color: '#2D1A0E' }}><X size={18} /></button>
                                <div className="absolute inset-x-0 bottom-0 p-5">
                                    <p className="text-[11px] font-bold uppercase text-white/80" style={{ letterSpacing: '0.1em' }}>{CAT_STYLE[open.category]?.emoji} {open.category}{open.essential && ' · ★ Essential'}</p>
                                    <h2 className="text-[28px] font-bold leading-tight text-white" style={serif}>{open.name}</h2>
                                    <p className="text-[15px] italic text-white/85" style={serif}>{open.nameVi}</p>
                                </div>
                            </div>
                            <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-6 pt-5">
                                <div className="flex flex-wrap gap-1.5">
                                    {tastesOf(open.flavor).map(t => <span key={t.tag} className="rounded-full px-2.5 py-1 text-[12px] font-semibold" style={{ background: `${t.color}14`, color: t.color }}>{t.tag}</span>)}
                                </div>
                                <p className="mt-3 text-[16px] leading-relaxed" style={{ color: '#2D1A0E' }}>{open.flavor}</p>

                                <div className="mt-5 space-y-2.5">
                                    {[
                                        { Icon: UtensilsCrossed, label: 'Used in', value: open.usedIn },
                                        { Icon: ShoppingBasket, label: 'Where to buy', value: open.buying },
                                        { Icon: Refrigerator, label: 'How to store', value: open.storing },
                                        ...(open.substitute ? [{ Icon: Repeat, label: 'Substitute', value: open.substitute }] : []),
                                    ].map(({ Icon, label, value }) => (
                                        <div key={label} className="flex gap-3 rounded-2xl bg-white p-3.5" style={{ border: '1px solid rgba(75,46,26,0.07)' }}>
                                            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: '#FEF3C7', color: '#B45309' }}><Icon size={17} /></span>
                                            <div>
                                                <p className="text-[11px] font-bold uppercase" style={{ color: 'rgba(75,46,26,0.5)', letterSpacing: '0.08em' }}>{label}</p>
                                                <p className="text-[14px] leading-relaxed" style={{ color: '#2D1A0E' }}>{value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {open.note && (
                                    <p className="mt-3 flex gap-2 rounded-2xl px-4 py-3 text-[14px] leading-relaxed" style={{ background: '#FAF0DC', color: '#6B4A1F' }}>
                                        <Lightbulb size={17} className="mt-0.5 flex-shrink-0" color="#B45309" /> <span>{open.note}</span>
                                    </p>
                                )}
                                {(() => {
                                    const cr = creditFor(photoFor(open.name, photos))
                                    return cr ? (
                                        <p className="mt-4 text-[11px] leading-snug" style={{ color: 'rgba(75,46,26,0.45)' }}>
                                            Photo: <a href={cr.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{cr.artist.replace(/<[^>]*>/g, '')}</a> · {cr.license} · via Wikimedia Commons
                                        </p>
                                    ) : null
                                })()}
                            </div>
                            <div className="border-t px-5 pb-[calc(14px+env(safe-area-inset-bottom))] pt-3" style={{ borderColor: 'rgba(75,46,26,0.08)' }}>
                                <Link
                                    href={`/recipes?search=${encodeURIComponent(open.name.replace(/\s*\(.*\)/, '').split('/')[0].trim())}`}
                                    className="flex h-[52px] w-full items-center justify-center gap-2 rounded-full text-[15px] font-semibold text-white"
                                    style={{ background: '#2D1A0E', textDecoration: 'none' }}
                                >
                                    Recipes with {open.name.replace(/\s*\(.*\)/, '').split('/')[0].trim().toLowerCase()} <ArrowRight size={17} />
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </main>
    )
}
