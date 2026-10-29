import { Container } from "@/components/shared/container";
import type { HomeIntroProps } from "@/types/features/home";

function HomeIntro({
  headingStart,
  headingHighlight,
  headingEnd,
  headingSecondLine,
  experienceLabel,
  experienceValue,
  description,
}: HomeIntroProps) {
  return (
    <Container>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
        <h1 className="font-times text-[32px] leading-[1.15] text-[#191C1E] md:text-[44px] lg:text-[56px] xl:text-[64px]">
          <span className="block">
            {headingStart}{" "}
            <span className="text-[#1E3C8C]">{headingHighlight}</span>{" "}
            {headingEnd}
          </span>

          <span className="mt-3 flex flex-wrap items-end gap-x-5 gap-y-3 lg:mt-4 lg:gap-x-8">
            <span className="flex flex-col font-poppins leading-tight">
              <span className="text-[10px] font-normal text-[#494949] lg:text-[12px]">
                {experienceLabel}
              </span>
              <span className="text-[18px] font-semibold text-[#191C1E] lg:text-[22px]">
                {experienceValue}
              </span>
            </span>

            <span>{headingSecondLine}</span>
          </span>
        </h1>

        <div className="lg:border-l lg:border-[#E6E6E6] lg:pl-14">
          <p className="max-w-md font-be-vietnam text-[15px] leading-relaxed text-[#494949] lg:text-[16px]">
            {description}
          </p>
        </div>
      </div>
    </Container>
  );
}

export { HomeIntro };
