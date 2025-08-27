import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { SummaryCalories } from "@/types/calories/summary-calories";

interface GetSummaryCaloriesResponse {
  data: SummaryCalories;
}

export const GetSummaryCaloriesHandler = async (
  token: string,
): Promise<GetSummaryCaloriesResponse> => {
  const { data } = await api.get<GetSummaryCaloriesResponse>(
    "/calories/summary",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

export const useGetSummaryCalories = (
  token: string,
  options?: Partial<UseQueryOptions<GetSummaryCaloriesResponse, AxiosError>>,
) => {
  return useQuery({
    queryKey: ["get-summary-calories"],
    queryFn: () => GetSummaryCaloriesHandler(token),
    ...options,
  });
};
