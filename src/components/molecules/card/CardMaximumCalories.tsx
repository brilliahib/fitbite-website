import { Card, CardContent } from "@/components/ui/card";

export default function CardMaximumCalories() {
  return (
    <Card>
      <CardContent className="space-y-2">
        <p className="text-muted-foreground">Maksimal Kalori</p>
        <h1 className="text-2xl font-bold">2250 kcal</h1>
      </CardContent>
    </Card>
  );
}
