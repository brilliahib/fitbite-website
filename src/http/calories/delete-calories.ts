import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Calories } from "@/types/calories/calories";

interface DeleteCaloriesPayload {
  id: number;
  token: string;
}

interface DeleteCaloriesResponse {
  data: Calories;
}

export const DeleteCaloriesHandler = async ({
  id,
  token,
}: DeleteCaloriesPayload): Promise<DeleteCaloriesResponse> => {
  const { data } = await api.delete(`/calories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useDeleteCalories = (
  options?: UseMutationOptions<
    DeleteCaloriesResponse,
    AxiosError<unknown>,
    DeleteCaloriesPayload
  >,
) => {
  return useMutation({
    mutationFn: DeleteCaloriesHandler,
    ...options,
  });
};
