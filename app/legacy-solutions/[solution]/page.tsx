"use client";

import { SolutionExperience } from "@/components/features/legacy-solutions/solution-experience";
import { SolutionHeader } from "@/components/features/legacy-solutions/solution-header";
import { SolutionOverview } from "@/components/features/legacy-solutions/solution-overview";
import { SolutionTestimonial } from "@/components/features/legacy-solutions/solution-testimonial";
import { Container } from "@/components/shared/container";
import { SuccessStoriesUnderSection } from "@/components/shared/success-stories-under-section";
import { TabGroup } from "@/components/shared/tab-group";
import { solutions, solutionSuccessStories } from "@/mock/legacy-solutions";
import { notFound, useParams } from "next/navigation";

const page = () => {
  const { solution } = useParams<{ solution: string }>();
  const activeSolution = solutions.find((item) => item.uuid === solution);

  if (!activeSolution) notFound();

  const { title, header, overview, keyInfo, experience, testimonial } =
    activeSolution;

  return (
    <>
      <Container>
        <TabGroup
          tabs={solutions}
          activeUuid={activeSolution.uuid}
          hrefPrefix="/solutions"
        />
      </Container>

      <SolutionHeader eyebrow={title} header={header} />

      <SolutionOverview overview={overview} keyInfo={keyInfo} />

      <SolutionExperience experience={experience} />

      <SuccessStoriesUnderSection successStories={solutionSuccessStories} />

      <SolutionTestimonial testimonial={testimonial} />
    </>
  );
};

export default page;
