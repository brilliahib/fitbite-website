import FormCreateCalories from "@/components/molecules/form/calories/FormCreateCalories";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardCreateCaloriesWrapper() {
  return (
    <Card>
      <CardContent>
        <FormCreateCalories />
      </CardContent>
    </Card>
  );
}
