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
      className={cn("w-full ", isTopRight ? "py-10" : "py-20", className)}
    >
      {isTopRight ? (
        <div className="mb-10 flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:gap-10 md:text-left">
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
        <div className="mt-10 flex items-center justify-center gap-4">
          <CarouselPrevious className="static inset-auto m-0 size-11 shrink-0 cursor-pointer self-center" />
          <CarouselNext
            page={page}
            setPage={setPage ?? (() => {})}
            totalPages={totalPages}
            isFetchingData={isFetchingData}
            className="static inset-auto m-0 size-11 shrink-0 cursor-pointer self-center"
          />
        </div>
      )}
    </ShadcnCarousel>
  );
}
