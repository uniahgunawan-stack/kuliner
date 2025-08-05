import Link from "next/link";
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";

export function CulinaryFooter() {
  return (
    <footer className="w-full bg-orange-500 text-white p-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Fiat Sea Food</h3>
          <p>Kp gunung jaya RT 03 Rw 01 Desa Gunung Jaya, Cisaat Sukabumi</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Ikuti Kami</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={24} />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={24} />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={24} />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Kontak Kami</h3>
          <p className="flex items-center justify-center md:justify-start gap-1">
            <MessageCircle size={20} /> WhatsApp: <Link href="https://wa.me/6285721085452" 
            target="_blank" rel="noopener noreferrer" 
            className="hover:underline">085721085452</Link>
          </p>
          <p>Email: Abi_Shaila_Syafiq@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}