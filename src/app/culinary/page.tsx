"use client";

import { useState, useMemo } from "react";
import { CulinaryHeader } from "@/components/culinary/CulinaryHeader";
import { CulinaryFooter } from "@/components/culinary/CulinaryFooter";
import { ProductCard } from "@/components/culinary/ProductCard";
import { ProductModal } from "@/components/culinary/ProductModal";
import { CulinaryHero } from "@/components/culinary/CulinaryHero";
import { products, Product } from "@/lib/culinary-data";
import Image from "next/image";

export default function CulinaryLandingPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Ambil beberapa produk untuk ditampilkan di halaman utama
  const featuredProducts = useMemo(() => products.slice(0, 4), []); // Ambil 4 produk pertama sebagai contoh

  return (
    <div className="min-h-screen flex flex-col bg-yellow-100 text-gray-800">
      <CulinaryHeader />
      <CulinaryHero />

      <main className="flex-grow container mx-auto p-4 sm:p-8">
        {/* About Section */}
        <section id="about" className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-4 text-center">Tentang Kami</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            Kami adalah toko kuliner yang berdedikasi untuk menyajikan hidangan lezat dan berkualitas tinggi. Dengan bahan-bahan segar pilihan dan resep tradisional, kami berkomitmen untuk memberikan pengalaman bersantap yang tak terlupakan bagi setiap pelanggan.
          </p>
        </section>

        {/* Featured Products Section (Inline) */}
        <section className=" p-1  mb-2">
          <div className="text-center mb-8">
            <p className="text-orange-600 font-semibold text-lg">Our Favorites</p>
            <h2 className="text-4xl font-bold text-gray-800">Featured Dishes</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={handleProductClick}
              />
            ))}
          </div>
        </section>
      </main>

      <CulinaryFooter />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}