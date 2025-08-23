import CardBannerCalories from "@/components/molecules/card/CardBannerCalories";
import CardMaximumCalories from "@/components/molecules/card/CardMaximumCalories";
import CardPercentageCalories from "@/components/molecules/card/CardPercentageCalories";
import CardRemainingCalories from "@/components/molecules/card/CardRemainingCalories";
import CardRemainingPercentageCalories from "@/components/molecules/card/CardRemainingPercentageCalories";
import { ChartDashboardCalories } from "@/components/molecules/chart/ChartDashboardCalories";
import { TableCaloriesActivity } from "@/components/molecules/table/TableCaloriesActivity";

export default function DashboardCaloriesWrapper() {
  return (
    <div className="flex flex-col gap-6 md:gap-12">
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-6">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <CardMaximumCalories />
            <CardRemainingCalories />
            <CardPercentageCalories />
            <CardRemainingPercentageCalories />
          </div>
          <CardBannerCalories />
        </div>
        <div className="self-start">
          <ChartDashboardCalories />
        </div>
      </div>
      <TableCaloriesActivity />
    </div>
  );
}
