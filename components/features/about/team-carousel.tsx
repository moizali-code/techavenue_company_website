import { TeamMemberModal } from "@/components/features/about/team-member-modal";
import { Card } from "@/components/shared/card";
import { Carousel } from "@/components/shared/carousel";
import { CarouselItem } from "@/components/ui/carousel";
import type { TeamSection } from "@/types/features/about";

type TeamCarouselProps = TeamSection;

function TeamCarousel({ heading, description, members }: TeamCarouselProps) {
  return (
    <Carousel
      align="start"
      navPosition="top-right"
      className="px-0 py-0"
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
      {members.map((member) => (
        <CarouselItem
          key={member.uuid}
          className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
        >
          <TeamMemberModal
            member={member}
            trigger={
              <button type="button" className="cursor-pointer">
                <Card
                  variant="bare"
                  image={member.image}
                  imageAlt={member.name}
                  title={member.name}
                  description={member.role}
                  classNames={{
                    imageWrapper: "aspect-[3/4] rounded-[4px] h-[400px]",
                    image: "object-top",
                    content: "gap-1",
                    title: "text-[15px] font-bold uppercase text-[#191C1E]",
                    description: "text-[14px] font-normal text-[#494949]",
                  }}
                />
              </button>
            }
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
}

export { TeamCarousel };
