import { Award, Globe, Handshake, Users } from "lucide-react";

import { Card } from "@/components/shared/card";
import { cn } from "@/lib/utils";
import type { HomeStatsProps } from "@/types/features/home";

const statIcons = [Globe, Users, Handshake, Award];

function HomeStats({ stats, className }: HomeStatsProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-y-8 bg-[linear-gradient(90deg,#1E3C8C_0%,#12275C_45%,#000000_100%)] px-6 py-8 md:grid-cols-4 md:gap-y-0 lg:px-10",
        className,
      )}
    >
      {stats.map(({ uuid, value, label }, index) => {
        const Icon = statIcons[index % statIcons.length];

        return (
          <Card
            key={uuid}
            variant="bare"
            title={value}
            description={
              <span className="flex items-center gap-2">
                <Icon className="size-4 shrink-0 lg:size-5 " aria-hidden />
                {label}
              </span>
            }
            classNames={{
              mainWrapper: cn(
                "border-white/20 px-2 lg:px-6",
                index % 2 === 1 && "border-l",
                index !== 0 && "md:border-l",
              ),
              content: "gap-1 px-0 pt-0 pb-0",
              title:
                "font-poppins text-[28px] font-bold text-white md:text-[34px] lg:text-[40px]",
              description: "text-[13px] text-white lg:text-[15px]",
            }}
          />
        );
      })}
    </div>
  );
}

export { HomeStats };
