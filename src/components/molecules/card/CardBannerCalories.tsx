import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SummaryCalories } from "@/types/calories/summary-calories";

interface CardBannerCaloriesProps {
  data?: SummaryCalories;
  isLoading?: boolean;
}

function getCaloriesBannerState(percentage: number) {
  if (percentage > 50) {
    return {
      title: "Kalori Anda masih banyak!",
      description:
        "Masih ada banyak ruang untuk konsumsi kalori hari ini. Tetap jaga pola makan ya! 💪",
      image: "/images/icons/happy.svg",
      bgClass: "bg-primary text-primary-foreground shadow-primary/30",
    };
  }

  if (percentage > 0) {
    return {
      title: "Kalori Anda tinggal sedikit!",
      description:
        "Sudah mendekati batas harianmu, perhatikan asupan makanan ya. ⚠️",
      image: "/images/icons/warning.svg",
      bgClass: "bg-yellow-500 text-white shadow-yellow-300/30",
    };
  }

  return {
    title: "Kalori Anda sudah habis!",
    description:
      "Kamu sudah mencapai batas kalori harian. Ayo jaga konsistensi! ✅",
    image: "/images/icons/limit.svg",
    bgClass: "bg-red-500 text-white shadow-red-300/30",
  };
}

export default function CardBannerCalories({
  data,
  isLoading,
}: CardBannerCaloriesProps) {
  if (isLoading) {
    return (
      <Card className="text-muted-foreground hidden rounded-xl bg-white shadow-lg md:inline">
        <CardContent className="flex items-center justify-between px-10">
          <div className="flex flex-col gap-3">
            <Skeleton className="h-6 w-48 rounded-md md:h-8" />
            <Skeleton className="h-4 w-64 rounded-md md:h-5" />
          </div>
          <Skeleton className="h-28 w-28 rounded-full" />
        </CardContent>
      </Card>
    );
  }

  if (!data) return null;

  const { title, description, image, bgClass } = getCaloriesBannerState(
    data.percentage_rest_calories ?? 0,
  );

  return (
    <Card className={`${bgClass} hidden rounded-xl shadow-lg md:inline`}>
      <CardContent className="flex items-center justify-between px-10">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold">{title}</h3>
          <p>{description}</p>
        </div>

        <div className="relative h-28 w-28 md:h-30 md:w-30">
          <Image
            src={image}
            alt="Calories Icon"
            fill
            className="object-contain"
          />
        </div>
      </CardContent>
    </Card>
  );
}
