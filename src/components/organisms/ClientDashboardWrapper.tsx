"use client";

import { useGetCheckPersonalInformation } from "@/http/personal-information/check-personal-information";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientDashboardWrapper({
  accessToken,
  role,
  children,
}: {
  accessToken: string;
  role: string;
  children: ReactNode;
}) {
  const router = useRouter();
  const shouldCheckPersonalInfo = role !== "admin";

  const { data, isLoading } = useGetCheckPersonalInformation(accessToken, {
    enabled: !!accessToken && shouldCheckPersonalInfo,
  });

  useEffect(() => {
    if (!shouldCheckPersonalInfo) return;

    if (data?.data.filled === false) {
      router.push("/personal");
    } else if (data?.data.filled === true) {
      router.push("/dashboard");
    }
  }, [shouldCheckPersonalInfo, data, router]);

  if (shouldCheckPersonalInfo && isLoading) return <div>Loading...</div>;

  return <>{children}</>;
}
