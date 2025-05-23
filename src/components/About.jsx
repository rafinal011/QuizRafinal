import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="p-12 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{
        background: "linear-gradient(135deg, #fef9f0 0%, #e2f0cb 100%)",
      }}
    >
      <h2 className="text-4xl font-extrabold mb-6 text-green-800 drop-shadow-sm">
        About Us
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
        Sedap adalah aplikasi pemesanan makanan yang menawarkan berbagai pilihan hidangan
        lezat dan berkualitas. Kami berkomitmen memberikan pengalaman terbaik dengan
        layanan cepat dan mudah, sehingga Anda bisa menikmati sajian favorit kapan saja
        dan di mana saja.
      </p>
    </section>
  );
}
