'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  return (
    <nav className="bg-[#e7d8c1] shadow-lg border-b border-border-primary sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className=" flex items-center justify-between h-16 ">
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 font-bold text-3xl text-[493802]"
            onClick={closeMenu}
          >
            <span className="text-3xl">🍽️</span>
            <span>ApnaMenu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center border border-[#e9cfa8] bg-[#e9cfa8] rounded-full h-12 space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-gray-900 hover:text-text-primary hover:bg-gray-500  '
                    : 'text-gray-900 hover:text-text-primary hover:bg-gray-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            
            
          </div>

          {/* Primary CTA Button */}
          <Link
              href="/demo"
              className="btn-primary inline-flex items-center space-x-2 ml-4"
            >
              <span>🎯</span>
              <span>Open demo menu</span>
            </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center space-y-1 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 rounded"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ease-out ${
                isMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ease-out ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ease-out ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 bg-white border-t border-border-primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`block px-4 py-3 text-base font-medium rounded-md transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-accent-primary bg-blue-50 border-l-4 border-accent-primary'
                    : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="px-4 pt-4 border-t border-border-primary mt-4">
              <Link
                href="/demo"
                onClick={closeMenu}
                className="btn-primary w-full text-center inline-flex items-center justify-center space-x-2"
              >
                <span>🎯</span>
                <span>Open demo menu</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  )
}
