import { CoreServices } from "@/components/features/services/core-services";
import { ServiceSolutions } from "@/components/features/services/service-solutions";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Button } from "@/components/ui/button";
import {
  coreServices,
  coreServicesDescription,
  coreServicesHeading,
  serviceSolutions,
} from "@/mock/services";

const page = () => {
  return (
    <div>
      <Jumbotron
        title={"Future-Ready Enterprise Services"}
        classNames={{
          title: "text-white !text-[48px] font-times",
          description: "text-white text-[18px]",
          mainWrapper: "h-[400px] lg:h-[600px]",
        }}
        description={`Precision-engineered solutions designed to scale your operations, secure your assets, and accelerate your digital evolution through advanced institutional innovation.`}
        eyebrow={
          <Button variant={"tab"} className={"rounded-full "}>
            Cybersecurity and Compliance
          </Button>
        }
        backgroundImage="/about_image.png"
      />

      <CoreServices
        heading={coreServicesHeading}
        description={coreServicesDescription}
        services={coreServices}
      />

      <ServiceSolutions solutions={serviceSolutions} />
    </div>
  );
};

export default page;
