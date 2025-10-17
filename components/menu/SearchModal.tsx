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
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      
      <div className="fixed inset-x-4 top-20 max-w-2xl mx-auto z-50 bg-white rounded-2xl shadow-2xl max-h-[80vh] flex flex-col">
        
        <div className="p-4 border-b border-gray-200">
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
              className="flex-1 outline-none text-lg text-gray-900"
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

        <div className="flex-1 overflow-y-auto p-4">
          {searchQuery === '' ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-gray-500">Type to search for food items</p>
            </div>
          ) : filteredItems.length > 0 ? (
            <div className="space-y-2">
              {filteredItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/${restaurantName}/menu/${item.category}`}
                  onClick={onClose}
                  className="block p-4 rounded-lg border border-gray-200 hover:border-orange-400 hover:bg-orange-50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-base text-gray-900">
                        {item.name}
                      </h3>
                      <span className="text-xs text-gray-500 capitalize mt-1 inline-block">
                        {item.category}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-gray-900">
                      ${item.price}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No items found</h3>
              <p className="text-gray-500">Try searching with different keywords</p>
            </div>
          )}
        </div>

        {searchQuery !== '' && filteredItems.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <p className="text-sm text-gray-600 text-center">
              Found {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>
    </>
  )
}
