import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { IndustryTabsProps } from "@/types/features/industry";

function IndustryTabs({ tabs, activeUuid, className }: IndustryTabsProps) {
  return (
    <section className={cn("w-full px-4 py-8 lg:px-10 lg:py-10", className)}>
      <div className="mx-auto flex w-full max-w-6xl flex-wrap gap-3">
        {tabs.map((tab) => (
          <Button
            key={tab.uuid}
            size="lg"
            variant={tab.uuid === activeUuid ? "brand" : "secondary"}
            nativeButton={false}
            render={<Link href={`/industry/${tab.uuid}`} />}
            className="h-auto rounded-full px-5 py-2.5 text-[14px] font-normal tracking-normal whitespace-normal lg:px-6"
          >
            {tab.title}
          </Button>
        ))}
      </div>
    </section>
  );
}

export { IndustryTabs };
