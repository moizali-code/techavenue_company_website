"use client";

import { useState } from "react";
import { Play } from "lucide-react";

import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Paginator } from "@/components/shared/paginator";
import type { LifeAtTechAvenueProps } from "@/types/features/career";

const HIGHLIGHTS_PER_PAGE = 9;

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".mov"];

function isVideo(media: string) {
  return VIDEO_EXTENSIONS.some((extension) =>
    media.toLowerCase().endsWith(extension),
  );
}

function LifeAtTechAvenue({
  eyebrow,
  title,
  description,
  highlights,
  className,
}: LifeAtTechAvenueProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(highlights.length / HIGHLIGHTS_PER_PAGE),
  );
  const currentPage = Math.min(page, totalPages);
  const visibleHighlights = highlights.slice(
    (currentPage - 1) * HIGHLIGHTS_PER_PAGE,
    currentPage * HIGHLIGHTS_PER_PAGE,
  );

  return (
    <Container
      classNames={{
        mainWrapper: className,
        container: "font-poppins flex flex-col gap-10",
      }}
    >
      <Jumbotron
        align="left"
        eyebrow={eyebrow}
        title={title}
        description={description}
        classNames={{
          mainWrapper: "px-0 py-0 lg:px-0 lg:py-0",
          content: "max-w-none gap-3",
          eyebrow:
            "text-[14px] font-bold tracking-[0.14em] text-[#1E3C8C] uppercase",
          title:
            "font-poppins text-[26px] font-bold text-[#191C1E] lg:text-[32px]",
          description: "max-w-4xl text-[18px] leading-relaxed text-[#444651]",
        }}
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleHighlights.map((highlight) => (
          <Card
            key={highlight.uuid}
            variant="bare"
            title={highlight.title}
            description={highlight.description}
            image={isVideo(highlight.media) ? undefined : highlight.media}
            imageAlt={highlight.title}
            video={isVideo(highlight.media) ? highlight.media : undefined}
            classNames={{
              mainWrapper: "h-full max-w-none",
              imageWrapper: "aspect-[16/9] rounded-[10px]",
              content: "gap-2",
              title: "text-[18px] font-bold text-[#191C1E]",
              description: "text-[14px] leading-relaxed text-[#444651]",
              imageOverlay:
                "inset-0 top-0 left-0 items-center justify-center lg:top-0 lg:left-0",
            }}
          />
        ))}
      </div>

      <Paginator
        page={currentPage}
        totalPages={totalPages}
        setPage={setPage}
        className="justify-center md:justify-end"
      />
    </Container>
  );
}

export { LifeAtTechAvenue };
