import Image from "next/image";
import { Product } from "@/lib/culinary-data";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg overflow-hidden"
      onClick={() => onClick(product)}
    >
      <div className="relative w-full h-40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          priority={true}
          className="rounded-t-lg"
        />
      </div>
      <CardContent className="px-4">
  <h3 className="text-sm font-semibold text-gray-800 mb-2">{product.name}</h3>
  
  {/* Menggunakan flexbox untuk membuat harga dan rating sejajar */}
  <div className="flex items-center justify-between">
    <p className="text-orange-600 font-bold text-xs">
      Rp {product.price.toLocaleString("id-ID")}
    </p>
    <p className="flex items-center text-yellow-500">
      <Star fill="currentColor" stroke="none" size={15} />
      <span className="ml-1 text-xs text-gray-700">{product.rating.toFixed(1)}</span>
    </p>
  </div>
</CardContent>
    </Card>
  );
}