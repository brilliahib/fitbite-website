import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardCheckObesityWrapper from "@/components/organisms/dashboard/check-obesity/DashboardCheckObesityWrapper";

export default function DashboardCheckObesityPage() {
  return (
    <section>
      <DashboardTitle
        head="Cek Obesitas"
        body="Gunakan kalkulator ini untuk mengetahui apakah Anda mengalami obesitas."
      />
      <DashboardCheckObesityWrapper />
    </section>
  );
}
