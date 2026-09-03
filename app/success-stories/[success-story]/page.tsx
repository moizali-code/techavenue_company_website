"use client";

import { SuccessStoryImpact } from "@/components/features/success-stories/success-story-impact";
import { Challenges } from "@/components/shared/challenges";
import { Jumbotron } from "@/components/shared/jumbotron";
import { ProvidedSolutions } from "@/components/shared/provided-solutions";
import { Button } from "@/components/ui/button";
import { successStories } from "@/mock/success-stories";
import { notFound, useParams } from "next/navigation";

const page = () => {
  const params = useParams<{ "success-story": string }>();
  const story = successStories.find(
    (item) => item.uuid === params["success-story"],
  );

  if (!story) notFound();

  const { detail } = story;

  return (
    <>
      <Jumbotron
        title={story.title}
        description={story.description}
        backgroundImage={story.image}
        eyebrow={
          <Button variant="tab" className="rounded-full px-4 py-1.5">
            {story.solution.title}
          </Button>
        }
        classNames={{
          content: "w-full max-w-4xl gap-4",
          title:
            "font-times text-[30px] font-bold text-white md:text-[40px] lg:text-[48px]",
          description:
            "max-w-2xl text-[15px] leading-relaxed text-white/90 lg:text-[18px]",
          mainWrapper: "h-[400px] lg:h-[600px] items-end",
        }}
      />

      <Challenges
        challenges={detail.challenges}
        classNames={{
          container: { mainWrapper: "bg-white" },
          jumbotron: {
            title: "font-poppins text-[#191C1E]",
            description: "text-[16px]",
          },
          card: {
            title: "font-bold text-[24px]",
            description: "text-[16px]",
            mainWrapper:
              "py-[10px] px-[14px] border border-[rgba(169,169,169,0.4)] shadow-sm",
            eyebrow: "bg-[rgba(44,92,175,0.08)] p-4 w-fit rounded-[12px]",
          },
        }}
      />

      <ProvidedSolutions providedSolutions={detail.providedSolutions} />

      <SuccessStoryImpact
        impact={detail.impact}
        classNames={{
          container: { mainWrapper: "w-[95%] mx-auto rounded-[12px]" },
        }}
      />
    </>
  );
};

export default page;
