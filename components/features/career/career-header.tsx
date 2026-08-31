import Link from "next/link";
import { Rocket } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SplitSection } from "@/components/shared/split-section";
import { Button } from "@/components/ui/button";
import type { CareerHeaderProps } from "@/types/features/career";

function CareerHeader({
  eyebrow,
  title,
  description,
  image,
  badgeLabel,
  className,
}: CareerHeaderProps) {
  return (
    <Container classNames={{ mainWrapper: className }}>
      <SplitSection
        reversed
        image={image}
        imageAlt="Tech Avenue engineers reviewing code together in the office"
        eyebrow={<span className="font-normal font-poppins">{eyebrow}</span>}
        title={title}
        description={description}
        mediaOverlay={
          <div className="hidden items-center gap-3 rounded-[10px] bg-white px-4 py-3 shadow-[0px_20px_40px_0px_rgba(0,0,0,0.12)] md:flex">
            <Rocket className="size-5 text-[#1E3C8C]" />
            <span className="text-[14px] font-semibold text-[#191C1E]">
              {badgeLabel}
            </span>
          </div>
        }
        action={
          <div className="flex w-full flex-col gap-4 md:flex-row md:flex-wrap md:items-center">
            <Button
              variant="brand"
              size="lg"
              nativeButton={false}
              render={<Link href="#positions" />}
              className="h-12 w-full rounded-[4px] px-6 text-[15px] font-medium md:w-auto"
            >
              Explore Positions
            </Button>

            <Button
              variant="outline"
              size="lg"
              arrow
              nativeButton={false}
              render={<Link href="/about" />}
              className="h-12 w-full px-6 text-[15px] font-medium md:w-auto"
            >
              Learn About Us
            </Button>
          </div>
        }
        classNames={{
          content: "font-poppins gap-4",
          media: "aspect-[4/3] lg:aspect-[16/11]",
          eyebrow:
            "text-[14px] font-bold uppercase tracking-[0.14em] text-[#1E3C8C]",
          title:
            "font-times text-[30px] font-bold text-[#191C1E] md:text-[40px] lg:text-[42px]",
          description: "text-[16px] font-normal leading-relaxed text-[#444651]",
          action: "mt-2 w-full",
        }}
      />
    </Container>
  );
}

export { CareerHeader };
