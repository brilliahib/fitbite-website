import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

export function FAQPageAccordion() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {[0, 1].map((col) => (
        <Accordion
          key={col}
          type="single"
          collapsible
          className="w-full space-y-4"
        >
          {faqs
            .slice(
              col * Math.ceil(faqs.length / 2),
              (col + 1) * Math.ceil(faqs.length / 2),
            )
            .map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      ))}
    </div>
  );
}
