"use client";

import { useState, useMemo } from "react";
import { CulinaryHeader } from "@/components/culinary/CulinaryHeader";
import { CulinaryFooter } from "@/components/culinary/CulinaryFooter";
import { ProductCard } from "@/components/culinary/ProductCard";
import { ProductModal } from "@/components/culinary/ProductModal";
import { CulinaryHero } from "@/components/culinary/CulinaryHero";
import { CategorySidebar } from "@/components/culinary/CategorySidebar";
import { products, Product } from "@/lib/culinary-data";
import Image from "next/image";

export default function CulinaryLandingPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

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

        {/* Menu Section */}
        <section id="menu" className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <p className="text-orange-600 font-semibold text-lg">Our Menu</p>
            <h2 className="text-4xl font-bold text-gray-800">Discover Menu</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <CategorySidebar
              onSelectCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
            <div className="flex-grow grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={handleProductClick}
                />
              ))}
            </div>
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