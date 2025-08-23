import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardCaloriesWrapper from "@/components/organisms/dashboard/calories/DashboardCaloriesWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalori Harian - Fitbite",
};

export default function DashboardCaloriesPage() {
  return (
    <section>
      <DashboardTitle
        head="Kalori Harian"
        body="Pantau asupan kalori harianmu dengan mudah."
      />
      <DashboardCaloriesWrapper />
    </section>
  );
}
