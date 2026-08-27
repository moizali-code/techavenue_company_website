import {
  BrainCircuit,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  LifeBuoy,
  Lightbulb,
  Network,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";

import { Card } from "@/components/shared/card";
import { Jumbotron } from "@/components/shared/jumbotron";
import { cn } from "@/lib/utils";
import type { CoreServicesProps } from "@/types/features/services";

const serviceIcons: Record<string, LucideIcon> = {
  "artificial-intelligence": BrainCircuit,
  cybersecurity: ShieldCheck,
  "technology-consulting": Code2,
  "cloud-services": Cloud,
  "digital-transformation": Target,
  "system-integration": Network,
  "data-analytics": ChartNoAxesCombined,
  "software-development": Code2,
  "managed-services": LifeBuoy,
};

function CoreServices({
  heading,
  description,
  services,
  className,
}: CoreServicesProps) {
  return (
    <section
      className={cn(
        "w-full bg-[#FAFAFA] px-4 py-12 lg:px-10 lg:py-16",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:gap-10">
        <Jumbotron
          title={heading}
          description={description}
          eyebrow={<Lightbulb className="size-7 text-[#1E3C8C]" />}
          classNames={{
            mainWrapper: "px-0 py-0 lg:px-0 lg:py-0",
            content: "max-w-2xl gap-3",
            title:
              "font-times text-[28px] font-bold text-[#191C1E] md:text-[34px] lg:text-[40px]",
            description: "text-[14px] text-[#494949] lg:text-[15px]",
          }}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, icon, ...service }) => {
            const Icon = serviceIcons[icon];

            return (
              <Card
                key={id}
                {...service}
                icon={
                  Icon ? <Icon className="size-6" strokeWidth={1.5} /> : null
                }
                classNames={{
                  mainWrapper:
                    "h-[280px] max-w-none rounded-[12px] border-transparent bg-white shadow-[0_4px_12px_#00000040] hover:shadow-[0_4px_12px_#00000040]",
                  content: "justify-center gap-2 p-6",
                  icon: "mb-1",
                  title:
                    "text-[20px] font-bold text-[#191C1E] after:mt-2 after:block after:h-[2px] after:w-8 after:bg-[#1E3C8C]",
                  description: "text-[14px] text-[#494949]",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { CoreServices };
