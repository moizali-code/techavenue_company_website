"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Clock } from "lucide-react";

import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { Paginator } from "@/components/shared/paginator";
import { formatDay } from "@/lib/formatters/day-formatter";
import type { NewsGridProps } from "@/types/features/news";

const STORIES_PER_PAGE = 9;

function NewsGrid({ stories, className }: NewsGridProps) {
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  const previousPageRef = useRef(page);

  const totalPages = Math.max(1, Math.ceil(stories.length / STORIES_PER_PAGE));
  const visibleStories = stories.slice(
    (page - 1) * STORIES_PER_PAGE,
    page * STORIES_PER_PAGE,
  );

  useEffect(() => {
    if (previousPageRef.current === page) return;
    previousPageRef.current = page;
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page]);

  return (
    <Container
      classNames={{
        mainWrapper: className,
        container: "flex flex-col gap-10",
      }}
    >
      <div
        ref={gridRef}
        className="grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
      >
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

      <Paginator page={page} totalPages={totalPages} setPage={setPage} />
    </Container>
  );
}

export { NewsGrid };
