import { Card, CardContent } from "@/components/ui/card";

export default function CardRemainingCalories() {
  return (
    <Card>
      <CardContent className="space-y-2">
        <p className="text-muted-foreground">Sisa Kalori</p>
        <h1 className="text-2xl font-bold">400 kcal</h1>
      </CardContent>
    </Card>
  );
}
