"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import type { PaginatorProps } from "@/types/features/pagination";

type PageEntry = number | "ellipsis";

function buildPageEntries(
  page: number,
  totalPages: number,
  siblingCount: number,
): PageEntry[] {
  const pages = new Set<number>([1, totalPages]);

  for (let value = page - siblingCount; value <= page + siblingCount; value++) {
    if (value >= 1 && value <= totalPages) {
      pages.add(value);
    }
  }

  const sortedPages = Array.from(pages).sort((a, b) => a - b);
  const entries: PageEntry[] = [];

  sortedPages.forEach((value, index) => {
    if (index > 0 && value - sortedPages[index - 1] > 1) {
      entries.push("ellipsis");
    }
    entries.push(value);
  });

  return entries;
}

function Paginator({
  page,
  totalPages,
  setPage,
  siblingCount = 1,
  className,
}: PaginatorProps) {
  if (totalPages <= 1) return null;

  const pageEntries = buildPageEntries(page, totalPages, siblingCount);

  const goToPage = (nextPage: number) => {
    setPage(Math.min(Math.max(nextPage, 1), totalPages));
  };

  return (
    <Pagination className={cn("justify-end", className)}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            aria-disabled={page === 1}
            onClick={(event) => {
              event.preventDefault();
              goToPage(page - 1);
            }}
          />
        </PaginationItem>

        {pageEntries.map((entry, index) =>
          entry === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={entry}>
              <PaginationLink
                href="#"
                isActive={entry === page}
                onClick={(event) => {
                  event.preventDefault();
                  goToPage(entry);
                }}
              >
                {entry}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            aria-disabled={page === totalPages}
            onClick={(event) => {
              event.preventDefault();
              goToPage(page + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export { Paginator };
