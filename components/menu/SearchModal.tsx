'use client'
import { useState, useEffect, useRef } from 'react'
import { FoodItem } from '@/types/menu'
import Link from 'next/link'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  items: FoodItem[]
  restaurantName: string
}

export default function SearchModal({ isOpen, onClose, items, restaurantName }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Enhanced Backdrop with Heavy Blur */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur z-50 animate-fadeIn"
        onClick={onClose}
      />
      
      {/* Glassmorphism Search Card */}
      <div className="fixed inset-x-4 top-20 max-w-2xl mx-auto z-50 animate-slideDown">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 max-h-[80vh] flex flex-col overflow-hidden">
          
          {/* Search Header */}
          <div className="p-4 sm:p-6 border-b border-gray-200/50 bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for food items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none text-lg sm:text-xl text-gray-900 bg-transparent placeholder:text-gray-400"
              />
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100/80 rounded-xl transition-all active:scale-95 flex-shrink-0"
                aria-label="Close search"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Results Container */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white/60 backdrop-blur-sm">
            {searchQuery === '' ? (
              <div className="text-center py-12 sm:py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-orange-100 to-yellow-100 mb-4">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-base sm:text-lg font-medium">Type to search for food items</p>
                <p className="text-gray-400 text-sm mt-2">Try searching by name or category</p>
              </div>
            ) : filteredItems.length > 0 ? (
              <div className="space-y-2 sm:space-y-3">
                {filteredItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`/${restaurantName}/menu/${item.category.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={onClose}
                    className="block p-4 sm:p-5 rounded-2xl border-2 border-gray-200/50 bg-white/80 backdrop-blur-sm hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-50/80 hover:to-yellow-50/80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base sm:text-lg text-gray-900 truncate">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="inline-flex items-center px-2 py-1 rounded-md bg-orange-100 text-orange-600 text-xs font-medium capitalize">
                            {item.category}
                          </span>
                          {!item.status && (
                            <span className="inline-flex items-center px-2 py-1 rounded-md bg-red-100 text-red-600 text-xs font-medium">
                              Out of Stock
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="text-lg sm:text-xl font-bold text-orange-600">
                          ${item.price}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 sm:py-16">
                <div className="text-6xl sm:text-7xl mb-4 animate-pulse">🔍</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No items found</h3>
                <p className="text-gray-500 text-sm sm:text-base">Try searching with different keywords</p>
              </div>
            )}
          </div>

          {/* Results Footer */}
          {searchQuery !== '' && filteredItems.length > 0 && (
            <div className="p-4 border-t border-gray-200/50 bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-xl">
              <p className="text-sm sm:text-base text-gray-600 text-center font-medium">
                Found <span className="text-orange-600 font-bold">{filteredItems.length}</span> item{filteredItems.length !== 1 ? 's' : ''}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
