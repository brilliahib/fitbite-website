import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { CommunityChatAnswerType } from "@/validators/community/answer/community-chat-answer-validator";
import { ChatCommunityAnswer } from "@/types/community/answer/chat-community-answer";

interface CreateChatCommunityAnswerResponse {
  data: ChatCommunityAnswer;
}

export const createChatCommunityAnswerHandler = async (
  id: number,
  body: CommunityChatAnswerType,
  token: string,
): Promise<CreateChatCommunityAnswerResponse> => {
  const formData = new FormData();

  formData.append("message", body.message);

  if (body.image) {
    formData.append("image", body.image);
  }

  const { data } = await api.post(`/community-chat-answers/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const useCreateChatCommunityAnswer = (
  id: number,
  options?: UseMutationOptions<
    CreateChatCommunityAnswerResponse,
    AxiosError<CreateChatCommunityAnswerResponse>,
    CommunityChatAnswerType
  >,
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: (body: CommunityChatAnswerType) =>
      createChatCommunityAnswerHandler(
        id,
        body,
        sessionData?.access_token as string,
      ),
    ...options,
  });
};
