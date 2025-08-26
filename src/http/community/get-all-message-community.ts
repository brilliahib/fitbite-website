import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { ChatCommunity } from "@/types/community/chat-community";

interface GetAllMessageCommunityResponse {
  data: ChatCommunity[];
}

export const GetAllMessageCommunityHandler = async (
  token: string,
): Promise<GetAllMessageCommunityResponse> => {
  const { data } = await api.get<GetAllMessageCommunityResponse>(
    "/community-chats",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

export const useGetAllMessageCommunity = (
  token: string,
  options?: Partial<
    UseQueryOptions<GetAllMessageCommunityResponse, AxiosError>
  >,
) => {
  return useQuery({
    queryKey: ["message-community-list"],
    queryFn: () => GetAllMessageCommunityHandler(token),
    ...options,
  });
};
