"use client";

import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMemo, useState } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

// dummy data for weekly menu
const weeklyMenu: Record<number, string> = {
  0: "Ayam Panggang + Nasi Merah + Sayur Bening",
  1: "Ikan Bakar + Ubi Rebus + Tumis Kangkung",
  2: "Tahu Tempe + Nasi Putih + Capcay",
  3: "Dada Ayam + Kentang Rebus + Brokoli Kukus",
  4: "Telur Dadar + Roti Gandum + Salad",
  5: "Soto Ayam + Nasi + Jeruk",
  6: "Sup Ikan + Kentang + Wortel Kukus",
};

export default function CalendarDashboardOverview() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const selectedMenu = useMemo(() => {
    if (!date) return "-";
    const day = date.getDay();
    return weeklyMenu[day];
  }, [date]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold tracking-tight">
          Kalender Rencana Menu
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Rencana menu makanan harian yang dapat membantu diet.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="h-full"
        />
      </CardContent>
      <CardFooter className="flex flex-col gap-1 text-sm">
        <span className="font-semibold">
          {date
            ? format(date, "EEEE, dd MMMM yyyy", { locale: id })
            : "Pilih tanggal"}
        </span>
        <span className="text-muted-foreground">
          Menu Hari Ini: {selectedMenu}
        </span>
      </CardFooter>
    </Card>
  );
}
