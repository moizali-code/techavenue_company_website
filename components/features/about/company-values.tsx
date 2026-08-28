import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";
import type { CardProps } from "@/types/features/card";

type CompanyValuesProps = {
  heading: string;
  image: { src: string; alt?: string };
  values: (CardProps & { id: string })[];
  className?: string;
};

function CompanyValues({
  heading,
  image,
  values,
  className,
}: CompanyValuesProps) {
  return (
    <Container
      classNames={{
        mainWrapper: cn("lg:py-12", className),
        container: "flex flex-col gap-8 lg:gap-10",
      }}
    >
      <h1 className="text-[#191C1E] text-left  text-[25px] md:text-[32px] lg:text-[42px]  font-bold font-poppins">
        {heading}
      </h1>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card
          image={image.src}
          imageAlt={image.alt}
          classNames={{
            mainWrapper: "min-h-[260px] max-w-none md:min-h-[340px] lg:min-h-0",
            imageWrapper: "aspect-auto h-full flex-1",
          }}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:col-span-2">
          {values.map(({ id, ...value }, index) => {
            const isHighlighted = index === 1;

            return (
              <Card
                key={id}
                {...value}
                classNames={{
                  mainWrapper: cn(
                    "h-full max-w-none rounded-[8px] border-transparent shadow-none hover:shadow-none",
                    isHighlighted
                      ? "bg-[#1E3C8C] text-[#FFFFFF]"
                      : "bg-[#F8F8F8] text-[#494949]",
                    index === 0 && "md:col-span-2",
                  ),
                  title: `text-[28px] font-semibold  ${
                    isHighlighted ? "text-[#FFFFFF]" : "text-[#191C1E]"
                  }`,
                  description: `text-[16px] font-normal ${
                    isHighlighted ? "text-[#FFFFFF]" : "text-[#494949]"
                  }`,
                  action: index === 0 ? "justify-end" : undefined,
                }}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export { CompanyValues };
