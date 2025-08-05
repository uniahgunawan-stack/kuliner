"use client";

import { useState, useMemo } from "react";
import { CulinaryHeader } from "@/components/culinary/CulinaryHeader";
import { CulinaryFooter } from "@/components/culinary/CulinaryFooter";
import { ProductCard } from "@/components/culinary/ProductCard";
import { ProductModal } from "@/components/culinary/ProductModal";
import { CategorySidebar } from "@/components/culinary/CategorySidebar";
import { products, Product } from "@/lib/culinary-data";

export default function CulinaryMenuPage() {
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

      <main className="flex-grow container mx-auto p-4 sm:p-4">
        <section id="menu" className="rounded-lg">
          <div className="text-center mb-8">
            <p className="text-orange-600 font-semibold text-lg">Our Menu</p>
            <h2 className="text-4xl font-bold text-gray-800">Discover Menu</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <CategorySidebar
              onSelectCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
            <div className="flex-grow grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
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