'use client'
import React, { useMemo } from 'react'
import { notFound } from 'next/navigation'
import CategorySection from '@/components/menu/CategorySection'
import { useMenuData } from '@/hooks/useMenuData'
import { FoodItem } from '@/types/menu'

interface CategoryPageProps {
  params: Promise<{ 
    restaurant: string
    category: string 
  }>
}

// Helper function to convert slug to category name
function slugToCategory(slug: string): string {
  return slug.replace(/-/g, ' ')
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { restaurant, category: categorySlug } = React.use(params)
  const { items, loading, error } = useMenuData(restaurant)

  // Convert URL slug back to category name for filtering
  const categoryName = categorySlug === 'all' ? 'all' : slugToCategory(categorySlug)

  // Get unique categories from items
  const availableCategories = useMemo(() => {
    const uniqueCategories = new Set<string>()
    items.forEach(item => uniqueCategories.add(item.category.toLowerCase()))
    return Array.from(uniqueCategories)
  }, [items])

  // Check if category exists (only after data is loaded)
  React.useEffect(() => {
    if (!loading && !error && categorySlug !== 'all') {
      const normalizedCategory = categoryName.toLowerCase()
      const categoryExists = availableCategories.some(
        cat => cat.toLowerCase() === normalizedCategory
      )
      
      if (!categoryExists && items.length > 0) {
        notFound()
      }
    }
  }, [loading, error, categorySlug, categoryName, availableCategories, items.length])

  // Group items by category
  const groupedItems = useMemo(() => {
    let itemsToGroup: FoodItem[] = []
    
    if (categorySlug === 'all') {
      itemsToGroup = items
    } else {
      // Match by category name (case-insensitive)
      const normalizedCategory = categoryName.toLowerCase()
      itemsToGroup = items.filter(
        item => item.category.toLowerCase() === normalizedCategory
      )
    }

    const grouped: { [key: string]: FoodItem[] } = {}
    itemsToGroup.forEach(item => {
      const cat = item.category
      if (!grouped[cat]) {
        grouped[cat] = []
      }
      grouped[cat].push(item)
    })

    return grouped
  }, [items, categorySlug, categoryName])

  const totalItems = useMemo(() => 
    Object.values(groupedItems).reduce((sum, items) => sum + items.length, 0),
    [groupedItems]
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 px-5 py-6">
        <div className="max-w-2xl mx-auto">
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
    if (error.toLowerCase().includes('not found') || error.toLowerCase().includes('not exist')) {
      notFound()
    }
    
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

  // Display category name (capitalize properly)
  const displayCategoryName = categorySlug === 'all' 
    ? 'Menu' 
    : categoryName
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .toUpperCase()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-5 py-6 ">
        
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {displayCategoryName}
          </h1>
          <p className="text-gray-600 text-sm">
            {totalItems} item{totalItems !== 1 ? 's' : ''} available
          </p>
        </div>
        
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
              No items in {displayCategoryName.toLowerCase()}
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
