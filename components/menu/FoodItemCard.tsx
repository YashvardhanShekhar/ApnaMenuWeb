import { FoodItem } from '@/types/menu'

interface FoodItemCardProps {
  item: FoodItem
}

export default function FoodItemCard({ item }: FoodItemCardProps) {
  return (
    <div className="group">
      <div className={`bg-white rounded-xl border-2 p-5 transition-all duration-300 ${
        item.status 
          ? 'border-gray-100 hover:border-orange-300 hover:shadow-lg' 
          : 'border-gray-200 opacity-50 bg-gray-50 cursor-not-allowed'
      }`}>
        
        {/* Top Section: Name, Category & Price */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className={`font-bold text-xl mb-2 transition-colors ${
              item.status 
                ? 'text-gray-900 group-hover:text-orange-600' 
                : 'text-gray-500'
            }`}>
              {item.name}
            </h3>
            <div className={`inline-flex items-center border text-xs font-semibold px-3 py-1.5 rounded-lg capitalize ${
              item.status
                ? 'bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200 text-orange-700'
                : 'bg-gray-100 border-gray-200 text-gray-500'
            }`}>
              {item.category}
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="text-right">
              <div className="text-sm text-gray-500 font-medium mb-1">Price</div>
              <div className={`text-2xl font-bold ${
                item.status ? 'text-orange-600' : 'text-gray-400'
              }`}>
                ₹{item.price}
              </div>
            </div>
          </div>
        </div>
        
        {/* Description - Only show if exists */}
        {item.description && (
          <p className={`leading-relaxed mb-4 text-sm ${
            item.status ? 'text-gray-600' : 'text-gray-400'
          }`}>
            {item.description}
          </p>
        )}
        
        {/* Bottom Section: Status */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            {item.status ? (
              <>
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-green-700 text-sm font-semibold">Available Now</span>
              </>
            ) : (
              <>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-red-600 text-sm font-semibold">Currently Unavailable</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
