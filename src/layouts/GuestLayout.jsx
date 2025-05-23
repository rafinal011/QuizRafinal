import React from "react";

export default function GuestLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Sedap</div>
        <nav className="space-x-4">
          <a href="/guest" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#products" className="hover:underline">Products</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="/login" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">Login</a>
          <a href="/register" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">Register</a>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600">
        © 2025 Sedap. All rights reserved.
      </footer>
    </div>
  );
}
