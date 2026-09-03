import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Carousel } from "@/components/shared/carousel";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import type { HomeSolutionsProps } from "@/types/features/home";

function HomeSolutions({ heading, solutions }: HomeSolutionsProps) {
  return (
    <Container>
      <Carousel
        align="start"
        navPosition="top-right"
        className="px-0 py-0"
        header={
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <Sparkles className="size-8 text-[#1E3C8C]" strokeWidth={1.5} />

            <h2 className="max-w-xl font-times text-[25px] font-bold text-[#2D2D2D] md:text-[30px] lg:text-[34px]">
              {heading}
            </h2>
          </div>
        }
      >
        {solutions.map(({ uuid, image, description, header, highlights }) => (
          <CarouselItem key={uuid} className="basis-full">
            <div className="grid h-full grid-cols-1 gap-8 rounded-[16px] md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-center lg:gap-12">
              <div className="flex flex-col gap-3">
                <span className=" flex size-12 items-center justify-center rounded-full bg-[rgba(26,42,74,0.08)]">
                  <Image
                    src={image}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </span>

                <h3 className="font-poppins text-[22px] font-semibold text-[#191818] lg:text-[24px]">
                  {header.title}
                </h3>

                <p className="text-[14px] leading-relaxed text-[#191818] font-normal">
                  {description}
                </p>

                <ul className="flex flex-col gap-3 mt-4">
                  {highlights.map((highlight) => (
                    <li
                      key={highlight.uuid}
                      className="flex items-center gap-3 text-[12px] font-normal text-[#191818]"
                    >
                      <Image
                        src={highlight.image}
                        alt=""
                        width={20}
                        height={20}
                        className="size-5 shrink-0"
                      />
                      {highlight.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6 rounded-[12px] bg-[#F8F8F8] p-5 lg:p-8">
                <div className="relative aspect-[4/3] w-full md:aspect-[16/10]">
                  <Image
                    src={header.image}
                    alt={header.title}
                    fill
                    sizes="(min-width: 1024px) 640px, (min-width: 768px) 55vw, 100vw"
                    className="rounded-[8px] object-cover"
                  />
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  arrow
                  nativeButton={false}
                  render={<Link href={`/solutions/${uuid}`} />}
                  className="h-12 w-full px-6 text-[15px] font-medium md:w-fit md:self-end"
                >
                  View Solution
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </Container>
  );
}

export { HomeSolutions };
