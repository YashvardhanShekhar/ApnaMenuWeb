"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", scrollTo: "hero" },
  { href: "#about", label: "About", scrollTo: "about" },
  { href: "/contact", label: "Contact" },
  { href: "#faq", label: "FAQ", scrollTo: "faq" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    closeMenu();
  };

  // Handle navigation clicks
  const handleNavClick = (e: React.MouseEvent, item: any) => {
    if (item.scrollTo) {
      e.preventDefault();

      if (pathname !== "/") {
        window.location.href = `/#${item.scrollTo}`;
        return;
      }

      scrollToSection(item.scrollTo);
    }
  };

  // Active section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "faq"];
      const navbarHeight = 64;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const elementTop = element.offsetTop - navbarHeight - 100;
          if (window.scrollY >= elementTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if section is active
  const isActive = (item: any) => {
    if (pathname !== "/") {
      return pathname === item.href;
    }

    if (item.scrollTo) {
      return activeSection === item.scrollTo;
    }

    return pathname === item.href;
  };

  return (
    <>
      {/* Mobile Menu Backdrop - Outside navbar, below z-index */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <nav className="bg-[#e6c088] shadow-lg border-b border-border-primary sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 font-bold text-xl sm:text-2xl lg:text-3xl text-[#493802] flex-shrink-0"
              onClick={(e) => {
                closeMenu();
                if (pathname === "/") {
                  e.preventDefault();
                  scrollToSection("hero");
                }
              }}
            >
              <span className="text-2xl sm:text-3xl">🍽️</span>
              <span className="text-lg sm:text-xl">ApnaMenu</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center border border-[#e9cfa8] bg-[#e9cfa8] rounded-full h-12 space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`flex items-center justify-center px-4 lg:px-8 h-12 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item)
                      ? "text-orange-600 bg-orange-100 font-semibold"
                      : "text-gray-900 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop Demo Button */}
            <Link
              href="/demo"
              className="hidden md:inline-flex btn-primary items-center space-x-2"
            >
              <span>🎯</span>
              <span>Demo</span>
            </Link>

            {/* Mobile: Demo Button + Hamburger */}
            <div className="md:hidden flex items-center gap-2">
              {/* Mobile Demo Button */}
              <Link
                href="/demo"
                className="btn-primary inline-flex items-center space-x-1 text-sm px-3 py-2"
              >
                <span>🎯</span>
                <span>Demo</span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                onClick={toggleMenu}
                className="relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-lg bg-white/50 z-50"
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
              >
                <span
                  className={`block h-0.5 w-6 bg-[#493802] transition-all duration-300 ease-out ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-[#493802] transition-all duration-300 ease-out my-1 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-[#493802] transition-all duration-300 ease-out ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown - Higher z-index than backdrop */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out relative z-50 ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-2 bg-white rounded-b-2xl shadow-lg border-t border-orange-200">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg mx-2 transition-all duration-200 ${
                    isActive(item)
                      ? "text-orange-600 bg-orange-100 border-l-4 border-orange-600 font-semibold"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
