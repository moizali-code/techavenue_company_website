import { Lightbulb } from "lucide-react";

import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import type { CoreServicesProps } from "@/types/features/services";
import { Icon } from "@/components/shared/icon";

function CoreServices({ heading, description, services }: CoreServicesProps) {
  return (
    <div className="bg-[#FAFAFA]">
      <Container>
        <div className="flex flex-col gap-8 lg:gap-10">
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
            {services.map(({ id, uuid, image, title, ...service }) => (
              <Card
                key={uuid}
                {...service}
                title={title}
                eyebrow={<Icon src={image} className="size-6" />}
                classNames={{
                  mainWrapper:
                    "h-[280px] max-w-none rounded-[12px] border-transparent bg-white shadow-[0_4px_12px_#00000040] hover:shadow-[0_4px_12px_#00000040]",
                  content: "justify-center gap-2 p-6",
                  eyebrow: "mb-1",
                  title:
                    "text-[20px] font-bold text-[#191C1E] after:mt-2 after:block after:h-[2px] after:w-8 after:bg-[#1E3C8C]",
                  description: "text-[14px] text-[#494949]",
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export { CoreServices };
