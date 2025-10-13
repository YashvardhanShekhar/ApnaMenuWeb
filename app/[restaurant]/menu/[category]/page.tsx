'use client'
import React, { useMemo } from 'react'
import FoodItemCard from '@/components/menu/FoodItemCard'
import { useMenuData } from '@/hooks/useMenuData'

interface CategoryPageProps {
  params: Promise<{ 
    restaurant: string
    category: string 
  }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { restaurant, category } = React.use(params)
  const { items, loading, error, restaurantName } = useMenuData(restaurant)

  const filteredItems = useMemo(() => {
    if (category === 'all') return items
    return items.filter(item => item.category.toLowerCase() === category.toLowerCase())
  }, [items, category])

  const availableCount = useMemo(() => 
    filteredItems.filter(item => item.status).length,
    [filteredItems]
  )

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
              <div className="flex justify-between mb-3">
                <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                <div className="h-5 bg-gray-200 rounded w-16"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="px-4 py-16 text-center">
        <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Unable to Load Menu
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500">
            Make sure the restaurant ID is correct: <code className="bg-gray-100 px-2 py-1 rounded">{restaurant}</code>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 py-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 capitalize mb-3">
          {category === 'all' ? 'All Items' : category}
        </h2>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="text-gray-600">
            {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} 
            {availableCount < filteredItems.length && (
              <span className="text-orange-600 font-medium">
                {' '}• {availableCount} available
              </span>
            )}
          </p>
          {filteredItems.length > 0 && availableCount > 0 && (
            <div className="flex items-center gap-2 text-sm text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Menu Updated Live
            </div>
          )}
        </div>
      </div>
      
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
