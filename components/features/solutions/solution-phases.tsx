import { Container } from "@/components/shared/container";
import type { SolutionPhasesProps } from "@/types/features/solutions";

function SolutionPhases({ phases }: SolutionPhasesProps) {
  return (
    <Container className="pt-6 lg:pt-6">
      <div className="grid md:grid-cols-3 border-y border-[#E5E5E5] py-5">
        {phases.map(({ uuid, title, focus, description }, index) => (
          <div
            key={uuid}
            className="flex flex-col gap-2 border-t border-[#E5E5E5] py-6 first:border-t-0 first:pt-0 last:pb-0 md:border-t-0 md:border-l md:px-8 md:py-0 md:first:border-l-0 md:first:pl-0 md:last:pr-0 lg:px-12"
          >
            <span className="text-[12px] font-medium tracking-[0.14em] text-[#8A8A8A] uppercase">
              {`Phase ${String(index + 1).padStart(2, "0")}`}
            </span>

            <h3 className="text-[20px] font-bold text-[#191C1E] lg:text-[22px]">
              {title}
            </h3>

            <p className="text-[14px] font-medium text-[#1E3C8C]">{focus}</p>

            <p className="text-[14px] leading-relaxed text-[#494949]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export { SolutionPhases };
