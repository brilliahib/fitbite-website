import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { MealPlanType } from "@/validators/meal-plan/meal-plan-validator";

export const CreateMealPlanHandler = async (
  body: MealPlanType,
  token: string,
) => {
  const { data } = await api.post("/meal-plans", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useCreateMealPlan = (
  options?: UseMutationOptions<unknown, AxiosError, MealPlanType>,
) => {
  const { data: session } = useSession();
  return useMutation({
    mutationFn: (body) =>
      CreateMealPlanHandler(body, session?.access_token ?? ""),
    ...options,
  });
};
