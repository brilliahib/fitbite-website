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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateCalories } from "@/http/calories/create-calories";
import {
  caloriesSchema,
  CaloriesType,
} from "@/validators/calories/calories-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function FormCreateCalories() {
  const form = useForm<CaloriesType>({
    resolver: zodResolver(caloriesSchema),
    defaultValues: {
      name: "",
      portion: "",
      calories: undefined,
    },
    mode: "onChange",
  });

  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: CreateCaloriesHandlers, isPending } = useCreateCalories({
    onError: () => {
      toast.error("Gagal menambahkan aktivitas kalori!");
    },
    onSuccess: () => {
      toast.success("Berhasil menambahkan aktvitas kalori baru!");
      queryClient.invalidateQueries({
        queryKey: ["get-summary-calories"],
      });
      queryClient.invalidateQueries({
        queryKey: ["get-all-calories"],
      });
      router.push("/dashboard/calories");
    },
  });

  const onSubmit = (body: CaloriesType) => {
    CreateCaloriesHandlers({ ...body });
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
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
                  id="name"
                  placeholder="Masukkan nama makanan / minuman"
                  {...field}
                  className="h-10"
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
                  id="portion"
                  placeholder="Masukkan porsi makanan"
                  {...field}
                  value={field.value ?? ""}
                  className="h-10"
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
          <Button type="submit" size={"lg"} disabled={isPending}>
            {isPending ? "Loading..." : "Tambahkan"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
