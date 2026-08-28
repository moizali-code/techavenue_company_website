"use client";
import { IndustryChallenges } from "@/components/features/industry/industry-challenges";
import { IndustrySuccessStories } from "@/components/features/industry/industry-success-stories";
import { IndustryTabs } from "@/components/features/industry/industry-tabs";
import { Jumbotron } from "@/components/shared/jumbotron";
import { ProvidedSolutions } from "@/components/shared/provided-solutions";
import { SplitSection } from "@/components/shared/split-section";
import { Button } from "@/components/ui/button";
import {
  industryChallenges,
  industryOverview,
  industryProvidedSolutions,
  industrySuccessStories,
  industryTabs,
} from "@/mock/industry";
import { Lightbulb, UserRoundCheck, type LucideIcon } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";

const highlightIcons: LucideIcon[] = [UserRoundCheck, Lightbulb];

const page = () => {
  const { industry } = useParams();
  return (
    <div>
      <Jumbotron
        title={"ABOUT US"}
        classNames={{
          title: "text-white !text-[48px] font-times",
          description: "text-white text-[18px]",
        }}
        description={`We combine innovation, engineering excellence, and global partnerships to deliver intelligent, secure, and future-ready technology solutions across industries.`}
        eyebrow={
          <Button variant={"tab"} className={"rounded-full "}>
            Company
          </Button>
        }
        backgroundImage="/about_image.png"
      />

      <IndustryTabs
        tabs={industryTabs}
        activeUuid={typeof industry === "string" ? industry : undefined}
      />

      <SplitSection
        image={industryOverview.image}
        imageAlt={industryOverview.imageAlt}
        title={industryOverview.title}
        description={industryOverview.description}
        reversed
        action={
          <ul className="flex w-full flex-col gap-4">
            {industryOverview.highlights.map((highlight, index) => {
              const Icon = highlightIcons[index];

              return (
                <li
                  key={highlight.title}
                  className="flex items-start gap-3 text-left"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-[#1E3C8C]/10 text-[#1E3C8C]">
                    {Icon && <Icon className="size-5" strokeWidth={1.5} />}
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-bold text-[#191C1E]">
                      {highlight.title}
                    </span>
                    <span className="text-[13px] leading-relaxed text-[#494949]">
                      {highlight.description}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        }
        classNames={{
          mainWrapper: "mx-auto w-full max-w-6xl px-4 py-12 lg:px-10 lg:py-16",
          content: "font-poppins",
          title:
            "font-poppins text-[24px] font-bold text-[#191C1E] md:text-[28px] lg:text-[32px]",
          description: "text-[16px] leading-relaxed font-normal text-[#444651]",
          action: "mt-2 w-full",
        }}
      />

      <IndustryChallenges challenges={industryChallenges} />

      <ProvidedSolutions providedSolutions={industryProvidedSolutions} />

      <IndustrySuccessStories successStories={industrySuccessStories} />
    </div>
  );
};

export default page;
