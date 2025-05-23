import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderGuest() {
  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Sedap</div>
      <nav className="space-x-4">
        <Link to="/guest" className="hover:underline">Home</Link>
        <Link to="#about" className="hover:underline">About</Link>
        <Link to="#products" className="hover:underline">Products</Link>
        <Link to="#testimonials" className="hover:underline">Testimonials</Link>
      </nav>
      <div>
        <Link to="/login" className="border border-white px-3 py-1 rounded hover:bg-white hover:text-green-600 transition">
          Login
        </Link>
        <Link to="/register" className="ml-2 border border-white px-3 py-1 rounded hover:bg-white hover:text-green-600 transition">
          Register
        </Link>
      </div>
    </header>
  );
}
