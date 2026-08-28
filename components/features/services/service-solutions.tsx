import Image from "next/image";

import { Container } from "@/components/shared/container";
import { SplitSection } from "@/components/shared/split-section";
import type { ServiceSolutionsProps } from "@/types/features/services";

function ServiceSolutions({ solutions, className }: ServiceSolutionsProps) {
  return (
    <Container
      classNames={{
        mainWrapper: className,
        container: "flex flex-col gap-12 lg:gap-16",
      }}
    >
      {solutions.map(
        (
          { id, eyebrow, title, description, features, image, imageAlt },
          index,
        ) => {
          const isReversed = index % 2 === 1;

          return (
            <SplitSection
              key={id}
              image={image}
              imageAlt={imageAlt}
              reversed={isReversed}
              eyebrow={<span>{eyebrow}</span>}
              title={title}
              description={description}
              action={
                <ul className="flex w-full flex-col gap-2">
                  {features.map((feature) => (
                    <li
                      key={feature.title}
                      className="flex items-center gap-2 text-[13px] text-[#494949]"
                    >
                      <Image
                        src={feature.icon}
                        alt=""
                        width={16}
                        height={16}
                        className="size-4 shrink-0"
                      />
                      {feature.title}
                    </li>
                  ))}
                </ul>
              }
              classNames={{
                content: "font-poppins",
                eyebrow:
                  "text-[14px] font-bold uppercase tracking-[0.14em] text-[#1E3C8C]",
                title:
                  "font-poppins text-[24px] font-bold text-[#191C1E] md:text-[28px] lg:text-[32px]",
                description:
                  "text-[16px] leading-relaxed text-[#444651] font-normal",
                action: "mt-1 w-full",
              }}
            />
          );
        },
      )}
    </Container>
  );
}

export { ServiceSolutions };
