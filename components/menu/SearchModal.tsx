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

  // Filter items based on search query
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Close on Escape key
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
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-white/10 bg-opacity-50 z-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-x-4 top-20 max-w-2xl mx-auto z-50 bg-orange-50 rounded-2xl shadow-2xl max-h-[80vh] flex flex-col">
        
        {/* Search Header */}
        <div className="p-4 border-b bg-orange-100">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for food items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-lg"
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="flex-1 overflow-y-auto p-4 ">
          {searchQuery === '' ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-gray-500">Type to search for food items</p>
            </div>
          ) : filteredItems.length > 0 ? (
            <div className="space-y-3">
              {filteredItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/${restaurantName}/menu/${item.category}`}
                  onClick={onClose}
                  className={`block p-4 rounded-xl border transition-all ${
                    item.status
                      ? 'border-gray-200 hover:border-orange-300 hover:shadow-md bg-white'
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className={`font-semibold text-base mb-1 ${
                        item.status ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded capitalize">
                          {item.category}
                        </span>
                        {!item.status && (
                          <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                            Out of Stock
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold ${
                        item.status ? 'text-orange-600' : 'text-gray-400'
                      }`}>
                        ₹{item.price}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No items found
              </h3>
              <p className="text-gray-500">
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>

        {/* Footer Info */}
        {searchQuery !== '' && filteredItems.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <p className="text-sm text-gray-600 text-center">
              Found {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>
    </>
  )
}
