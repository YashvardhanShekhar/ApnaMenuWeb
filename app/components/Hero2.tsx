import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8">
      {/* Text */}
      <div className="order-2 md:order-1 md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Welcome to ApnaMenu</h1>
        <p className="text-lg text-gray-600 mb-6">
          The smartest way to explore menus and order food.
        </p>
        <button className="bg-accent-primary text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </div>

      {/* Image */}
      <div className="order-1 md:order-2 md:w-1/2 flex justify-center">
        <Image
          src="/images/abc.png"
          alt="ApnaMenu Hero"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
