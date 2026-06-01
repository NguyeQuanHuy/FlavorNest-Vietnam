'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// ── Data ────────────────────────────────────────────────────────────────────

const INGREDIENT_IMAGES: Record<string, string> = {
    'Fish Sauce': 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=120&q=70',
    'Soy Sauce': 'https://images.unsplash.com/photo-1506802913710-1d5e9ff7e822?w=120&q=70',
    'Oyster Sauce': 'https://images.unsplash.com/photo-1611171711912-e3f37b47bb70?w=120&q=70',
    'Hoisin Sauce': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=120&q=70',
    'Shrimp Paste': 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=120&q=70',
    'Maggi Seasoning Sauce': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=120&q=70',
    'Rice Vinegar': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=70',
    'Coconut Milk': 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=120&q=70',
    'Lemongrass': 'https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=120&q=70',
    'Galangal': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=120&q=70',
    'Shallots': 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=120&q=70',
    'Garlic': 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=120&q=70',
    'Ginger': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=120&q=70',
    'Vietnamese Mint': 'https://images.unsplash.com/photo-1466027397211-20d0f2449a3d?w=120&q=70',
    'Thai Basil': 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=120&q=70',
    'Perilla': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=120&q=70',
    'Rice Noodles': 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=120&q=70',
    'Rice': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=120&q=70',
    'Vermicelli': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=120&q=70',
    'Chilli': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=120&q=70',
    'Star Anise': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=120&q=70',
    'Cinnamon': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=120&q=70',
    'Turmeric': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=120&q=70',
    'Pork': 'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=120&q=70',
    'Chicken': 'https://images.unsplash.com/photo-1604503468506-a8da13d11d36?w=120&q=70',
    'Beef': 'https://images.unsplash.com/photo-1588347818036-ce4e5b53e62e?w=120&q=70',
    'Shrimp': 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=120&q=70',
    'Bean Sprouts': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=120&q=70',
    'Morning Glory': 'https://images.unsplash.com/photo-1466027397211-20d0f2449a3d?w=120&q=70',
    'Banana Blossom': 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=120&q=70',
    'Lime': 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=120&q=70',
    'Tamarind': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=120&q=70',
    'Pineapple': 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=120&q=70',
    'Coconut Oil': 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=120&q=70',
    'Palm Sugar': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=70',
};

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

