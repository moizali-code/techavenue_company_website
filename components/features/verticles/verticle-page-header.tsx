import Image from "next/image";

import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import type { VerticlePageHeaderProps } from "@/types/features/verticles";

function VerticlePageHeader({
  eyebrow,
  heading,
  description,
  image,
}: VerticlePageHeaderProps) {
  return (
    <Container>
      <div className="flex flex-col gap-8 lg:gap-12">
        <Jumbotron
          align="left"
          eyebrow={<span>{eyebrow}</span>}
          title={heading}
          description={description}
          classNames={{
            mainWrapper: "px-0 py-0 lg:px-0 lg:py-0",
            content: "max-w-4xl gap-2",
            eyebrow:
              "text-[13px] font-bold tracking-[0.14em] text-[#1E3C8C] uppercase lg:text-[14px]",
            title:
              "font-be-vietnam text-[30px] leading-[1.15] font-bold text-balance text-[#191C1E] md:text-[38px] lg:text-[44px]",
            description:
              "max-w-3xl text-[15px] leading-relaxed text-[#494949] lg:text-[17px]",
          }}
        />

        {image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[12px] md:aspect-[16/8] lg:aspect-[21/8]">
            <Image
              src={image}
              alt={heading}
              fill
              priority
              sizes="(min-width: 1024px) 72rem, 100vw"
              className="rounded-[12px] object-cover"
            />
          </div>
        )}
      </div>
    </Container>
  );
}

export { VerticlePageHeader };
