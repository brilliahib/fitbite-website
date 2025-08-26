import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardCommunityWrapper from "@/components/organisms/dashboard/community/DashboardCommunityWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forum Komunitas - Fitbite",
};

export default function DashboardCommunityPage() {
  return (
    <section>
      <DashboardTitle
        head="Forum Komunitas"
        body="Temukan dan diskusikan topik menarik seputar komunitas Fitbite di sini."
      />
      <DashboardCommunityWrapper />
    </section>
  );
}
