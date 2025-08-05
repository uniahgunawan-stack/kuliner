import Link from "next/link";
import { cn } from "@/lib/utils";

export function CulinaryHeader() {
  return (
    <header className="w-full bg-orange-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link href="/culinary" className="text-2xl font-bold mb-2 sm:mb-0">
          Nama Toko Kuliner
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#menu" className="hover:underline">
                Menu
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}