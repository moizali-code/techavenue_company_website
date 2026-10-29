import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import type { SolutionOfferingsProps } from "@/types/features/solutions";

function SolutionOfferings({
  heading,
  description,
  items,
}: SolutionOfferingsProps) {
  return (
    <Container className="pt-6 pb-6 lg:pt-6 lg:pb-6">
      <div className="flex flex-col gap-6 lg:gap-7 ">
        <Jumbotron
          align="left"
          title={heading}
          description={description}
          classNames={{
            mainWrapper: "px-0 py-0 lg:px-0 lg:py-0 ",
            content: "max-w-full",
            body: "gap-1.5",
            title:
              "font-be-vietnam text-[26px] font-bold text-[#191C1E] md:text-[30px] lg:text-[38px]",
            description:
              "text-[14px] leading-relaxed text-[#494949] lg:text-[15px]",
          }}
        />

        <ul className="flex flex-col mt-4">
          {items.map(({ uuid, title, description: itemDescription }, index) => (
            <li
              key={uuid}
              className="group grid grid-cols-[1.75rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-2 border-b border-[#E5E5E5] py-4 md:grid-cols-[2.25rem_minmax(0,0.9fr)_minmax(0,1.35fr)] md:gap-x-6 md:py-4 lg:gap-x-10"
            >
              <span className="font-be-vietnam text-[13px] font-medium text-[#1E3C8C]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-[18px] font-bold text-[#191C1E] transition-colors group-hover:text-[#1E3C8C] lg:text-[17px]">
                {title}
              </h3>

              <p className="col-start-2 text-[14px] leading-relaxed text-[#494949] md:col-start-3 lg:text-[15px]">
                {itemDescription}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export { SolutionOfferings };
