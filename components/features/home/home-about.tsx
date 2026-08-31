import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { SplitSection } from "@/components/shared/split-section";
import { Button } from "@/components/ui/button";
import type { HomeAboutProps } from "@/types/features/home";

function HomeAbout({
  eyebrow,
  title,
  description,
  image,
  highlights,
  actionLabel,
  href,
  className,
}: HomeAboutProps) {
  return (
    <Container classNames={{ mainWrapper: className }}>
      <SplitSection
        image={image}
        imageAlt="Tech Avenue consultants collaborating with a client team"
        eyebrow={<span>{eyebrow}</span>}
        title={title}
        description={description}
        action={
          <div className="flex w-full flex-col gap-6">
            <ul className="flex flex-col gap-3">
              {highlights.map(({ uuid, label, icon }) => (
                <li
                  key={uuid}
                  className="flex items-center gap-3 text-[14px] font-semibold text-[#2D2D2D] lg:text-[14px]"
                >
                  <Image
                    src={icon}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 shrink-0"
                  />
                  {label}
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              size="lg"
              arrow
              nativeButton={false}
              render={<Link href={href} />}
              className="h-12 w-fit px-6 text-[15px] font-medium"
            >
              {actionLabel}
            </Button>
          </div>
        }
        classNames={{
          content: "font-poppins gap-4",
          media: "aspect-[4/3] lg:aspect-[16/11]",
          eyebrow:
            "text-[14px] font-bold uppercase tracking-[0.14em] text-[#1E3C8C]",
          title:
            "font-poppins text-[24px] font-bold text-[#191C1E] md:text-[28px] lg:text-[32px]",
          description: "text-[16px] font-normal leading-relaxed text-[#444651]",
          action: "mt-2 w-full",
        }}
      />
    </Container>
  );
}

export { HomeAbout };
