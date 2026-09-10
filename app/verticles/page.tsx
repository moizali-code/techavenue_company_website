import { CoreVerticles } from "@/components/features/verticles/core-verticles";
import { VerticleDetails } from "@/components/features/verticles/verticle-details";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Button } from "@/components/ui/button";
import { allVerticlesPageContent } from "@/mock/verticles";

const { allVerticlesHeader, coreVerticles, allVerticlesArticles } =
  allVerticlesPageContent;

const page = () => {
  return (
    <div>
      <Jumbotron
        title={allVerticlesHeader.title}
        classNames={{
          title: "text-white !text-[48px] font-times",
          description: "text-white text-[18px]",
          mainWrapper: "h-[400px] lg:h-[600px] items-end",
        }}
        description={allVerticlesHeader.description}
        eyebrow={
          <Button variant={"tab"} className={"rounded-full "}>
            Company
          </Button>
        }
        backgroundImage={allVerticlesHeader.image}
      />

      <CoreVerticles {...coreVerticles} />

      <VerticleDetails details={allVerticlesArticles} />
    </div>
  );
};

export default page;
