"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import Link from "next/link";
import { Eye, SquarePen, Trash2 } from "lucide-react";
import ActionButton from "@/components/molecules/datatable/ActionButton";
import { Calories } from "@/types/calories/calories";

interface CaloriesColumnsProps {
  updateCaloriesHandler: (data: Calories) => void;
  deleteCaloriesHandler: (data: Calories) => void;
}

export const caloriesColumns = (
  props: CaloriesColumnsProps,
): ColumnDef<Calories>[] => [
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
    accessorKey: "calories",
    header: "Kalori",
    cell: ({ row }) => <p>{row.original.calories} kcal</p>,
  },
  {
    accessorKey: "created_at",
    header: "Tanggal",
    cell: ({ row }) => (
      <p suppressHydrationWarning>
        {format(new Date(row.original.created_at), "EEEE, d MMMM yyyy, HH:mm", {
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
          <Link
            href={`/dashboard/admin/periods/${data.id}`}
            className="flex items-center text-gray-700 hover:underline"
          >
            <Eye className="h-4 w-4" />
            <span className="ml-2">Detail</span>
          </Link>

          <div
            onClick={() => props.updateCaloriesHandler(data)}
            className="flex cursor-pointer items-center text-yellow-600 hover:text-yellow-800 hover:underline"
          >
            <SquarePen className="h-4 w-4" />
            <span className="ml-2">Edit</span>
          </div>

          <div
            onClick={() => props.deleteCaloriesHandler(data)}
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
