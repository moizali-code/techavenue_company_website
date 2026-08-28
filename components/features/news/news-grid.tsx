"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock } from "lucide-react";

import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { formatDay } from "@/lib/formatters/day-formatter";
import type { NewsGridProps } from "@/types/features/news";

const VISIBLE_STEP = 9;

function NewsGrid({ stories, className }: NewsGridProps) {
  const [visibleCount, setVisibleCount] = useState(VISIBLE_STEP);
  const visibleStories = stories.slice(0, visibleCount);
  const hasMore = visibleCount < stories.length;

  return (
    <Container
      classNames={{
        mainWrapper: className,
        container: "flex flex-col gap-10",
      }}
    >
      <div className="grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {visibleStories.map((story) => (
          <Link
            key={story.uuid}
            href={`/news/${story.uuid}`}
            className="group block h-full"
          >
            <Card
              variant="bare"
              image={story.image}
              eyebrow={story.category}
              title={story.title}
              description={story.description}
              footer={
                <>
                  <Clock className="size-4" strokeWidth={1.5} />
                  <span>{formatDay(story.publishedAt)}</span>
                </>
              }
              classNames={{
                mainWrapper: "h-full",
                imageWrapper: "aspect-[16/9] rounded-[12px]",
                image:
                  "transition-transform duration-300 group-hover:scale-105",
                content: "gap-2",
                titleRow: "gap-1.5",
                eyebrow:
                  "text-[14px] text-[#1E3C8C]  font-semibold tracking-[0.08em] uppercase",
                title: "text-[17px] font-bold text-[#191C1E] lg:text-[18px]",
                description: "text-[13px] leading-relaxed text-[#444651]",
                footer:
                  "flex items-center justify-between pt-4 text-[11px] font-semibold tracking-[0.08em] text-[#8A8A8A] uppercase",
              }}
            />
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setVisibleCount((count) => count + VISIBLE_STEP)}
            className="h-12 px-8 text-[14px] font-semibold tracking-[0.08em] uppercase"
          >
            Load More
          </Button>
        </div>
      )}
    </Container>
  );
}

export { NewsGrid };
