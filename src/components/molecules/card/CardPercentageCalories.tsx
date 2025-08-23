import { Card, CardContent } from "@/components/ui/card";

export default function CardPercentageCalories() {
  return (
    <Card>
      <CardContent className="space-y-2">
        <p className="text-muted-foreground">Persentase Kalori</p>
        <h1 className="text-2xl font-bold">80%</h1>
      </CardContent>
    </Card>
  );
}
