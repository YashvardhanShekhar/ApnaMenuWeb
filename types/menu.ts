// export interface FoodItem {
//   id: string
//   name: string
//   description: string
//   price: number
//   image?: string
//   category: string
//   available: boolean
//   isVeg: boolean
//   spiceLevel?: number
// }

// export interface Restaurant {
//   id: string
//   name: string
//   logo?: string
//   theme?: {
//     primary: string
//     secondary: string
//   }
// }

// export interface Category {
//   id: string
//   name: string
//   icon: string
// }

// Food Item Interface - matches your Firebase structure
export interface FoodItem {
  id: string           // We'll generate this
  name: string
  price: number
  status: boolean      // Changed from 'available' to 'status'
  category: string
  description?: string // Optional since not in your data
}

// Category contains multiple food items
export interface MenuCategory {
  [itemName: string]: {
    name: string
    price: number
    status: boolean
  }
}

// Menu contains multiple categories
export interface Menu {
  [categoryName: string]: MenuCategory
}

// Restaurant Interface
export interface Restaurant {
  id: string
  name: string
  logo?: string
  menu: Menu
  theme?: {
    primary: string
    secondary: string
  }
}
