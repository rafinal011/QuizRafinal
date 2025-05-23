import React from "react";

export default function Products() {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Produk Terbaik Kami
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product 1 */}
        <div className="border rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="/img/mieayam.jpg"
            alt="Mie Ayam"
            className="w-full h-56 object-cover rounded-t-xl"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Mie Ayam
            </h2>
            <p className="text-gray-600 mb-4">
              Nikmati mie ayam di sedap pasti beda dari yang lain.
            </p>
            <button className="w-full bg-emerald-500 text-white py-2 rounded-lg text-lg font-medium hover:bg-emerald-600 transition-colors duration-300">
              Pesan Sekarang
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="border rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="/img/Nasgor.jpg"
            alt="Nasi Goreng"
            className="w-full h-56 object-cover rounded-t-xl"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Nasi Goreng
            </h2>
            <p className="text-gray-600 mb-4">
              Nasgornya beda nii coba laa duluu hehe.
            </p>
            <button className="w-full bg-emerald-500 text-white py-2 rounded-lg text-lg font-medium hover:bg-emerald-600 transition-colors duration-300">
              Pesan Sekarang
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="border rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="/img/sateayam.jpg"
            alt="Sate Ayam"
            className="w-full h-56 object-cover rounded-t-xl"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Sate Ayam
            </h2>
            <p className="text-gray-600 mb-4">
              Sate ayam nya enak kaliiii.
            </p>
            <button className="w-full bg-emerald-500 text-white py-2 rounded-lg text-lg font-medium hover:bg-emerald-600 transition-colors duration-300">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
