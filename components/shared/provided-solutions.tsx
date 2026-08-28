import Image from "next/image";

import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import type { ProvidedSolutionsProps } from "@/types/features/provided-solutions";

function ProvidedSolutions({
  providedSolutions,
  className,
}: ProvidedSolutionsProps) {
  const { title, description, items } = providedSolutions;

  return (
    <Container
      classNames={{
        mainWrapper: className,
        container: "flex flex-col gap-8 lg:gap-10",
      }}
    >
      <Jumbotron
        title={title}
        description={description}
        classNames={{
          mainWrapper: "px-0 py-0 lg:px-0 lg:py-0",
          content: "max-w-3xl gap-3",
          title: "font-poppins !text-[32px] font-bold",
          description: "text-[16px]",
        }}
      />

      <div className="grid w-full gap-4 md:grid-cols-2 lg:gap-6">
        {items.map((item) => (
          <Card
            key={item.title}
            iconPosition="inline"
            title={item.title}
            description={item.description}
            icon={
              <Image
                src={item.icon}
                alt=""
                width={20}
                height={20}
                className="size-5"
              />
            }
            classNames={{
              mainWrapper:
                "h-full max-w-none rounded-[12px] bg-white shadow-none py-2",
              content: "gap-2 p-5 lg:p-6",
              titleRow: "gap-2.5",
              title: "text-[18px] font-bold text-[#191C1E] lg:text-[20px]",
              description: "text-[14px] leading-relaxed text-[#494949]",
            }}
          />
        ))}
      </div>
    </Container>
  );
}

export { ProvidedSolutions };
