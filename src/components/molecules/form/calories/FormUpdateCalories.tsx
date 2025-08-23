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
import { Calories } from "@/types/calories/calories";
import {
  caloriesSchema,
  CaloriesType,
} from "@/validators/calories/calories-validator";
import { useUpdateCalories } from "@/http/calories/update-calories";

interface FormUpdateCaloriesProps {
  id: number;
  data?: Calories;
  setOpen: (open: boolean) => void;
}

export default function FormUpdateCalories({
  id,
  data,
  setOpen,
}: FormUpdateCaloriesProps) {
  const defaultValues = useMemo(
    () => ({
      name: data?.name || "",
      portion: data?.portion || "",
      calories: Number(data?.calories) || 0,
    }),
    [data],
  );

  const form = useForm<CaloriesType>({
    resolver: zodResolver(caloriesSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const queryClient = useQueryClient();

  const { mutate: updateCaloriesHandler, isPending } = useUpdateCalories({
    onError: () => {
      toast.error("Gagal memperbarui aktivitas kalori!");
    },
    onSuccess: () => {
      toast.success("Berhasil memperbarui aktivitas kalori!");
      queryClient.invalidateQueries({
        queryKey: ["get-all-calories"],
      });
      setOpen(false);
    },
  });

  const onSubmit = (body: CaloriesType) => {
    updateCaloriesHandler({ id, body });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Makanan / Minuman</FormLabel>
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
          name="portion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Porsi</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Masukkan porsi makanan / minuman"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="calories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Kalori <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  inputMode="numeric"
                  placeholder="Masukkan kalori makanan / minuman"
                  value={field.value ?? ""}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d*$/.test(val)) {
                      field.onChange(val === "" ? undefined : Number(val));
                    }
                  }}
                />
              </FormControl>
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
