import DashboardFoodMenuDetailWrapper from "@/components/organisms/dashboard/food-menu/DashboardFoodMenuDetailWrapper";

interface DashboardFoodMenuDetailPageProps {
  params: Promise<{ id: number }>;
}

export default async function DashboardFoodMenuDetailPage({
  params,
}: DashboardFoodMenuDetailPageProps) {
  const { id } = await params;
  return (
    <section>
      <DashboardFoodMenuDetailWrapper id={id} />
    </section>
  );
}
