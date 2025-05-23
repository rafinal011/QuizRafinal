import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-yellow-100 h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80')`,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in">
          Nikmati Masakan Terlezat di <span className="text-yellow-300">Sedap!</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-6 animate-slide-up">
          Sajian terbaik dengan bahan segar langsung ke meja Anda. Mudah, cepat, dan lezat!
        </p>
      </div>
    </section>
  );
}
