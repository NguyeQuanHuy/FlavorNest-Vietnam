# FlavorNest Vietnam — Recipes Data Architecture

## Tổng quan

Data công thức được tách ra các file riêng trong `src/data/` để dễ bảo trì và tránh lặp code giữa trang category và trang `/recipes`.

---

## Cấu trúc file data

```
src/data/
├── recipes-main-dishes.ts    → MAIN_DISHES_RECIPES[]
├── recipes-breakfast.ts      → BREAKFAST_RECIPES[]
├── recipes-northern.ts       → NORTHERN_RECIPES[]
├── recipes-southern.ts       → SOUTHERN_RECIPES[]
├── recipes-central.ts        → CENTRAL_RECIPES[]
├── recipes-drinks.ts         → DRINKS_RECIPES[]
├── recipes-detailed.ts       → RECIPES_DETAILED[] (full schema với ingredients, steps)
├── recipes.ts                → RECIPES[] (legacy, basic schema)
└── index.ts                  → merge tất cả, export ALL_RECIPES[]
```

---

## Cách thêm recipe mới

### 1. Thêm vào file data của category tương ứng

Ví dụ thêm món mới vào Main Dishes, mở `src/data/recipes-main-dishes.ts` và append vào mảng `MAIN_DISHES_RECIPES`:

```ts
{
  slug: 'ten-mon-an',           // URL-friendly, dùng gạch ngang
  title: 'Tên món (English)',
  subtitle: 'Tên món (Tiếng Việt)',
  image: 'https://...',         // Unsplash URL hoặc /images/recipes/...
  region: 'Northern',          // 'Northern' | 'Central' | 'Southern'
  difficulty: 'Easy',          // 'Easy' | 'Medium' | 'Hard'
  time: '30 min',
  rating: '4.8',
  reviews: 100,
  cal: 350,
  tag: 'Tag Label',
  tagColor: '#D97706',         // amber | '#059669' green | '#DC2626' red | '#7C3AED' purple
  description: "Mô tả ngắn...",
  tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
  category: 'Main Dish',       // Phải khớp với tên category của file
}
```

### 2. Không cần sửa gì thêm

Trang category (`/recipes/main-dishes`) và trang `/recipes` đều đọc từ file data này — tự động hiển thị.

---

## Quy tắc slug

- Dùng gạch ngang, không dấu: `pho-bo`, `banh-mi-trung`
- Không trùng lặp giữa các file — mỗi slug là unique toàn project
- Slug phải khớp với route detail page: `/recipes/[slug]`

---

## Tag colors chuẩn brand

| Màu | Hex | Dùng cho |
|-----|-----|----------|
| Amber | `#D97706` | Default, comfort food |
| Green | `#059669` | Healthy, vegan, quick |
| Red | `#DC2626` | Spicy, festive |
| Purple | `#7C3AED` | Specialty, heritage |
| Orange | `#EA580C` | Grilled, crispy |
| Blue | `#0284C7` | Seafood, coastal |
| Pink | `#BE185D` | Party, festive |
| Dark Red | `#B91C1C` | Signature dishes |

---

## Interface chuẩn (dùng cho tất cả file data)

```ts
interface Recipe {
  slug: string
  title: string
  subtitle: string
  image: string
  region: 'Northern' | 'Central' | 'Southern'
  difficulty: 'Easy' | 'Medium' | 'Hard'
  time: string
  rating: string      // string vì hiển thị "4.9"
  reviews: number
  cal: number
  tag: string
  tagColor: string
  description: string
  tags: string[]      // tối đa 4 tags
  category: string    // 'Main Dish' | 'Breakfast' | 'Northern' | etc.
}
```

---

## File index.ts — merge tất cả

```ts
// src/data/index.ts
import { MAIN_DISHES_RECIPES } from './recipes-main-dishes'
import { BREAKFAST_RECIPES } from './recipes-breakfast'
import { NORTHERN_RECIPES } from './recipes-northern'
import { SOUTHERN_RECIPES } from './recipes-southern'
import { CENTRAL_RECIPES } from './recipes-central'
import { DRINKS_RECIPES } from './recipes-drinks'
import { getDetailedAsLegacy } from './recipes-detailed'

export function getAllRecipes() {
  const detailed = getDetailedAsLegacy()
  const detailedSlugs = new Set(detailed.map(r => r.slug))

  const allCategoryRecipes = [
    ...MAIN_DISHES_RECIPES,
    ...BREAKFAST_RECIPES,
    ...NORTHERN_RECIPES,
    ...SOUTHERN_RECIPES,
    ...CENTRAL_RECIPES,
    ...DRINKS_RECIPES,
  ].filter(r => !detailedSlugs.has(r.slug)) // tránh trùng với detailed

  return [...detailed, ...allCategoryRecipes]
}
```

---

## Checklist khi thêm category mới

- [ ] Tạo file `src/data/recipes-[category].ts`
- [ ] Export mảng với tên `[CATEGORY]_RECIPES`
- [ ] Import vào `src/data/index.ts` và thêm vào `getAllRecipes()`
- [ ] Tạo trang `src/app/recipes/[category]/page.tsx` import từ file data
- [ ] Thêm route vào navbar nếu cần

---

## Lịch sử thay đổi

| Ngày | Thay đổi |
|------|----------|
| 2026-04-30 | Tách data ra file riêng, bắt đầu từ main-dishes và breakfast |
| 2026-04-30 | Fix favorites system: useFavorites hook → FavoritesContext, DB sync |
| 2026-04-30 | Fix auth JWT callback: lookup DB by email để lấy đúng cuid |
| 2026-04-30 | Navbar: thêm heart icon + badge, force scrolled trên trang sáng |
