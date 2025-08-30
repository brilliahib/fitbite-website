import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardDietPlanWrapper from "@/components/organisms/dashboard/plan/DashboardDietPlanWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meal Plan - Fitbite",
};

export default function PlanMealPage() {
  return (
    <section>
      <DashboardTitle
        head="Meal Plan"
        body="Buat meal plan Anda menjadi lebih mudah dan terorganisir."
      />
      <DashboardDietPlanWrapper />
    </section>
  );
}
