import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardWeeklyProgressWrapper from "@/components/organisms/dashboard/weekly-progress/DashboardWeeklyProgressWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progress Mingguan - Fitbite",
};

export default function DashboardProgressPage() {
  return (
    <section>
      <DashboardTitle
        head="Progress Mingguan"
        body="Pantau perkembangan berat badan Anda secara mingguan."
      />
      <DashboardWeeklyProgressWrapper />
    </section>
  );
}
