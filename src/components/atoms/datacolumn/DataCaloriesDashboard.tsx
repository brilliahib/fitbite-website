"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Calories } from "@/types/calories/calories";

export const caloriesDashboardColumns: ColumnDef<Calories>[] = [
  {
    accessorKey: "index",
    header: "No",
    cell: ({ row }) => {
      return <p suppressHydrationWarning>{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "title",
    header: "Makanan / Minuman",
    cell: ({ row }) => (
      <p suppressHydrationWarning className="line-clamp-1 md:line-clamp-2">
        {row.original.name}
      </p>
    ),
  },
  {
    accessorKey: "title",
    header: "Porsi",
    cell: ({ row }) => (
      <p suppressHydrationWarning className="line-clamp-1 md:line-clamp-2">
        {row.original.portion ?? "Tidak ada keterangan"}
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
];
