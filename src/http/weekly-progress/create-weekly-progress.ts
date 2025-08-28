import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { WeeklyProgress } from "@/types/weekly-progress/weekly-progress";
import { WeeklyProgressType } from "@/validators/weekly-progress/weekly-progress-validator";

interface CreateWeeklyProgressResponse {
  data: WeeklyProgress;
}

export const createWeeklyProgressHandler = async (
  body: WeeklyProgressType,
  token: string,
): Promise<CreateWeeklyProgressResponse> => {
  const { data } = await api.post("/weekly-progress", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useCreateWeeklyProgress = (
  options?: UseMutationOptions<
    CreateWeeklyProgressResponse,
    AxiosError<CreateWeeklyProgressResponse>,
    WeeklyProgressType
  >,
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: (body: WeeklyProgressType) =>
      createWeeklyProgressHandler(body, sessionData?.access_token as string),
    ...options,
  });
};
