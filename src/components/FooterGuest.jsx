import React from 'react';

export default function FooterGuest() {
  return (
    <footer className="bg-green-600 text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        <p>Kontak kami: email@sedap.com | Telepon: 0812-3456-7890</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
        <p className="mt-4">© 2025 Sedap. All rights reserved.</p>
      </div>
    </footer>
  );
}
