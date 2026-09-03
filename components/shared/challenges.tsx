import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { cn } from "@/lib/utils";
import type { ChallengesProps } from "@/types/shared/challenges";
import { Icon } from "@/components/shared/icon";

function Challenges({ challenges, classNames }: ChallengesProps) {
  const { title, description, items } = challenges;

  return (
    <div className="bg-[#F8F8F8]">
      <Container>
        <div className="flex flex-col gap-8 lg:gap-10">
          <Jumbotron
            title={title}
            description={description}
            classNames={{
              ...classNames?.jumbotron,
              mainWrapper: cn(
                "px-0 py-0 lg:px-0 lg:py-0",
                classNames?.jumbotron?.mainWrapper,
              ),
              content: cn("max-w-3xl gap-3", classNames?.jumbotron?.content),
              title: cn(
                "font-times text-[28px] font-bold text-[#1E3C8C] md:text-[34px] lg:text-[40px]",
                classNames?.jumbotron?.title,
              ),
              description: cn(
                "text-[14px] text-[#494949] lg:text-[15px]",
                classNames?.jumbotron?.description,
              ),
            }}
          />

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {items.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
                eyebrow={<Icon src={item.image} className="size-6" />}
                classNames={{
                  ...classNames?.card,
                  mainWrapper: cn(
                    "h-full max-w-none rounded-[12px] border-transparent bg-white shadow-[0_4px_12px_#0000001F]",
                    classNames?.card?.mainWrapper,
                  ),
                  content: cn("gap-2 p-5", classNames?.card?.content),
                  title: cn(
                    "text-[15px] font-bold text-[#191C1E]",
                    classNames?.card?.title,
                  ),
                  description: cn(
                    "text-[13px] leading-relaxed text-[#494949]",
                    classNames?.card?.description,
                  ),
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export { Challenges };
