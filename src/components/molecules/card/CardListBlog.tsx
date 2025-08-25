import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Blog } from "@/types/blog/blog";
import { buildFromAppURL } from "@/utils/misc";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface CardListBlogProps {
  data?: Blog[];
  isLoading?: boolean;
}

export default function CardListBlog({ data, isLoading }: CardListBlogProps) {
  if (isLoading) {
    return (
      <>
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="border-0 p-0 shadow-none">
            <CardHeader className="p-0">
              <div className="relative h-45 w-full md:h-40 lg:h-50">
                <Skeleton className="h-full w-full rounded-md" />
              </div>
            </CardHeader>
            <CardContent className="space-y-1 p-0">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/3" />
            </CardContent>
          </Card>
        ))}
      </>
    );
  }

  return (
    <>
      {data?.map((blog) => {
        const formattedDate = blog.created_at
          ? format(new Date(blog.created_at), "dd MMM yyyy", { locale: id })
          : "";

        return (
          <Link key={blog.id} href={`/dashboard/blogs/${blog.slug}`}>
            <Card className="border-0 p-0 shadow-none">
              <CardHeader className="p-0">
                <div className="relative h-45 w-full md:h-40 lg:h-50">
                  <Image
                    src={buildFromAppURL(blog.image)}
                    alt={blog.title}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-1 p-0">
                <h1 className="line-clamp-1 font-semibold">{blog.title}</h1>
                <p className="text-muted-foreground">{formattedDate}</p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </>
  );
}
