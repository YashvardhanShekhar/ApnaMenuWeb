'use client'
import React, { useState } from 'react'
import MobileMenuSidebar from '@/components/menu/MobileMenuSidebar'
import MenuHeader from '@/components/menu/MenuHeader'
import { MenuProvider } from './MenuContext'
import { useMenuData } from '@/hooks/useMenuData'

interface MenuLayoutProps {
  children: React.ReactNode
  params: Promise<{ restaurant: string }>
}

export default function MenuLayout({ children, params }: MenuLayoutProps) {
  const { restaurant } = React.use(params)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  // Fetch categories at layout level
  const { categories, loading, restaurantName } = useMenuData(restaurant)

  return (
    <MenuProvider categories={categories} loading={loading}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <MenuHeader 
          restaurantName={restaurantName || restaurant.replace(/-/g, ' ')}
          onMenuClick={() => setSidebarOpen(true)}
        />
        
        <MobileMenuSidebar
          restaurantName={restaurant}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="pt-20 pb-6">
          {children}
        </main>
        
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-white/2 bg-opacity-50 z-40 backdrop-blur-[3px]"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </MenuProvider>
  )
}
