'use client'
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Main Headline */}
            <div className="space-y-4 bg-yellow-400 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:bg-red-black lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your{' '}
                <span className="text-orange-600 relative inline-block">
                  Restaurant
                  <svg 
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-orange-500" 
                    viewBox="0 0 200 10" 
                    fill="currentColor"
                  >
                    <path d="M0,8 Q100,0 200,8 L200,10 L0,10 Z" />
                  </svg>
                </span>{' '}
                <br className="hidden sm:block" />
                <span className="block sm:inline">with Digital Menus</span>
              </h1>
              
              {/* Subtext */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
                Create stunning QR code menus that delight customers and boost your sales. 
                No more printed menus, just scan and explore!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 sm:pt-6 px-4 sm:px-0">
                <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Open Demo Menu
                </button>
                
                <button className="w-full sm:w-auto bg-transparent hover:bg-orange-600 text-orange-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 border-2 border-orange-600 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1">
                  How It Works
                </button>
              </div>

              {/* Features List - Hidden on mobile, shown on tablet+ */}
              <div className="hidden sm:flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 text-sm text-gray-600 pt-4">
                <div className="flex items-center">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  QR Code Integration
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time Updates
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Multi-language
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 px-4 sm:px-8 lg:px-0">
            {/* Background Decoration */}
            <div className="absolute inset-2 sm:inset-4 bg-orange-500 rounded-2xl sm:rounded-3xl transform rotate-3 sm:rotate-6 opacity-20"></div>
            <div className="absolute inset-1 sm:inset-2 bg-red-500 rounded-2xl sm:rounded-3xl transform -rotate-2 sm:-rotate-3 opacity-10"></div>
            
            {/* Main Image Container */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border-2 sm:border-4 border-orange-500 p-2 sm:p-4">
              <img
                src="/images/hero.png"
                alt="ApnaMenu digital restaurant menu displayed on smartphone showing delicious food items with QR code scanning interface"
                className="w-full h-auto rounded-xl sm:rounded-2xl object-cover aspect-[2/3] sm:aspect-[3/4]"
              />
              
              {/* Floating Elements - Responsive sizing */}
              <div className="absolute top-2 sm:top-4 lg:top-8 right-2 sm:right-4 lg:right-8 bg-orange-600 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                <span className="hidden sm:inline">QR Ready! </span>📲
              </div>
              
              <div className="absolute bottom-2 sm:bottom-4 lg:bottom-8 left-2 sm:left-4 lg:left-8 bg-white/90 backdrop-blur-sm px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-lg">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-900">Live Menu</span>
                </div>
              </div>
            </div>

            {/* Decorative Icons - Responsive positioning and sizing */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 text-2xl sm:text-3xl lg:text-4xl animate-bounce">🍽️</div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 text-xl sm:text-2xl lg:text-3xl animate-pulse">⭐</div>
            <div className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 text-lg sm:text-xl lg:text-2xl animate-spin-slow">🎯</div>
          </div>
        </div>

        {/* Mobile Features List - Only shown on mobile */}
        <div className="sm:hidden flex flex-col space-y-3 mt-8 px-4">
          <div className="flex items-center justify-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-600">QR Code Integration • Real-time Updates • Multi-language</span>
          </div>
        </div>

        {/* Social Proof - Responsive layout */}
        <div className="mt-8 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 text-center lg:text-left px-4 sm:px-0">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900">5,000+</div>
              <div className="text-xs sm:text-sm text-gray-600">Restaurants</div>
            </div>
            <div className="w-px h-8 sm:h-12 bg-gray-300"></div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900">50,000+</div>
              <div className="text-xs sm:text-sm text-gray-600">Orders Daily</div>
            </div>
            <div className="w-px h-8 sm:h-12 bg-gray-300"></div>
            <div>
              <div className="flex items-center justify-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 sm:w-4 h-3 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-600">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      {/* Custom CSS for slow spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  )
}