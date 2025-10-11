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

export interface FoodItem {
  name: string,
  price: number,
  status: boolean,
}

export interface Category{
  [itemName: string] : FoodItem
}

interface Menu {
  [categoryName: string]: MenuCategory;
}