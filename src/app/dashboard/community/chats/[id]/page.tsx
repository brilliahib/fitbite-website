import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardDetailCommunityChatWrapper from "@/components/organisms/dashboard/community/DashboardDetailCommunityChatWrapper";

interface DashboardDetailCommunityChatPageProps {
  params: Promise<{ id: number }>;
}

export default async function DashboardDetailCommunityChatPage({
  params,
}: DashboardDetailCommunityChatPageProps) {
  const { id } = await params;
  return (
    <section>
      <DashboardTitle
        head="Detail Chat"
        body="Menampilkan detail chat dari forum komunitas"
      />
      <DashboardDetailCommunityChatWrapper id={id} />
    </section>
  );
}
