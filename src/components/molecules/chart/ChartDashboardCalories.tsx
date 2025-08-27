"use client";

import { Flame } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { SummaryCalories } from "@/types/calories/summary-calories";
import { Skeleton } from "@/components/ui/skeleton";

export const description = "A radial chart displaying daily calorie intake";

interface ChartDashboardCaloriesProps {
  summary?: SummaryCalories;
  isLoading?: boolean;
}

const chartConfig = {
  amount: {
    label: "Calories",
  },
  calories: {
    label: "Calories",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartDashboardCalories({
  summary,
  isLoading = false,
}: ChartDashboardCaloriesProps) {
  const chartData = [
    {
      type: "calories",
      amount: summary?.percentage_calories ?? 0,
      fill: "var(--color-calories)",
    },
  ];

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-semibold tracking-tight">
          Konsumsi Kalori Hari Ini
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Pantau asupan & sisa kalori harianmu secara real-time
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        {isLoading ? (
          <div className="flex h-[250px] items-center justify-center">
            <Skeleton className="h-[200px] w-[200px] rounded-full" />
          </div>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <RadialBarChart
              data={chartData}
              startAngle={90}
              endAngle={90 - (summary?.percentage_calories ?? 0) * 3.6}
              innerRadius={80}
              outerRadius={140}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="amount" background cornerRadius={10} />
              <PolarRadiusAxis
                tick={false}
                tickLine={false}
                axisLine={false}
                domain={[0, 100]}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-4xl font-bold"
                          >
                            {summary?.calories_today.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Kalori Hari Ini
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-2 text-center text-sm">
        {isLoading ? (
          <Skeleton className="mx-auto h-4 w-40" />
        ) : (
          <>
            <div className="flex items-center justify-center gap-2 font-medium text-orange-600">
              🔥 Persentase kalori Anda adalah{" "}
              {summary?.percentage_calories?.toFixed(0) ?? 0}%
              <Flame className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground">
              Menampilkan total kalori yang dikonsumsi hari ini
            </div>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
