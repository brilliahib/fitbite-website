"use client";

import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
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
      <div>
        <DashboardTitle
          head="Detail Menu"
          body="Menampilkan detail menu makanan"
        />
        <div className="space-y-6">
          <Skeleton className="mx-auto h-[300px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <DashboardTitle
        head={data?.data.nama || "Detail Menu"}
        body="Menampilkan detail menu makanan"
      />
      <div className="space-y-6">
        <Image
          src={buildFromAppURL(data?.data.image)}
          alt={data?.data.nama ?? "Gambar gagal dimuat"}
          width={1000}
          height={1000}
          className="mx-auto rounded-xl"
        />
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: data?.data.ingredients ?? "" }}
        />
      </div>
    </div>
  );
}
