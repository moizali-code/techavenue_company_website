"use client";

import { Button } from "@/components/ui/button";
import type { SuccessStoryFilterRowProps } from "@/types/features/success-stories";

const ALL_FILTER_UUID = "all";
const ALL_FILTER_LABEL = "All";

function SuccessStoriesFilterRow({
  label,
  options,
  activeUuid,
  onSelect,
}: SuccessStoryFilterRowProps) {
  const pills = [
    { uuid: ALL_FILTER_UUID, title: ALL_FILTER_LABEL },
    ...options.map(({ uuid, title }) => ({ uuid, title })),
  ];

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
      <span className="text-[13px] font-semibold text-[#191C1E] md:w-24 md:shrink-0 lg:text-[14px]">
        {label}
      </span>

      <div className="flex flex-wrap gap-2 lg:gap-3">
        {pills.map((pill) => (
          <Button
            key={pill.uuid}
            size="sm"
            variant={pill.uuid === activeUuid ? "brand" : "secondary"}
            onClick={() => onSelect(pill.uuid)}
            className="h-auto rounded-full px-4 py-2 text-[12px] font-normal tracking-normal whitespace-normal lg:px-5 lg:text-[13px]"
          >
            {pill.title}
          </Button>
        ))}
      </div>
    </div>
  );
}

export { SuccessStoriesFilterRow, ALL_FILTER_UUID };
