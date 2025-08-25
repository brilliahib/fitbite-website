import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Blog } from "@/types/blog/blog";

interface GetAllBlogResponse {
  data: Blog[];
}

export const GetAllBlogHandler = async (
  token: string,
): Promise<GetAllBlogResponse> => {
  const { data } = await api.get<GetAllBlogResponse>("/blog", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetAllBlog = (
  token: string,
  options?: Partial<UseQueryOptions<GetAllBlogResponse, AxiosError>>,
) => {
  return useQuery({
    queryKey: ["blog-list"],
    queryFn: () => GetAllBlogHandler(token),
    ...options,
  });
};
