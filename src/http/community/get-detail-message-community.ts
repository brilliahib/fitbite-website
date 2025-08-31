import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { ChatCommunity } from "@/types/community/chat-community";

interface GetDetailMessageCommunityResponse {
  data: ChatCommunity;
}

export const GetDetailMessageCommunityHandler = async (
  id: number,
  token: string,
): Promise<GetDetailMessageCommunityResponse> => {
  const { data } = await api.get<GetDetailMessageCommunityResponse>(
    `/community-chats/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

export const useGetDetailMessageCommunity = (
  id: number,
  token: string,
  options?: Partial<
    UseQueryOptions<GetDetailMessageCommunityResponse, AxiosError>
  >,
) => {
  return useQuery({
    queryKey: ["message-community", id],
    queryFn: () => GetDetailMessageCommunityHandler(id, token),
    ...options,
  });
};
