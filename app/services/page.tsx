import { CoreServices } from "@/components/features/services/core-services";
import { ServiceDetails } from "@/components/features/services/service-details";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Button } from "@/components/ui/button";
import { serviceDetails, servicesPageContent } from "@/mock/services";

const { servicesHeader, coreServices } = servicesPageContent;

const page = () => {
  return (
    <div>
      <Jumbotron
        title={servicesHeader.title}
        classNames={{
          title: "text-white !text-[48px] font-times",
          description: "text-white text-[18px]",
          mainWrapper: "h-[400px] lg:h-[600px]",
        }}
        description={servicesHeader.description}
        eyebrow={
          <Button variant={"tab"} className={"rounded-full "}>
            Company
          </Button>
        }
        backgroundImage={servicesHeader.image}
      />

      <CoreServices {...coreServices} />

      <ServiceDetails details={serviceDetails} />
    </div>
  );
};

export default page;
