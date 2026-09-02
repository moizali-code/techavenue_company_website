import Image from "next/image";
import { Quote } from "lucide-react";

import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";
import type { SolutionTestimonialProps } from "@/types/features/solutions";

function SolutionTestimonial({
  testimonial,
  classNames,
}: SolutionTestimonialProps) {
  const { quote, name, role, avatar } = testimonial;

  return (
    <Container classNames={{ mainWrapper: cn(classNames?.mainWrapper) }}>
      <Card
        eyebrow={
          <Quote
            className="size-9 rotate-180 fill-[#E5E9F2] text-[#E5E9F2]"
            aria-hidden
          />
        }
        description={`"${quote}"`}
        footer={
          <div className="flex items-center gap-3">
            <span className="relative size-12 shrink-0 overflow-hidden rounded-full">
              <Image
                src={avatar}
                alt=""
                fill
                sizes="40px"
                className="object-cover"
              />
            </span>

            <span className="flex flex-col gap-0.5">
              <span className="text-[18px] font-bold text-[#1E3C8C] font-times">
                {name}
              </span>
              <span className="text-[16px] text-[#444651]">{role}</span>
            </span>
          </div>
        }
        classNames={{
          mainWrapper:
            "mx-auto h-fit max-w-2xl  lg:w-[896px] rounded-[20px] border-[rgba(165,165,165,0.4)] shadow-[0_10px_30px_#0000000A] px-[15px] py-[18px]",
          content: "gap-6 p-8 lg:p-10",
          description:
            "text-[18px] leading-relaxed font-normal text-[#444651] md:text-[30px] lg:text-[30px]",
          footer: "mt-2",
        }}
      />
    </Container>
  );
}

export { SolutionTestimonial };
