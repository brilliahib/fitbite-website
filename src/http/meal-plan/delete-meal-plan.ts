import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Calories } from "@/types/calories/calories";

interface DeleteMealPlanPayload {
  id: number;
  token: string;
}

interface DeleteMealPlanResponse {
  data: Calories;
}

export const DeleteMealPlanHandler = async ({
  id,
  token,
}: DeleteMealPlanPayload): Promise<DeleteMealPlanResponse> => {
  const { data } = await api.delete(`/meal-plans/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useDeleteMealPlan = (
  options?: UseMutationOptions<
    DeleteMealPlanResponse,
    AxiosError<unknown>,
    DeleteMealPlanPayload
  >,
) => {
  return useMutation({
    mutationFn: DeleteMealPlanHandler,
    ...options,
  });
};
