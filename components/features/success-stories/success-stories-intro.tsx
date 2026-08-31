import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { cn } from "@/lib/utils";
import type { SuccessStoriesIntroProps } from "@/types/features/success-stories";

function SuccessStoriesIntro({ intro, className }: SuccessStoriesIntroProps) {
  return (
    <Container
      classNames={{
        mainWrapper: cn(
          "relative isolate overflow-hidden bg-white ",
          className,
        ),
        container: "relative",
      }}
    >
      <Jumbotron
        title={
          <>
            {intro.titleStart}{" "}
            <span className="text-[#1E3C8C]">{intro.titleHighlight}</span>{" "}
            {intro.titleEnd}
          </>
        }
        description={intro.description}
        classNames={{
          mainWrapper: "px-0 py-0 lg:px-0 lg:py-0",
          content: "max-w-3xl gap-4",
          title:
            "font-times text-[26px] font-normal text-[#191C1E] md:text-[34px] lg:text-[40px]",
          description:
            "text-[14px] leading-relaxed text-[#444651] lg:text-[15px]",
        }}
      />
    </Container>
  );
}

export { SuccessStoriesIntro };
