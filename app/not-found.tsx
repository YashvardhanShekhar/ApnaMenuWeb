import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-orange-500 mb-4">404</div>
          <div className="text-6xl mb-6">🍽️</div>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <div className='mt-3'>
        <p className="text-gray-600 mb-8  leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        </div>

        {/* Action Button */}
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-amber-600 to-orange-300 text-white font-semibold px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-500 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Go to Homepage
        </Link>

        {/* Additional Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            If you think this is a mistake, please contact support
          </p>
        </div>
      </div>
    </div>
  )
}
