'use client'
import { useState } from 'react'
import SearchModal from './SearchModal'
import { useMenuData } from '@/hooks/useMenuData'

interface MenuHeaderProps {
  restaurantName: string
  restaurantId: string
  onMenuClick: () => void
}

export default function MenuHeader({ restaurantName, restaurantId, onMenuClick }: MenuHeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false)
  const { items } = useMenuData(restaurantId)

  const getNameFontSize = (name: string) => {
    const length = name.length
    if (length <= 15) return 'text-lg'
    if (length <= 25) return 'text-base'
    return 'text-sm'
  }

  const nameSize = getNameFontSize(restaurantName)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center gap-3 px-4 py-3">
          
          <div className="flex-1 min-w-0">
            <h1 className={`${nameSize} font-bold text-gray-900 capitalize truncate`}>
              {restaurantName || 'Restaurant Menu'}
            </h1>
            <p className="text-xs text-gray-600 truncate">Digital Menu</p>
          </div>
          
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors active:scale-95"
              aria-label="Search menu"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              onClick={onMenuClick}
              className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 transition-all active:scale-95 shadow-sm"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <SearchModal 
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        items={items}
        restaurantName={restaurantId}
      />
    </>
  )
}
