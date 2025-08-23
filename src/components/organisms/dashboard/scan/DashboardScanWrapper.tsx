"use client";

import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const dummyIngredients = [
  { name: "Nasi", amount: "100g", calories: 130 },
  { name: "Ayam Goreng", amount: "80g", calories: 250 },
  { name: "Wortel", amount: "50g", calories: 20 },
  { name: "Kangkung", amount: "50g", calories: 18 },
  { name: "Kacang Panjang", amount: "50g", calories: 25 },
  { name: "Bumbu Kacang", amount: "30g", calories: 120 },
  { name: "Kemangi", amount: "10g", calories: 5 },
  { name: "Timun", amount: "50g", calories: 8 },
  { name: "Kecambah", amount: "50g", calories: 15 },
];

export default function DashboardScanWrapper() {
  const webcamRef = useRef<Webcam>(null);
  const [image, setImage] = useState<string | null>(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setImage(imageSrc);
    }
  };

  const totalCalories = dummyIngredients.reduce(
    (total, item) => total + item.calories,
    0,
  );

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-xl border bg-black shadow-md">
        {!image ? (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={image}
            alt="Captured"
            className="h-full w-full object-cover"
            onError={() => setImage(null)}
          />
        )}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <Button
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg"
            onClick={captureImage}
          >
            <Camera className="h-8 w-8" />
          </Button>
        </div>
      </div>

      {/* Gambar Menu */}
      <div className="w-full overflow-hidden rounded-xl md:max-w-sm">
        <Image
          src="/images/nasi-ayam-sayur.jpg"
          alt="Nasi Ayam Sayur"
          width={800}
          height={400}
          className="h-48 w-full rounded-xl object-cover shadow-md md:h-80"
        />
      </div>

      {/* Info Makanan */}
      <div className="w-full space-y-1 text-center">
        <h2 className="text-2xl font-bold">Nasi Ayam Sayur</h2>
        <p className="text-muted-foreground text-base">
          Total Kalori:{" "}
          <span className="font-semibold text-green-600">
            {totalCalories} kcal
          </span>
        </p>
      </div>

      {/* List Bahan */}
      <div className="mt-4 w-full space-y-4">
        <h3 className="text-lg font-semibold">Bahan & Kalori</h3>
        <ul className="space-y-2">
          {dummyIngredients.map((item, index) => (
            <li
              key={index}
              className="flex justify-between border-b pb-2 text-sm"
            >
              <span>
                {item.name} ({item.amount})
              </span>
              <span>{item.calories} kcal</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
