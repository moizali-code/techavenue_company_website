import { CareerHeader } from "@/components/features/career/career-header";
import { FollowUs } from "@/components/features/career/follow-us";
import { HiringProcess } from "@/components/features/career/hiring-process";
import { LifeAtTechAvenue } from "@/components/features/career/life-at-tech-avenue";
import { OpenPositions } from "@/components/features/career/open-positions";
import { getCareerPageData } from "@/lib/cms";

export default async function page() {
  const { careerData, jobs, lifeAtTechAvenue } = await getCareerPageData();

  return (
    <>
      <CareerHeader {...careerData.header} />
      <OpenPositions {...careerData.openPositions} jobs={jobs} />
      <LifeAtTechAvenue {...lifeAtTechAvenue} />
      <HiringProcess {...careerData.hiringProcess} />
      <FollowUs {...careerData.followUs} />
    </>
  );
}
