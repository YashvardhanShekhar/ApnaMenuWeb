import { FoodItem } from '@/types/menu'

interface FoodItemCardProps {
  item: FoodItem
}

export default function FoodItemCard({ item }: FoodItemCardProps) {
  return (
    <div className={`bg-white border-l-4 ${
      item.available ? 'border-orange-500' : 'border-gray-300'
    } rounded-lg shadow-sm p-4 transition-all duration-300 hover:shadow-md`}>
      
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-gray-900 text-2xl">
              {item.name}
            </h3>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {item.category}
            </span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
        
        <div className="ml-4 text-right">
          <div className="text-xl font-bold text-orange-600">₹{item.price}</div>
          <div className={`text-xs mt-1 ${
            item.available ? 'text-green-600' : 'text-red-500'
          }`}>
            {item.available ? '• Available' : '• Unavailable'}
          </div>
        </div>
      </div>
    </div>
  )
}

