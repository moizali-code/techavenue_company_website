import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { cn } from "@/lib/utils";
import type { HiringProcessProps } from "@/types/features/career";
import { Icon } from "@/components/shared/icon";

function HiringProcess({ title, description, steps }: HiringProcessProps) {
  return (
    <Container>
      <div className="font-poppins flex flex-col gap-12">
        <Jumbotron
          title={title}
          description={description}
          classNames={{
            mainWrapper: "px-0 py-0 lg:px-0 lg:py-0",
            content: "gap-3",
            title:
              "font-poppins text-[26px] font-bold text-[#191C1E] lg:text-[32px]",
            description: "text-[16px] leading-relaxed text-[#444651]",
          }}
        />

        <div className="grid items-start gap-10 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const isFinalStep = index === steps.length - 1;

            return (
              <Card
                key={step.uuid}
                variant="bare"
                title={`${index + 1}. ${step.title}`}
                description={step.description}
                eyebrow={
                  <span
                    className={cn(
                      "flex size-14 items-center justify-center rounded-full",
                      isFinalStep
                        ? "bg-[#1E3C8C] shadow-[0px_10px_24px_0px_rgba(30,60,140,0.35)]"
                        : "bg-white shadow-[0px_6px_18px_0px_rgba(0,0,0,0.08)]",
                    )}
                  >
                    <Icon
                      src={step.image}
                      className={cn("size-6", isFinalStep && "text-white")}
                    />
                  </span>
                }
                classNames={{
                  mainWrapper: "h-full max-w-none items-center",
                  content: "items-center gap-2 pt-5 text-center",
                  titleRow: "items-center",
                  title: "text-[16px] font-bold text-[#191C1E]",
                  description: "text-[14px] leading-relaxed text-[#444651]",
                }}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export { HiringProcess };
