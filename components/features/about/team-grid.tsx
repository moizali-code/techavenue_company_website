import { TeamMemberModal } from "@/components/features/about/team-member-modal";
import { Card } from "@/components/shared/card";
import type { TeamSection } from "@/types/features/about";

type TeamGridProps = TeamSection;

function TeamGrid({ heading, description, members }: TeamGridProps) {
  return (
    <div className="flex w-full flex-col gap-10 py-10">
      <div className="flex max-w-2xl flex-col gap-3">
        <h2 className="font-poppins text-[25px] font-bold text-[#191C1E] md:text-[32px] lg:text-[36px]">
          {heading}
        </h2>
        <p className="text-[14px] font-normal text-[#494949] lg:text-[15px]">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {members.map((member) => (
          <TeamMemberModal
            key={member.uuid}
            member={member}
            trigger={
              <button type="button" className="w-full cursor-pointer text-left">
                <Card
                  variant="bare"
                  image={member.image}
                  imageAlt={member.name}
                  title={member.name}
                  description={member.role}
                  classNames={{
                    mainWrapper: "h-full max-w-none",
                    imageWrapper: "aspect-[3/4] rounded-[4px] h-[400px]",
                    image: "object-top",
                    content: "gap-1",
                    title: "text-[15px] font-bold uppercase text-[#191C1E]",
                    description: "text-[14px] font-normal text-[#494949]",
                  }}
                />
              </button>
            }
          />
        ))}
      </div>
    </div>
  );
}

export { TeamGrid };
