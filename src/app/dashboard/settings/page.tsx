import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardSettingWrapper from "@/components/organisms/dashboard/settings/DashboardSettingWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pengaturan - Fitbite",
};

export default function DashboardSettingsPage() {
  return (
    <section>
      <DashboardTitle
        head="Pengaturan"
        body="Sesuaikan informasi pribadi dan pengaturan akun Anda."
      />
      <DashboardSettingWrapper />
    </section>
  );
}
