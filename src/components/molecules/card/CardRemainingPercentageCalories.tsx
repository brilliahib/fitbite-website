import { Card, CardContent } from "@/components/ui/card";

export default function CardRemainingPercentageCalories() {
  return (
    <Card>
      <CardContent className="space-y-2">
        <p className="text-muted-foreground">Sisa Persentase Kalori</p>
        <h1 className="text-2xl font-bold">20%</h1>
      </CardContent>
    </Card>
  );
}
