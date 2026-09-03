import { Container } from "@/components/shared/container";
import { SplitSection } from "@/components/shared/split-section";
import type { SolutionExperienceProps } from "@/types/features/solutions";

function SolutionExperience({ experience }: SolutionExperienceProps) {
  const { title, description, image, items } = experience;

  return (
    <Container>
      <SplitSection
        image={image}
        imageAlt={title}
        title={title}
        description={description}
        action={
          <ol className="flex w-full flex-col gap-12">
            {items.map((item, index) => (
              <li key={item.title} className="flex items-start gap-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1E3C8C] text-[12px] font-semibold text-white">
                  {index + 1}
                </span>

                <span className="flex flex-col gap-1.5">
                  <span className="font-times text-[17px] font-bold text-[#1E3C8C] lg:text-[24px]">
                    {item.title}
                  </span>
                  <span className="font-poppins text-[14px] leading-relaxed text-[#444651]">
                    {item.description}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        }
        classNames={{
          media:
            "aspect-[3/4] rounded-none bg-transparent md:aspect-auto md:h-full",
          image: "object-cover",
          content: "gap-4",
          title:
            "font-times text-[26px] font-bold text-[#1E3C8C] lg:text-[30px]",
          description: "max-w-none text-[16px] leading-relaxed text-[#444651]",
          action: "mt-4 w-full",
        }}
      />
    </Container>
  );
}

export { SolutionExperience };
