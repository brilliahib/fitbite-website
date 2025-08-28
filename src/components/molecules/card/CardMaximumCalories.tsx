import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Flame } from "lucide-react";

interface CardMaximumCaloriesProps {
  max_calories?: number;
  isLoading?: boolean;
}

export default function CardMaximumCalories({
  max_calories,
  isLoading = false,
}: CardMaximumCaloriesProps) {
  return (
    <Card className="relative">
      <div className="bg-destructive/10 absolute top-4 right-4 rounded-md p-2">
        <Flame className="text-destructive h-6 w-6" />
      </div>

      <CardContent className="space-y-2">
        <p className="text-muted-foreground">Maksimal Kalori</p>
        {isLoading ? (
          <Skeleton className="h-6 w-24" />
        ) : (
          <h1 className="text-2xl font-bold">{max_calories} kcal</h1>
        )}
      </CardContent>
    </Card>
  );
}
