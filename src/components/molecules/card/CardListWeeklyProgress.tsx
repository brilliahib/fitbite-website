import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { WeeklyProgress } from "@/types/weekly-progress/weekly-progress";
import Link from "next/link";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface CardListWeeklyProgressProps {
  data?: WeeklyProgress[];
  isLoading?: boolean;
}

export default function CardListWeeklyProgress({
  data,
  isLoading,
}: CardListWeeklyProgressProps) {
  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="rounded-2xl border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-6 w-20 rounded-md" />
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1 text-center">
                  <Skeleton className="mx-auto h-3 w-16" />
                  <Skeleton className="mx-auto h-6 w-14" />
                </div>
                <div className="space-y-1 text-center">
                  <Skeleton className="mx-auto h-3 w-16" />
                  <Skeleton className="mx-auto h-6 w-14" />
                </div>
              </div>
              <Skeleton className="h-2 w-full rounded-full" />{" "}
              {/* Progress bar */}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data?.map((progress, index) => {
        const isPositive = progress.progress_percentage > 0;
        const isNegative = progress.progress_percentage < 0;

        return (
          <Link
            key={progress.id}
            href={`/dashboard/weekly-progress/${progress.id}`}
          >
            <Card className="rounded-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <span className="font-semibold">
                    Progress Minggu ke {data.length - index}
                  </span>
                </div>
                <Badge
                  variant={
                    isPositive
                      ? "default"
                      : isNegative
                        ? "destructive"
                        : "secondary"
                  }
                  className="flex items-center gap-1 rounded-md px-2 py-1 text-xs"
                >
                  {isPositive && <ArrowUp className="h-4 w-4" />}
                  {isNegative && <ArrowDown className="h-4 w-4" />}
                  Progress {""}
                  {isPositive
                    ? `naik ${progress.progress_percentage}%`
                    : isNegative
                      ? `turun ${Math.abs(progress.progress_percentage)}%`
                      : `stabil`}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-muted-foreground text-sm">Berat Awal</p>
                    <p className="text-xl font-bold">
                      {progress.weight_start} kg
                    </p>
                  </div>
                  <div className="text-end">
                    <p className="text-muted-foreground text-sm">Berat Akhir</p>
                    <p className="text-foreground text-xl font-bold">
                      {progress.weight_end} kg
                    </p>
                  </div>
                </div>

                <div>
                  <Progress
                    value={
                      isPositive
                        ? Math.min(progress.progress_percentage, 100)
                        : 0
                    }
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
