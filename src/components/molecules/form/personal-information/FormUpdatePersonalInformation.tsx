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
import { useGetPersonalInformation } from "@/http/personal-information/get-personal-information";
import { useUpdatePersonalInformation } from "@/http/personal-information/update-personal-information";
import {
  personalInformationSchema,
  PersonalInformationType,
} from "@/validators/personal-information/personal-information-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMemo, useEffect } from "react";

export default function FormUpdatePersonalInformation() {
  const { data: session, status } = useSession();
  const { data } = useGetPersonalInformation(session?.access_token as string, {
    enabled: status === "authenticated" && !!session?.access_token,
  });

  const defaultValues = useMemo<PersonalInformationType>(() => {
    return {
      age: Number(data?.data.age) ?? 0,
      gender: data?.data.gender ?? "male",
      weight: data?.data.weight ?? 0,
      height: data?.data.height ?? 0,
      activity_level: data?.data.activity_level ?? 1,
    };
  }, [data]);

  const form = useForm<PersonalInformationType>({
    resolver: zodResolver(personalInformationSchema),
    defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    if (data?.data) {
      form.reset(defaultValues);
    }
  }, [data, defaultValues, form]);

  const router = useRouter();

  const { mutate: editPersonalInformationHandler, isPending } =
    useUpdatePersonalInformation({
      onError: () => {
        toast.error("Gagal mengedit informasi pribadi!");
      },
      onSuccess: () => {
        toast.success("Berhasil mengedit informasi pribadi!");
        router.refresh();
      },
    });

  const onSubmit = (body: PersonalInformationType) => {
    editPersonalInformationHandler({ ...body });
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Berat Badan <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  inputMode="numeric"
                  placeholder="Masukkan berat badan"
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

        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Tinggi Badan <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  inputMode="numeric"
                  placeholder="Masukkan tinggi badan"
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

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Umur <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  inputMode="numeric"
                  placeholder="Masukkan umur Anda"
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

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Jenis Kelamin <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih jenis kelamin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Jenis Kelamin</SelectLabel>
                      <SelectItem value="male">Laki - Laki</SelectItem>
                      <SelectItem value="female">Perempuan</SelectItem>
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
          name="activity_level"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Tingkat Aktivitas <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={(val) => field.onChange(Number(val))}
                  value={field.value ? String(field.value) : ""}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih tingkat aktivitas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Tingkat Aktivitas</SelectLabel>
                      <SelectItem value="1">Sedentary</SelectItem>
                      <SelectItem value="2">Ringan</SelectItem>
                      <SelectItem value="3">Sedang</SelectItem>
                      <SelectItem value="4">Berat</SelectItem>
                      <SelectItem value="5">Sangat Berat</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit" size="lg" disabled={isPending}>
            {isPending ? "Loading..." : "Simpan"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
