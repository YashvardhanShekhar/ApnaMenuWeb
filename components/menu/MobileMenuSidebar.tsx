'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMenuContext } from '@/app/[restaurant]/menu/MenuContext'

interface MobileMenuSidebarProps {
  restaurantName: string
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenuSidebar({ restaurantName, isOpen, onClose }: MobileMenuSidebarProps) {
  const pathname = usePathname()
  const { categories, loading } = useMenuContext()
  
  const allCategories = ['all', ...categories]
  
  return (
    <>
      <div className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Header - Fixed */}
        <div className="flex-shrink-0 flex items-center justify-between p-4 border-b bg-gradient-to-r from-orange-50 to-amber-50">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Menu Categories</h2>
            <p className="text-sm text-gray-600">Choose your favorite</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors active:scale-95"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Categories List - Scrollable */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden relative">
          {loading ? (
            <div className="p-3 space-y-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="px-4 py-4 rounded-xl bg-gray-100 animate-pulse">
                  <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-3 space-y-2">
              {allCategories.map((categoryName) => {
                const href = `/${restaurantName}/menu/${categoryName.toLowerCase()}`
                const isActive = pathname === href
                
                const displayName = categoryName === 'all' 
                  ? 'All Items' 
                  : categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
                
                return (
                  <Link
                    key={categoryName}
                    href={href}
                    onClick={onClose}
                    className={`flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border border-orange-200 shadow-sm' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex-1">
                      <span className="font-semibold">{displayName}</span>
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
          )}
        </nav>
        
        {/* Footer - Fixed */}
        <div className="flex-shrink-0 p-4 border-t bg-gray-50">
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
