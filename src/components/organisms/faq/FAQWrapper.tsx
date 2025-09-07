import PageContainer from "@/components/atoms/container/PageContainer";
import LandingTitle from "@/components/atoms/typography/LandingTitle";
import { FAQPageAccordion } from "@/components/molecules/accordion/FAQPageAccordion";
import { MessagesSquare } from "lucide-react";

export default function FAQWrapper() {
  return (
    <PageContainer>
      <div className="space-y-6 md:space-y-12">
        <LandingTitle
          badgeTitle="FAQ"
          icon={MessagesSquare}
          title="Frequently Asked Questions"
          description="Got questions? We've got answers! Explore our FAQ section to find solutions to common inquiries about Fitbite."
        />
        <FAQPageAccordion />
      </div>
    </PageContainer>
  );
}
