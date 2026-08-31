import { Jumbotron } from "@/components/shared/jumbotron";
import { Button } from "@/components/ui/button";
import type { SuccessStoriesHeaderProps } from "@/types/features/success-stories";

function SuccessStoriesHeader({ header, className }: SuccessStoriesHeaderProps) {
  return (
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
        mainWrapper: className,
        content: "w-full max-w-4xl gap-4",
        title:
          "font-times text-[30px] font-bold text-white md:text-[40px] lg:text-[48px]",
        description:
          "max-w-2xl text-[15px] leading-relaxed text-white/90 lg:text-[18px]",
      }}
    />
  );
}

export { SuccessStoriesHeader };
