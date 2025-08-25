import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { MealPlan } from "@/types/plan/meal-plan";

interface GetAllMealPlanResponse {
  data: MealPlan[];
}

export const GetAllMealPlanHandler = async (
  token: string,
): Promise<GetAllMealPlanResponse> => {
  const { data } = await api.get<GetAllMealPlanResponse>("/meal-plans", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetAllMealPlan = (
  token: string,
  options?: Partial<UseQueryOptions<GetAllMealPlanResponse, AxiosError>>,
) => {
  return useQuery({
    queryKey: ["meal-plan-list"],
    queryFn: () => GetAllMealPlanHandler(token),
    ...options,
  });
};
