'use client'
import React from 'react'
import FoodItemCard from '@/components/menu/FoodItemCard'
import { useMenuData } from '@/hooks/useMenuData'

interface CategoryPageProps {
  params: Promise<{ 
    restaurant: string
    category: string 
  }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Unwrap the async params using React.use()
  const { restaurant, category } = React.use(params)
  
  // Fetch menu data
  const { items, loading, error } = useMenuData(restaurant)

  // Filter items based on category
  const filteredItems = category === 'all' 
    ? items 
    : items.filter(item => item.category === category)

  // Show loading state
  if (loading) {
    return (
      <div className="px-4 py-6">
        <div className="mb-8 animate-pulse">
          <div className="h-8 bg-gray-200 rounded-lg w-48 mb-3"></div>
          <div className="h-4 bg-gray-200 rounded-md w-32"></div>
        </div>
        <div className="space-y-5">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-2xl p-5 animate-pulse">
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-200 rounded-xl"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div className="px-4 py-16 text-center">
        <div className="text-4xl mb-4">⚠️</div>
        <p className="text-gray-600">{error}</p>
      </div>
    )
  }

  return (
    <div className="px-4 py-6">
      {/* Category Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 capitalize mb-3">
          {category === 'all' ? 'All Items' : category}
        </h2>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} available
          </p>
          {filteredItems.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Fresh & Ready
            </div>
          )}
        </div>
      </div>
      
      {/* Items List */}
      <div className="space-y-5">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <FoodItemCard key={item.id} item={item} />
          ))
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              No items in {category === 'all' ? 'menu' : category}
            </h3>
            <p className="text-gray-600 mb-6">
              Check back later or explore other categories
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
