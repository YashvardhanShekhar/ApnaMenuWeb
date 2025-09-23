import { FoodItem } from '@/types/menu'

interface FoodItemCardProps {
  item: FoodItem
}

export default function FoodItemCard({ item }: FoodItemCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border p-5 transition-all duration-300 ${
      item.available ? 'hover:shadow-lg hover:-translate-y-1' : 'opacity-60'
    }`}>
      <div className="flex gap-4">
        {/* Food Image */}
        {item.image && (
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        )}
        
        {/* Food Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3 flex-1">
              <h3 className="font-bold text-gray-900 text-lg leading-tight">
                {item.name}
              </h3>
              {/* Veg/Non-Veg Indicator */}
              <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ${
                item.isVeg ? 'border-green-500' : 'border-red-500'
              }`}>
                <div className={`w-3 h-3 rounded-full ${
                  item.isVeg ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
              </div>
            </div>
            
            <div className="text-right ml-3">
              <span className="text-orange-600 font-bold text-xl">
                ₹{item.price}
              </span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {item.description}
          </p>
          
          {/* Tags and Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Spice Level */}
              {item.spiceLevel && item.spiceLevel > 0 && (
                <div className="flex items-center gap-1 bg-red-50 px-2 py-1 rounded-full">
                  <span className="text-red-500 text-sm" title={`Spice level: ${item.spiceLevel}/3`}>
                    {'🌶️'.repeat(item.spiceLevel)}
                  </span>
                </div>
              )}
              
              {/* Category Badge */}
              <div className="bg-gray-100 px-3 py-1 rounded-full">
                <span className="text-xs font-medium text-gray-600 capitalize">
                  {item.category}
                </span>
              </div>
            </div>
            
            {/* Availability */}
            <div>
              {item.available ? (
                <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Available
                </span>
              ) : (
                <span className="text-red-500 text-sm font-medium flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Out of Stock
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
