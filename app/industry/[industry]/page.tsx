"use client";
import { Challenges } from "@/components/shared/challenges";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { ProvidedSolutions } from "@/components/shared/provided-solutions";
import { SplitSection } from "@/components/shared/split-section";
import { TabGroup } from "@/components/shared/tab-group";
import { SuccessStoriesUnderSection } from "@/components/shared/success-stories-under-section";
import { Button } from "@/components/ui/button";
import { industries, industrySuccessStories } from "@/mock/industry";
import { Lightbulb, UserRoundCheck, type LucideIcon } from "lucide-react";
import { notFound, useParams } from "next/navigation";

const highlightIcons: LucideIcon[] = [UserRoundCheck, Lightbulb];

const page = () => {
  const { industry } = useParams<{ industry: string }>();
  const activeIndustry = industries.find((item) => item.uuid === industry);

  if (!activeIndustry) notFound();

  const { header, overview, challenges, providedSolutions } = activeIndustry;

  return (
    <>
      <Jumbotron
        title={header.title}
        classNames={{
          title: "text-white !text-[48px] font-times w-full max-w-full",
          description: "text-white text-[18px]",
          content: "w-full max-w-full ",
          mainWrapper: "h-[400px] lg:h-[600px] items-end",
        }}
        description={header.description}
        eyebrow={
          <Button variant={"tab"} className={"rounded-full "}>
            {activeIndustry?.title}
          </Button>
        }
        backgroundImage={header.backgroundImage}
      />

      <Container>
        <TabGroup
          tabs={industries}
          activeUuid={activeIndustry.uuid}
          hrefPrefix="/industry"
        />
      </Container>

      <Container>
        <SplitSection
          image={overview.image}
          title={overview.title}
          description={overview.description}
          reversed
          action={
            <ul className="flex w-full flex-col gap-4">
              {overview.highlights.map((highlight, index) => {
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
            content: "font-poppins",
            title:
              "font-poppins text-[24px] font-bold text-[#191C1E] md:text-[28px] lg:text-[32px]",
            description:
              "text-[16px] leading-relaxed font-normal text-[#444651]",
            action: "mt-2 w-full",
          }}
        />
      </Container>

      <Challenges challenges={challenges} />

      <ProvidedSolutions providedSolutions={providedSolutions} />

      <SuccessStoriesUnderSection successStories={industrySuccessStories} />
    </>
  );
};

export default page;
