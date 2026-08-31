import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import type { FollowUsProps } from "@/types/features/career";

function FollowUs({ title, description, links, className }: FollowUsProps) {
  return (
    <Container
      classNames={{
        mainWrapper: className,
        container:
          "font-poppins flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16",
      }}
    >
      <Jumbotron
        align="left"
        title={title}
        description={description}
        classNames={{
          mainWrapper: "px-0 py-0 lg:flex-1 lg:px-0 lg:py-0",
          content: "max-w-none gap-3",
          title:
            "font-poppins text-[26px] font-bold text-[#191C1E] lg:text-[32px]",
          description:
            "max-w-none text-[16px] leading-relaxed text-[#444651]",
        }}
      />

      <div className="flex shrink-0 items-center gap-4">
        {links.map((link) => (
          <Link
            key={link.uuid}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="border border-[#E8E8E8] flex size-14 items-center justify-center rounded-[12px] bg-[rgba(44,92,175,0.05)] transition-colors hover:bg-[#E6EBF7]"
          >
            <span
              aria-hidden="true"
              style={{
                maskImage: `url(${link.icon})`,
                WebkitMaskImage: `url(${link.icon})`,
              }}
              className="size-6 bg-[#1E3C8C] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
            />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export { FollowUs };
