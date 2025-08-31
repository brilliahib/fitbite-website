import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { format, formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import { ChatCommunity } from "@/types/community/chat-community";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { generateFallbackFromName } from "@/utils/generate-name";
import Image from "next/image";
import { buildFromAppURL } from "@/utils/misc";

interface CardListMessageCommunityAnswerProps {
  data?: ChatCommunity[];
  isLoading?: boolean;
}

export default function CardListMessageCommunityAnswer({
  data,
  isLoading,
}: CardListMessageCommunityAnswerProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row gap-3">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-20" />
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-48 w-full rounded-md" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {data?.map((chat) => {
        let formattedDate = "";
        if (chat.created_at) {
          const createdDate = new Date(chat.created_at);
          const now = new Date();
          const diffInHours =
            (now.getTime() - createdDate.getTime()) / (1000 * 60 * 60);

          if (diffInHours < 24) {
            formattedDate = formatDistanceToNow(createdDate, {
              addSuffix: true,
              locale: id,
            });
          } else {
            formattedDate = format(createdDate, "dd MMM yyyy", { locale: id });
          }
        }

        return (
          <Card key={chat.id}>
            <CardHeader className="flex flex-row gap-3">
              <div>
                <Avatar className="h-12 w-12 rounded-full">
                  <AvatarFallback className="rounded-full">
                    {generateFallbackFromName(chat.user.name)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h1 className="font-medium">{chat.user.name}</h1>
                <p className="text-muted-foreground text-sm">{formattedDate}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{chat.message}</p>
              {chat.image && (
                <Image
                  src={buildFromAppURL(chat.image)}
                  alt={chat.user.name}
                  width={700}
                  height={100}
                  className="rounded-md"
                />
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
