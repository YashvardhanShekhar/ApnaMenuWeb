"use client";
import { useState, useEffect, useRef } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    ownerName: "",
    RestaurantName: "",
    phoneNumber: "",
    message: "",
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! (Here you can integrate backend or API)");
  };

  return (
    <section 
      ref={sectionRef}
      className={`min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-amber-50 relative overflow-hidden flex items-center py-16 transform transition-all duration-1000 ease-out ${
        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl transition-all duration-700 delay-300 ${
          hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        <div className={`absolute bottom-20 right-10 w-32 h-32 bg-red-300/20 rounded-full blur-2xl transition-all duration-700 delay-500 ${
          hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 w-60 h-60 bg-yellow-300/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-700 ${
          hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className={`space-y-8 text-center lg:text-left transform transition-all duration-1000 delay-200 ${
            hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            
            {/* Header */}
            <div className="space-y-6 ">
              <div className="inline-flex  items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-300 to-red-600 rounded-full mb-6 shadow-2xl">
                <span className="text-3xl">📞</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Contact </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 relative">
                  ApnaMenu
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-orange-500"
                    viewBox="0 0 200 10"
                    fill="currentColor"
                  >
                    <path d="M0,8 Q100,0 200,8 L200,10 L0,10 Z" />
                  </svg>
                </span>
              </h1>
              
              <div className=" p-3 mt-5">
                <p className="text-xl text-gray-700 leading-relaxed mx-auto lg:mx-0">
                Have questions about getting started with ApnaMenu? We're here to help you transform your restaurant experience.
              </p>
              </div>
              
            </div>

            {/* Features List */}
            <div className={`space-y-4 transform transition-all duration-800 delay-400 ${
              hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              {[
                { icon: "🚀", text: "Boost your restaurant's efficiency with ApnaMenu" },
                { icon: "⏰", text: "Get a response within 24 hours" },
                { icon: "💬", text: "Share your details, we'll get in touch soon" },
                { icon: "📱", text: "Digitize your menu hassle-free" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform ${
                    hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-200 to-red-200 rounded-lg flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className={` flex flex-wrap justify-center lg:justify-start gap-6 pt-6 transform transition-all duration-800 delay-1000 ${
              hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-sm">📧</span>
                </div>
                <span className="font-medium">hello@apnamenu.site</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-sm">⏱️</span>
                </div>
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className={`order-1 transform transition-all duration-1000 delay-400 ${
            hasAnimated ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
          }`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-200/50 relative overflow-hidden">
              
              {/* Form Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="form-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.3" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#form-pattern)" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Started Today</h3>
                  <p className="text-gray-600">Fill out the form and let's transform your restaurant</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Owner Name *</label>
                      <input
                        type="text"
                        name="ownerName"
                        placeholder="Enter your name"
                        required
                        value={formData.ownerName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-orange-50/50 border border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Restaurant Name *</label>
                      <input
                        type="text"
                        name="RestaurantName"
                        placeholder="Your restaurant name"
                        required
                        value={formData.RestaurantName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-orange-50/50 border border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@restaurant.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-orange-50/50 border border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-orange-50/50 border border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message *</label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your restaurant and how we can help..."
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-orange-50/50 border border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-300 resize-none"
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-4">
                      By clicking Submit, you agree to our{" "}
                      <a href="/privacy" className="text-orange-600 hover:text-orange-700 underline font-medium">
                        Privacy Policy
                      </a>
                    </p>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Schedule a Demo
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
