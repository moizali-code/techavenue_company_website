import Image from "next/image";

import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import type { HomeMissionVisionProps } from "@/types/features/home";

function HomeMissionVision({ items, className }: HomeMissionVisionProps) {
  return (
    <Container
      classNames={{
        mainWrapper: className,
        container: "grid gap-6 md:grid-cols-2 lg:gap-8",
      }}
    >
      {items.map(({ uuid, title, description, icon }) => (
        <Card
          key={uuid}
          eyebrow={
            <span className="flex size-12 items-center justify-center rounded-[10px] bg-[#EEF2FB]">
              <Image
                src={icon}
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
            </span>
          }
          title={title}
          description={description}
          classNames={{
            mainWrapper:
              "h-full max-w-none rounded-[12px] border-[#EDEDED] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.04)] hover:shadow-[0px_10px_30px_0px_rgba(0,0,0,0.08)]",
            content: "gap-4 p-6 lg:p-8",
            titleRow: "gap-5",
            title: "font-times text-[24px] font-bold text-[#191C1E]",
            description: "text-[15px] leading-relaxed text-[#494949]",
          }}
        />
      ))}
    </Container>
  );
}

export { HomeMissionVision };
