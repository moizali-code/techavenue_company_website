"use client";

import { useEffect, useRef, useState } from "react";

import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { Paginator } from "@/components/shared/paginator";
import { TabGroup } from "@/components/shared/tab-group";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { industries } from "@/mock/industry";
import { solutions } from "@/mock/solutions";
import type { SuccessStoriesGridProps } from "@/types/features/success-stories";
import type { TabGroupItem } from "@/types/shared/tab-group";

const STORIES_PER_PAGE = 9;
const ALL_FILTER_UUID = "all";
const TAG_BADGE_CLASSNAME =
  "h-6 px-3 text-[10px] font-semibold tracking-[0.08em] text-white uppercase";
const FILTER_LABEL_CLASSNAME =
  "pt-2 text-[13px] font-semibold text-[#191C1E] md:w-24 md:shrink-0 lg:text-[14px]";

const allFilterTab: TabGroupItem = {
  id: 0,
  uuid: ALL_FILTER_UUID,
  title: "All",
};

const solutionTabs: TabGroupItem[] = [
  allFilterTab,
  ...solutions.map(({ id, uuid, title }) => ({ id, uuid, title })),
];

const industryTabs: TabGroupItem[] = [
  allFilterTab,
  ...industries.map(({ id, uuid, title }) => ({ id, uuid, title })),
];

function SuccessStoriesGrid({ stories }: SuccessStoriesGridProps) {
  const [solutionUuid, setSolutionUuid] = useState(ALL_FILTER_UUID);
  const [industryUuid, setIndustryUuid] = useState(ALL_FILTER_UUID);
  const [page, setPage] = useState(1);
  const resultsRef = useRef<HTMLDivElement>(null);
  const previousSelectionRef = useRef(`${page}|${solutionUuid}|${industryUuid}`);

  const matchingStories = stories.filter((story) => {
    const matchesSolution =
      solutionUuid === ALL_FILTER_UUID || story.solution.uuid === solutionUuid;
    const matchesIndustry =
      industryUuid === ALL_FILTER_UUID || story.industry.uuid === industryUuid;

    return matchesSolution && matchesIndustry;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(matchingStories.length / STORIES_PER_PAGE),
  );
  const visibleStories = matchingStories.slice(
    (page - 1) * STORIES_PER_PAGE,
    page * STORIES_PER_PAGE,
  );

  useEffect(() => {
    const selection = `${page}|${solutionUuid}|${industryUuid}`;
    if (previousSelectionRef.current === selection) return;
    previousSelectionRef.current = selection;
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page, solutionUuid, industryUuid]);

  const selectSolution = (uuid: string) => {
    setSolutionUuid(uuid);
    setPage(1);
  };

  const selectIndustry = (uuid: string) => {
    setIndustryUuid(uuid);
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-8  lg:gap-10">
      <div className="bg-[#FAFAFA]">
        <Container>
          <div className="flex flex-col gap-5 rounded-[12px] ">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-5">
              <span className={FILTER_LABEL_CLASSNAME}>Solutions:</span>

              <TabGroup
                tabs={solutionTabs}
                activeUuid={solutionUuid}
                onSelect={selectSolution}
              />
            </div>

            <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-start md:gap-5">
              <span className={FILTER_LABEL_CLASSNAME}>Industry:</span>

              <TabGroup
                tabs={industryTabs}
                activeUuid={industryUuid}
                onSelect={selectIndustry}
              />
            </div>
          </div>
        </Container>
      </div>

      <div ref={resultsRef} className="scroll-mt-24">
        {visibleStories.length === 0 ? (
          <p className="py-10 text-center text-[15px] text-[#444651]">
            No success stories match the selected filters yet.
          </p>
        ) : (
          <Container>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 pb-6">
              {visibleStories.map((story) => (
                <Card
                  key={story.uuid}
                  image={story.image}
                  imageAlt={story.title}
                  imageOverlay={
                    <>
                      <Badge className={cn(TAG_BADGE_CLASSNAME, "bg-[#1E3C8C]")}>
                        {story.solution.title}
                      </Badge>
                      <Badge className={cn(TAG_BADGE_CLASSNAME, "bg-[#F97316]")}>
                        {story.industry.title}
                      </Badge>
                    </>
                  }
                  title={story.title}
                  description={story.description}
                  href={`/success-stories/${story.uuid}`}
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

            <Paginator page={page} totalPages={totalPages} setPage={setPage} />
          </Container>
        )}
      </div>
    </div>
  );
}

export { SuccessStoriesGrid };
