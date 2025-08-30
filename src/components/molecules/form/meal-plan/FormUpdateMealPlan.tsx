"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { toast } from "sonner";
import { MealPlan } from "@/types/plan/meal-plan";
import {
  mealPlanSchema,
  MealPlanType,
} from "@/validators/meal-plan/meal-plan-validator";
import { useUpdateMealPlan } from "@/http/meal-plan/update-meal-plan";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormUpdateMealPlanProps {
  id: number;
  data?: MealPlan;
  setOpen: (open: boolean) => void;
}

export default function FormUpdateMealPlan({
  id,
  data,
  setOpen,
}: FormUpdateMealPlanProps) {
  const defaultValues = useMemo(
    () => ({
      name: data?.name || "",
      meal: data?.meal || "",
      gram: data?.gram || "",
      meal_date: data?.meal_date
        ? format(new Date(data.meal_date), "yyyy-MM-dd")
        : "",
      meal_time: data?.meal_time || "",
    }),
    [data],
  );

  const form = useForm<MealPlanType>({
    resolver: zodResolver(mealPlanSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const queryClient = useQueryClient();

  const { mutate: updateMealPlanHandler, isPending } = useUpdateMealPlan({
    onError: () => {
      toast.error("Gagal memperbarui rencana makan!");
    },
    onSuccess: () => {
      toast.success("Berhasil memperbarui rencana makan!");
      queryClient.invalidateQueries({
        queryKey: ["meal-plan-list"],
      });
      setOpen(false);
    },
  });

  const onSubmit = (body: MealPlanType) => {
    const payload = {
      ...body,
      meal_date: format(new Date(body.meal_date), "yyyy-MM-dd"),
    };

    updateMealPlanHandler({ id, body: payload });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Nama Makanan / Minuman <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Masukkan nama makanan / minuman"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="meal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Meal <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Meal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Pilihan Meal</SelectLabel>
                      <SelectItem value="Sarapan">Sarapan</SelectItem>
                      <SelectItem value="Makan Siang">Makan Siang</SelectItem>
                      <SelectItem value="Makan Malam">Makan Malam</SelectItem>
                      <SelectItem value="Cemilan">Cemilan</SelectItem>
                      <SelectItem value="Minuman">Minuman</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gram"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Gram <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Masukkan gram" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="meal_time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Waktu Makan <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="time"
                  placeholder="Masukkan waktu makan"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="meal_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>
                Tanggal Makan <span className="text-red-500">*</span>
              </FormLabel>
              <Popover modal={true}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={`pl-3 text-left font-normal ${
                        !field.value && "text-muted-foreground"
                      }`}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pilih tanggal</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) => field.onChange(date?.toISOString())}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Loading..." : "Simpan"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
