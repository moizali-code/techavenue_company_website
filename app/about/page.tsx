"use client";

import { useRouter } from "next/navigation";

import { CompanyValues } from "@/components/features/about/company-values";
import { TeamCarousel } from "@/components/features/about/team-carousel";
import { TrustedPartners } from "@/components/shared/trusted-partners";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Button } from "@/components/ui/button";

import { aboutPageContent } from "@/mock/about";
import { Container } from "@/components/shared/container";

const page = () => {
  const router = useRouter();
  const { header, companyValues, partners, team, cta } = aboutPageContent;

  return (
    <div>
      <Jumbotron
        title={header.title}
        classNames={{
          title: "text-white !text-[48px] font-times",
          description: "text-white text-[18px]",
          mainWrapper: "h-[400px] lg:h-[600px] items-end",
        }}
        description={header.description}
        eyebrow={
          <Button variant={"tab"} className={"rounded-full "}>
            {header.eyebrow}
          </Button>
        }
        backgroundImage={header.image}
      />

      <CompanyValues {...companyValues} />

      <TrustedPartners
        heading={partners.heading}
        partners={partners.partners}
        marquee
      />

      <TeamCarousel {...team} />

      <Container>
        <Jumbotron
          title={cta.title}
          description={cta.description}
          classNames={{
            mainWrapper: " px-0 py-14 lg:px-0 lg:py-16",
            content:
              "w-full max-w-full rounded-[12px] bg-[#F5F7F9] px-6 py-14 lg:px-10 lg:py-20",
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
      </Container>
    </div>
  );
};

export default page;
