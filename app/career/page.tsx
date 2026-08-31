import { CareerHeader } from "@/components/features/career/career-header";
import { FollowUs } from "@/components/features/career/follow-us";
import { HiringProcess } from "@/components/features/career/hiring-process";
import { LifeAtTechAvenue } from "@/components/features/career/life-at-tech-avenue";
import { OpenPositions } from "@/components/features/career/open-positions";
import {
  careerHeader,
  followUs,
  hiringProcess,
  lifeAtTechAvenue,
  openPositions,
} from "@/mock/career";

export default function page() {
  return (
    <>
      <CareerHeader {...careerHeader} />
      <OpenPositions {...openPositions} />
      <LifeAtTechAvenue {...lifeAtTechAvenue} />
      <HiringProcess {...hiringProcess} />
      <FollowUs {...followUs} />
    </>
  );
}
