'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function MenuNotFound() {
  const params = useParams()
  const restaurant = params?.restaurant as string

  return (
    <div className="min-h-screen bg-gray-50 flex mt-30 p-5">
      <div className=" w-full text-center ">
        <div className="mb-8">
          <div className="text-8xl font-bold text-orange-500 mb-4">404</div>
          <div className="text-5xl ">📋</div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Menu Not Available
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The menu you're trying to access doesn't exist or hasn't been set up yet.
        </p>

        <div className="space-y-4">
          {restaurant && (
            <Link
              href={`/${restaurant}/menu/all`}
              className="block bg-gradient-to-tl from-orange-300 to-orange-500 text-white font-semibold px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-500 transition-all shadow-lg"
            >
              View All Menu Items
            </Link>
          )}
          
          <Link
            href="/"
            className="block bg-white text-gray-700 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all border-2 border-gray-200"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
