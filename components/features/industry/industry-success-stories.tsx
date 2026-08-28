import Link from "next/link";
import { CircleArrowRight } from "lucide-react";

import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { IndustrySuccessStoriesProps } from "@/types/features/industry";

const VISIBLE_STORIES_COUNT = 3;

function IndustrySuccessStories({
  successStories,
  className,
}: IndustrySuccessStoriesProps) {
  const { title, description, actionLabel, actionHref, items } = successStories;
  const visibleStories = items.slice(0, VISIBLE_STORIES_COUNT);

  return (
    <Container
      classNames={{
        mainWrapper: className,
        container: "flex flex-col gap-8 lg:gap-10",
      }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
        <Jumbotron
          align="left"
          title={title}
          description={description}
          classNames={{
            mainWrapper: "px-0 py-0 lg:px-0 lg:py-0 w-fit",
            content: "max-w-md gap-3 ",
            title:
              "font-poppins text-[28px] font-bold text-[#191C1E] md:text-[26px] lg:text-[28px]",
            description: "text-[16px] leading-relaxed text-[#444651]",
          }}
        />

        <Link
          href={actionHref}
          className="inline-flex shrink-0 items-center gap-2 text-[15px] font-bold text-[#1E3C8C] transition-opacity hover:opacity-80 lg:text-[16px]"
        >
          {actionLabel}
          <CircleArrowRight className="size-5" strokeWidth={1.5} />
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 py-6">
        {visibleStories.map((story) => (
          <Card
            key={story.title}
            image={story.image}
            imageAlt={story.imageAlt}
            tags={story.tags.map((tag, index) => (
              <Badge
                key={tag}
                className={cn(
                  "h-6 px-3 text-[10px] font-semibold tracking-[0.08em] text-white uppercase",
                  index === 0 ? "bg-[#1E3C8C]" : "bg-[#F97316]",
                )}
              >
                {tag}
              </Badge>
            ))}
            title={story.title}
            description={story.description}
            href={story.href}
            classNames={{
              mainWrapper:
                "h-full max-w-none rounded-[12px] border-transparent bg-white shadow-[0_4px_12px_#0000001F]",
              content: "gap-3 p-5 lg:p-6",
              title: "text-[20px] font-bold text-[#191C1E] lg:text-[22px]",
              description: "text-[14px] leading-relaxed text-[#494949]",
              action: "mt-auto pt-3",
            }}
          />
        ))}
      </div>
    </Container>
  );
}

export { IndustrySuccessStories };
