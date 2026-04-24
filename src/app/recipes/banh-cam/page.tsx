'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-cam',
    title: 'Vietnamese Sesame Balls',
    subtitle: 'Crispy, chewy, golden — fried glutinous rice balls filled with sweet mung bean paste and rolled in sesame seeds.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '1 hr 15 min',
    rating: 4.8,
    baseServings: 16,
    heroImage:
        'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1600&q=85',
    intro:
        'Bánh cam is the street food dessert that announces itself — the sizzle of sesame seeds hitting hot oil, the hollow thud when you tap the golden shell. The dough is glutinous rice flour mixed with boiled potato for extra chewiness; the filling is sweetened mung bean paste, dense and fragrant with pandan. When fried correctly the shell puffs up around the filling, creating an air pocket that makes each bite simultaneously crispy, chewy, and soft. They are best eaten within minutes of leaving the oil.',
    ingredientSections: [
        {
            title: 'Dough',
            items: [
                { amount: 250, unit: 'g', name: 'glutinous rice flour' },
                { amount: 100, unit: 'g', name: 'potato', note: 'boiled and mashed while hot' },
                { amount: 80, unit: 'g', name: 'caster sugar' },
                { amount: 120, unit: 'ml', name: 'warm water', note: 'adjust as needed' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
        {
            title: 'Mung bean filling',
            items: [
                { amount: 150, unit: 'g', name: 'split mung beans', note: 'soaked 2 hrs, steamed until soft' },
                { amount: 50, unit: 'g', name: 'caster sugar' },
                { amount: 1, unit: 'tbsp', name: 'coconut oil or butter' },
                { amount: 1, unit: 'tsp', name: 'pandan extract' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
        {
            title: 'Coating & frying',
            items: [
                { amount: 100, unit: 'g', name: 'white sesame seeds' },
                { amount: 1, unit: 'l', name: 'neutral oil', note: 'for deep frying' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the mung bean filling',
            description:
                'While mung beans are still hot, mash thoroughly with sugar, coconut oil, pandan extract, and salt until a smooth, firm paste forms. Cook in a non-stick pan over low heat, stirring constantly, for 5 minutes until the paste pulls away from the sides and holds its shape. Cool completely, then roll into 16 equal balls (about 15g each). Refrigerate until firm.',
            tip: 'The filling must be completely cool and firm before wrapping — warm filling makes the dough sticky and hard to seal.',
        },
        {
            title: 'Make the dough',
            description:
                description: `Combine glutinous rice flour, mashed potato, sugar, and salt. Add warm water gradually, mixing until a soft, smooth, non-sticky dough forms. It should be pliable like playdough — add water or flour a teaspoon at a time to adjust. Divide into 16 equal portions.`,
