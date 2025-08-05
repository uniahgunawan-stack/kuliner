export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  category: "Bakso" | "Menu Special" | "Sea food" | "Minuman" | "Menu lainya";
};

export const products: Product[] = [
  {
    id: "1",
    name: "Cumi Goreng Spesial",
    price: 25000,
    image: "/menu1.jpeg", // Placeholder image
    description: "Cumi goreng tepung renyah dengan bumbu spesial, disajikan dengan sambal.",
    rating: 4.5,
    category: "Menu Special",
  },
  {
    id: "2",
    name: "Mie Ayam Bakso",
    price: 22000,
    image: "/menu.jpeg", // Placeholder image
    description: "Mie ayam dengan bakso daging sapi, disajikan dengan kuah kaldu yang gurih.",
    rating: 4.7,
    category: "Bakso",
  },
  {
    id: "3",
    name: "ikan bakar",
    price: 30000,
    image: "/ikan bakar.jpg", // Placeholder image
    description: "Ikan bakar segar dengan bumbu rempah khas, disajikan dengan sambal dan nasi.",
    rating: 4.8,
    category: "Sea food",
  },
  {
    id: "4",
    name: "Cumi bakar",
    price: 35000,
    image: "/menu.jpeg", // Placeholder image
    description: "Cumi bakar dengan bumbu kecap manis, disajikan dengan nasi dan lalapan.",
    rating: 4.6,
    category: "Sea food",
  },
  {
    id: "5",
    name: "Mie ayam pangsit",
    price: 20000,
    image: "/mie ayam baso.jpg", // Placeholder image
    description: "Mie ayam dengan pangsit goreng renyah, disajikan dengan kuah kaldu yang lezat.",
    rating: 4.3,
    category: "Menu Special",
  },
  {
    id: "6",
    name: "Ayam Bakar",
    price: 28000,
    image: "/menu.jpeg", // Placeholder image
    description: "Ayam bakar bumbu rempah, disajikan dengan sambal dan lalapan.",
    rating: 4.9,
    category: "Menu lainya",
  },
  {
    id: "7",
    name: "es teh manis",
    price: 8000,
    image: "/estehmanis.jpg", // Placeholder image
    description: "Es teh segar pelepas dahaga.",
    rating: 4.2,
    category: "Minuman",
  },
  {
    id: "8",
    name: "Jus Alpukat",
    price: 15000,
    image: "/jusalfukat.jpg", // Placeholder image
    description: "Jus alpukat creamy dan manis.",
    rating: 4.4,
    category: "Minuman",
  },
  {
    id: "9",
    name: "Bakso Ikan tuna",
    price: 45000,
    image: "/menu.jpeg",
    description: "Pizza klasik dengan topping pepperoni melimpah.",
    rating: 4.6,
    category: "Menu Special",
  },
  {
    id: "10",
    name: "Telur Bebek",
    price: 38000,
    image: "/menu1.jpeg",
    description: "Burger dengan patty daging sapi, keju leleh, dan sayuran segar.",
    rating: 4.5,
    category: "Menu lainya",
  },
  {
    id: "11",
    name: "Telur Ayam",
    price: 28000,
    image: "/menu1.jpeg",
    description: "Kue cokelat lembut dengan lapisan fudge yang kaya.",
    rating: 4.7,
    category: "Menu lainya",
  },
];