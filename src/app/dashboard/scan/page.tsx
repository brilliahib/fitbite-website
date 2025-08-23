import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardScanWrapper from "@/components/organisms/dashboard/scan/DashboardScanWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scan Makanan - Fitbite",
};

export default function DashboardScanPage() {
  return (
    <section>
      <DashboardTitle
        head="Scan Makanan"
        body="Pindai makanan untuk mendapatkan informasi gizi."
      />
      <DashboardScanWrapper />
    </section>
  );
}
