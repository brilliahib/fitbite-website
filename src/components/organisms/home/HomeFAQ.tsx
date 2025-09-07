import PageContainer from "@/components/atoms/container/PageContainer";
import { FAQAccordion } from "@/components/molecules/accordion/FAQAccordion";

export default function HomeFAQ() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-6 md:flex-row md:gap-12">
        <h2 className="text-primary text-center text-3xl font-bold uppercase lg:text-left lg:text-6xl">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="w-full space-y-4">
          <FAQAccordion />
        </div>
      </div>
    </PageContainer>
  );
}
