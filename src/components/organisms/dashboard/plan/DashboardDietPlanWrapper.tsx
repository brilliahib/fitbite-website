"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { useSession } from "next-auth/react";
import { useGetAllMealPlan } from "@/http/meal-plan/get-all-meal-plan";
import { MealPlan } from "@/types/plan/meal-plan";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteMealPlan } from "@/http/meal-plan/delete-meal-plan";
import { mealPlanColumns } from "@/components/atoms/datacolumn/DataMealPlan";
import DialogCreateMealPlan from "@/components/atoms/dialog/meal-plan/DialogCreateMealPlan";
import DialogUpdateMealPlan from "@/components/atoms/dialog/meal-plan/DialogUpdateMealPlan";
import AlertDialogDeleteMealPlan from "@/components/atoms/alert-dialog/AlertDialogDeleteMealPlan";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { id } from "date-fns/locale";

export default function DashboardDietPlanWrapper() {
  const { data: session, status } = useSession();
  const queryClient = useQueryClient();
  const [date, setDate] = useState<Date | undefined>(new Date());

  const { data, isPending } = useGetAllMealPlan(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

  const [openAlertDelete, setOpenAlertDelete] = useState(false);
  const [selectedMealPlan, setSelectedMealPlan] = useState<MealPlan | null>(
    null,
  );

  const [openDialogCreate, setOpenDialogCreate] = useState(false);

  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [mealPlanToUpdate, setMealPlanToUpdate] = useState<MealPlan | null>(
    null,
  );

  const { mutate: deleteMealPlan, isPending: isDeletePending } =
    useDeleteMealPlan({
      onSuccess: () => {
        setSelectedMealPlan(null);
        toast.success("Rencana makan berhasil dihapus!");
        queryClient.invalidateQueries({
          queryKey: ["meal-plan-list"],
        });
      },
      onError: (err) => {
        toast.error("Gagal menghapus Rencana Makan: " + err.message);
      },
    });

  const handleDeleteMealPlan = (mealPlan: MealPlan) => {
    setSelectedMealPlan(mealPlan);
    setOpenAlertDelete(true);
  };

  const handleUpdateMealPlan = (mealPlan: MealPlan) => {
    setMealPlanToUpdate(mealPlan);
    setOpenUpdateDialog(true);
  };

  const handleCreateMealPlan = () => {
    setOpenDialogCreate(true);
  };

  const confirmDelete = () => {
    if (selectedMealPlan?.id) {
      deleteMealPlan({
        id: selectedMealPlan.id,
        token: session?.access_token ?? "",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="space-y-6 md:flex-[2]">
          <div className="relative h-50 w-full overflow-hidden rounded-lg">
            <Image
              src="/images/background/bg-cta-plan.jpg"
              alt="Diet Plan"
              fill
              className="object-cover"
            />
            <div className="from-primary/90 via-primary/40 absolute inset-0 bg-gradient-to-r to-transparent" />

            <div className="absolute inset-0 flex max-w-lg flex-col justify-center space-y-4 px-8 text-white">
              <h2 className="text-2xl font-bold">
                Rencanakan Pola Makanmu Hari Ini
              </h2>
              <p className="text-sm leading-relaxed">
                Mulailah hari ini dengan pola makan yang lebih sehat dan
                teratur.{" "}
                <span className="hidden md:inline">
                  Sesuaikan menu harianmu agar kebutuhan nutrisi tetap tercukupi
                  dan tujuan diet tercapai dengan lebih mudah.
                </span>
              </p>
            </div>
          </div>
          <Button variant={"outline"} onClick={handleCreateMealPlan}>
            <Plus />
            Tambah Plan Makanan
          </Button>
          <DataTable
            data={data?.data ?? []}
            isLoading={isPending}
            columns={mealPlanColumns({
              deleteMealPlanHandler: handleDeleteMealPlan,
              updateMealPlanHandler: handleUpdateMealPlan,
            })}
          />
        </div>

        <div className="md:flex-[1]">
          <Card>
            <CardContent className="flex flex-col items-start gap-3">
              <div className="font-semibold">
                {date?.toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <div className="flex w-full flex-col gap-2">
                {data?.data
                  .filter((meal) => {
                    const mealDate = new Date(meal.meal_date);
                    return (
                      mealDate.getDate() === date?.getDate() &&
                      mealDate.getMonth() === date?.getMonth() &&
                      mealDate.getFullYear() === date?.getFullYear()
                    );
                  })
                  .map((meal) => (
                    <div
                      key={meal.id}
                      className="bg-primary/10 after:bg-primary/70 relative rounded-md p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full"
                    >
                      <div className="font-medium">
                        {meal.name} - {meal.meal}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {format(new Date(meal.meal_date), "dd MMMM yyyy", {
                          locale: id,
                        })}
                        , {meal.meal_time}
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <DialogCreateMealPlan
        open={openDialogCreate}
        setOpen={setOpenDialogCreate}
      />

      {mealPlanToUpdate && (
        <DialogUpdateMealPlan
          open={openUpdateDialog}
          setOpen={setOpenUpdateDialog}
          data={mealPlanToUpdate}
          id={mealPlanToUpdate?.id}
        />
      )}

      {selectedMealPlan && (
        <AlertDialogDeleteMealPlan
          open={openAlertDelete}
          setOpen={setOpenAlertDelete}
          confirmDelete={confirmDelete}
          isPending={isDeletePending}
        />
      )}
    </>
  );
}
