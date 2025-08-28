import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { PersonalInformation } from "@/types/personal-information/personal-information";

interface GetPersonalInformationResponse {
  data: PersonalInformation;
}

export const GetPersonalInformationHandler = async (
  token: string,
): Promise<GetPersonalInformationResponse> => {
  const { data } = await api.get<GetPersonalInformationResponse>(
    "/personal-information",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

export const useGetPersonalInformation = (
  token: string,
  options?: Partial<
    UseQueryOptions<GetPersonalInformationResponse, AxiosError>
  >,
) => {
  return useQuery({
    queryKey: ["personal-information"],
    queryFn: () => GetPersonalInformationHandler(token),
    ...options,
  });
};
