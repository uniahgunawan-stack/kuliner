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
  const dealProducts = products.slice(0, 3);

  return (
    <section className="relative w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-12 md:py-20 overflow-hidden">
      {/* Background Images */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/pizza-slice.png" // Placeholder for left pizza slice
          alt="Pizza Slice"
          width={400}
          height={400}
          className="absolute -left-40 top-1/2 -translate-y-1/2 opacity-30 md:opacity-100 hidden md:block" // Disesuaikan: -left-40 dan hidden md:block
        />
        <Image
          src="/scooter.png" // Placeholder for scooter
          alt="Delivery Scooter"
          width={600}
          height={600}
          className="absolute -right-60 bottom-0 md:bottom-10 lg:bottom-0 xl:bottom-0 opacity-80 md:opacity-100 hidden md:block" // Disesuaikan: -right-60 dan hidden md:block
        />
      </div>

      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between px-4">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl lg:w-1/2 mb-10 lg:mb-0">
          <p className="text-lg font-semibold mb-2">Do Not Miss It!</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Pizza Taste Better Than Skinny Feels.
          </h1>
          <p className="text-base md:text-lg mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Deal Of The Day */}
          <div className="w-full">
            <h3 className="text-xl font-bold mb-4">
              Deal Of The Day. <span className="text-yellow-400">{formatTime(timeLeft.hours)} : {formatTime(timeLeft.minutes)} : {formatTime(timeLeft.seconds)}</span>
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {dealProducts.map((product) => (
                <DealProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Content (Scooter and Pizza are handled by absolute positioning) */}
        <div className="lg:w-1/2 hidden lg:block">
          {/* This div acts as a spacer/container for the absolutely positioned images */}
        </div>
      </div>
    </section>
  );
}