import PersonalInformationWrapper from "@/components/organisms/personal/PersonalInformationWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informasi Pribadi - Fitbite",
};

export default function PersonalInformationPage() {
  return <PersonalInformationWrapper />;
}
