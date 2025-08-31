import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { ChatCommunityAnswer } from "@/types/community/answer/chat-community-answer";

interface GetAllMessageCommunityAnswerResponse {
  data: ChatCommunityAnswer[];
}

export const GetAllMessageCommunityAnswerHandler = async (
  id: number,
  token: string,
): Promise<GetAllMessageCommunityAnswerResponse> => {
  const { data } = await api.get<GetAllMessageCommunityAnswerResponse>(
    `/community-chat-answers/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

export const useGetAllMessageCommunityAnswer = (
  id: number,
  token: string,
  options?: Partial<
    UseQueryOptions<GetAllMessageCommunityAnswerResponse, AxiosError>
  >,
) => {
  return useQuery({
    queryKey: ["message-community-answer-list", id],
    queryFn: () => GetAllMessageCommunityAnswerHandler(id, token),
    ...options,
  });
};
