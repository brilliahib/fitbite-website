import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Calories } from "@/types/calories/calories";

interface GetAllCaloriesResponse {
  data: Calories[];
}

export const GetAllCaloriesHandler = async (
  token: string,
): Promise<GetAllCaloriesResponse> => {
  const { data } = await api.get<GetAllCaloriesResponse>("/calories", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetAllCalories = (
  token: string,
  options?: Partial<UseQueryOptions<GetAllCaloriesResponse, AxiosError>>,
) => {
  return useQuery({
    queryKey: ["get-all-calories"],
    queryFn: () => GetAllCaloriesHandler(token),
    ...options,
  });
};
