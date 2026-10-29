"use client";

import Link from "next/link";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { TabGroupProps } from "@/types/shared/tab-group";

function TabGroup({
  id,
  tabs,
  activeUuid,
  onSelect,
  hrefPrefix,
  variant = "pill",
  classNames,
}: TabGroupProps) {
  return (
    <Tabs
      id={id}
      value={activeUuid}
      onValueChange={(value) => onSelect?.(String(value))}
      className={cn("w-full", classNames?.mainWrapper)}
    >
      <TabsList variant={variant} className={classNames?.list}>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.uuid}
            value={tab.uuid}
            nativeButton={!hrefPrefix}
            render={
              hrefPrefix ? (
                <Link href={`${hrefPrefix}/${tab.uuid}`} />
              ) : undefined
            }
            className={classNames?.trigger}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export { TabGroup };
