import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Food } from "@/types/food/food";

interface GetDetailFoodResponse {
  data: Food;
}

export const GetDetailFoodHandler = async (
  id: number,
  token: string,
): Promise<GetDetailFoodResponse> => {
  const { data } = await api.get<GetDetailFoodResponse>(`/food/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetDetailFood = (
  id: number,
  token: string,
  options?: Partial<UseQueryOptions<GetDetailFoodResponse, AxiosError>>,
) => {
  return useQuery({
    queryKey: ["food-detail", id],
    queryFn: () => GetDetailFoodHandler(id, token),
    ...options,
  });
};
