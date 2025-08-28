"use client";

import * as React from "react";
import { AreaChart, Area, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { WeeklyProgress } from "@/types/weekly-progress/weekly-progress";

const chartConfig = {
  weight: {
    label: "Berat Badan",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

type ChartWeeklyProgressProps = {
  data?: WeeklyProgress[];
};

export function ChartWeeklyProgress({ data }: ChartWeeklyProgressProps) {
  const chartData = data
    ?.slice()
    .reverse()
    .map((item, index) => {
      if (index === 0) {
        return [
          {
            week: `Mulai`,
            weight: item.weight_start,
            created_at: item.created_at,
          },
          {
            week: `Minggu ${index + 1}`,
            weight: item.weight_end,
            created_at: item.created_at,
          },
        ];
      }

      return [
        {
          week: `Minggu ${index + 1}`,
          weight: item.weight_end,
          created_at: item.created_at,
        },
      ];
    })
    .flat();

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Progress Mingguan</CardTitle>
          <CardDescription>
            Menampilkan grafik progress mingguan berat badan per minggu.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillWeight" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--primary)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--primary)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={24}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(label) => label}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="weight"
              type="natural"
              fill="url(#fillWeight)"
              stroke="var(--primary)"
              name="Berat Badan:"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
