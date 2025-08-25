"use client";

import CardListBlog from "@/components/molecules/card/CardListBlog";
import { useGetAllBlog } from "@/http/blog/get-all-blog";
import { useSession } from "next-auth/react";

export default function DashboardBlogWrapper() {
  const { data: session, status } = useSession();

  const { data, isPending } = useGetAllBlog(session?.access_token as string, {
    enabled: status === "authenticated",
  });
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
      <CardListBlog data={data?.data} isLoading={isPending} />
    </div>
  );
}
