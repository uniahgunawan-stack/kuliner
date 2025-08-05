"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DealProductCard } from "./DealProductCard";
import { products } from "@/lib/culinary-data";
import { Search, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export function CulinaryHero() {
  const [timeLeft, setTimeLeft] = useState({ hours: 15, minutes: 30, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              // Reset or stop timer if needed
              clearInterval(timer);
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  // Select first 3 products for "Deal Of The Day"
  const dealProducts = products.slice(0, 4);

  return (
    <section className="relative w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-12 md:py-20 overflow-hidden">
     

      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between px-4">
        {/* Main content area: Banner + Text/Deal */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full lg:gap-8"> {/* Added lg:gap-8 for spacing */}
          {/* Banner Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src="/culinary-banner.jpg"
              alt="Special Offer Banner"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full object-cover"
            />
          </div>

          {/* Text Content and Deal of the Day */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2"> {/* Removed max-w-2xl, adjusted width */}
            <p className="text-lg font-semibold mb-2">Do Not Miss It!</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              "Ayo Makan Ikan Laut, Sehatkan Badanmu!"
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-md">
              Ikan laut kaya akan protein, omega-3, vitamin D, dan mineral penting yang dibutuhkan tubuh. Konsumsi ikan laut secara rutin membantu menjaga kesehatan jantung, meningkatkan kecerdasan, dan memperkuat daya tahan tubuh. Rasanya enak, gizinya lengkap!
            </p>

            {/* Deal Of The Day */}
            <div className="w-full">
              <h3 className="text-xl font-bold mb-4">
                Deal Of The Day. <span className="text-yellow-400">{formatTime(timeLeft.hours)} : {formatTime(timeLeft.minutes)} : {formatTime(timeLeft.seconds)}</span>
              </h3>
              <h3 className="mb-4 text-xl text-white font-bold drop-shadow-[0_0_8px_#ffffff] ">Menu Special Kami</h3>
              <div className="grid grid-cols-2 gap-4">
                {dealProducts.map((product) => (
                  <DealProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}