import DashboardBlogDetailWrapper from "@/components/organisms/dashboard/blog/DashboardBlogDetailWrapper";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  return (
    <section>
      <DashboardBlogDetailWrapper slug={slug} />
    </section>
  );
}
