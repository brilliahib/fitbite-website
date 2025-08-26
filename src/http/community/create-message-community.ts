import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { ChatCommunity } from "@/types/community/chat-community";
import { CommunityChatType } from "@/validators/community/community-chat-validator";

interface CreateChatCommunityResponse {
  data: ChatCommunity;
}

export const createChatCommunityHandler = async (
  body: CommunityChatType,
  token: string,
): Promise<CreateChatCommunityResponse> => {
  const formData = new FormData();

  formData.append("message", body.message);

  if (body.image) {
    formData.append("image", body.image);
  }

  const { data } = await api.post("/community-chats", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const useCreateChatCommunity = (
  options?: UseMutationOptions<
    CreateChatCommunityResponse,
    AxiosError<CreateChatCommunityResponse>,
    CommunityChatType
  >,
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: (body: CommunityChatType) =>
      createChatCommunityHandler(body, sessionData?.access_token as string),
    ...options,
  });
};
