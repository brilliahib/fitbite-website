"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import { useGetSummaryCalories } from "@/http/calories/get-summary-calories";
import CardMaximumCalories from "@/components/molecules/card/CardMaximumCalories";
import CardRemainingCalories from "@/components/molecules/card/CardRemainingCalories";
import CardPercentageCalories from "@/components/molecules/card/CardPercentageCalories";
import CardRemainingPercentageCalories from "@/components/molecules/card/CardRemainingPercentageCalories";
import { useGetAllCalories } from "@/http/calories/get-all-calories";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { caloriesDashboardColumns } from "@/components/atoms/datacolumn/DataCaloriesDashboard";
import { useGetTotalCaloriesDailyWeek } from "@/http/calories/get-total-calories-daily-week";
import { ChartTotalCaloriesDailyWeek } from "@/components/molecules/chart/ChartTotalCaloriesDailyWeek";

export default function DashboardWrapper() {
  const { data: session, status } = useSession();

  const { data: summary, isPending: isSummaryPending } = useGetSummaryCalories(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

  const { data, isPending } = useGetAllCalories(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

  const { data: week, isPending: isWeekPending } = useGetTotalCaloriesDailyWeek(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

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
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
          <CardMaximumCalories
            max_calories={summary?.data.max_calories}
            isLoading={isSummaryPending}
          />
          <CardRemainingCalories
            rest_calories={summary?.data.rest_calories}
            isLoading={isSummaryPending}
          />
          <CardPercentageCalories
            percentage_calories={summary?.data.percentage_calories}
            isLoading={isSummaryPending}
          />
          <CardRemainingPercentageCalories
            percentage_rest_calories={summary?.data.percentage_rest_calories}
            isLoading={isSummaryPending}
          />
        </div>
        <ChartTotalCaloriesDailyWeek data={week?.data ?? []} />
        <DataTable
          columns={caloriesDashboardColumns}
          data={data?.data ?? []}
          isLoading={isPending}
        />
      </div>
    </>
  );
}
