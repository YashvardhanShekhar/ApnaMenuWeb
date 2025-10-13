'use client'
import { useState, useEffect } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { FoodItem, Menu } from '@/types/menu'

export const useMenuData = (restaurantId: string) => {
  const [items, setItems] = useState<FoodItem[]>([])
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
        console.log('📄 Document exists?', docSnap.exists())
        
        try {
          if (docSnap.exists()) {
            const restaurantData = docSnap.data()
            console.log('✅ Full restaurant data:', JSON.stringify(restaurantData, null, 2))
            
            // Extract restaurant name from info field if exists
            if (restaurantData.info && restaurantData.info.name) {
              setRestaurantName(restaurantData.info.name)
              console.log('🏪 Restaurant name from info:', restaurantData.info.name)
            } else {
              // Fallback to document ID
              setRestaurantName(restaurantId.replace(/-/g, ' '))
              console.log('🏪 Using document ID as name')
            }
            
            // Check if menu exists
            if (!restaurantData.menu) {
              console.error('❌ No menu field found in document!')
              console.log('Available fields:', Object.keys(restaurantData))
              setError('Menu data not found in restaurant document')
              setLoading(false)
              return
            }
            
            const menu: Menu = restaurantData.menu
            console.log('🍽️ Menu data:', JSON.stringify(menu, null, 2))
            
            const menuItems: FoodItem[] = []
            
            Object.entries(menu).forEach(([categoryName, categoryItems]) => {
              console.log(`📂 Category: ${categoryName}`)
              console.log(`Items:`, categoryItems)
              
              if (typeof categoryItems !== 'object' || categoryItems === null) {
                console.warn(`⚠️ Category ${categoryName} is not an object:`, categoryItems)
                return
              }
              
              Object.entries(categoryItems).forEach(([itemKey, itemData]) => {
                console.log(`   ➕ Processing: ${itemKey}`, itemData)
                
                if (!itemData || typeof itemData !== 'object') {
                  console.warn(`⚠️ Invalid item data for ${itemKey}:`, itemData)
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
                console.log('      ✅ Added:', foodItem.name, `₹${foodItem.price}`, `status: ${foodItem.status}`)
              })
            })
            
            console.log('✅ Total items loaded:', menuItems.length)
            
            setItems(menuItems)
            setError(null)
            setLoading(false)
          } else {
            console.error('❌ Restaurant document does not exist!')
            console.log('🔍 Looking for document: restaurants/' + restaurantId)
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

  return { items, loading, error, restaurantName }
}
