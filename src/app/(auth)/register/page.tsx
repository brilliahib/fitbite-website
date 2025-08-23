import RegisterWrapperContent from "@/components/organisms/auth/RegisterWrapperContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftar | Fitbite",
  description: "Daftar untuk mengakses fitur-fitur yang tersedia.",
};

export default function AuthLoginPage() {
  return <RegisterWrapperContent />;
}
