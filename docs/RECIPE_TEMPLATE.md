# Recipe Template — FlavorNest Vietnam

> Copy this entire file to `docs/drafts/{slug}.md`, fill in the fields, then hand it to Claude to convert into TypeScript and ship.
>
> **Fields with `// REQUIRED` must be filled. Fields with `// OPTIONAL` can be left blank or deleted.**
> **Round brackets like `(guidance)` are hints — delete them when writing your content.**

---

## 1. Identity

- **slug**: `` // REQUIRED — kebab-case English, e.g. `banh-mi-thit-nuong`
- **title**: `` // REQUIRED — English title, e.g. "Lemongrass Pork Bánh Mì"
- **subtitle**: `` // REQUIRED — Vietnamese name with full diacritics, e.g. "Bánh Mì Thịt Nướng"

---

## 2. Descriptions

### shortDescription 
<!-- REQUIRED · 1-2 sentences · Used in cards + meta description · ~25-35 words -->

(Write 1-2 sentences describing what makes this dish special. Think: what would make someone click to read more?)

### description 
<!-- REQUIRED · 2-3 paragraphs · Full hero story · ~150-250 words total -->

**Paragraph 1** (context): 
(Where is this dish from? What's its place in Vietnamese culture? Who eats it and when?)

**Paragraph 2** (sensory/technique):
(What does it taste/smell/look like? What's the technique that makes it special?)

**Paragraph 3** (logistics):
(How long does it take? Beginner-friendly or advanced? Serves how many?)

### storySnippet 
<!-- OPTIONAL · 2-4 sentences · Personal anecdote · Shown as blockquote -->

(A personal memory if you have one. The more specific, the better. Examples:
- "My grandmother in Phú Yên used to..."
- "The first time I had banh mi in Germany, I..."
- "Every Tết in Saigon, my family would..."
If you don't have one, delete this section.)

---

## 3. Media

- **image**: `` // REQUIRED — Unsplash URL ending with `?auto=format&fit=crop&w=1200&q=85`
  - Search on https://unsplash.com using terms like "pho", "vietnamese food", "banh mi"
  - Click the image → right-click "Copy image address"
  - Add `?auto=format&fit=crop&w=1200&q=85` at the end
- **imageAlt**: `` // REQUIRED — Describe the image for accessibility + SEO, e.g. "Bowl of steaming pho with fresh herbs and lime wedges"

---

## 4. Timing & Metadata

- **prepTime**: `` // REQUIRED — e.g. "20 min" (use "min" or "hr" only)
- **cookTime**: `` // REQUIRED — e.g. "1 hr 30 min"
- **totalTime**: `` // REQUIRED — e.g. "1 hr 50 min"
- **servings**: `` // REQUIRED — number, e.g. 4
- **yield**: `` // REQUIRED — readable output, e.g. "4 bowls" | "12 buns" | "8 rolls"
- **difficulty**: `` // REQUIRED — one of: Easy | Medium | Hard
- **category**: `` // REQUIRED — one of: Soup | Noodles | Street Food | Rice | Grilled | Rolls | Dessert | Vegetarian
- **cuisine**: `Vietnamese` // leave as-is

---

## 5. Engagement

- **rating**: `` // REQUIRED — number 4.5-5.0, e.g. 4.8
- **ratingCount**: `` // REQUIRED — integer, e.g. 127 (realistic-looking number)
- **tags**: `` // REQUIRED — 2-4 short tags, e.g. ["Street Food", "Quick", "Saigon Classic"]
- **isFeatured**: `` // OPTIONAL — `true` if you want it in homepage featured, otherwise delete
- **isNew**: `` // OPTIONAL — `true` for first 2 weeks after publishing, otherwise delete

---

## 6. Ingredients

<!-- 
REQUIRED — Group ingredients by section ("For the broth", "For the sauce", "For garnish")
Each ingredient should have:
  - amount: "500 g (1.1 lb)" — metric primary, imperial in parens
  - name: "Pork belly" (English)
  - nameVi: "Thịt ba chỉ" (Vietnamese, OPTIONAL)
  - note: "skin removed, cut into 2cm cubes" (OPTIONAL prep instruction)

Aim for 15-30 ingredients total across 2-5 groups.
-->

### Group 1: (e.g. "For the marinade")

| Amount | Name (English) | Name (Vietnamese) | Prep note |
|---|---|---|---|
| 500 g (1.1 lb) | Pork shoulder | Thịt vai heo | sliced 3mm thin |
| 2 stalks | Lemongrass | Sả | white parts only, minced |
| 3 cloves | Garlic | Tỏi | minced |
| 1 tbsp | Fish sauce | Nước mắm | Phú Quốc brand preferred |
<!-- Add more rows as needed -->

### Group 2: (e.g. "For assembly")

| Amount | Name (English) | Name (Vietnamese) | Prep note |
|---|---|---|---|
| 4 | Vietnamese baguettes | Bánh mì | fresh, not stale |
| 1 | Cucumber | Dưa chuột | cut into long strips |

### Group 3: (optional — add as many groups as needed)

| Amount | Name (English) | Name (Vietnamese) | Prep note |
|---|---|---|---|
|  |  |  |  |

---

## 7. Instructions

<!-- 
REQUIRED — 6-10 steps. Each step should have:
  - title: "Marinate the pork" (3-5 words, action-oriented)
  - description: 2-4 sentences (~60-100 words) with clear actionable steps
  - duration: "15 min" (OPTIONAL — only if this step has a specific timer)
  - tip: "The smell when the lemongrass hits the hot oil tells you it's ready" (OPTIONAL chef secret)

Write in present tense. Address the reader directly (you, your).
-->

### Step 1: (Action verb + object, e.g. "Marinate the pork")
- **Duration**: `` // OPTIONAL, e.g. "30 min (minimum)"
- **Description**: 
  (2-4 sentences. Start with the action. Describe what to do, watch for visual/sensory cues, end with what ready looks/smells like.)
- **Tip**: 
  (OPTIONAL — a chef's secret or common mistake to avoid. Delete if no tip.)

### Step 2: (e.g. "Prepare the pickles")
- **Duration**: ``
- **Description**: 
- **Tip**: 

### Step 3: (e.g. "Grill the pork")
- **Duration**: ``
- **Description**: 
- **Tip**: 

<!-- Continue for steps 4, 5, 6... up to 8-10 steps -->

### Step 4:
- **Duration**: ``
- **Description**: 
- **Tip**: 

### Step 5:
- **Duration**: ``
- **Description**: 
- **Tip**: 

### Step 6:
- **Duration**: ``
- **Description**: 
- **Tip**: 

### Step 7:
- **Duration**: ``
- **Description**: 
- **Tip**: 

---

## 8. Tips (Chef's Secrets)

<!-- OPTIONAL · 3-5 tips · Each tip is 1 sentence (~15-30 words) -->

- (Tip 1: e.g. "Make the pickles at least 1 hour ahead — they taste better after the flavors meld.")
- (Tip 2: e.g. "If you don't have a grill, broil at 250°C for 8 minutes per side.")
- (Tip 3: e.g. "Leftover marinated pork freezes well for up to 3 months.")

---

## 9. Variations

<!-- OPTIONAL · 2-4 variations · Regional variants or dietary swaps -->

- **Regional variant**: (e.g. "Hanoi-style: use char siu instead of grilled pork, skip lemongrass.")
- **Dietary variant**: (e.g. "Vegetarian: replace pork with marinated tofu and mushrooms.")
- **Quick variant**: (e.g. "30-minute version: use thinly sliced pork belly, skip overnight marinade.")

---

## 10. Nutrition (per serving)

<!-- OPTIONAL but RECOMMENDED — Google Rich Results love nutrition data -->

- **calories**: `` // e.g. 420
- **protein**: `` // e.g. "28 g"
- **fat**: `` // e.g. "12 g"
- **carbs**: `` // e.g. "48 g"
- **sodium**: `` // OPTIONAL, e.g. "980 mg"
- **fiber**: `` // OPTIONAL, e.g. "3 g"

---

## 11. SEO Keywords

<!-- REQUIRED · 5-10 keywords · Comma-separated English phrases people would search -->

Examples:
- banh mi recipe
- vietnamese sandwich
- lemongrass pork recipe
- authentic banh mi
- vietnamese street food
- how to make banh mi at home

**Your keywords**:
- 
- 
- 
- 
- 
- 

---

## 12. Publishing Info

- **datePublished**: `` // REQUIRED — YYYY-MM-DD format, e.g. "2026-04-20"
- **author**: `FlavorNest Vietnam` // leave as-is

---

## ✅ Ready to Ship Checklist

Before handing this to Claude, verify:

- [ ] All REQUIRED fields filled
- [ ] No `(guidance text)` left in the content
- [ ] Vietnamese diacritics correct (Phở not Pho)
- [ ] Image URL tested (opens the right photo)
- [ ] Timing math correct (prep + cook = total)
- [ ] Servings number matches yield (4 servings → "4 bowls")
- [ ] At least 15 ingredients, 6 steps
- [ ] Nutrition estimated realistically

When ready, paste this entire file to Claude and say:
> "Convert this recipe to TypeScript and add to recipes-detailed.ts"

Claude will handle the rest.