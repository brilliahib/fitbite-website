import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ChatCommunity } from "@/types/community/chat-community";
import { generateFallbackFromName } from "@/utils/generate-name";
import { buildFromAppURL } from "@/utils/misc";
import { format, formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import { Bookmark, Heart, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface CardDetailChatCommunityProps {
  data?: ChatCommunity;
  isLoading?: boolean;
}

export default function CardDetailChatCommunity({
  data,
  isLoading,
}: CardDetailChatCommunityProps) {
  let formattedDate = "";
  if (data?.created_at) {
    const createdDate = new Date(data.created_at);
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

  if (isLoading) {
    return (
      <Card>
        <CardHeader className="flex flex-row gap-3">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-20" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-48 w-full rounded-md" />
        </CardContent>
        <CardFooter>
          <div className="flex flex-row gap-6">
            <Skeleton className="h-4 w-10" />
            <Skeleton className="h-4 w-10" />
            <Skeleton className="h-4 w-10" />
          </div>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row gap-3">
        <div>
          <Avatar className="h-12 w-12 rounded-full">
            <AvatarFallback className="rounded-full">
              {generateFallbackFromName(data?.user.name || "Pengguna")}
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h1 className="font-medium">{data?.user.name}</h1>
          <p className="text-muted-foreground text-sm">{formattedDate}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{data?.message}</p>
        {data?.image && (
          <Image
            src={buildFromAppURL(data.image)}
            alt={data.user.name}
            width={700}
            height={100}
            className="rounded-md"
          />
        )}
      </CardContent>
      <CardFooter>
        <div className="flex flex-row gap-6">
          <div className="flex items-center space-x-1">
            <Heart size={16} className="fill-red-600 text-red-600" />
            <p className="text-sm text-red-600">10,7K</p>
          </div>

          <div className="flex items-center space-x-1">
            <MessageCircleMore size={16} />
            <p className="text-sm">3,7K</p>
          </div>
          <div className="flex items-center space-x-1">
            <Bookmark size={16} />
            <p className="text-sm">532</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
