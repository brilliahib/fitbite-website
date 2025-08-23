import DashboardWrapper from "@/components/organisms/dashboard/DashboardWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Fitbite",
};

export default function DashboardPage() {
  return <DashboardWrapper />;
}
