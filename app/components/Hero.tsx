"use client";
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br bg-green-500 from-orange-50 via-white to-red-50 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-2 lg:px-50 py-8 sm:py-12 lg:py-1">
        {/* ✅ FIXED GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* ✅ Left Content - TEXT FIRST ON MOBILE */}
          <div className="mt-20 text-center lg:text-left order-1 lg:order-1">
            <div className="space-y-2 mb-15 text-white sm:space-y-6">
              <div className="flex flex-col gap-10 sm:text-center">
                <h1 className="text-5xl flex flex-col gap-3 font-heading space-y-2 sm:text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-6xl text-gray-800 font-poppins ">
                    Transform Your{" "}
                  </span>
                  <span className="text-6xl mb-5  text-orange-600 relative inline-block font-bold">
                    Restaurant
                    <svg
                      className="absolute -bottom-3 sm:-bottom-2 left-0 w-full h-3 sm:h-3 text-orange-500"
                      viewBox="0 0 200 10"
                      fill="currentColor"
                    >
                      <path d="M0,8 Q100,0 200,8 L200,10 L0,10 Z" />
                    </svg>
                  </span>{" "}
                  {/* <br className="hidden sm:block" /> */}
                  <span className="text-5xl block sm:inline">
                    with Digital Menus
                  </span>
                </h1>

                <p className="font-modern text-base font-semibold sm:text-lg md:text-xl lg:text-xl text-gray-700 mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
                  Create stunning QR code menus that delight customers and boost
                  your sales. No more printed menus, just scan and explore!
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 sm:pt-6 px-4 sm:px-0">
                <button className="w-full sm:w-auto bg-orange-800 font-modern hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Open Demo Menu
                </button>
                <button className="w-full sm:w-auto bg-transparent hover:bg-orange-600 text-orange-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 border-2 border-orange-600 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1">
                  How It Works
                </button>
              </div>

              {/* Features */}
              <div className="hidden sm:flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 text-sm text-gray-600 pt-4">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  QR Code Integration
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Real-time Updates
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Multi-language
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Right Image Section - IMAGE SECOND ON MOBILE */}
          <div className="relative order-2 lg:order-2 px-4 sm:px-8 lg:px-0">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border-2 sm:border-4 border-orange-500 p-2 sm:p-4">
              <img
                src="/images/hero.png"
                alt="ApnaMenu digital restaurant menu displayed on smartphone"
                className="w-full h-auto rounded-xl sm:rounded-2xl object-cover aspect-[4/4.5] sm:aspect-[6/6]"
              />
              {/* <div className="absolute top-2 sm:top-4 lg:top-8 right-2 sm:right-4 lg:right-8 bg-orange-600 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                <span className="hidden sm:inline">QR Ready! </span>📲
              </div> */}
            </div>
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 text-2xl sm:text-3xl lg:text-4xl animate-bounce">
              🍽️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
