"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useState } from "react";

const foodMenus = [
  {
    name: "Ayam Panggang",
    description: "300 kalori",
    image: "/images/menu/ayam-panggang.jpg",
  },
  {
    name: "Ikan Bakar",
    description: "280 kalori",
    image: "/images/menu/ikan-bakar.jpeg",
  },
  {
    name: "Tahu Tempe",
    description: "250 kalori",
    image: "/images/menu/tahu-tempe.jpg",
  },
  {
    name: "Dada Ayam Rebus",
    description: "220 kalori",
    image: "/images/menu/dada-ayam-rebus.jpg",
  },
  {
    name: "Salad Buah",
    description: "180 kalori",
    image: "/images/menu/salad-buah.png",
  },
  {
    name: "Nasi Merah + Sayur",
    description: "350 kalori",
    image: "/images/menu/nasi-merah-sayur.jpg",
  },
  {
    name: "Sup Ikan",
    description: "240 kalori",
    image: "/images/menu/sup-ikan.jpeg",
  },
  {
    name: "Oatmeal + Pisang",
    description: "270 kalori",
    image: "/images/menu/oatmeal-pisang.jpg",
  },
  {
    name: "Roti Gandum + Telur",
    description: "290 kalori",
    image: "/images/roti-telur.jpg",
  },
  {
    name: "Kentang Rebus + Brokoli",
    description: "260 kalori",
    image: "/images/kentang-brokoli.jpg",
  },
  { name: "Capcay", description: "230 kalori", image: "/images/capcay.jpg" },
  {
    name: "Soto Ayam",
    description: "300 kalori",
    image: "/images/soto-ayam.jpg",
  },
  {
    name: "Smoothie Buah",
    description: "210 kalori",
    image: "/images/smoothie.jpg",
  },
  {
    name: "Tempe Mendoan",
    description: "320 kalori",
    image: "/images/tempe-mendoan.jpg",
  },
  {
    name: "Sayur Asem + Nasi",
    description: "290 kalori",
    image: "/images/sayur-asem.jpg",
  },
  {
    name: "Bakwan Sayur",
    description: "310 kalori",
    image: "/images/bakwan.jpg",
  },
];

export default function DashboardFoodMenuWrapper() {
  const [fallbacks, setFallbacks] = useState<Record<number, boolean>>({});

  const handleError = (index: number) => {
    setFallbacks((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {foodMenus.map((food, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="relative h-45 w-full md:h-40 lg:h-50">
              <Image
                src={fallbacks[index] ? "/images/fallback.png" : food.image}
                alt={food.name}
                fill
                className="rounded-md object-cover"
                onError={() => handleError(index)}
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            <CardTitle className="text-base font-semibold">
              {food.name}
            </CardTitle>
            <CardDescription>{food.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
