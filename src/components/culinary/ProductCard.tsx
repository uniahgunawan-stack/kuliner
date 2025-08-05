import Image from "next/image";
import { Product } from "@/lib/culinary-data";
import { Card, CardContent } from "@/components/ui/card";

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
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-orange-600 font-bold text-xl">Rp {product.price.toLocaleString("id-ID")}</p>
      </CardContent>
    </Card>
  );
}