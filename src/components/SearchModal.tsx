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
                <span className="text-xl group-hover:scale-110 block">🔍</span>
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