"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import { ChartRadialShape } from "@/components/molecules/chart/ChartCalories";
import { ChartBurnCalories } from "@/components/molecules/chart/ChartBurnCalories";

export default function DashboardWrapper() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");
    return null;
  }

  if (session.user.role === "admin") {
    router.push("/dashboard/admin");
    return null;
  }

  return (
    <>
      <DashboardTitle
        head="Dashboard"
        body="Selamat datang di halaman dashboard fitbite."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ChartRadialShape />
        <ChartBurnCalories />
        {/* <CalendarDashboardOverview /> */}
      </div>
    </>
  );
}
