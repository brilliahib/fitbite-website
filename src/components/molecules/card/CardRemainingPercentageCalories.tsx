import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface CardRemainingPercentageCaloriesProps {
  percentage_rest_calories?: number;
  isLoading?: boolean;
}

export default function CardRemainingPercentageCalories({
  percentage_rest_calories,
  isLoading = false,
}: CardRemainingPercentageCaloriesProps) {
  return (
    <Card>
      <CardContent className="space-y-2">
        <p className="text-muted-foreground">Sisa Persentase Kalori</p>

        {isLoading ? (
          <Skeleton className="h-8 w-16" />
        ) : (
          <h1 className="text-2xl font-bold">
            {percentage_rest_calories?.toFixed(0) ?? 0}%
          </h1>
        )}
      </CardContent>
    </Card>
  );
}
