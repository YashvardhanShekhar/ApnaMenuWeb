interface MenuHeaderProps {
  restaurantName: string
  onMenuClick: () => void
}

export default function MenuHeader({ restaurantName, onMenuClick }: MenuHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm border-b">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex-1">
          <h1 className="text-lg font-bold text-gray-900 capitalize truncate">
            {restaurantName || 'Restaurant Menu'}
          </h1>
          <p className="text-xs text-gray-500">Digital Menu</p>
        </div>
        
        <button
          onClick={onMenuClick}
          className="ml-4 p-3 rounded-xl bg-orange-100 hover:bg-orange-200 transition-colors active:scale-95"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
