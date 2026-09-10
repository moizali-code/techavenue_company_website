"use client";

import { notFound, useParams } from "next/navigation";

import { VerticlePageHeader } from "@/components/features/verticles/verticle-page-header";
import { VerticlePhases } from "@/components/features/verticles/verticle-phases";
import { VerticleSolutions } from "@/components/features/verticles/verticle-solutions";
import { Container } from "@/components/shared/container";
import { TabGroup } from "@/components/shared/tab-group";
import { allVerticlesPageContent, verticlePages } from "@/mock/verticles";

const { verticles } = allVerticlesPageContent.coreVerticles;

const page = () => {
  const { verticle } = useParams<{ verticle: string }>();
  const activeVerticle = verticles.find((item) => item.uuid === verticle);

  if (!activeVerticle) notFound();

  const verticlePage = verticlePages.find((item) => item.uuid === verticle);

  return (
    <>
      <Container variant="bare">
        <div className="py-6 lg:py-8">
          <TabGroup
            tabs={verticles}
            activeUuid={activeVerticle.uuid}
            hrefPrefix="/verticles"
            classNames={{ list: "gap-2 lg:gap-3" }}
          />
        </div>
      </Container>

      <VerticlePageHeader
        eyebrow={verticlePage?.title ?? activeVerticle.title}
        heading={verticlePage?.verticleHeader.heading ?? activeVerticle.title}
        description={
          verticlePage?.verticleHeader.description ?? activeVerticle.description
        }
        image={verticlePage?.image}
      />

      {verticlePage && (
        <>
          <VerticleSolutions {...verticlePage.solutions} />

          <VerticlePhases phases={verticlePage.phases} />
        </>
      )}
    </>
  );
};

export default page;
