'use client'

import { Heart } from 'lucide-react' // Đổi Bookmark thành Heart

export default function SaveButton({ recipe }: { recipe: any }) {

    const handleSave = () => {
        if (typeof window === 'undefined') return;

        try {
            const raw = localStorage.getItem('fn_favs')
            const existing = JSON.parse(raw || '[]')
            const isExisted = existing.some((item: any) => item.slug === recipe.slug)

            if (!isExisted) {
                const newFavorite = {
                    slug: recipe.slug,
                    title: recipe.title,
                    image: recipe.image,
                    cookTime: recipe.cookTime,
                    difficulty: recipe.difficulty,
                    category: recipe.category,
                    savedAt: Date.now()
                }

                const updated = [newFavorite, ...existing]
                localStorage.setItem('fn_favs', JSON.stringify(updated))
                alert(`Đã thêm "${recipe.title}" vào mục yêu thích! ❤️`)
            } else {
                alert("Món này đã có trong danh sách yêu thích của bạn rồi.")
            }
        } catch (error) {
            console.error("Error saving favorite:", error)
        }
    }

    return (
        <button
            onClick={handleSave}
            className="flex items-center gap-2 text-xs font-bold border border-red-100 text-red-600 bg-red-50/50 hover:bg-red-50 hover:border-red-200 px-5 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 group"
        >
            <Heart
                size={16}
                className="transition-transform group-hover:scale-110 group-hover:fill-red-500"
            // fill="none" (Trái tim rỗng khi chưa lưu)
            />
            <span>Yêu thích</span>
        </button>
    )
}