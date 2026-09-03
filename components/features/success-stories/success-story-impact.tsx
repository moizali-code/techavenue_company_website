import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { cn } from "@/lib/utils";
import type { SuccessStoryImpactProps } from "@/types/features/success-stories";

function SuccessStoryImpact({ impact, classNames }: SuccessStoryImpactProps) {
  const { title, description, items } = impact;

  return (
    <Container>
      <div className="flex flex-col gap-10 bg-[#FAFAFA] lg:gap-14">
        <Jumbotron
          title={title}
          description={description}
          classNames={{
            mainWrapper: cn(
              "px-0 py-0 lg:px-0 lg:py-0",
              classNames?.jumbotron?.mainWrapper,
            ),
            content: cn("max-w-3xl gap-3", classNames?.jumbotron?.content),
            title: cn(
              "font-poppins text-[24px] font-bold text-[#191C1E] md:text-[28px] lg:text-[32px]",
              classNames?.jumbotron?.title,
            ),
            description: cn(
              "text-[14px] text-[#494949] lg:text-[16px]",
              classNames?.jumbotron?.description,
            ),
          }}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12 justify-items-center">
          {items.map((item) => (
            <Card
              key={item.uuid}
              variant="bare"
              eyebrow={item.value}
              title={item.title}
              description={item.description}
              classNames={{
                mainWrapper: cn(
                  "max-w-none justify-self-center",
                  classNames?.card?.mainWrapper,
                ),
                content: cn("gap-1 px-0 pt-0 pb-0", classNames?.card?.content),
                eyebrow: cn(
                  "font-poppins text-[34px] font-medium text-[#1E3C8C] md:text-[40px] lg:text-[44px]",
                  classNames?.card?.eyebrow,
                ),
                title: cn(
                  "text-[16px] font-bold text-[#2D2D2D] lg:text-[20px]",
                  classNames?.card?.title,
                ),
                description: cn(
                  "text-[16px] leading-relaxed text-[#2D2D2D]",
                  classNames?.card?.description,
                ),
              }}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export { SuccessStoryImpact };
