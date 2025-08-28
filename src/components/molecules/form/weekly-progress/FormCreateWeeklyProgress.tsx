"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateWeeklyProgress } from "@/http/weekly-progress/create-weekly-progress";
import {
  weeklyProgressSchema,
  WeeklyProgressType,
} from "@/validators/weekly-progress/weekly-progress-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormCreateWeeklyProgressProps {
  setOpen: (open: boolean) => void;
}

export default function FormCreateWeeklyProgress({
  setOpen,
}: FormCreateWeeklyProgressProps) {
  const form = useForm<WeeklyProgressType>({
    resolver: zodResolver(weeklyProgressSchema),
    defaultValues: {
      weight_end: undefined,
    },
    mode: "onChange",
  });

  const queryClient = useQueryClient();

  const { mutate: createPersonalInformationHandlers, isPending } =
    useCreateWeeklyProgress({
      onError: () => {
        toast.error("Gagal membuat progress mingguan!");
      },
      onSuccess: () => {
        toast.success("Berhasil membuat progress mingguan!", {
          description: "Berat badan dan kalori harian otomatis ikut terupdate",
        });
        queryClient.invalidateQueries({
          queryKey: ["weekly-progress-list"],
        });
        setOpen(false);
      },
    });

  const onSubmit = (body: WeeklyProgressType) => {
    createPersonalInformationHandlers({ ...body });
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="weight_end"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Berat Badan Sekarang <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  inputMode="numeric"
                  placeholder="Masukkan berat badan sekarang"
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
          <Button type="submit" size={"lg"} disabled={isPending}>
            {isPending ? "Loading..." : "Tambahkan"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
