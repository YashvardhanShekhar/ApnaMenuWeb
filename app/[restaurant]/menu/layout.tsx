'use client'
import React, { useState } from 'react'
import MobileMenuSidebar from '@/components/menu/MobileMenuSidebar'
import MenuHeader from '@/components/menu/MenuHeader'

interface MenuLayoutProps {
  children: React.ReactNode
  params: Promise<{ restaurant: string }>
}

export default function MenuLayout({ children, params }: MenuLayoutProps) {
  // Unwrap the async params using React.use()
  const { restaurant } = React.use(params)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Mobile Header - Fixed at top */}
      <MenuHeader 
        restaurantName={restaurant}
        onMenuClick={() => setSidebarOpen(true)}
      />
      
      {/* Sliding Sidebar */}
      <MobileMenuSidebar
        restaurantName={restaurant}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      
      {/* Main Content Area */}
      <main className="pt-20 pb-6">
        {children}
      </main>
      
      {/* Dark Overlay when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/5 bg-opacity-50 z-40 backdrop-blur-[.2rem]"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
