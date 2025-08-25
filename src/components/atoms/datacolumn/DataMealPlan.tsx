"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { SquarePen, Trash2 } from "lucide-react";
import ActionButton from "@/components/molecules/datatable/ActionButton";
import { MealPlan } from "@/types/plan/meal-plan";

interface mealPlanColumnsProps {
  updateMealPlanHandler: (data: MealPlan) => void;
  deleteMealPlanHandler: (data: MealPlan) => void;
}

export const mealPlanColumns = (
  props: mealPlanColumnsProps,
): ColumnDef<MealPlan>[] => [
  {
    accessorKey: "title",
    header: "Nama",
    cell: ({ row }) => (
      <p suppressHydrationWarning className="line-clamp-1 md:line-clamp-2">
        {row.original.name}
      </p>
    ),
  },
  {
    accessorKey: "meal",
    header: "Meal",
    cell: ({ row }) => <p>{row.original.meal}</p>,
  },
  {
    accessorKey: "gram",
    header: "Gram",
    cell: ({ row }) => <p>{row.original.gram} gram</p>,
  },
  {
    accessorKey: "meal_time",
    header: "Jam",
    cell: ({ row }) => <p suppressHydrationWarning>{row.original.meal_time}</p>,
  },
  {
    accessorKey: "created_at",
    header: "Tanggal",
    cell: ({ row }) => (
      <p suppressHydrationWarning>
        {format(new Date(row.original.meal_date), "EEEE, d MMMM yyyy", {
          locale: id,
        })}
      </p>
    ),
  },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <ActionButton>
          <div
            onClick={() => props.updateMealPlanHandler(data)}
            className="flex cursor-pointer items-center text-yellow-600 hover:text-yellow-800 hover:underline"
          >
            <SquarePen className="h-4 w-4" />
            <span className="ml-2">Edit</span>
          </div>

          <div
            onClick={() => props.deleteMealPlanHandler(data)}
            className="flex cursor-pointer items-center text-red-600 hover:text-red-800 hover:underline"
          >
            <Trash2 className="h-4 w-4" />
            <span className="ml-2">Hapus</span>
          </div>
        </ActionButton>
      );
    },
  },
];
