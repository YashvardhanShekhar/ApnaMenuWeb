import type { Metadata } from "next";
import Hero from "./components/Hero";
import AboutSection from "./components/About";
import FAQ from "./components/Faqpage";
import FAQPreview from "./components/Faq";
import ContactPage from "./components/Contact";
// import Hero2 from './components/Hero2'

export const metadata: Metadata = {
  title: "ApnaMenu - Transform Your Restaurant with Digital QR Menus",
  description:
    "Create stunning QR code menus for your restaurant. Boost sales, delight customers, and go paperless with ApnaMenu digital menu solutions.",
  keywords:
    "digital menu, QR code menu, restaurant technology, contactless dining, menu management",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection/>
      <FAQPreview/>
      <ContactPage/>

      {/* Additional sections can be added here later */}
      {/* <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            More sections coming soon...
          </h2>
          <p className="text-text-secondary">
            Features, testimonials, and more content will be added here.
          </p>
        </div>
      </section> */}
    </>
  );
}


