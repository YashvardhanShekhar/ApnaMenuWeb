'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full">
        
        {/* Animated Icon */}
        <div className="text-center mb-8">
          <div className="text-8xl mb-4 animate-pulse">⚠️</div>
          <div className="inline-block px-6 py-2 bg-red-100 border-2 border-red-200 rounded-full">
            <p className="text-sm font-semibold text-red-600">Something went wrong</p>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Unexpected Error
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Don't worry! This happens sometimes. Try refreshing the page or go back to the homepage.
            </p>
          </div>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-xl">🐛</div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-red-800 mb-2">Debug Info:</p>
                  <p className="text-xs text-red-700 font-mono break-all leading-relaxed">
                    {error.message}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={reset}
              className="block w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold px-6 py-4 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Try Again
              </span>
            </button>
            
            <button
              onClick={() => window.location.href = '/'}
              className="block w-full bg-gray-100 text-gray-700 font-semibold px-6 py-4 rounded-xl hover:bg-gray-200 transition-all"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go to Homepage
              </span>
            </button>
          </div>
        </div>

        {/* Help Footer */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100">
            <span className="text-sm text-gray-600">Still having issues?</span>
            <a href="/contact" className="text-sm font-semibold text-orange-600 hover:text-orange-700">
              Contact Support →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
