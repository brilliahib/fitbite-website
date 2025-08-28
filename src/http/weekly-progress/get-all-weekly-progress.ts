import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { WeeklyProgress } from "@/types/weekly-progress/weekly-progress";

interface GetAllWeeklyProgressResponse {
  data: WeeklyProgress[];
}

export const GetAllWeeklyProgressHandler = async (
  token: string,
): Promise<GetAllWeeklyProgressResponse> => {
  const { data } = await api.get<GetAllWeeklyProgressResponse>(
    "/weekly-progress",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

export const useGetAllWeeklyProgress = (
  token: string,
  options?: Partial<UseQueryOptions<GetAllWeeklyProgressResponse, AxiosError>>,
) => {
  return useQuery({
    queryKey: ["weekly-progress-list"],
    queryFn: () => GetAllWeeklyProgressHandler(token),
    ...options,
  });
};
