import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import type { VerticleSolutionsProps } from "@/types/features/verticles";

function VerticleSolutions({
  heading,
  description,
  items,
}: VerticleSolutionsProps) {
  return (
    <Container>
      <div className="flex flex-col gap-8 lg:gap-10 ">
        <Jumbotron
          align="left"
          title={heading}
          description={description}
          classNames={{
            mainWrapper: "px-0 py-0 lg:px-0 lg:py-0 ",
            content: "max-w-full gap-3",
            title:
              "font-be-vietnam text-[26px] font-bold text-[#191C1E] md:text-[30px] lg:text-[34px]",
            description:
              "text-[14px] leading-relaxed text-[#494949] lg:text-[15px]",
          }}
        />

        <ul className="flex flex-col border-t border-[#E5E5E5]">
          {items.map(({ uuid, title, description: itemDescription }, index) => (
            <li
              key={uuid}
              className="group grid grid-cols-[1.75rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-2 border-b border-[#E5E5E5] py-5 md:grid-cols-[2.25rem_minmax(0,0.9fr)_minmax(0,1.35fr)] md:gap-x-6 md:py-6 lg:gap-x-10"
            >
              <span className="font-be-vietnam text-[13px] font-medium text-[#1E3C8C]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-[18px] font-bold text-[#191C1E] transition-colors group-hover:text-[#1E3C8C] lg:text-[20px]">
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

export { VerticleSolutions };
