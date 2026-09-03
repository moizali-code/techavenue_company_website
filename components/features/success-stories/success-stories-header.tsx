import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Button } from "@/components/ui/button";
import type { SuccessStoriesHeaderProps } from "@/types/features/success-stories";

function SuccessStoriesHeader({
  header,
  intro,
  className,
}: SuccessStoriesHeaderProps) {
  return (
    <>
      <Jumbotron
        title={header.title}
        description={header.description}
        backgroundImage={header.backgroundImage}
        eyebrow={
          <Button variant="tab" className="rounded-full px-4 py-1.5">
            Success Stories
          </Button>
        }
        classNames={{
          mainWrapper: `h-[400px] lg:h-[500px] !items-end ${className}`,
          content: "w-full max-w-4xl gap-4",
          title:
            "font-times text-[30px] font-bold text-white md:text-[40px] lg:text-[48px]",
          description:
            "max-w-2xl text-[15px] leading-relaxed text-white/90 lg:text-[18px]",
        }}
      />

      <Container
        classNames={{
          mainWrapper: "relative isolate overflow-hidden bg-white",
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
    </>
  );
}

export { SuccessStoriesHeader };
