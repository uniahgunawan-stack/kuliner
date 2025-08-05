import Link from "next/link";
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";

export function CulinaryFooter() {
  return (
    <footer className="w-full bg-orange-500 text-white p-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Nama Toko Kuliner</h3>
          <p>Jl. Contoh No. 123, Kota Contoh, Indonesia</p>
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
            <MessageCircle size={20} /> WhatsApp: <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">+62 812-3456-7890</Link>
          </p>
          <p>Email: info@namatoko.com</p>
        </div>
      </div>
    </footer>
  );
}