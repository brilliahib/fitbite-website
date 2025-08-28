import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { PieChart } from "lucide-react";

interface CardPercentageCaloriesProps {
  percentage_calories?: number;
  isLoading?: boolean;
}

export default function CardPercentageCalories({
  percentage_calories,
  isLoading = false,
}: CardPercentageCaloriesProps) {
  return (
    <Card className="relative">
      <div className="absolute top-4 right-4 rounded-md bg-yellow-500/10 p-2">
        <PieChart className="h-6 w-6 text-yellow-500" />
      </div>

      <CardContent className="space-y-2">
        <p className="text-muted-foreground">Persentase Kalori</p>
        {isLoading ? (
          <Skeleton className="h-8 w-20" />
        ) : (
          <h1 className="text-2xl font-bold">{percentage_calories ?? 0}%</h1>
        )}
      </CardContent>
    </Card>
  );
}
