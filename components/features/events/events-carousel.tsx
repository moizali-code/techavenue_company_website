import Link from "next/link";
import { MapPin } from "lucide-react";

import { Card } from "@/components/shared/card";
import { Carousel } from "@/components/shared/carousel";
import { Container } from "@/components/shared/container";
import { CarouselItem } from "@/components/ui/carousel";
import { formatDay } from "@/lib/formatters/day-formatter";
import { cn } from "@/lib/utils";
import type { EventsCarouselProps } from "@/types/features/events";

function EventsCarousel({ events, className }: EventsCarouselProps) {
  return (
    <Container
      classNames={{
        mainWrapper: cn("bg-[#F8F8F8]", className),
        container: "px-0",
      }}
    >
      <Carousel
        align="start"
        navPosition="top-right"
        className="px-0 py-12"
        header={
          <h2 className="font-poppins text-[25px] font-semibold text-[#191C1E] md:text-[30px] lg:text-[34px]">
            Global Events Calendar
          </h2>
        }
      >
        {events.map((event) => (
          <CarouselItem
            key={event.uuid}
            className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <Link href={`/events/${event.uuid}`} className="group block h-full">
              <Card
                image={event.image}
                title={event.title}
                tags={
                  <span className="flex flex-col items-center rounded-[8px] bg-white px-2.5 py-1 shadow-[0_2px_8px_#00000026]">
                    <span className="text-[16px] font-bold text-[#1E3C8C]">
                      {formatDay(event.startsAt, "day")}
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.08em] text-[#8A8A8A] uppercase">
                      {formatDay(event.startsAt, "month")}
                    </span>
                  </span>
                }
                footer={
                  <>
                    <MapPin className="size-3.5 shrink-0" strokeWidth={1.5} />
                    <span>{event.location}</span>
                  </>
                }
                classNames={{
                  mainWrapper:
                    "h-full max-w-none rounded-[12px] border-[#E6E6E6] shadow-none transition-shadow hover:shadow-[0_4px_12px_#0000001F]",
                  imageWrapper: "aspect-[16/9]",
                  image:
                    "transition-transform duration-300 group-hover:scale-105",
                  content: "gap-1.5 p-4",
                  title:
                    "text-[18px] font-medium text-[#191C1E] transition-colors group-hover:text-brand-link",
                  footer:
                    "flex items-center gap-1.5 text-[14px] text-[#444651] font-semibold",
                }}
              />
            </Link>
          </CarouselItem>
        ))}
      </Carousel>
    </Container>
  );
}

export { EventsCarousel };
