'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 sm:py-20">
        
        {/* Header with Animation */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Experience <br className="sm:hidden" />
            ApnaMenu <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Live</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See how our digital menu system transforms the dining experience
          </p>
        </div>

        {/* Progress Steps - FIXED */}
        <div className={`max-w-4xl mx-auto mb-12 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Step Indicators */}
          <div className="relative mb-8">
            <div className="flex items-center justify-between">
              {[
                { num: 1, label: 'Choose Method', icon: '🎯' },
                { num: 2, label: 'Scan/View', icon: '📱' },
                { num: 3, label: 'Explore', icon: '✨' }
              ].map((step, index) => (
                <div key={step.num} className=" flex items-center flex-1">
                  {/* Step Circle */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full font-bold text-lg transition-all duration-500 transform ${
                      currentStep >= step.num 
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl scale-110' 
                        : 'bg-gray-200 text-gray-500 scale-100'
                    }`}>
                      {currentStep > step.num ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span className="text-2xl">{step.icon}</span>
                      )}
                      {currentStep >= step.num && (
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping opacity-20"></div>
                      )}
                    </div>
                    <span className={`mt-3 text-xs sm:text-sm font-medium text-center transition-all ${
                      currentStep >= step.num ? 'text-orange-600' : 'text-gray-400'
                    }`}>
                      {step.label}
                    </span>
                  </div>
                  
                  {/* Connecting Line */}
                  {index < 2 && (
                    <div className="flex-1 px-2 sm:px-4">
                      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500 ${
                          currentStep > step.num ? 'w-full' : 'w-0'
                        }`}></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-12 min-h-[32rem]">
              
              {/* Step 1: Choose Method */}
              {currentStep === 1 && (
                <div className="text-center animate-fadeIn">
                  <div className="text-6xl sm:text-7xl mb-6 animate-bounce">📱</div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Choose Your Demo Method
                  </h2>
                  <p className="text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
                    Experience our digital menu system the way that works best for you
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {/* QR Code Option */}
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="group relative p-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 to-red-400/0 group-hover:from-orange-400/10 group-hover:to-red-400/10 rounded-2xl transition-all"></div>
                      <div className="relative">
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📷</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Scan QR Code</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          Use your phone camera for the authentic experience
                        </p>
                        <div className="inline-flex items-center gap-2 text-orange-600 font-medium text-sm">
                          <span>Try it now</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </button>

                    {/* Browser Option */}
                    <Link
                      href="/demo-restaurant/menu/all"
                      className="group relative p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 rounded-2xl transition-all"></div>
                      <div className="relative">
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💻</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">View in Browser</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          Open the demo directly on this device
                        </p>
                        <div className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm">
                          <span>Open now</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1">
                        2s
                      </div>
                      <div className="text-xs text-gray-600">Load Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1">
                        100%
                      </div>
                      <div className="text-xs text-gray-600">Mobile Ready</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1">
                        0
                      </div>
                      <div className="text-xs text-gray-600">Apps Needed</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: QR Code */}
              {currentStep === 2 && (
                <div className="text-center animate-fadeIn">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                    Scan This QR Code
                  </h2>
                  
                  <div className="relative inline-block mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 blur-3xl opacity-30 animate-pulse"></div>
                    <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                      <div className="w-64 h-64 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all"></div>
                        <span className="relative text-white font-medium">QR Code Placeholder</span>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-md mx-auto mb-8">
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-200">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-center gap-2">
                        <span className="text-xl">📸</span>
                        How to Scan
                      </h4>
                      <ol className="text-left space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-5 h-5 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                          <span>Open your phone's camera app</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-5 h-5 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                          <span>Point it at the QR code above</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-5 h-5 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                          <span>Tap the notification to open menu</span>
                        </li>
                      </ol>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Back to Options
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl transition-all shadow-lg"
                    >
                      Continue
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Success */}
              {currentStep === 3 && (
                <div className="text-center animate-fadeIn">
                  <div className="text-7xl mb-6 animate-bounce">🎉</div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    You're All Set!
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                    Now explore the demo menu and experience how ApnaMenu transforms dining
                  </p>

                  <div className="max-w-2xl mx-auto mb-8">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                        <div className="text-3xl mb-3">🔍</div>
                        <h4 className="font-semibold text-gray-900 mb-2">Search Items</h4>
                        <p className="text-sm text-gray-600">Find any dish instantly</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200">
                        <div className="text-3xl mb-3">📂</div>
                        <h4 className="font-semibold text-gray-900 mb-2">Browse Categories</h4>
                        <p className="text-sm text-gray-600">Organized by meal type</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/demo-restaurant/menu/all"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg rounded-xl transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Open Demo Menu
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
