import { Card } from "@/components/shared/card";
import { Carousel } from "@/components/shared/carousel";
import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types/features/about-team";

type TeamCarouselProps = {
  heading: string;
  description: string;
  members: TeamMember[];
  className?: string;
};

function TeamCarousel({
  heading,
  description,
  members,
  className,
}: TeamCarouselProps) {
  return (
    <section className={cn("w-full py-12 lg:px-10", className)}>
      <div className="mx-auto w-full max-w-6xl">
        <Carousel
          align="start"
          navPosition="top-right"
          className="px-4 py-0"
          header={
            <div className="flex max-w-2xl flex-col gap-3">
              <h2 className="font-poppins text-[25px] font-bold text-[#191C1E] md:text-[32px] lg:text-[36px]">
                {heading}
              </h2>
              <p className="text-[14px] font-normal text-[#494949] lg:text-[15px]">
                {description}
              </p>
            </div>
          }
        >
          {members.map(({ id, name, role, image, imageAlt }) => (
            <CarouselItem
              key={id}
              className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Card
                variant="bare"
                image={image}
                imageAlt={imageAlt}
                title={name}
                description={role}
                classNames={{
                  imageWrapper: "aspect-[8/9] rounded-[4px]",
                  content: "gap-1",
                  title: "text-[15px] font-bold uppercase text-[#191C1E]",
                  description: "text-[14px] font-normal text-[#494949]",
                }}
              />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export { TeamCarousel };
