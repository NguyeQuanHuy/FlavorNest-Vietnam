'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'

export default function SearchModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('')
    const router = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)

    // Tự động focus khi mở
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    const handleSearch = (e?: React.FormEvent, customQuery?: string) => {
        if (e) e.preventDefault()
        const searchTerm = customQuery || query
        if (searchTerm.trim()) {
            router.push(`/recipes?search=${encodeURIComponent(searchTerm.trim())}`)
            setIsOpen(false)
            setQuery('')
        }
    }

    return (
        <>
            {/* NÚT MỞ - Thêm stopPropagation để tránh lỗi */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                }}
                className="text-fn-brown p-2.5 hover:bg-fn-amber/10 rounded-full transition-all duration-300 group"
            >
                <span className="text-xl group-hover:scale-110 block">🔍 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="width: 200px; height: 200px; transform-origin: 50% 50%; transform: scaleX(1) scaleY(1) rotate(0deg);" xml:space="preserve" preserveAspectRatio="xMidYMid meet">
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
	<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
		<path d="M370.068,63.494C329.123,22.549,274.686,0,216.781,0S104.438,22.549,63.494,63.494C22.549,104.438,0,158.876,0,216.78    c0,57.905,22.549,112.343,63.494,153.287c40.944,40.944,95.383,63.494,153.287,63.494s112.342-22.55,153.287-63.494    c40.944-40.944,63.494-95.382,63.494-153.287C433.561,158.876,411.012,104.438,370.068,63.494z M216.78,392.196    c-96.725,0-175.416-78.691-175.416-175.416S120.056,41.364,216.781,41.364s175.415,78.691,175.415,175.416    S313.505,392.196,216.78,392.196z" fill="#E19230" style="fill:#E19230;stroke:none" stroke="none"/>
	</g>
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
	<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
		<path d="M505.943,476.693L369.981,340.732c-8.077-8.077-21.172-8.077-29.249,0c-8.076,8.077-8.076,21.172,0,29.249    l135.961,135.961c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.625-6.058    C514.019,497.865,514.019,484.77,505.943,476.693z" fill="#E19230" style="fill:#E19230;stroke:none" stroke="none"/>
	</g>
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
</g>
<g fill="#E19230" style="fill:#E19230;stroke:none" stroke="none">
</g>
</svg></span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">

                        {/* LỚP NỀN (OVERLAY) - Đặt riêng biệt hoàn toàn */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)} // Cú click này để tắt
                            className="fixed inset-0 bg-fn-brown/40 backdrop-blur-sm cursor-pointer"
                        />

                        {/* HỘP TÌM KIẾM - Thêm stopPropagation để khi bấm vào trong hộp nó KHÔNG bị tắt */}
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-xl bg-white rounded-[32px] shadow-2xl p-6 overflow-hidden z-[101]"
                        >
                            {/* NÚT X TẮT NHANH */}
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-2 text-fn-brown/40 hover:text-fn-brown hover:bg-fn-brown/5 rounded-full transition-all"
                            >
                                <X size={20} />
                            </button>

                            <form onSubmit={handleSearch} className="relative mt-2">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-fn-amber w-5 h-5" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Gõ tên công thức hoặc món ăn..."
                                    className="w-full bg-fn-brown/5 border-none rounded-2xl py-3.5 pl-12 pr-4 text-fn-brown outline-none focus:ring-2 ring-fn-amber/20 transition-all"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </form>

                            <div className="mt-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-[1px] flex-1 bg-fn-brown/10"></div>
                                    <p className="text-[10px] font-bold text-fn-brown/40 uppercase tracking-widest">Gợi ý hôm nay</p>
                                    <div className="h-[1px] flex-1 bg-fn-brown/10"></div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Phở Bò', 'Bún Chả', 'Gỏi Cuốn', 'Cà Phê Muối'].map((item) => (
                                        <button
                                            key={item}
                                            type="button"
                                            onClick={() => handleSearch(undefined, item)}
                                            className="px-4 py-1.5 rounded-full text-xs font-medium text-fn-brown/60 bg-fn-brown/5 border border-transparent hover:border-fn-amber hover:text-fn-amber hover:bg-white transition-all shadow-sm"
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
