'use client'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="px-4 mt-30 py-16 text-center">
      <div className=" mx-auto bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-6xl mt-3 mb-4">😕</div>
        <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Oops! Menu Unavailable
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We couldn't load the restaurant menu right now. This might be a temporary issue.
        </p>
        </div>
        <button
          onClick={reset}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
