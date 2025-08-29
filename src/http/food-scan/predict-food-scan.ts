import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { FoodScan } from "@/types/food-scan/food-scan";
import { FoodScanType } from "@/validators/food-scan/food-scan-validator";
import { apiMl } from "@/lib/axios-ml";

type PredictFoodScanResponse = FoodScan;

export const PredictFoodScanHandler = async (
  body: FoodScanType,
  token: string,
): Promise<PredictFoodScanResponse> => {
  const formData = new FormData();

  if (body.image) {
    formData.append("image", body.image);
  }

  const { data } = await apiMl.post("/predict", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const usePredictFoodScan = (
  options?: UseMutationOptions<
    PredictFoodScanResponse,
    AxiosError<PredictFoodScanResponse>,
    FoodScanType
  >,
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: (body: FoodScanType) =>
      PredictFoodScanHandler(body, sessionData?.access_token as string),
    ...options,
  });
};
