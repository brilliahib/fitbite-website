import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Blog } from "@/types/blog/blog";

interface GetDetailBlogResponse {
  data: Blog;
}

export const GetDetailBlogHandler = async (
  slug: string,
  token: string,
): Promise<GetDetailBlogResponse> => {
  const { data } = await api.get<GetDetailBlogResponse>(`/blog/${slug}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetDetailBlog = (
  slug: string,
  token: string,
  options?: Partial<UseQueryOptions<GetDetailBlogResponse, AxiosError>>,
) => {
  return useQuery({
    queryKey: ["blog-detail", slug],
    queryFn: () => GetDetailBlogHandler(slug, token),
    ...options,
  });
};
