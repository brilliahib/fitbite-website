import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface CardPercentageCaloriesProps {
  percentage_calories?: number;
  isLoading?: boolean;
}

export default function CardPercentageCalories({
  percentage_calories,
  isLoading = false,
}: CardPercentageCaloriesProps) {
  return (
    <Card>
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
