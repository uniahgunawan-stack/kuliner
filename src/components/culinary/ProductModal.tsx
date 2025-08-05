import Image from "next/image";
import { Product } from "@/lib/culinary-data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-6 bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">{product.name}</DialogTitle>
          <DialogDescription className="text-gray-600">
            Detail dan informasi pemesanan untuk {product.name}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative w-full h-60 rounded-md overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex items-center justify-between text-gray-800">
            <p className="text-2xl font-bold text-orange-600">Rp {product.price.toLocaleString("id-ID")}</p>
            <div className="flex items-center text-yellow-500">
              <Star fill="currentColor" stroke="none" size={20} />
              <span className="ml-1 text-gray-700">{product.rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>
        </div>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md">
          Pesan Sekarang
        </Button>
      </DialogContent>
    </Dialog>
  );
}