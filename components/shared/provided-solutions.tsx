import Image from "next/image";

import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { cn } from "@/lib/utils";
import type { ProvidedSolutionsProps } from "@/types/features/provided-solutions";

function ProvidedSolutions({
  providedSolutions,
  classNames,
}: ProvidedSolutionsProps) {
  const { title, description, items } = providedSolutions;

  return (
    <Container
      classNames={{
        mainWrapper: classNames?.container?.mainWrapper,
        container: cn(
          "flex flex-col gap-8 lg:gap-10",
          classNames?.container?.container,
        ),
      }}
    >
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
            "font-poppins !text-[32px] font-bold",
            classNames?.jumbotron?.title,
          ),
          description: cn("text-[16px]", classNames?.jumbotron?.description),
        }}
      />

      <div className="grid w-full gap-4 md:grid-cols-2 lg:gap-6">
        {items.map((item) => (
          <Card
            key={item.title}
            eyebrowPosition="inline"
            title={item.title}
            description={item.description}
            eyebrow={
              <Image
                src={item.image}
                alt=""
                width={20}
                height={20}
                className="size-5"
              />
            }
            classNames={{
              mainWrapper: cn(
                "h-full max-w-none rounded-[12px] bg-white shadow-none py-2",
                classNames?.card?.mainWrapper,
              ),
              content: cn("gap-2 p-5 lg:p-6", classNames?.card?.content),
              titleRow: cn("gap-2.5", classNames?.card?.titleRow),
              title: cn(
                "text-[18px] font-bold text-[#191C1E] lg:text-[20px]",
                classNames?.card?.title,
              ),
              description: cn(
                "text-[14px] leading-relaxed text-[#494949]",
                classNames?.card?.description,
              ),
            }}
          />
        ))}
      </div>
    </Container>
  );
}

export { ProvidedSolutions };
