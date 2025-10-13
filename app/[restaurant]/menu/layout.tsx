'use client'
import React, { useState, useEffect } from 'react'
import MobileMenuSidebar from '@/components/menu/MobileMenuSidebar'
import MenuHeader from '@/components/menu/MenuHeader'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface MenuLayoutProps {
  children: React.ReactNode
  params: Promise<{ restaurant: string }>
}

export default function MenuLayout({ children, params }: MenuLayoutProps) {
  const { restaurant } = React.use(params)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [restaurantName, setRestaurantName] = useState('')

  useEffect(() => {
    // Fetch restaurant name once for header
    const fetchRestaurantName = async () => {
      try {
        const docRef = doc(db, 'restaurants', restaurant)
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          const data = docSnap.data()
          if (data.info && data.info.name) {
            setRestaurantName(data.info.name)
          } else {
            setRestaurantName(restaurant.replace(/-/g, ' '))
          }
        }
      } catch (error) {
        console.error('Error fetching restaurant name:', error)
        setRestaurantName(restaurant.replace(/-/g, ' '))
      }
    }

    fetchRestaurantName()
  }, [restaurant])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <MenuHeader 
        restaurantName={restaurantName}
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
          className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
