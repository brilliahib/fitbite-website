"use client";

import { useSession } from "next-auth/react";
import { useGetAllFood } from "@/http/food/get-all-food";
import CardListFoodMenu from "@/components/molecules/card/CardListFoodMenu";

export default function DashboardFoodMenuWrapper() {
  const { data: session, status } = useSession();

  const { data, isPending } = useGetAllFood(session?.access_token as string, {
    enabled: status === "authenticated",
  });

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
      <CardListFoodMenu data={data?.data} isLoading={isPending} />
    </div>
  );
}
