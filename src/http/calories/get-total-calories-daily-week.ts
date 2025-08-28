import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { TotalCaloriesDailyWeek } from "@/types/calories/total-calories-daily-week";

interface GetTotalCaloriesDailyWeekResponse {
  data: TotalCaloriesDailyWeek[];
}

export const GetTotalCaloriesDailyWeekHandler = async (
  token: string,
): Promise<GetTotalCaloriesDailyWeekResponse> => {
  const { data } = await api.get<GetTotalCaloriesDailyWeekResponse>(
    "/calories/daily-week",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

export const useGetTotalCaloriesDailyWeek = (
  token: string,
  options?: Partial<
    UseQueryOptions<GetTotalCaloriesDailyWeekResponse, AxiosError>
  >,
) => {
  return useQuery({
    queryKey: ["get-total-calories-daily-week"],
    queryFn: () => GetTotalCaloriesDailyWeekHandler(token),
    ...options,
  });
};
