import React from "react";

const sampleTestimonials = [
  { id: 1, name: "Budi", avatar: "https://avatar-placeholder.iran.liara.run/100?u=budi", review: "Makanannya enak, cepat sampai!" },
  { id: 2, name: "Sari", avatar: "https://avatar-placeholder.iran.liara.run/100?u=sari", review: "Pelayanan ramah dan mudah digunakan." },
  { id: 3, name: "Joko", avatar: "https://avatar-placeholder.iran.liara.run/100?u=joko", review: "Harga terjangkau, cocok untuk semua kalangan." },
  { id: 4, name: "Lina", avatar: "https://avatar-placeholder.iran.liara.run/100?u=lina", review: "Aplikasi yang sangat membantu saya memesan makanan." },
  { id: 5, name: "Dewi", avatar: "https://avatar-placeholder.iran.liara.run/100?u=dewi", review: "Rekomendasi makanan yang pas setiap waktu!" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Testimoni Pengguna</h2>
      <div className="space-y-6">
        {sampleTestimonials.map(testi => (
          <div key={testi.id} className="flex items-center space-x-4 bg-yellow-50 p-4 rounded shadow">
            <img src={testi.avatar} alt={testi.name} className="w-16 h-16 rounded-full" />
            <div>
              <h4 className="font-bold">{testi.name}</h4>
              <p className="text-gray-700">{testi.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
