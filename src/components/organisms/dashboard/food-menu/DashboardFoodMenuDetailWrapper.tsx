"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useGetDetailFood } from "@/http/food/get-detail-food";
import { buildFromAppURL } from "@/utils/misc";
import { useSession } from "next-auth/react";
import Image from "next/image";

interface DashboardFoodMenuDetailWrapperProps {
  id: number;
}

export default function DashboardFoodMenuDetailWrapper({
  id,
}: DashboardFoodMenuDetailWrapperProps) {
  const { data: session, status } = useSession();

  const { data, isPending } = useGetDetailFood(
    id,
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

  if (isPending) {
    return (
      <div className="space-y-6">
        <Skeleton className="mx-auto h-[300px] w-full rounded-xl" />
        <Skeleton className="mx-auto h-8 w-1/3 rounded-md" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Image
        src={buildFromAppURL(data?.data.image)}
        alt={data?.data.nama ?? "Gambar gagal dimuat"}
        width={1000}
        height={1000}
        className="mx-auto rounded-xl"
      />
      <h1 className="font-paytone text-center text-4xl">{data?.data.nama}</h1>
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: data?.data.ingredients ?? "" }}
      />
    </div>
  );
}
