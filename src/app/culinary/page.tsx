"use client";

import { useState } from "react";
import { CulinaryHeader } from "@/components/culinary/CulinaryHeader";
import { CulinaryFooter } from "@/components/culinary/CulinaryFooter";
import { ProductCard } from "@/components/culinary/ProductCard";
import { ProductModal } from "@/components/culinary/ProductModal";
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

  return (
    <div className="min-h-screen flex flex-col bg-yellow-100 text-gray-800">
      <CulinaryHeader />

      <main className="flex-grow container mx-auto p-4 sm:p-8">
        {/* Banner Section */}
        <section className="relative w-full h-48 sm:h-64 md:h-80 bg-orange-500 rounded-lg overflow-hidden shadow-lg mb-8 flex items-center justify-center p-4">
          <Image
            src="/culinary-banner.jpg" // Placeholder banner image
            alt="Culinary Banner"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <div className="relative z-10 text-white text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
              Nikmati Kelezatan Kuliner Kami
            </h2>
            <p className="text-lg sm:text-xl">Hidangan Terbaik untuk Anda</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-4 text-center">Tentang Kami</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            Kami adalah toko kuliner yang berdedikasi untuk menyajikan hidangan lezat dan berkualitas tinggi. Dengan bahan-bahan segar pilihan dan resep tradisional, kami berkomitmen untuk memberikan pengalaman bersantap yang tak terlupakan bagi setiap pelanggan.
          </p>
        </section>

        {/* Menu Section */}
        <section id="menu" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">Menu Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => (
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