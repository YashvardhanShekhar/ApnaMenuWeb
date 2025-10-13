'use client'
import { useState, useEffect } from 'react'
import { FoodItem } from '@/types/menu'

export const useMenuData = (restaurantId: string) => {
  const [items, setItems] = useState<FoodItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate API call with dummy data
    const fetchMenuData = async () => {
      try {
        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Dummy data - replace with Firebase later
        const dummyItems: FoodItem[] = [
          {   
            id: '1',
            name: 'Butter Chicken',
            description: 'Creamy tomato curry with tender chicken pieces, served with basmati rice',
            price: 350,
            category: 'lunch',
            available: true,
            isVeg: false,
            spiceLevel: 2,
            image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop'
          },
          {
            id: '2',
            name: 'Mango Lassi',
            description: 'Fresh mango yogurt drink, sweet and refreshing',
            price: 120,
            category: 'beverages',
            available: true,
            isVeg: true,
            image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop'
          },
          {
            id: '3',
            name: 'Paneer Tikka',
            description: 'Grilled cottage cheese marinated in spices and herbs',
            price: 280,
            category: 'lunch',
            available: true,
            isVeg: true,
            spiceLevel: 1,
            image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop'
          },
          {
            id: '4',
            name: 'Masala Chai',
            description: 'Traditional Indian spiced tea with milk',
            price: 60,
            category: 'beverages',
            available: true,
            isVeg: true,
            image: 'https://images.unsplash.com/photo-1597318181409-c265f2501331?w=400&h=300&fit=crop'
          },
          {
            id: '5',
            name: 'Aloo Paratha',
            description: 'Stuffed potato bread served with butter and curd',
            price: 150,
            category: 'breakfast',
            available: true,
            isVeg: true,
            image: 'https://images.unsplash.com/photo-1606471191009-63a0b5ba70e9?w=400&h=300&fit=crop'
          },
          {
            id: '6',
            name: 'Chicken Biryani',
            description: 'Fragrant basmati rice with spiced chicken and saffron',
            price: 420,
            category: 'dinner',
            available: true,
            isVeg: false,
            spiceLevel: 3,
            image: 'https://images.unsplash.com/photo-1563379091339-03246963d321?w=400&h=300&fit=crop'
          },
          {
            id: '7',
            name: 'Gulab Jamun',
            description: 'Sweet dumplings soaked in sugar syrup',
            price: 120,
            category: 'desserts',
            available: true,
            isVeg: true,
            image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop'
          },
          {
            id: '8',
            name: 'Samosa',
            description: 'Crispy pastry filled with spiced potatoes and peas',
            price: 80,
            category: 'snacks',
            available: true,
            isVeg: true,
            spiceLevel: 1,
            image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
          }
        ]
        
        setItems(dummyItems)
        setLoading(false)
      } catch (err) {
        setError('Failed to load menu items')
        setLoading(false)
      }
    }

    fetchMenuData()
  }, [restaurantId])

  return { items, loading, error }
}