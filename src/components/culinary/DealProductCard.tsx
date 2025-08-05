import Image from "next/image";
import { Product } from "@/lib/culinary-data";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface DealProductCardProps {
  product: Product;
}

export function DealProductCard({ product }: DealProductCardProps) {
  return (
    <Card className="w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-2"> {/* Removed max-w-[180px] */}
      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-2">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardContent className="p-0 text-center">
        <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">{product.name}</h4>
        <div className="flex items-center justify-center text-yellow-500 my-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
              stroke="currentColor"
              size={14}
            />
          ))}
        </div>
        <p className="text-orange-600 font-bold text-lg">Rp {product.price.toLocaleString("id-ID")}</p>
      </CardContent>
    </Card>
  );
}