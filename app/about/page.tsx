"use client";

import { useRouter } from "next/navigation";

import { CompanyValues } from "@/components/features/about/company-values";
import { TeamCarousel } from "@/components/features/about/team-carousel";
import { TrustedPartners } from "@/components/shared/trusted-partners";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Button } from "@/components/ui/button";

import {
  companyValues,
  companyValuesHeading,
  companyValuesImage,
} from "@/mock/company-values";
import { trustedPartners } from "@/mock/partners";
import { teamDescription, teamHeading, teamMembers } from "@/mock/team";

const page = () => {
  const router = useRouter();

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

      <CompanyValues
        heading={companyValuesHeading}
        image={companyValuesImage}
        values={companyValues}
      />

      <TrustedPartners heading="Trusted Partners" partners={trustedPartners} />

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-10">
        {caseStudies.map(({ id, ...caseStudy }) => (
          <div key={id} className="w-[300px]">
            <Card {...caseStudy} className="h-full max-w-none" />
          </div>
        ))}
      </div> */}

      {/* <section className="w-full px-4 py-14 lg:px-10 ">
        <Carousel>
          {caseStudies.map(({ id, ...caseStudy }) => (
            <CarouselItem
              key={id}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Card {...caseStudy} className="h-full max-w-none" />
            </CarouselItem>
          ))}
        </Carousel>
      </section> */}

      <TeamCarousel
        heading={teamHeading}
        description={teamDescription}
        members={teamMembers}
      />

      <Jumbotron
        title={"Let's Build the Future Together"}
        description={
          "Ready to transform your organizational challenges into strategic technological advantages?"
        }
        classNames={{
          mainWrapper: "py-14 lg:py-16",
          content:
            "w-[90%] max-w-full rounded-[12px] bg-[#F5F7F9] px-6 py-14 lg:px-10 lg:py-20",
          title:
            "font-poppins text-[28px] font-bold text-[#191C1E] md:text-[36px] lg:text-[42px]",
          description:
            "text-[15px] font-normal text-[#494949] lg:text-[16px] max-w-full",
        }}
        action={
          <>
            <Button
              variant="brand"
              size="lg"
              onClick={() => router.push("/contact")}
              className="h-12 rounded-[4px] px-8 text-[16px] font-medium tracking-normal"
            >
              Contact Us Now
            </Button>

            <Button
              variant="outline"
              size="lg"
              arrow
              onClick={() => router.push("/solutions")}
              className="h-12 px-8 text-[16px] font-medium"
            >
              View Solutions
            </Button>
          </>
        }
      />
    </div>
  );
};

export default page;
