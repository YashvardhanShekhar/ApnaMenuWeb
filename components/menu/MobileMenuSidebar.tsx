'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Category } from '@/types/menu'

interface MobileMenuSidebarProps {
  restaurantName: string
  isOpen: boolean
  onClose: () => void
}

const menuCategories: Category[] = [
  { id: 'all', name: 'All Items', icon: '🍽️' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
  { id: 'breakfast', name: 'Breakfast', icon: '🥐' },
  { id: 'lunch', name: 'Lunch', icon: '🍱' },
  { id: 'dinner', name: 'Dinner', icon: '🍽️' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'snacks', name: 'Snacks', icon: '🍿' }
]

export default function MobileMenuSidebar({ restaurantName, isOpen, onClose }: MobileMenuSidebarProps) {
  const pathname = usePathname()
  
  return (
    <>
      {/* Sidebar - slides from right */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Sidebar Header */}
        <div className=" flex items-center justify-between p-4 border-b bg-gradient-to-b from-orange-200 to-amber-50">
          <div className='flex flex-col gap-1'>
            <h2 className="text-xl font-bold text-gray-900">Menu Categories</h2>
            <p className="text-sm text-gray-600">Choose your favorite</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-orange-300 cursor-pointer transition-colors active:scale-95"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Categories List */}
        <nav className="flex-1 overflow-y-auto">
          <div className="p-3 space-y-2">
            {menuCategories.map((category) => {
              const href = `/${restaurantName}/menu/${category.id}`
              const isActive = pathname === href
              
              return (
                <Link
                  key={category.id}
                  href={href}
                  onClick={onClose}
                  className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border border-orange-200 shadow-sm transform scale-103 text-2xl' 
                      : 'text-gray-700 hover:bg-amber-200 hover:scale-105'
                  }`}
                >
                  <span className="text-2xl">{category.icon}</span>
                  <div className="flex-1">
                    <span className="font-semibold">{category.name}</span>
                    {isActive && (
                      <div className="text-xs text-orange-600 mt-1">Currently viewing</div>
                    )}
                  </div>
                  {isActive && (
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  )}
                </Link>
              )
            })}
          </div>
        </nav>
        
        {/* Footer */}
        <div className="p-4 border-t bg-gray-50">
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Powered by <span className="font-semibold text-orange-600">ApnaMenu</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">Digital Menu Solution</p>
          </div>
        </div>
      </div>
    </>
  )
}
