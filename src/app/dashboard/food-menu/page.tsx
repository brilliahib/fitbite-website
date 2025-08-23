import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardFoodMenuWrapper from "@/components/organisms/dashboard/food-menu/DashboardFoodMenuWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu Makanan - Fitbite",
};

export default function DashboardFoodMenuPage() {
  return (
    <section>
      <DashboardTitle
        head="Menu Makanan"
        body="Rencanakan menu makanan harianmu dengan mudah."
      />
      <DashboardFoodMenuWrapper />
    </section>
  );
}