const INGREDIENTS: Ingredient[] = [
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

export default function IngredientsPage() {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const [search, setSearch] = useState('');
    const [expanded, setExpanded] = useState<string | null>(null);

    const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');

    const filtered = INGREDIENTS.filter(ing => {
        const matchCat = activeCategory === 'All' || ing.category === activeCategory;
        const q = normalize(search.trim());
        const matchSearch = !q || normalize(ing.name + ing.nameVi + ing.flavor + ing.usedIn).includes(q);
        return matchCat && matchSearch;
    });

    const essentialCount = filtered.filter(i => i.essential).length;

    const CATEGORY_ICONS: Record<string, string> = {
        'Sauces & Condiments': '🍶',
        'Herbs & Aromatics': '🌿',
        'Noodles & Rice': '🌾',
        'Spices': '🌶️',
        'Proteins': '🦐',
        'Vegetables': '🥬',
        'Fruits & Souring Agents': '🍋',
        'Dairy & Fats': '🥛',
        'Pantry Staples': '🍃',
    }

    const CATEGORY_COLORS: Record<string, string> = {
        'Sauces & Condiments': '#5C3317',
        'Herbs & Aromatics': '#166534',
        'Noodles & Rice': '#0369A1',
        'Spices': '#7C3AED',
        'Proteins': '#DC2626',
        'Vegetables': '#059669',
        'Fruits & Souring Agents': '#D97706',
        'Dairy & Fats': '#92580A',
        'Pantry Staples': '#4B2E1A',
    };

    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: 'DM Sans, sans-serif' }}>

            {/* Hero */}
            <div style={{ background: 'linear-gradient(135deg, #2D1A0E 0%, #4B2E1A 100%)', padding: '120px 24px 60px', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                    <div style={{ width: '32px', height: '2px', background: '#D97706' }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>The Vietnamese Pantry</span>
                    <div style={{ width: '32px', height: '2px', background: '#D97706' }} />
                </div>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#F5EDE3', lineHeight: 1.1, marginBottom: '16px' }}>
                    Vietnamese Ingredients — Complete Guide
                </h1>
                <p style={{ fontSize: '1.05rem', color: 'rgba(245,237,227,0.65)', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.7 }}>
                    {INGREDIENTS.length} essential ingredients across {CATEGORIES.length - 1} categories. Every ingredient with flavor profile, how to use it, where to buy it, and how to store it.
                </p>

                {/* Search */}
                <div style={{ maxWidth: '400px', margin: '0 auto', position: 'relative' }}>
                    <input
                        type="text"
                        placeholder="Search ingredients..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        style={{ width: '100%', padding: '12px 20px 12px 44px', borderRadius: '100px', border: '1px solid rgba(245,237,227,0.2)', background: 'rgba(245,237,227,0.1)', color: '#F5EDE3', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }}
                    />
                    <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="7" />
                            <line x1="16.5" y1="16.5" x2="22" y2="22" />
                        </svg>
                    </span>
                </div>
            </div>

            {/* Filter bar */}
            <div style={{ background: '#fff', borderBottom: '1px solid rgba(75,46,26,0.1)', padding: '12px 24px', position: 'sticky', top: '72px', zIndex: 40 }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', overflowX: 'auto', display: 'flex', gap: '8px', paddingBottom: '2px' }}>
                    {CATEGORIES.map(cat => (
                        <button key={cat} onClick={() => setActiveCategory(cat)}
                            style={{ padding: '6px 16px', borderRadius: '100px', border: `1.5px solid ${activeCategory === cat ? '#D97706' : 'rgba(75,46,26,0.15)'}`, background: activeCategory === cat ? '#D97706' : 'transparent', color: activeCategory === cat ? '#fff' : 'rgba(75,46,26,0.6)', fontSize: '12px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'DM Sans, sans-serif', transition: 'all 0.15s' }}>
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results count */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px 24px 8px' }}>
                <p style={{ fontSize: '13px', color: 'rgba(75,46,26,0.5)', fontWeight: 500 }}>
                    {filtered.length} ingredients {essentialCount > 0 && `· ${essentialCount} essential`}
                    {search && ` matching "${search}"`}
                </p>
            </div>

            {/* Ingredients grid */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '8px 24px 80px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '12px' }}>
                    {filtered.map((ing) => {
                        const isOpen = expanded === ing.name;
                        const color = CATEGORY_COLORS[ing.category] || '#D97706';
                        return (
                            <motion.div key={ing.name} layout
                                style={{ background: '#fff', border: `1px solid rgba(75,46,26,0.08)`, borderRadius: '8px', overflow: 'hidden', borderLeft: `4px solid ${color}`, cursor: 'pointer' }}
                                onClick={() => setExpanded(isOpen ? null : ing.name)}>
                                {/* Header */}
                                <div style={{ padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700, color: '#2D1A0E', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <span style={{ fontSize: '14px' }}>
                                                    {CATEGORY_ICONS[ing.category] || '🌿'}
                                                </span>
                                                {ing.name}
                                            </h3>
                                            {ing.essential && (
                                                <span style={{ fontSize: '9px', fontWeight: 700, color: '#166534', background: 'rgba(22,101,52,0.1)', padding: '2px 7px', borderRadius: '100px', letterSpacing: '0.5px', textTransform: 'uppercase', flexShrink: 0 }}>Essential</span>
                                            )}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ fontSize: '11px', color: color, fontWeight: 600, fontStyle: 'italic' }}>{ing.nameVi}</span>
                                            <span style={{ fontSize: '10px', color: 'rgba(75,46,26,0.35)', background: 'rgba(75,46,26,0.05)', padding: '2px 8px', borderRadius: '100px' }}>{ing.category}</span>
                                        </div>
                                    </div>
                                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}
                                        style={{ color: 'rgba(75,46,26,0.35)', fontSize: '16px', flexShrink: 0, marginTop: '2px' }}>
                                        ↓
                                    </motion.span>
                                </div>

                                {/* Flavor tag */}
                                <div style={{ padding: '0 16px 12px' }}>
                                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '12.5px', color: '#6B5544', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>{ing.flavor}</p>
                                </div>

                                {/* Expanded details */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                                            style={{ overflow: 'hidden' }}>
                                            <div style={{ padding: '0 16px 16px', borderTop: '1px solid rgba(75,46,26,0.07)', paddingTop: '14px' }}>
                                                <div style={{ marginBottom: '10px' }}>
                                                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: color, letterSpacing: '1px', textTransform: 'uppercase' }}>USED IN: </span>
                                                    <span style={{ fontFamily: 'Georgia, serif', fontSize: '12.5px', color: '#4B2E1A' }}>{ing.usedIn}</span>
                                                </div>
                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: ing.substitute || ing.note ? '10px' : '0' }}>
                                                    <div style={{ background: '#FDFAF7', padding: '10px 12px', borderRadius: '4px' }}>
                                                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: '#D97706', letterSpacing: '1px', marginBottom: '4px' }}>BUYING</div>
                                                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '11.5px', color: '#6B5544', margin: 0, lineHeight: 1.5 }}>{ing.buying}</p>
                                                    </div>
                                                    <div style={{ background: '#FDFAF7', padding: '10px 12px', borderRadius: '4px' }}>
                                                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: '#0369A1', letterSpacing: '1px', marginBottom: '4px' }}>STORING</div>
                                                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '11.5px', color: '#6B5544', margin: 0, lineHeight: 1.5 }}>{ing.storing}</p>
                                                    </div>
                                                </div>
                                                {ing.substitute && (
                                                    <div style={{ padding: '8px 12px', background: '#FFF8E8', borderRadius: '4px', marginBottom: '8px', borderLeft: '3px solid #D97706' }}>
                                                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: '#D97706', letterSpacing: '1px' }}>SUBSTITUTE: </span>
                                                        <span style={{ fontFamily: 'Georgia, serif', fontSize: '11.5px', color: '#6B5544', fontStyle: 'italic' }}>{ing.substitute}</span>
                                                    </div>
                                                )}
                                                {ing.note && (
                                                    <div style={{ padding: '8px 12px', background: '#F0F7FF', borderRadius: '4px', borderLeft: '3px solid #0369A1' }}>
                                                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: '#0369A1', letterSpacing: '1px' }}>NOTE: </span>
                                                        <span style={{ fontFamily: 'Georgia, serif', fontSize: '11.5px', color: '#6B5544', fontStyle: 'italic' }}>{ing.note}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(75,46,26,0.4)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌿</div>
                        <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>No ingredients found for "{search}"</p>
                    </div>
                )}
            </div>

            {/* Bottom CTA */}
            <div style={{ background: '#2D1A0E', padding: '48px 24px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#F5EDE3', marginBottom: '8px', fontStyle: 'italic' }}>
                    Ready to cook with these ingredients?
                </p>
                <p style={{ color: 'rgba(245,237,227,0.5)', marginBottom: '24px', fontSize: '14px' }}>
                    Browse 89+ authentic Vietnamese recipes using every ingredient on this list.
                </p>
                <Link href="/recipes" style={{ display: 'inline-block', background: '#D97706', color: 'white', fontWeight: 600, fontSize: '14px', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none' }}>
                    Browse All Recipes →
                </Link>
            </div>
        </div>
    );
}