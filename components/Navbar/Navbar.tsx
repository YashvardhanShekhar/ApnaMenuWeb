'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home', scrollTo: 'hero' },
  { href: '#about', label: 'About', scrollTo: 'about' },
  { href: '/contact', label: 'Contact' },
  { href: '#faq', label: 'FAQ', scrollTo: 'faq' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 64 // Height of your fixed navbar
      const elementPosition = element.offsetTop - navbarHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    closeMenu()
  }

  // Handle navigation clicks
  const handleNavClick = (e: React.MouseEvent, item: any) => {
    if (item.scrollTo) {
      e.preventDefault()
      
      // If we're not on the home page, navigate there first
      if (pathname !== '/') {
        window.location.href = `/#${item.scrollTo}`
        return
      }
      
      scrollToSection(item.scrollTo)
    }
  }

  // Active section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'faq']
      const navbarHeight = 64
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element) {
          const elementTop = element.offsetTop - navbarHeight - 100
          if (window.scrollY >= elementTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check if section is active
  const isActive = (item: any) => {
    if (pathname !== '/') {
      return pathname === item.href
    }
    
    if (item.scrollTo) {
      return activeSection === item.scrollTo
    }
    
    return pathname === item.href
  }

  return (
    <nav className="bg-[#e6c088] shadow-lg border-b border-border-primary sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 font-bold text-3xl text-[#493802]"
            onClick={(e) => {
              closeMenu()
              if (pathname === '/') {
                e.preventDefault()
                scrollToSection('hero')
              }
            }}
          >
            <span className="text-3xl">🍽️</span>
            <span className='text-xl'>ApnaMenu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center border border-[#e9cfa8] bg-[#e9cfa8] rounded-full h-12 space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`px-8 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item)
                    ? 'text-orange-600 bg-orange-100 font-semibold'
                    : 'text-gray-900 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Primary CTA Button */}
          <Link
            href="/demo"
            className="btn-primary inline-flex items-center space-x-2 ml-20"
          >
            <span>🎯</span>
            <span>Demo</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-6 flex flex-col justify-center items-center space-y-1 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 rounded"
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
          className={`bg-white md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-50  opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 bg-white border-t border-border-primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`block px-4 py-3 text-base font-medium rounded-md transition-all duration-200 ${
                  isActive(item)
                    ? 'text-orange-600 bg-orange-100 border-l-4 border-orange-600 font-semibold'
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
                <span>Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-white bg-opacity-25 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        >
          <button 
            onClick={closeMenu}
            className="absolute top-2 right-6 text-3xl text-red-500 cursor-pointer"
          >
            ✖
          </button>
          <div className="pt-16">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`flex flex-col bg- justify-center items-center font-bold py-4 mb-2 text-xl rounded-md transition-all duration-200 ${
                  isActive(item)
                    ? 'text-orange-500 bg-orange-200 border-l-4 border-orange-500'
                    : 'text-gray-600 hover:text-text-primary hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
