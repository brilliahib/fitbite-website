import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/organisms/sidebar/Sidebar";
import BreadcrumbNav from "@/components/atoms/breadcrumb/Breadcrumb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { GetCheckPersonalInformationHandler } from "@/http/personal-information/check-personal-information";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/login");

  const personalInfo = await GetCheckPersonalInformationHandler(
    session.access_token,
  );

  if (session.user.role !== "admin" && personalInfo?.data?.filled === false) {
    return redirect("/personal");
  }

  return (
    <SidebarProvider>
      <AppSidebar session={session!} />
      <SidebarInset>
        <BreadcrumbNav />
        <div className="px-5 pt-20 pb-6 md:pt-10">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
