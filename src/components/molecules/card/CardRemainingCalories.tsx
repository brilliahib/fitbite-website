import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Utensils } from "lucide-react";

interface CardRemainingCaloriesProps {
  rest_calories?: number;
  isLoading?: boolean;
}

export default function CardRemainingCalories({
  rest_calories,
  isLoading,
}: CardRemainingCaloriesProps) {
  return (
    <Card className="relative">
      <div className="bg-primary/10 absolute top-4 right-4 rounded-md p-2">
        <Utensils className="text-primary h-6 w-6" />
      </div>

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
