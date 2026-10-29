import { CoreServices } from "@/components/features/services/core-services";
import { ServiceDetails } from "@/components/features/services/service-details";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Button } from "@/components/ui/button";
import { getServicesPageData } from "@/lib/cms";

export default async function page() {
  const { allServicesHeader, coreServices, allServicesArticles } = await getServicesPageData();

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
}
