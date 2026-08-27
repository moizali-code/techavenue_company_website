import Image from "next/image";

import { Card } from "@/components/shared/card";
import { Jumbotron } from "@/components/shared/jumbotron";
import { cn } from "@/lib/utils";
import type { ServiceSolutionsProps } from "@/types/features/services";

function ServiceSolutions({ solutions, className }: ServiceSolutionsProps) {
  return (
    <section className={cn("w-full px-4 py-12 lg:px-10 lg:py-16", className)}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:gap-16">
        {solutions.map(
          (
            { id, eyebrow, title, description, features, image, imageAlt },
            index,
          ) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={id}
                className="grid items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-14"
              >
                <div className={cn(isReversed && "md:order-2")}>
                  <Card
                    image={image}
                    imageAlt={imageAlt}
                    classNames={{
                      mainWrapper:
                        "max-w-none rounded-[12px] border-transparent shadow-none hover:shadow-none",
                      imageWrapper: "aspect-[4/3] rounded-[12px]",
                    }}
                  />
                </div>

                <div className={cn(isReversed && "md:order-1")}>
                  <Jumbotron
                    align="left"
                    title={title}
                    description={description}
                    eyebrow={<span>{eyebrow}</span>}
                    action={
                      <ul className="flex w-full flex-col gap-2">
                        {features.map((feature) => (
                          <li
                            key={feature.title}
                            className="flex items-center gap-2 text-[13px] text-[#494949]"
                          >
                            <Image
                              src={feature.icon}
                              alt=""
                              width={16}
                              height={16}
                              className="size-4 shrink-0"
                            />
                            {feature.title}
                          </li>
                        ))}
                      </ul>
                    }
                    classNames={{
                      mainWrapper: "px-0 py-0 lg:px-0 lg:py-0 font-poppins",
                      content: "max-w-none gap-3",
                      eyebrow:
                        "text-[14px] font-bold uppercase tracking-[0.14em] text-[#1E3C8C]",
                      title:
                        "font-poppins text-[24px] font-bold text-[#191C1E] md:text-[28px] lg:text-[32px]",
                      description:
                        "max-w-none text-[16px] leading-relaxed text-[#444651] font-normal",
                      action: "mt-1 w-full",
                    }}
                  />
                </div>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}

export { ServiceSolutions };
