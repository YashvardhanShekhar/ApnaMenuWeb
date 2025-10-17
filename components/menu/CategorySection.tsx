import { FoodItem } from '@/types/menu'
import FoodItemCard from './FoodItemCard'

interface CategorySectionProps {
  categoryName: string
  items: FoodItem[]
}

export default function CategorySection({ categoryName, items }: CategorySectionProps) {
  if (items.length === 0) return null

  return (
    <div className="mb-8">
      {/* Orange Category Header */}
      <div className="mb-4">
        <div className="inline-block bg-gradient-to-r from-orange-400 to-amber-200 px-6 py-2 rounded-md shadow-sm">
          <h2 className="text-white font-bold text-base uppercase tracking-wide">
            {categoryName}
          </h2>
        </div>
      </div>

      {/* Items List */}
      <div className="bg-white">
        {items.map((item, index) => (
          <FoodItemCard 
            key={item.id} 
            item={item}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
