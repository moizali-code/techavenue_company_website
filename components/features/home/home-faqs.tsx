"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/shared/container";
import type { HomeFaqsProps } from "@/types/features/home";

function HomeFaqs({ heading, faqs, className }: HomeFaqsProps) {
  return (
    <Container classNames={{ mainWrapper: className }}>
      <div id="faqs" className="scroll-mt-28" />

      <h2 className="mb-8 text-center font-poppins text-[25px] font-bold text-[#191C1E] md:text-[30px] lg:mb-12 lg:text-[34px]">
        {heading}
      </h2>

      <Accordion
        multiple={false}
        defaultValue={faqs.length > 0 ? [faqs[0].uuid] : []}
      >
        {faqs.map(({ uuid, question, answer }) => (
          <AccordionItem key={uuid} value={uuid}>
            <AccordionTrigger>{question}</AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}

export { HomeFaqs };
