import Image from "next/image";

import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { cn } from "@/lib/utils";
import type { IndustryChallengesProps } from "@/types/features/industry";

function IndustryChallenges({
  challenges,
  className,
}: IndustryChallengesProps) {
  const { title, description, items } = challenges;

  return (
    <Container
      classNames={{
        mainWrapper: cn("bg-[#F8F8F8]", className),
        container: "flex flex-col gap-8 lg:gap-10",
      }}
    >
      <Jumbotron
        title={title}
        description={description}
        classNames={{
          mainWrapper: "px-0 py-0 lg:px-0 lg:py-0",
          content: "max-w-3xl gap-3",
          title:
            "font-times text-[28px] font-bold text-[#1E3C8C] md:text-[34px] lg:text-[40px]",
          description: "text-[14px] text-[#494949] lg:text-[15px]",
        }}
      />

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            eyebrow={
              <Image
                src={item.icon}
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
            }
            classNames={{
              mainWrapper:
                "h-full max-w-none rounded-[12px] border-transparent bg-white shadow-[0_4px_12px_#0000001F]",
              content: "gap-2 p-5",
              title: "text-[15px] font-bold text-[#191C1E]",
              description: "text-[13px] leading-relaxed text-[#494949]",
            }}
          />
        ))}
      </div>
    </Container>
  );
}

export { IndustryChallenges };
