"use client";

import * as React from "react";

import {
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function Carousel({
  children,
  header,
  navPosition = "bottom-center",
  align = "center",
  page = 1,
  setPage,
  totalPages = 1,
  isFetchingData = false,
  startIndex,
  className,
}: {
  children: React.ReactNode;
  header?: React.ReactNode;
  navPosition?: "bottom-center" | "top-right";
  align?: "start" | "center";
  setPage?: (val: number) => void;
  page?: number;
  totalPages?: number;
  isFetchingData?: boolean;
  startIndex?: number;
  className?: string;
}) {
  const isTopRight = navPosition === "top-right";

  return (
    <ShadcnCarousel
      opts={{
        align,
        ...(startIndex !== undefined ? { startIndex } : {}),
      }}
      className={cn(
        "w-full px-8 lg:px-10",
        isTopRight ? "py-10" : "py-20",
        className,
      )}
    >
      {isTopRight ? (
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          {header}

          <div className="flex shrink-0 items-center gap-3">
            <CarouselPrevious className="static inset-auto my-0 size-11 cursor-pointer" />
            <CarouselNext
              page={page}
              setPage={setPage ?? (() => {})}
              totalPages={totalPages}
              isFetchingData={isFetchingData}
              className="static inset-auto my-0 size-11 cursor-pointer"
            />
          </div>
        </div>
      ) : (
        header
      )}

      <CarouselContent>{children}</CarouselContent>

      {isTopRight ? null : (
        <>
          <CarouselPrevious className="p-6 cursor-pointer  my-0 top-162 left-[43%]" />
          <CarouselNext
            page={page}
            setPage={setPage ?? (() => {})}
            totalPages={totalPages}
            isFetchingData={isFetchingData}
            className="right-[47%] top-162 p-6 cursor-pointer"
          />
        </>
      )}
    </ShadcnCarousel>
  );
}
