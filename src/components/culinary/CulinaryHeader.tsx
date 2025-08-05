import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User } from "lucide-react";

export function CulinaryHeader() {
  return (
    <header className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link href="/culinary" className="flex items-center gap-2 text-2xl font-bold mb-2 sm:mb-0">
          <Image src="/fastfood-logo.png" alt="FastFood Delivery Logo" width={40} height={40} />
          FastFood Delivery
        </Link>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li>
              <Link href="/culinary" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/culinary#about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/culinary/menu" className="hover:underline">
                Menu
              </Link>
            </li>
            {/* Add more links if needed, e.g., Pages, Blog */}
          </ul>
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="User Profile">
              <User size={24} className="hover:text-gray-200" />
            </Link>
            <Link href="#" aria-label="Shopping Cart">
              <ShoppingCart size={24} className="hover:text-gray-200" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}