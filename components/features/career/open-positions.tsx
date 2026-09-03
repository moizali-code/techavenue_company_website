"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BriefcaseBusiness, Clock, MapPin, Search } from "lucide-react";

import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Paginator } from "@/components/shared/paginator";
import { SelectField } from "@/components/shared/select-field";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { JobWorkplace, OpenPositionsProps } from "@/types/features/career";

const JOBS_PER_PAGE = 6;

const SEARCH_PLACEHOLDER = "Search by Title";
const DEPARTMENT_PLACEHOLDER = "Department";
const EMPLOYMENT_TYPE_PLACEHOLDER = "Full Time";

const workplaceOptions: { value: JobWorkplace; label: string }[] = [
  { value: "onsite", label: "Onsite" },
  { value: "remote", label: "Remote" },
];

function OpenPositions({
  title,
  description,
  departments,
  employmentTypes,
  jobs,
}: OpenPositionsProps) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState<string | null>(null);
  const [employmentType, setEmploymentType] = useState<string | null>(null);
  const [workplace, setWorkplace] = useState<JobWorkplace | null>(null);
  const [page, setPage] = useState(1);

  const gridRef = useRef<HTMLDivElement>(null);
  const previousPageRef = useRef(page);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.trim().toLowerCase());
    const matchesDepartment = !department || job.department === department;
    const matchesEmploymentType =
      !employmentType || job.employmentType === employmentType;
    const matchesWorkplace = !workplace || job.workplace === workplace;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesEmploymentType &&
      matchesWorkplace
    );
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredJobs.length / JOBS_PER_PAGE),
  );
  const currentPage = Math.min(page, totalPages);
  const visibleJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE,
  );

  useEffect(() => {
    if (previousPageRef.current === page) return;
    previousPageRef.current = page;
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page]);

  const updateSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const updateDepartment = (value: string | null) => {
    setDepartment(value);
    setPage(1);
  };

  const updateEmploymentType = (value: string | null) => {
    setEmploymentType(value);
    setPage(1);
  };

  const toggleWorkplace = (value: JobWorkplace) => {
    setWorkplace((current) => (current === value ? null : value));
    setPage(1);
  };

  return (
    <Container>
      <div className="font-poppins flex flex-col gap-8">
        <div
          id="positions"
          className="flex scroll-mt-24 flex-col gap-3 md:flex-row md:flex-wrap md:items-center"
        >
          <div className="relative w-full md:min-w-[260px] md:flex-1">
            <Search
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#8A8A8A]"
              strokeWidth={1.5}
            />
            <Input
              value={search}
              onChange={(event) => updateSearch(event.target.value)}
              placeholder={SEARCH_PLACEHOLDER}
              aria-label={SEARCH_PLACEHOLDER}
              className="h-11 rounded-[6px] border-[#E4E4E4] bg-[#FAFAFA] pl-9 text-[14px] text-[#191C1E] placeholder:text-[#8A8A8A] focus:"
            />
          </div>

          <SelectField
            value={department}
            onValueChange={updateDepartment}
            options={departments}
            placeholder={DEPARTMENT_PLACEHOLDER}
            clearLabel="All Departments"
            classNames={{ trigger: "md:w-[190px]" }}
          />

          <SelectField
            value={employmentType}
            onValueChange={updateEmploymentType}
            options={employmentTypes}
            placeholder={EMPLOYMENT_TYPE_PLACEHOLDER}
            clearLabel="All Types"
            classNames={{ trigger: "md:w-[170px]" }}
          />

          <div className="flex w-full gap-3 md:w-auto">
            {workplaceOptions.map((option) => (
              <Button
                key={option.value}
                variant={workplace === option.value ? "brand" : "secondary"}
                aria-pressed={workplace === option.value}
                onClick={() => toggleWorkplace(option.value)}
                className="h-11 flex-1 rounded-[6px] px-6 text-[14px] font-medium tracking-normal md:flex-none"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        <Jumbotron
          align="left"
          title={title}
          description={description}
          classNames={{
            mainWrapper: "px-0 py-0 lg:px-0 lg:py-0",
            content: "max-w-none gap-2",
            title:
              "font-poppins text-[26px] font-bold text-[#191C1E] lg:text-[32px]",
            description: "text-[16px] text-[#444651]",
          }}
        />

        {visibleJobs.length > 0 ? (
          <div ref={gridRef} className="grid gap-6 md:grid-cols-2">
            {visibleJobs.map((job) => (
              <Card
                key={job.uuid}
                title={job.title}
                eyebrow={
                  <Badge className="rounded-[4px] bg-[rgba(30,60,140,0.1)] px-2.5 py-1 text-[12px] font-bold text-[#1E3C8C]">
                    {job.department}
                  </Badge>
                }
                footer={
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 text-[14px] font-bold text-[#444651]">
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="size-4" strokeWidth={1.5} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <BriefcaseBusiness
                            className="size-4"
                            strokeWidth={1.5}
                          />
                          {job.employmentType}
                        </span>
                      </div>

                      <span className="flex items-center gap-1.5">
                        <Clock className="size-4" strokeWidth={1.5} />
                        {job.experience}
                      </span>
                    </div>

                    <Button
                      variant="brand"
                      size="lg"
                      nativeButton={false}
                      render={<Link href={`/career/${job.uuid}`} />}
                      className="h-11 w-full rounded-[4px] text-[14px] font-semibold tracking-normal"
                    >
                      Apply Now
                    </Button>
                  </div>
                }
                classNames={{
                  mainWrapper: "h-full max-w-none rounded-[10px]",
                  content: "gap-4",
                  titleRow: "items-start gap-3",
                  eyebrow: "text-[#1E3C8C]",
                  title: "text-[20px] font-bold text-[#191C1E] lg:text-[22px]",
                  footer: "mt-auto",
                }}
              />
            ))}
          </div>
        ) : (
          <div
            ref={gridRef}
            className="rounded-[10px] border border-dashed border-[#E4E4E4] px-6 py-14 text-center text-[15px] text-[#444651]"
          >
            No positions match your filters right now.
          </div>
        )}

        <Paginator
          page={currentPage}
          totalPages={totalPages}
          setPage={setPage}
          className="justify-center md:justify-end"
        />
      </div>
    </Container>
  );
}

export { OpenPositions };
