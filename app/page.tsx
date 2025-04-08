"use client";

import { useEffect } from "react";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/products";
import { Carousel } from "@/components/carousel";
import { SearchForm } from "@/components/search-form";
import { ProfileBanner } from "@/components/profile-banner";

export default function Home() {
  // Force Tailwind CSS to be applied
  useEffect(() => {
    // This is just to ensure the CSS is loaded
    document.body.className = document.body.className;
  }, []);

  return (
    <main className="text-gray-800 bg-gray-50">
      {/* Carousel Container */}
      <Carousel />

      {/* Search Form */}
      <SearchForm />

      {/* Profile Banner */}
      <ProfileBanner />

      {/* Products */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
