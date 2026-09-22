"use client";

import { notFound, useParams } from "next/navigation";

import { SolutionOfferings } from "@/components/features/solutions/solution-offerings";
import { SolutionPageHeader } from "@/components/features/solutions/solution-page-header";
import { SolutionPhases } from "@/components/features/solutions/solution-phases";
import { Container } from "@/components/shared/container";
import { TabGroup } from "@/components/shared/tab-group";
import { solutionPages } from "@/mock/solutions";

const page = () => {
  const { solution } = useParams<{ solution: string }>();
  const solutionPage = solutionPages.find((item) => item.uuid === solution);

  if (!solutionPage) notFound();

  return (
    <>
      <Container variant="bare">
        <div className="pt-6 pb-3 lg:pt-8 lg:pb-4">
          <TabGroup
            tabs={solutionPages}
            activeUuid={solutionPage.uuid}
            hrefPrefix="/solutions"
            classNames={{ list: "gap-2 lg:gap-3" }}
          />
        </div>
      </Container>

      <SolutionPageHeader
        eyebrow={solutionPage.title}
        heading={solutionPage.solutionHeader.heading}
        description={solutionPage.solutionHeader.description}
        image={solutionPage.image}
      />

      <SolutionOfferings {...solutionPage.solutions} />

      <SolutionPhases phases={solutionPage.phases} />
    </>
  );
};

export default page;
