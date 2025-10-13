export interface FoodItem {
  id: string
  name: string
  description: string
  price: number
  image?: string
  category: string
  available: boolean
  isVeg: boolean
  spiceLevel?: number
}

export interface Restaurant {
  id: string
  name: string
  logo?: string
   theme?: {
    primary: string
    secondary: string
  }
}

export interface Category {
  id: string
  name: string
  icon: string
}
