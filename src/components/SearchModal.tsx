'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

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
      onClose()
      setQuery('')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-fn-brown/40 backdrop-blur-sm cursor-pointer"
          />
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-white rounded-[32px] shadow-2xl p-6 overflow-hidden z-[101]"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-fn-brown/40 hover:text-fn-brown hover:bg-fn-brown/5 rounded-full transition-all"
            >
              <X size={20} />
            </button>
            <form onSubmit={handleSearch} className="relative mt-2">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-fn-amber w-5 h-5" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type recipe or dish name..."
                className="w-full bg-fn-brown/5 border-none rounded-2xl py-3.5 pl-12 pr-4 text-fn-brown outline-none focus:ring-2 ring-fn-amber/20 transition-all"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                
              />
            </form>
            <div className="mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] flex-1 bg-fn-brown/10"></div>
                <p className="text-[10px] font-bold text-fn-brown/40 uppercase tracking-widest">I want to cook today. . .</p>
                <div className="h-[1px] flex-1 bg-fn-brown/10"></div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Pho bo', 'Bun cha', 'Goi cuon', 'Ca phe muoi'].map((item) => (
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
  )
}
