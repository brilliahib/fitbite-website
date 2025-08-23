import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardCreateCaloriesWrapper from "@/components/organisms/dashboard/calories/create/DashboardCreateCaloriesWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tambah Aktivitas Kalori - Fitbite",
};

export default function DashboardCreateCaloriesPage() {
  return (
    <section>
      <DashboardTitle
        head="Tambah Aktivitas Kalori"
        body="Menambahkan aktivitas kalori harian Anda."
      />
      <DashboardCreateCaloriesWrapper />
    </section>
  );
}
