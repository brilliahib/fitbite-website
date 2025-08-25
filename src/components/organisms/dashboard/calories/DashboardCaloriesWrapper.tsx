"use client";

import AlertDialogDeleteCalories from "@/components/atoms/alert-dialog/AlertDialogDeleteCalories";
import { caloriesColumns } from "@/components/atoms/datacolumn/DataCalories";
import DialogUpdateCalories from "@/components/atoms/dialog/calories/DialogUpdateCalories";
import CardBannerCalories from "@/components/molecules/card/CardBannerCalories";
import CardMaximumCalories from "@/components/molecules/card/CardMaximumCalories";
import CardPercentageCalories from "@/components/molecules/card/CardPercentageCalories";
import CardRemainingCalories from "@/components/molecules/card/CardRemainingCalories";
import CardRemainingPercentageCalories from "@/components/molecules/card/CardRemainingPercentageCalories";
import { ChartDashboardCalories } from "@/components/molecules/chart/ChartDashboardCalories";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { Button } from "@/components/ui/button";
import { useDeleteCalories } from "@/http/calories/delete-calories";
import { useGetAllCalories } from "@/http/calories/get-all-calories";
import { Calories } from "@/types/calories/calories";
import { useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function DashboardCaloriesWrapper() {
  const { data: session, status } = useSession();
  const queryClient = useQueryClient();

  const { data, isPending } = useGetAllCalories(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

  const [openAlertDelete, setOpenAlertDelete] = useState(false);
  const [selectedCalories, setSelectedCalories] = useState<Calories | null>(
    null,
  );

  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [CaloriesToUpdate, setCaloriesToUpdate] = useState<Calories | null>(
    null,
  );

  const { mutate: deleteCalories, isPending: isDeletePending } =
    useDeleteCalories({
      onSuccess: () => {
        setSelectedCalories(null);
        toast.success("Calories berhasil dihapus!");
        queryClient.invalidateQueries({
          queryKey: ["Caloriess-list"],
        });
      },
      onError: (err) => {
        toast.error("Gagal menghapus Calories: " + err.message);
      },
    });

  const handleDeleteCalories = (Calories: Calories) => {
    setSelectedCalories(Calories);
    setOpenAlertDelete(true);
  };

  const handleUpdateCalories = (Calories: Calories) => {
    setCaloriesToUpdate(Calories);
    setOpenUpdateDialog(true);
  };

  const confirmDelete = () => {
    if (selectedCalories?.id) {
      deleteCalories({
        id: selectedCalories.id,
        token: session?.access_token ?? "",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 md:gap-12">
        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-6">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              <CardMaximumCalories />
              <CardRemainingCalories />
              <CardPercentageCalories />
              <CardRemainingPercentageCalories />
            </div>
            <CardBannerCalories />
          </div>
          <div className="self-start">
            <ChartDashboardCalories />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-end justify-between gap-4 md:gap-0">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Aktivitas Kalori</h1>
              <p className="text-muted-foreground text-sm">
                Menampilkan daftar makanan yang telah dikonsumsi hari ini.
              </p>
            </div>
            <Button asChild>
              <Link href="/dashboard/calories/create">
                {" "}
                <Plus />
                Tambah Aktivitas
              </Link>
            </Button>
          </div>
          <DataTable
            columns={caloriesColumns({
              deleteCaloriesHandler: handleDeleteCalories,
              updateCaloriesHandler: handleUpdateCalories,
            })}
            data={data?.data ?? []}
            isLoading={isPending}
          />
        </div>
      </div>

      {selectedCalories && (
        <AlertDialogDeleteCalories
          open={openAlertDelete}
          setOpen={setOpenAlertDelete}
          confirmDelete={confirmDelete}
          isPending={isDeletePending}
        />
      )}

      {CaloriesToUpdate && (
        <DialogUpdateCalories
          open={openUpdateDialog}
          setOpen={setOpenUpdateDialog}
          id={CaloriesToUpdate.id}
          data={CaloriesToUpdate}
        />
      )}
    </>
  );
}
