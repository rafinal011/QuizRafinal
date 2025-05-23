import React from "react";
import GuestLayout from "../layouts/GuestLayout";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";

export default function GuestPage() {
  return (
    <GuestLayout>
      <Hero />
      <About />
      <Products />
      <Testimonials />
    </GuestLayout>
  );
}
