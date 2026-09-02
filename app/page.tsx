import Image from "next/image";

import { HomeAbout } from "@/components/features/home/home-about";
import { HomeFaqs } from "@/components/features/home/home-faqs";
import { HomeIntro } from "@/components/features/home/home-intro";
import { HomeMissionVision } from "@/components/features/home/home-mission-vision";
import { HomePartners } from "@/components/features/home/home-partners";
import { HomeSolutions } from "@/components/features/home/home-solutions";
import { HomeStats } from "@/components/features/home/home-stats";
import { HomeTestimonials } from "@/components/features/home/home-testimonials";
import { Container } from "@/components/shared/container";
import { homeData } from "@/mock/home";
import { solutions } from "@/mock/solutions";

export default function Home() {
  return (
    <>
      <HomeIntro {...homeData.intro} />

      <Container
        classNames={{
          mainWrapper: "pt-0 lg:pt-0",
          container:
            "flex flex-col overflow-hidden rounded-[16px] shadow-[0px_30px_60px_0px_rgba(0,0,0,0.08)]",
        }}
      >
        <div className="relative h-[240px] w-full md:h-[360px] lg:h-[480px]">
          <Image
            alt="home_image"
            src="/about_image.png"
            fill
            priority
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover"
          />
        </div>

        <HomeStats stats={homeData.stats} />
      </Container>

      <HomePartners partners={homeData.partners} />

      <HomeAbout {...homeData.about} />

      <HomeMissionVision
        items={homeData.missionVision}
        className="py-0 lg:py-0 pb-8 lg:pb-18"
      />

      <HomeSolutions {...homeData.solutions} solutions={solutions} />

      <HomeTestimonials {...homeData.testimonials} />

      <HomeFaqs {...homeData.faqs} />
    </>
  );
}
