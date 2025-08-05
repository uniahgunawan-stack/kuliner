export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  category: "Pizza" | "Burger" | "Soft Drinks" | "Noodles" | "Cakes" | "Other";
};

export const products: Product[] = [
  {
    id: "1",
    name: "Nasi Goreng Spesial",
    price: 25000,
    image: "/placeholder-food-1.jpg", // Placeholder image
    description: "Nasi goreng lezat dengan bumbu rahasia, telur, ayam, dan kerupuk.",
    rating: 4.5,
    category: "Other",
  },
  {
    id: "2",
    name: "Mie Ayam Bakso",
    price: 22000,
    image: "/placeholder-food-2.jpg", // Placeholder image
    description: "Mie ayam dengan topping bakso sapi kenyal dan pangsit renyah.",
    rating: 4.7,
    category: "Noodles",
  },
  {
    id: "3",
    name: "Sate Ayam Madura",
    price: 30000,
    image: "/placeholder-food-3.jpg", // Placeholder image
    description: "Sate ayam empuk dengan bumbu kacang khas Madura, disajikan dengan lontong.",
    rating: 4.8,
    category: "Other",
  },
  {
    id: "4",
    name: "Sop Buntut",
    price: 35000,
    image: "/placeholder-food-4.jpg", // Placeholder image
    description: "Sop buntut sapi yang kaya rasa, empuk, dan disajikan hangat.",
    rating: 4.6,
    category: "Other",
  },
  {
    id: "5",
    name: "Gado-Gado",
    price: 20000,
    image: "/placeholder-food-5.jpg", // Placeholder image
    description: "Salad sayuran segar dengan bumbu kacang pedas manis.",
    rating: 4.3,
    category: "Other",
  },
  {
    id: "6",
    name: "Ayam Bakar",
    price: 28000,
    image: "/placeholder-food-6.jpg", // Placeholder image
    description: "Ayam bakar bumbu rempah, disajikan dengan sambal dan lalapan.",
    rating: 4.9,
    category: "Other",
  },
  {
    id: "7",
    name: "Es Teh Manis",
    price: 8000,
    image: "/placeholder-drink-1.jpg", // Placeholder image
    description: "Es teh segar pelepas dahaga.",
    rating: 4.2,
    category: "Soft Drinks",
  },
  {
    id: "8",
    name: "Jus Alpukat",
    price: 15000,
    image: "/placeholder-drink-2.jpg", // Placeholder image
    description: "Jus alpukat creamy dan manis.",
    rating: 4.4,
    category: "Soft Drinks",
  },
  {
    id: "9",
    name: "Classic Pepperoni Pizza",
    price: 45000,
    image: "/placeholder-food-1.jpg",
    description: "Pizza klasik dengan topping pepperoni melimpah.",
    rating: 4.6,
    category: "Pizza",
  },
  {
    id: "10",
    name: "Cheeseburger Deluxe",
    price: 38000,
    image: "/placeholder-food-2.jpg",
    description: "Burger dengan patty daging sapi, keju leleh, dan sayuran segar.",
    rating: 4.5,
    category: "Burger",
  },
  {
    id: "11",
    name: "Chocolate Fudge Cake",
    price: 28000,
    image: "/placeholder-food-3.jpg",
    description: "Kue cokelat lembut dengan lapisan fudge yang kaya.",
    rating: 4.7,
    category: "Cakes",
  },
];