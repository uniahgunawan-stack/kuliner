"use client";

import { Button } from "@/components/ui/button";
import { Pizza, Hamburger, Coffee, Utensils, Cake, Soup } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategorySidebarProps {
  onSelectCategory: (category: string | null) => void;
  selectedCategory: string | null;
}

export function CategorySidebar({ onSelectCategory, selectedCategory }: CategorySidebarProps) {
  const categories = [
    { name: "Bakso", icon: Utensils },
    { name: "Menu Special", icon: Pizza },
    { name: "Sea food", icon: Hamburger },
    { name: "Minuman", icon: Coffee },
    { name: "Menu lainya", icon: Cake },
  ];

  return (
    <div className="w-full md:w-60 bg-white p-4 rounded-lg shadow-md flex flex-col gap-2">
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = selectedCategory === category.name || (selectedCategory === null && category.name === "All");
        return (
          <Button
            key={category.name}
            variant="ghost"
            className={cn(
              "justify-start gap-3 text-lg py-6",
              isSelected ? "bg-orange-100 text-orange-600 font-semibold hover:bg-orange-200" : "text-gray-700 hover:bg-gray-100"
            )}
            onClick={() => onSelectCategory(category.name === "All" ? null : category.name)}
          >
            <Icon size={20} />
            {category.name}
          </Button>
        );
      })}
    </div>
  );
}