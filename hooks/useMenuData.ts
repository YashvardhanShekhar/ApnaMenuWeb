'use client'
import { useState, useEffect } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { FoodItem, Menu } from '@/types/menu'

export const useMenuData = (restaurantId: string) => {
  const [items, setItems] = useState<FoodItem[]>([])
  const [categories, setCategories] = useState<string[]>([]) // ← NEW: Categories array
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [restaurantName, setRestaurantName] = useState<string>('')

  useEffect(() => {
    console.log('🔍 Fetching menu for restaurant:', restaurantId)

    if (!restaurantId) {
      setError('Restaurant ID is required')
      setLoading(false)
      return
    }

    const docRef = doc(db, 'restaurants', restaurantId)
    
    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        console.log('📡 Firebase snapshot received')
        
        try {
          if (docSnap.exists()) {
            const restaurantData = docSnap.data()
            
            // Extract restaurant name
            if (restaurantData.info && restaurantData.info.name) {
              setRestaurantName(restaurantData.info.name)
            } else {
              setRestaurantName(restaurantId.replace(/-/g, ' '))
            }
            
            if (!restaurantData.menu) {
              console.error('❌ No menu field found!')
              setError('Menu data not found')
              setLoading(false)
              return
            }
            
            const menu: Menu = restaurantData.menu
            const menuItems: FoodItem[] = []
            const categoryList: string[] = [] // ← NEW: Collect categories
            
            Object.entries(menu).forEach(([categoryName, categoryItems]) => {
              // ✅ Add category to list
              categoryList.push(categoryName)
              
              if (typeof categoryItems !== 'object' || categoryItems === null) {
                return
              }
              
              Object.entries(categoryItems).forEach(([itemKey, itemData]) => {
                if (!itemData || typeof itemData !== 'object') {
                  return
                }
                
                const foodItem: FoodItem = {
                  id: `${categoryName}-${itemKey}`,
                  name: itemData.name || itemKey,
                  price: itemData.price || 0,
                  status: itemData.status !== undefined ? itemData.status : true,
                  category: categoryName.toLowerCase(),
                  description: ''
                }
                
                menuItems.push(foodItem)
              })
            })
            
            console.log('✅ Categories found:', categoryList)
            console.log('✅ Total items loaded:', menuItems.length)
            
            setCategories(categoryList) // ← NEW: Set categories
            setItems(menuItems)
            setError(null)
            setLoading(false)
          } else {
            console.error('❌ Restaurant document does not exist!')
            setError('Restaurant not found')
            setItems([])
            setLoading(false)
          }
        } catch (err) {
          console.error('❌ Error processing menu:', err)
          setError('Failed to load menu items')
          setLoading(false)
        }
      },
      (err) => {
        console.error('❌ Firebase connection error:', err)
        setError('Failed to connect to database: ' + err.message)
        setLoading(false)
      }
    )

    return () => {
      console.log('🔌 Disconnecting Firebase listener')
      unsubscribe()
    }
  }, [restaurantId])

  return { items, categories, loading, error, restaurantName } // ← Return categories
}
