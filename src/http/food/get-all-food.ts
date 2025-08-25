import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Food } from "@/types/food/food";

interface GetAllFoodResponse {
  data: Food[];
}

export const GetAllFoodHandler = async (
  token: string,
): Promise<GetAllFoodResponse> => {
  const { data } = await api.get<GetAllFoodResponse>("/food", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetAllFood = (
  token: string,
  options?: Partial<UseQueryOptions<GetAllFoodResponse, AxiosError>>,
) => {
  return useQuery({
    queryKey: ["food-list"],
    queryFn: () => GetAllFoodHandler(token),
    ...options,
  });
};
