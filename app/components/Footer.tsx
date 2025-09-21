'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br bg-yellow text-white">
      {/* Main Footer Content */}
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="sm:col-span-2  flex flex-col gap-10 lg:col-span-2 space-y-6">
            <div className=''>
              <Link href="/" className=" flex justify-center lg:justify-start  items-center space-x-2 mb-4">
                <span className="text-3xl">🍽️</span>
                <span className="font-heading text-5xl font-bold text-orange-500">ApnaMenu</span>
              </Link>
              <div className=' lg:w-130 mt-8'>
              <p className=" font-sans text-gray-300 leading-relaxed mb-6 ">
                Transform your restaurant with digital QR code menus. 
                Contactless, instant, and always up-to-date.
              </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className=' flex flex-col gap-3'>
              <h4 className="font-modern text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Follow Us :)
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-black/80 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-black/80 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-black/80 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297L6.391 14.9c.687.687 1.624 1.109 2.641 1.109 2.058 0 3.73-1.672 3.73-3.73 0-2.058-1.672-3.73-3.73-3.73S5.301 10.221 5.301 12.279c0 1.017.422 1.954 1.109 2.641l-.791 1.266c-.807-.876-1.297-2.027-1.297-3.324 0-2.675 2.167-4.842 4.842-4.842s4.842 2.167 4.842 4.842c0 2.675-2.167 4.842-4.842 4.842z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-black/80 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:relative top-40 flex flex-col gap-3">
            <h4 className="font-modern  text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links 
            </h4>
            <nav className="space-y-2">
              <Link href="/" className="block font-sans text-black hover:text-orange-400 transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="block font-sans text-black hover:text-orange-400 transition-colors duration-300">
                About Us
              </Link>
              <Link href="/demo" className="block font-sans text-black hover:text-orange-400 transition-colors duration-300">
                Demo Menu
              </Link>
              <Link href="/faq" className="block font-sans text-black hover:text-orange-400 transition-colors duration-300">
                FAQ
              </Link>
              <Link href="/contact" className="block font-sans text-black hover:text-orange-400 transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* <h4 className="font-modern text-sm font-semibold text-white uppercase tracking-wider">
              Get in Touch
            </h4> */}
            <div className="space-y-4">
              {/* <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-sans text-gray-300 text-sm leading-relaxed">
                    123 Restaurant Street<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div> */}

                <div className='lg:relative lg:flex flex flex-col gap-2 lg:top-60 lg:left-30'>
              <div className="flex items-center space-x-3 ">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 hover:text-orange-800 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919876543210" className="font-sans text-orange-500 hover:text-orange-900 transition-colors duration-300">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange-500 hover:text-orange-800 flex-shrink-0 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@apnamenu.com" className="font-sans text-orange-500 hover:text-orange-900 transition-colors duration-300">
                  hello@apnamenu.com
                </a>
              </div>
            </div>
            </div>

            {/* Newsletter Signup */}
            {/* <div className="pt-4">
              <h5 className="font-modern text-sm font-semibold text-white mb-3">
                Stay Updated
              </h5>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-700 text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-colors duration-300"
                />
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t flex justify-center items border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col mt-2 lg:flex-row sm:flex-row items-center justify-center space-y-4 sm:space-y-0">
            
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <div className="font-sans text-md  text-orange-400 ">
                © 2025 ApnaMenu. All rights reserved.
              </div>
            </div>

            {/* Legal Links */}
            {/* <div className="flex items-center space-x-6">
              <Link href="/privacy" className="font-sans text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-sans text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="font-sans text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 z-50"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button> */}
    </footer>
  )
}
