'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const previewFAQs: FAQItem[] = [
  {
    id: 'access-menu',
    question: 'How do customers access my restaurant\'s menu?',
    answer: 'Simply place a QR code at each table. When customers scan it with their phone, your digital menu opens instantly in their browser—no app download required.'
  },
  {
    id: 'no-app-needed',
    question: 'Do customers need to install an app?',
    answer: 'No app is required! ApnaMenu works directly in any smartphone browser. Customers just scan the QR code and your menu loads immediately.'
  },
  {
    id: 'update-menu',
    question: 'How do I update my menu items and prices?',
    answer: 'You can update items, prices, and daily specials anytime through your ApnaMenu dashboard. Changes reflect instantly across all QR codes—no reprinting needed!'
  },
  {
    id: 'menu-security',
    question: 'Is my menu data safe and secure?',
    answer: 'Yes! ApnaMenu uses enterprise-grade security with SSL encryption. Your menu data is protected and only accessible through your secure dashboard.'
  }
]

export default function FAQPreview() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-orange-100 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center flex flex-col gap-7 mb-6 sm:mb-12">
          <h2 className="font-heading text-[2.5rem]  sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Common Questions
          </h2>
          <div className='px-10'>
            <p className="font-sans text-base sm:text-lg text-gray-600 mx-auto ">
            Quick answers to help you understand how ApnaMenu works
          </p>
          </div>
          
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8">
          {previewFAQs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-orange-100"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className={`w-full px-4  sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between  hover:bg-orange-200 transition-colors bg-black duration-200 ${openItem === faq.id ? 'bg-orange-300' : 'bg-white/20' }`}
              >
                <h3 className="font-modern text-base sm:text-lg font-semibold  text-gray-900 pr-3">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transform transition-transform duration-300 ${
                  openItem === faq.id ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openItem === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                  <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-end">
          <Link
            href="/faq"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <span>View More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
