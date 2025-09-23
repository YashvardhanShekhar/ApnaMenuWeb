"use client";
import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    ownerName: "",
    RestaurantName: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [toastPosition, setToastPosition] = useState<
    "top-center" | "bottom-center"
  >("top-center");
  const [inlineMessage, setInlineMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Mobile view me toast bottom pe
    if (window.innerWidth <= 768) {
      setToastPosition("bottom-center");
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimated]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setInlineMessage(null); // Clear old message
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Thanks for contacting us! We'll reach out soon.");
        setInlineMessage({
          type: "success",
          text: "✅ Thanks for contacting us! We'll reach out soon!",
        });
        setFormData({
          email: "",
          ownerName: "",
          RestaurantName: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        toast.error(data.error || "❌ Failed to submit form.");
        setInlineMessage({
          type: "error",
          text: "❌ Failed to submit form. Please try again.",
        });
      }
    } catch (error) {
      toast.error("⚠️ Something went wrong. Try again later.");
      setInlineMessage({
        type: "error",
        text: "⚠️ Something went wrong. Try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-amber-50 relative overflow-hidden flex items-center py-16 transform transition-all duration-1000 ease-out ${
        hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Toast with dynamic position */}
      <Toaster position={toastPosition} reverseOrder={false} />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl transition-all duration-700 delay-300 ${
            hasAnimated ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute bottom-20 right-10 w-32 h-32 bg-red-300/20 rounded-full blur-2xl transition-all duration-700 delay-500 ${
            hasAnimated ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 w-60 h-60 bg-yellow-300/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-700 ${
            hasAnimated ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div
            className={`space-y-8 text-center lg:text-left transform transition-all duration-1000 delay-200 ${
              hasAnimated
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-300 to-red-600 rounded-full mb-6 shadow-2xl">
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
              <div className="p-3 mt-5">
                <p className="text-xl text-gray-700 leading-relaxed mx-auto lg:mx-0">
                  Have questions about getting started with ApnaMenu? We're here
                  to help you transform your restaurant experience.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className={`order-1 transform transition-all duration-1000 delay-400 ${
              hasAnimated
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-10 scale-95"
            }`}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-200/50 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="form-pattern"
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="20"
                        cy="20"
                        r="2"
                        fill="currentColor"
                        opacity="0.3"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#form-pattern)" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Started Today
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form and let's transform your restaurant
                  </p>
                </div>

                {/* Inline Success/Error Message */}
                {inlineMessage && (
                  <div
                    className={`p-3 mb-4 rounded-lg text-sm font-medium ${
                      inlineMessage.type === "success"
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : "bg-red-100 text-red-700 border border-red-300"
                    }`}
                  >
                    {inlineMessage.text}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Owner Name *
                      </label>
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
                      <label className="text-sm font-medium text-gray-700">
                        Restaurant Name *
                      </label>
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
                    <label className="text-sm font-medium text-gray-700">
                      Business Email *
                    </label>
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
                    <label className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
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
                    <label className="text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your restaurant and how we can help..."
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-orange-50/50 border border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-300 resize-none"
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-4">
                      By clicking Submit, you agree to our{" "}
                      <a
                        href="/privacy"
                        className="text-orange-600 hover:text-orange-700 underline font-medium"
                      >
                        Privacy Policy
                      </a>
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "Schedule a Demo"}
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
