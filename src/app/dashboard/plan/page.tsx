import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardDietPlanWrapper from "@/components/organisms/dashboard/plan/DashboardDietPlanWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diet Plan - Fitbite",
};

export default function PlanDietPage() {
  return (
    <section>
      <DashboardTitle
        head="Diet Plan"
        body="Buat diet plan Anda menjadi lebih mudah dan terorganisir."
      />
      <DashboardDietPlanWrapper />
    </section>
  );
}
