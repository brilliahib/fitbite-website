import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { GetCheckPersonalInformationHandler } from "@/http/personal-information/check-personal-information";

export default async function PersonalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/login");

  const personalInfo = await GetCheckPersonalInformationHandler(
    session.access_token,
  );

  if (session.user.role !== "admin" && personalInfo?.data?.filled === true) {
    return redirect("/dashboard");
  }

  return <div className="px-5 pt-20 pb-6">{children}</div>;
}
