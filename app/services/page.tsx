import { CoreServices } from "@/components/features/services/core-services";
import { ServiceDetails } from "@/components/features/services/service-details";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Button } from "@/components/ui/button";
import { allServicesPageContent } from "@/mock/services";

const { allServicesHeader, coreServices, allServicesArticles } =
  allServicesPageContent;

const page = () => {
  return (
    <div>
      <Jumbotron
        title={allServicesHeader.title}
        classNames={{
          title: "text-white !text-[48px] font-times",
          description: "text-white text-[18px]",
          mainWrapper: "h-[400px] lg:h-[600px] items-end",
        }}
        description={allServicesHeader.description}
        eyebrow={
          <Button variant={"tab"} className={"rounded-full "}>
            Company
          </Button>
        }
        backgroundImage={allServicesHeader.image}
      />

      <CoreServices {...coreServices} />

      <ServiceDetails details={allServicesArticles} />
    </div>
  );
};

export default page;
