// Food Item Interface
export interface FoodItem {
  id: string
  name: string
  price: number
  category: string
  status: boolean
  description?: string
}

// Category contains multiple food items (for Firebase data)
export interface MenuCategory {
  [itemName: string]: {
    name: string
    price: number
    status: boolean
  }
}

// Menu contains multiple categories (for Firebase data)
export interface Menu {
  [categoryName: string]: MenuCategory
}

// Category for UI navigation (sidebar)
export interface Category {
  id: string
  name: string
  icon: string
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
