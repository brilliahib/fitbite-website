import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function CardBannerCalories() {
  return (
    <Card className="bg-primary text-primary-foreground shadow-primary/30 rounded-xl shadow-lg">
      <CardContent className="flex items-center justify-between px-10">
        {/* Text Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold md:text-2xl">
            Yuk Pantau Kalorimu!
          </h3>
          <p className="text-primary-foreground text-sm md:text-base">
            Konsisten itu kunci. Yuk jaga pola makan harian kamu! 💪
          </p>
        </div>

        {/* Image Section */}
        <div className="relative h-28 w-28 md:h-30 md:w-30">
          <Image
            src="/images/icons/workout.png"
            alt="Workout Icon"
            fill
            className="object-contain"
          />
        </div>
      </CardContent>
    </Card>
  );
}
