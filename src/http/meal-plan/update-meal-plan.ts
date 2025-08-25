import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { MealPlan } from "@/types/plan/meal-plan";
import { MealPlanType } from "@/validators/meal-plan/meal-plan-validator";

interface UpdateMealPlanResponse {
  data: MealPlan;
}

export const UpdateMealPlanHandler = async (
  id: number,
  body: MealPlanType,
  token: string,
): Promise<UpdateMealPlanResponse> => {
  const { data } = await api.put(`/meal-plans/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useUpdateMealPlan = (
  options?: UseMutationOptions<
    UpdateMealPlanResponse,
    AxiosError<UpdateMealPlanResponse>,
    { id: number; body: MealPlanType }
  >,
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: ({ id, body }) =>
      UpdateMealPlanHandler(id, body, sessionData?.access_token as string),
    ...options,
  });
};
