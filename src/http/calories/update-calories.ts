import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { Calories } from "@/types/calories/calories";
import { CaloriesType } from "@/validators/calories/calories-validator";

interface UpdateCaloriesResponse {
  data: Calories;
}

export const UpdateCaloriesHandler = async (
  id: number,
  body: CaloriesType,
  token: string,
): Promise<UpdateCaloriesResponse> => {
  const { data } = await api.put(`/calories/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useUpdateCalories = (
  options?: UseMutationOptions<
    UpdateCaloriesResponse,
    AxiosError<UpdateCaloriesResponse>,
    { id: number; body: CaloriesType }
  >,
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: ({ id, body }) =>
      UpdateCaloriesHandler(id, body, sessionData?.access_token as string),
    ...options,
  });
};
