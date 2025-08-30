"use client";

import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { usePredictFoodScan } from "@/http/food-scan/predict-food-scan";
import Image from "next/image";
import { FoodScan } from "@/types/food-scan/food-scan";

export default function DashboardScanWrapper() {
  const webcamRef = useRef<Webcam>(null);
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<FoodScan | null>(null);

  const { mutate: predictFood, isPending } = usePredictFoodScan({
    onError: () => {
      toast.error("Gagal memprediksi makanan!");
    },
    onSuccess: (data: FoodScan) => {
      setResult(data);
      toast.success("Berhasil memprediksi makanan!");
    },
  });

  const captureImage = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setImage(imageSrc);

      fetch(imageSrc)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "capture.jpg", { type: "image/jpeg" });
          predictFood({ image: file });
        });
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative h-[80vh] w-full max-w-3xl overflow-hidden rounded-xl border bg-black shadow-md md:aspect-video md:h-auto">
        {!image ? (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={image}
            alt="Captured"
            className="h-full w-full object-cover"
            onError={() => setImage(null)}
            width={1000}
            height={1000}
          />
        )}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <Button
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg"
            onClick={captureImage}
            disabled={isPending}
          >
            <Camera className="h-6! w-6!" />
          </Button>
        </div>
      </div>

      {result && (
        <div className="w-full max-w-md space-y-4 text-center">
          <h2 className="text-2xl font-bold capitalize">{result.label}</h2>
          <p className="text-muted-foreground text-base">
            Kalori estimasi:{" "}
            <span className="font-semibold text-green-600">
              {result.calories} kcal
            </span>{" "}
            ({result.unit})
          </p>
          <p className="text-muted-foreground">
            Rentang: {result.nutritional_min} - {result.nutritional_max} kcal
          </p>
          <p className="text-muted-foreground">
            Persentase Prediksi: {(result.probability * 100).toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
}
