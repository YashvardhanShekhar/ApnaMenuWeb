'use client'
import { createContext, useContext, ReactNode } from 'react'

interface MenuContextType {
  categories: string[]
  loading: boolean
}

const MenuContext = createContext<MenuContextType>({
  categories: [],
  loading: true
})

export function MenuProvider({ 
  children, 
  categories, 
  loading 
}: { 
  children: ReactNode
  categories: string[]
  loading: boolean
}) {
  return (
    <MenuContext.Provider value={{ categories, loading }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenuContext() {
  return useContext(MenuContext)
}
