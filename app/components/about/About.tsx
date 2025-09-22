'use client'
import React, { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Disconnect observer after first animation
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`relative bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 py-16 sm:py-20 md:py-15 lg:py-10 xl:py-18 overflow-hidden transform transition-all duration-1000 ease-out ${
        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-orange-300/20 rounded-full blur-xl animate-float transform transition-all duration-700 ${
          hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}></div>
        <div className={`absolute top-1/3 right-20 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-red-300/20 rounded-full blur-xl animate-float-delay transform transition-all duration-700 delay-300 ${
          hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}></div>
        <div className={`absolute bottom-20 left-1/4 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 bg-yellow-300/20 rounded-full blur-xl animate-pulse transform transition-all duration-700 delay-500 ${
          hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 sm:mb-20 lg:mb-25 transform transition-all duration-800 delay-200 ${
          hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
        }`}>
          <h2 className="text-6xl font-heading sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
            About{' '}
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-8 xl:gap-12 transform transition-all duration-1000 delay-400 ${
          hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Section 1: About ApnaMenu */}
          <div className="group">
            <div className="bg-white/80 hover:bg-yellow-100 backdrop-blur-sm rounded-3xl sm:rounded-4xl shadow-2xl p-8 sm:p-10 md:p-12 lg:p-10 xl:p-12 border border-orange-200/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden">
              
              {/* Card Background Pattern */}
              <div className="absolute inset-0 opacity-6 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-400 to-orange-400 rounded-full transform -translate-x-12 translate-y-12"></div>
              </div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className='flex gap-2'>
                <div className="flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-[#e9ac5d] to-red-500 rounded-2xl mb-6 sm:mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-12">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl">🍽️</span>
                </div>
                
                {/* Title */}
                <div className='p-4'>
                <h3 className="group-hover:scale-105 duration-400 ease-in-out transition-transform font-mono text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  About ApnaMenu
                </h3>
                </div>
                </div>
                
                {/* Content */}
                <p className="text-base sm:text-lg md:text-xl lg:text-base xl:text-lg text-gray-700 leading-relaxed">
                  ApnaMenu is a <strong className="text-orange-600 font-semibold">digital menu solution</strong> that lets customers scan a QR code and instantly view a restaurant's menu on their phone—fast, convenient, and eco-friendly.
                </p>
                
                {/* Decorative Element */}
                <div className="mt-6 sm:mt-8 flex items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-xs">📱</div>
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-xs">⚡</div>
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-xs">🌱</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Why ApnaMenu */}
          <div className="group">
            <div className="bg-white/80 hover:bg-yellow-100 backdrop-blur-sm rounded-3xl sm:rounded-4xl shadow-2xl p-8 sm:p-10 md:p-12 lg:p-10 xl:p-12 border border-orange-200/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden">
              
              {/* Card Background Pattern */}
              <div className="absolute inset-0 opacity-5 opacity-6 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-green-400 to-blue-400 rounded-full transform -translate-x-14 -translate-y-14"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-400 to-pink-400 rounded-full transform translate-x-16 translate-y-16"></div>
              </div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className='flex gap-2'>
                <div className="flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl mb-6 sm:mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-12">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl">💡</span>
                </div>
                
                {/* Title */}
                <div className='p-4'>
                <h3 className=" group-hover:scale-105 duration-400 ease-in-out transition-transform font-bold font-mono text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Why ApnaMenu?
                </h3>
                </div>
                </div>
                
                {/* Content */}
                <p className="text-base sm:text-lg md:text-xl lg:text-base xl:text-lg text-gray-700 leading-relaxed">
                  No more outdated or printed menus. ApnaMenu helps restaurants <strong className="text-green-600 font-semibold">save costs, stay updated, and impress customers</strong> with a smooth dining experience.
                </p>
                
                {/* Benefits List */}
                <div className="mt-6 sm:mt-8 space-y-2">
                  <div className="flex items-center text-sm sm:text-base text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Save printing costs
                  </div>
                  <div className="flex items-center text-sm sm:text-base text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Instant updates
                  </div>
                  <div className="flex items-center text-sm sm:text-base text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Better customer experience
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Our Promise */}
          <div className="group lg:col-span-1">
            <div className="bg-yellow-100 rounded-3xl sm:rounded-4xl shadow-2xl p-8 sm:p-10 md:p-12 lg:p-10 xl:p-12 text-white hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden">
              
              {/* Card Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="promise-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.3" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#promise-pattern)" />
                </svg>
              </div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className='flex gap-2'>
                <div className="flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-green-300 backdrop-blur-sm rounded-2xl mb-6 sm:mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-12 border border-white/30">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl">🚀</span>
                </div>
                
                {/* Title */}
                <div className='p-4'>
                <h3 className="group-hover:scale-105 duration-400 ease-in-out transition-transform  font-bold font-mono text-[1.6rem] sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl  mb-4 sm:mb-6 leading-tight">
                  Our Promise
                </h3>
                </div>
                </div>
                
                {/* Content */}
                <p className="text-base sm:text-lg md:text-xl lg:text-base xl:text-lg leading-relaxed mb-6 sm:mb-8">
                  We're committed to making dining <strong className="text-black/50 font-bold">simpler, smarter, and sustainable</strong> for both restaurants and their guests.
                </p>
                
                {/* Call to Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className=" text-md sm:text-base font-medium opacity-90 ">Always evolving</span>
                  </div>
                  <div className="text-2xl animate-bounce">✨</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite 2s;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        .rounded-4xl {
          border-radius: 2rem;
        }
        
        @media (min-width: 1024px) {
          .rounded-4xl {
            border-radius: 2.5rem;
          }
        }
        
        /* Glass morphism effect */
        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
        }
      `}</style>
    </section>
  );
}
