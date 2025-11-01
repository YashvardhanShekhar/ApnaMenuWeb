'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function MenuNotFound() {
  const params = useParams()
  const restaurant = params?.restaurant as string

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full">
        
        {/* Animated Icon */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="text-8xl font-black text-gray-200 select-none mb-4">404</div>
            <div className="flex justify-center gap-3 text-5xl">
              <span className="animate-bounce">📋</span>
              <span className="animate-pulse">❓</span>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Menu Category Not Found
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This menu category doesn't exist or hasn't been set up yet by the restaurant.
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 border border-blue-100">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-blue-500">🔍</span>
              What you can do:
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>View all available menu items</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Browse other categories from the menu</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Use the search function to find items</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {restaurant && (
              <>
                <Link
                  href={`/${restaurant}/menu/all`}
                  className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-4 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    View Full Menu
                  </span>
                </Link>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => window.history.back()}
                    className="bg-gray-100 text-gray-700 font-semibold px-4 py-3 rounded-xl hover:bg-gray-200 transition-all text-sm"
                  >
                    <span className="flex items-center justify-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Go Back
                    </span>
                  </button>
                  
                  <Link
                    href="/"
                    className="bg-gray-100 text-gray-700 font-semibold px-4 py-3 rounded-xl hover:bg-gray-200 transition-all text-sm text-center"
                  >
                    <span className="flex items-center justify-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Homepage
                    </span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">🔍</div>
            <p className="text-xs font-medium text-gray-700">Use Search</p>
            <p className="text-xs text-gray-500 mt-1">Find any item instantly</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">📂</div>
            <p className="text-xs font-medium text-gray-700">Browse Menu</p>
            <p className="text-xs text-gray-500 mt-1">Explore all categories</p>
          </div>
        </div>
      </div>
    </div>
  )
}
