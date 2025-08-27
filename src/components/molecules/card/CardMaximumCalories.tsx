import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface CardMaximumCaloriesProps {
  max_calories?: number;
  isLoading?: boolean;
}

export default function CardMaximumCalories({
  max_calories,
  isLoading = false,
}: CardMaximumCaloriesProps) {
  return (
    <Card>
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
