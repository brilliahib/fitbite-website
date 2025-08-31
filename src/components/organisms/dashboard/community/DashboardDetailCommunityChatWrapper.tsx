"use client";

import { useState } from "react";
import CardDetailChatCommunity from "@/components/molecules/card/CardDetailChatCommunity";
import MessageInputCommunityAnswer from "@/components/molecules/message/MessageInputCommunityAnswer";
import { Button } from "@/components/ui/button";
import { useGetDetailMessageCommunity } from "@/http/community/get-detail-message-community";
import { useSession } from "next-auth/react";
import CardListMessageCommunityAnswer from "@/components/molecules/card/CardListChatCommunityAnswer";
import { useGetAllMessageCommunityAnswer } from "@/http/community/answer/get-all-message-community-answer";

interface DashboardDetailCommunityChatWrapperProps {
  id: number;
}

export default function DashboardDetailCommunityChatWrapper({
  id,
}: DashboardDetailCommunityChatWrapperProps) {
  const { data: session, status } = useSession();
  const [showReplyInput, setShowReplyInput] = useState(false);

  const { data, isPending } = useGetDetailMessageCommunity(
    id,
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

  const { data: replies, isPending: isRepliesPending } =
    useGetAllMessageCommunityAnswer(id, session?.access_token as string, {
      enabled: status === "authenticated",
    });

  return (
    <div className="space-y-6">
      <CardDetailChatCommunity data={data?.data} isLoading={isPending} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Balasan</h1>
        <Button onClick={() => setShowReplyInput((prev) => !prev)}>
          {showReplyInput ? "Tutup" : "Beri Balasan"}
        </Button>
      </div>
      {showReplyInput && <MessageInputCommunityAnswer id={id} />}
      <CardListMessageCommunityAnswer
        data={replies?.data}
        isLoading={isRepliesPending}
      />
    </div>
  );
}
