"use client";

import { useState } from "react";

interface FAQItem {
  id: string;
  category: "general" | "owners" | "customers" | "technical";
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  // General Usage
  {
    id: "access-menu",
    category: "general",
    question: "How do customers access my restaurant's menu?",
    answer:
      "Simply place a QR code at each table or at the entrance. When customers scan it with their phone camera, your digital menu opens instantly in their browser—no app download required.",
  },
  {
    id: "no-app-needed",
    category: "general",
    question: "Do customers need to install an app?",
    answer:
      "No app is required! ApnaMenu works directly in any smartphone browser. Customers just scan the QR code and your menu loads immediately, making it incredibly convenient and accessible.",
  },
  {
    id: "offline-access",
    category: "general",
    question: "What if customers don't have internet?",
    answer:
      "Our menus are designed to load quickly and cache content. However, for customers without internet, you can keep a few physical menus as backup or provide free WiFi.",
  },

  // For Restaurant Owners
  {
    id: "update-menu",
    category: "owners",
    question: "How do I update my menu items and prices?",
    answer:
      "You can update items, prices, descriptions, and daily specials anytime through your ApnaMenu dashboard. Changes reflect instantly across all QR codes—no need to reprint anything!",
  },
  {
    id: "menu-security",
    category: "owners",
    question: "Is my menu data safe and secure?",
    answer:
      "Yes! ApnaMenu uses enterprise-grade security with SSL encryption. Your menu data is protected, backed up regularly, and only accessible by you through your secure dashboard.",
  },
  {
    id: "analytics-tracking",
    category: "owners",
    question: "Can I track customer activity and popular items?",
    answer:
      "Absolutely! ApnaMenu provides detailed analytics showing which items are viewed most, peak browsing times, and customer engagement patterns to help optimize your menu strategy.",
  },
  {
    id: "cost-pricing",
    category: "owners",
    question: "How much does ApnaMenu cost?",
    answer:
      "We offer flexible plans starting from ₹999/month for small restaurants. This includes unlimited menu updates, QR codes, analytics, and customer support. Enterprise plans available for chains.",
  },
  {
    id: "setup-time",
    category: "owners",
    question: "How long does it take to set up?",
    answer:
      "Most restaurants are live within 24 hours! Simply upload your menu, customize the design, and we'll generate your QR codes. Our team helps with the entire setup process.",
  },

  // For Customers
  {
    id: "customer-scanning",
    category: "customers",
    question: "How do I scan the QR code?",
    answer:
      "Simply open your phone's camera app and point it at the QR code. A notification will appear—tap it to open the menu. Works on both iPhone and Android devices.",
  },
  {
    id: "menu-languages",
    category: "customers",
    question: "Can I view the menu in different languages?",
    answer:
      "Yes! Many ApnaMenu restaurants offer multi-language support. Look for language options at the top of the digital menu to switch between available languages.",
  },
  {
    id: "ordering-process",
    category: "customers",
    question: "Can I order directly from the digital menu?",
    answer:
      "This depends on the restaurant's setup. Some ApnaMenu restaurants allow direct ordering and payment, while others use it for browsing—just ask your server about their process.",
  },

  // Technical
  {
    id: "phone-compatibility",
    category: "technical",
    question: "Does it work on all smartphones?",
    answer:
      "Yes! ApnaMenu works on any smartphone with a camera and internet browser—iPhone, Android, or any other device. No specific phone model or OS version required.",
  },
  {
    id: "load-speed",
    category: "technical",
    question: "How fast does the menu load?",
    answer:
      "Our menus are optimized for speed and typically load in under 2 seconds on standard internet connections. Images are compressed for quick loading without losing quality.",
  },
  {
    id: "multiple-locations",
    category: "technical",
    question: "Can I use ApnaMenu for multiple restaurant locations?",
    answer:
      "Absolutely! Our platform supports multi-location management. Each location can have its own unique menu while being managed from a single dashboard account.",
  },
];

const categories = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "Getting Started" },
  { id: "owners", label: "For Restaurant Owners" },
  { id: "customers", label: "For Customers" },
  { id: "technical", label: "Technical" },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFAQs =
    activeCategory === "all"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16 flex flex-col items-center text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <br />
          <p className="font-sans text-lg sm:text-xl text-gray-600 max-w-3xl">
            Everything you need to know about ApnaMenu's QR code digital menu
            system
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-orange-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 shadow-md"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-orange-100"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between hover:bg-orange-50 transition-colors duration-200"
              >
                <h3 className="font-modern text-lg sm:text-xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 transform transition-transform duration-300 ${
                    openItems.includes(faq.id) ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(faq.id)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 sm:px-8 pb-6">
                  <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-500 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="font-sans text-lg sm:text-xl mb-8 opacity-90">
              Our team is here to help you get started with ApnaMenu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1">
                📞 Call Support
              </button>
              <button className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1">
                💬 Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
