import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { CaloriesType } from "@/validators/calories/calories-validator";

export const createCaloriesHandler = async (
  body: CaloriesType,
  token: string,
) => {
  const { data } = await api.post("/calories", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useCreateCalories = (
  options?: UseMutationOptions<unknown, AxiosError, CaloriesType>,
) => {
  const { data: session } = useSession();
  return useMutation({
    mutationFn: (body) =>
      createCaloriesHandler(body, session?.access_token ?? ""),
    ...options,
  });
};
