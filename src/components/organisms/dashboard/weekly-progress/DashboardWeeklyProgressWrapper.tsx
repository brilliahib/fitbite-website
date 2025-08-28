"use client";

import DialogCreateWeeklyProgress from "@/components/atoms/dialog/weekly-progress/DialogCreateWeeklyProgress";
import CardListWeeklyProgress from "@/components/molecules/card/CardListWeeklyProgress";
import { ChartWeeklyProgress } from "@/components/molecules/chart/ChartWeeklyProgress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetAllWeeklyProgress } from "@/http/weekly-progress/get-all-weekly-progress";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function DashboardWeeklyProgressWrapper() {
  const { data: session, status } = useSession();

  const { data, isPending } = useGetAllWeeklyProgress(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

  const [
    isDialogCreateWeeklyProgressOpen,
    setIsDialogCreateWeeklyProgressOpen,
  ] = useState(false);

  const handleDialogCreateWeeklyProgressOpen = () => {
    setIsDialogCreateWeeklyProgressOpen(true);
  };

  return (
    <>
      <div className="space-y-6">
        <Button onClick={handleDialogCreateWeeklyProgressOpen}>
          <Plus /> Tambah Progress
        </Button>
        <div>
          <Tabs defaultValue="list">
            <TabsList className="mb-4 w-[200px]">
              <TabsTrigger value="list">List</TabsTrigger>
              <TabsTrigger value="grafik"> Grafik</TabsTrigger>
            </TabsList>
            <TabsContent value="list">
              <CardListWeeklyProgress data={data?.data} isLoading={isPending} />
            </TabsContent>
            <TabsContent value="grafik">
              <ChartWeeklyProgress data={data?.data} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <DialogCreateWeeklyProgress
        open={isDialogCreateWeeklyProgressOpen}
        setOpen={setIsDialogCreateWeeklyProgressOpen}
      />
    </>
  );
}
