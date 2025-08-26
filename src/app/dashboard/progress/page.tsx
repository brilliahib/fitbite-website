import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progress Mingguan - Fitbite",
};

export default function DashboardProgressPage() {
  return (
    <section>
      <DashboardTitle
        head="Progress Mingguan"
        body="Pantau perkembangan diet dan kebugaran Anda secara mingguan."
      />
    </section>
  );
}
