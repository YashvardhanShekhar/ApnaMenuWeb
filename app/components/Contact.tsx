"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    ownerName: "",
    RestaurantName: "",
    phoneNumber: "",
    message: "",
  });

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
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center lg:text-left flex flex-col justify-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">
            Contact <span className="text-orange-600">ApnaMenu!</span>
          </h1>
          <br />
          <p className="text-gray-700 text-lg">
            Have questions about getting started with ApnaMenu? We're here to
            help you every step of the way.
          </p>
          <br />

          <ul className="space-y-3 text-gray-700">
            {[
              "Boost your restaurant’s efficiency with ApnaMenu.",
              "Fill out the form and our team will get back to you within 24 hours.",
              "Just share your details, and we’ll get in touch soon.",
              "Reach out today and digitize your menu hassle-free.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-gray-600 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="ownerName"
                placeholder="Owner Name*"
                required
                value={formData.ownerName}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none"
              />
              <input
                type="text"
                name="RestaurantName"
                placeholder="Restaurant Name*"
                required
                value={formData.RestaurantName}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Business Email*"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none"
            />
            {
              <>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number*"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Message*"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none min-h-[100px]"
                />
              </>
            }

            <p className="text-xs text-gray-400">
              By clicking Submit, you confirm that you have read and agree to
              our{" "}
              <a href="/privacy" className="text-orange-400 underline">
                Privacy Policy
              </a>
              .
            </p>

            <button
              type="submit"
              className="w-full cursor-pointer bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Schedule a Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
