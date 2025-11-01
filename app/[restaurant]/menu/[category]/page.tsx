'use client'
import React, { useMemo } from 'react'
import CategorySection from '@/components/menu/CategorySection'
import { useMenuData } from '@/hooks/useMenuData'
import { FoodItem } from '@/types/menu'
import { notFound } from 'next/navigation'


interface CategoryPageProps {
  params: Promise<{ 
    restaurant: string
    category: string 
  }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { restaurant, category } = React.use(params)
  const { items, loading, error } = useMenuData(restaurant)

  const availableCategories = useMemo(() => {
    const uniqueCategories = new Set<string>()
    items.forEach(item => uniqueCategories.add(item.category.toLowerCase()))
    return Array.from(uniqueCategories)
  }, [items])

  // Check if category exists (only after data is loaded)
  React.useEffect(() => {
    if (!loading && !error && category !== 'all') {
      const categoryExists = availableCategories.includes(category.toLowerCase())
      if (!categoryExists && items.length > 0) {
        notFound()
      }
    }
  }, [loading, error, category, availableCategories, items.length])

  // Group items by category
  const groupedItems = useMemo(() => {
    let itemsToGroup: FoodItem[] = []
    
    // Filter items based on selected category
    if (category === 'all') {
      itemsToGroup = items
    } else {
      itemsToGroup = items.filter(item => item.category.toLowerCase() === category.toLowerCase())
    }

    // Group by category
    const grouped: { [key: string]: FoodItem[] } = {}
    itemsToGroup.forEach(item => {
      const cat = item.category
      if (!grouped[cat]) {
        grouped[cat] = []
      }
      grouped[cat].push(item)
    })

    return grouped
  }, [items, category])

  const totalItems = useMemo(() => 
    Object.values(groupedItems).reduce((sum, items) => sum + items.length, 0),
    [groupedItems]
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 px-5 py-6">
        <div className="max-w-2xl mx-auto">
          {/* Loading Skeleton */}
          <div className="mb-6 animate-pulse">
            <div className="h-10 bg-orange-200 rounded-md w-40 mb-6"></div>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex justify-between py-4 border-b border-gray-200">
                  <div className="h-5 bg-gray-200 rounded w-48"></div>
                  <div className="h-5 bg-gray-200 rounded w-12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Unable to Load Menu</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-5 py-6">
        
        {/* Page Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold  text-gray-900 mb-2">
            MENU
          </h1>
          <p className="text-gray-600 text-sm">
            {totalItems} item{totalItems !== 1 ? 's' : ''} available
          </p>
        </div>
        
        {/* Category Sections */}
        {Object.keys(groupedItems).length > 0 ? (
          <div>
            {Object.entries(groupedItems)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([categoryName, categoryItems]) => (
                <CategorySection
                  key={categoryName}
                  categoryName={categoryName}
                  items={categoryItems}
                />
              ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No items in {category === 'all' ? 'menu' : category}
            </h3>
            <p className="text-gray-600">
              Check back later or explore other categories
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
