import { RequestDemoModal } from "@/components/features/solutions/request-demo-modal";
import { Container } from "@/components/shared/container";
import { SplitSection } from "@/components/shared/split-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SolutionHeaderProps } from "@/types/features/solutions";

const PRIMARY_ACTION_LABEL = "Request a Demo";
const SECONDARY_ACTION_LABEL = "Watch the Demo";

function SolutionHeader({ eyebrow, header, classNames }: SolutionHeaderProps) {
  const { title, description, image, items } = header;

  return (
    <Container
      classNames={{ mainWrapper: cn("pt-8 lg:pt-10", classNames?.mainWrapper) }}
    >
      <SplitSection
        reversed
        image={image}
        imageAlt={title}
        eyebrow={
          <Badge className="h-auto rounded-full bg-[rgba(44,92,175,0.13)] px-4 py-1.5 text-[16px] font-normal text-[#1E3C8C]">
            {eyebrow}
          </Badge>
        }
        title={title}
        description={description}
        action={
          <div className="flex w-full flex-col gap-8">
            <dl className="flex flex-wrap gap-x-18 gap-y-6">
              {items.map((item) => (
                <div key={item.title} className="flex flex-col gap-1">
                  <dt className="font-times text-[24px] font-bold text-[#1E3C8C] lg:text-[26px]">
                    {item.title}
                  </dt>
                  <dd className="text-[14px] text-[#191818] font-normal">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex w-full flex-col gap-4 md:w-auto lg:flex-row lg:items-center">
              <RequestDemoModal
                trigger={
                  <Button
                    size="lg"
                    variant="brand"
                    className="border-2 border-[#1E3C8C] h-auto rounded-[4px] px-8 py-3.5 text-[15px] font-medium tracking-normal"
                  >
                    {PRIMARY_ACTION_LABEL}
                  </Button>
                }
              />

              <Button
                size="lg"
                variant="outline"
                arrow
                className="h-auto px-8 py-3.5 text-[15px] font-medium"
              >
                {SECONDARY_ACTION_LABEL}
              </Button>
            </div>
          </div>
        }
        classNames={{
          media: "rounded-none bg-transparent",
          image: "object-cover",
          content: "gap-5",
          title:
            "font-times text-[34px] leading-tight font-bold text-[#191C1E] md:text-[40px] lg:text-[48px]",
          description: "max-w-xl text-[18px] leading-relaxed text-[#444651]",
          action: "mt-2 w-full",
        }}
      />
    </Container>
  );
}

export { SolutionHeader };
