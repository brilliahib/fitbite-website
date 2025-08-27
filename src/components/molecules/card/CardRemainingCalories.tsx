import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface CardRemainingCaloriesProps {
  rest_calories?: number;
  isLoading?: boolean;
}

export default function CardRemainingCalories({
  rest_calories,
  isLoading,
}: CardRemainingCaloriesProps) {
  return (
    <Card>
      <CardContent className="space-y-2">
        <p className="text-muted-foreground">Sisa Kalori</p>
        {isLoading ? (
          <Skeleton className="h-7 w-24" />
        ) : (
          <h1 className="text-2xl font-bold">{rest_calories ?? 0} kcal</h1>
        )}
      </CardContent>
    </Card>
  );
}
