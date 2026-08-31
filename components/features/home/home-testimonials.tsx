import Image from "next/image";
import { Globe, Star } from "lucide-react";

import { Card } from "@/components/shared/card";
import { Carousel } from "@/components/shared/carousel";
import { Container } from "@/components/shared/container";
import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import type { HomeTestimonialsProps } from "@/types/features/home";

const MAX_RATING = 5;

function HomeTestimonials({
  heading,
  description,
  testimonials,
  className,
}: HomeTestimonialsProps) {
  return (
    <Container
      classNames={{ mainWrapper: cn("bg-[#F8F8F8]", className) }}
    >
      <Carousel
        align="start"
        className="px-0 py-0"
        header={
          <div className="mb-10 flex flex-col items-center gap-4 text-center">
            <Globe className="size-8 text-[#1E3C8C]" strokeWidth={1.5} />

            <h2 className="max-w-2xl font-poppins text-[25px] font-bold text-[#191C1E] md:text-[30px] lg:text-[34px]">
              {heading}
            </h2>

            <p className="max-w-xl text-[14px] font-normal text-[#494949] lg:text-[15px]">
              {description}
            </p>
          </div>
        }
      >
        {testimonials.map(({ uuid, quote, name, role, avatar, rating }) => (
          <CarouselItem
            key={uuid}
            className="basis-full md:basis-1/2 lg:basis-1/3"
          >
            <div className="relative h-full pt-9">
              <span className="absolute top-0 left-1/2 z-10 size-18 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white">
                <Image
                  src={avatar}
                  alt=""
                  fill
                  sizes="72px"
                  className="object-cover"
                />
              </span>

              <Card
                description={`"${quote}"`}
                footer={
                  <div className="flex flex-col items-center gap-1.5 border-t border-[#EDEDED] pt-4">
                    <span className="text-[16px] font-bold text-[#191C1E]">
                      {name}
                    </span>

                    <span className="text-[10px] tracking-[0.06em] text-[#8A8A8A] uppercase">
                      {role}
                    </span>

                    <span className="flex items-center gap-0.5">
                      {Array.from({ length: MAX_RATING }, (_, index) => (
                        <Star
                          key={index}
                          className={cn(
                            "size-3.5",
                            index < rating
                              ? "fill-[#F5A623] text-[#F5A623]"
                              : "fill-transparent text-[#D8D8D8]",
                          )}
                        />
                      ))}
                    </span>
                  </div>
                }
                classNames={{
                  mainWrapper:
                    "h-full max-w-none rounded-[12px] border-[#EDEDED] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.04)] hover:shadow-[0px_10px_30px_0px_rgba(0,0,0,0.08)]",
                  content: "gap-5 px-5 pt-12 pb-5 text-center",
                  description: "text-[14px] leading-relaxed text-[#494949]",
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </Container>
  );
}

export { HomeTestimonials };
