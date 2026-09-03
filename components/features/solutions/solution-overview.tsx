import { Card } from "@/components/shared/card";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { SolutionOverviewProps } from "@/types/features/solutions";

function SolutionOverview({ overview, keyInfo }: SolutionOverviewProps) {
  const paragraphs = overview.description.split("\n\n");
  const entries = Object.entries(keyInfo.items);
  const rows = entries.slice(0, -1);
  const techStackEntry = entries.at(-1);
  const techStack =
    techStackEntry
      ?.at(1)
      ?.split(",")
      .map((item) => item.trim())
      .filter(Boolean) ?? [];

  return (
    <div className="bg-[#F8F8F8]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Jumbotron
          align="left"
          title={overview.title}
          description={paragraphs.map((paragraph, index) => (
            <span key={paragraph} className={cn("block", index > 0 && "mt-5")}>
              {paragraph}
            </span>
          ))}
          classNames={{
            mainWrapper: "px-0 py-0 lg:px-0 lg:py-0",
            content: "max-w-none gap-5",
            title:
              "font-times text-[26px] font-bold text-[#1E3C8C] lg:text-[34px]",
            description:
              "max-w-none text-[16px] leading-relaxed text-[#444651]",
          }}
        />

        <FadeIn direction="left">
          <Card
            title={keyInfo.title}
            footer={
              <div className="flex flex-col">
                <dl className="flex flex-col">
                  {rows.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-4 border-b border-[#C5C6D3] py-3.5"
                    >
                      <dt className="text-[16px] text-[#444651]">{label}</dt>
                      <dd className="text-right text-[16px] font-normal text-[#1E3C8C]">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {techStackEntry && (
                  <div className="flex flex-col gap-3 pt-5">
                    <span className="text-[16px] text-[#444651]">
                      {techStackEntry.at(0)}
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {techStack.map((item) => (
                        <Badge
                          key={item}
                          variant="outline"
                          className="h-auto rounded-full bg-[#F7F9FB] border-[#C5C6D3] px-3 py-1 text-[12px] font-normal text-[#191C1E]"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            }
            classNames={{
              mainWrapper:
                "h-fit max-w-none rounded-[12px] border-transparent bg-white shadow-[0_4px_20px_#0000000F]",
              content: "gap-4 p-6 lg:p-7",
              title: "font-times text-[24px] font-bold text-[#1E3C8C]",
              footer: "mt-0",
            }}
          />
        </FadeIn>
        </div>
      </Container>
    </div>
  );
}

export { SolutionOverview };
