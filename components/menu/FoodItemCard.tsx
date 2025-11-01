import { FoodItem } from '@/types/menu'

interface FoodItemCardProps {
  item: FoodItem
  isLast?: boolean
}

export default function FoodItemCard({ item, isLast }: FoodItemCardProps) {
  return (
    <div className={`${!isLast ? 'border-b border-black/10' : ''}`}>
      <div className={`flex items-center justify-between py-3.5 ${
        !item.status ? 'opacity-50' : ''
      }`}>
        
        
        {/* Left: Item Name */}
        <div className="flex-1 pr-4 ml-1">
          <h3 className="text-gray-900 font-medium text-base">
            {item.name}
          </h3>
          {!item.status && (
            <span className="text-xs text-red-500 mt-1 inline-block">
              Out of Stock
            </span>
          )}
        </div>
        
        {/* Right: Price */}
        <div className="flex-shrink-0 mr-2">
          <span className="text-gray-900 font-semibold text-base">
            ₹{item.price}
          </span>
        </div>
      </div>
    </div>
  )
}
