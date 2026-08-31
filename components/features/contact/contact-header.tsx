import { AtSign, Mail, Phone } from "lucide-react";

import { Jumbotron } from "@/components/shared/jumbotron";
import { Button } from "@/components/ui/button";
import type { ContactHeaderProps } from "@/types/features/contact";

function ContactHeader({
  eyebrow,
  title,
  description,
  image,
  className,
}: ContactHeaderProps) {
  return (
    <Jumbotron
      title={title}
      description={description}
      backgroundImage={image}
      backgroundImageAlt="Person holding a phone while working on a laptop"
      eyebrow={
        <div className="flex flex-col items-center gap-8 lg:gap-12">
          <div
            aria-hidden="true"
            className="flex items-center justify-center gap-4 md:gap-6"
          >
            <span className="flex size-14 items-center justify-center rounded-full border border-white/30 md:size-16 lg:size-20">
              <Phone className="size-6 text-white/70 lg:size-8" />
            </span>

            <span className="flex size-[72px] items-center justify-center rounded-full border border-white/30 md:size-20 lg:size-28">
              <Mail className="size-8 text-white/70 lg:size-11" />
            </span>

            <span className="flex size-14 items-center justify-center rounded-full border border-white/30 md:size-16 lg:size-20">
              <AtSign className="size-6 text-white/70 lg:size-8" />
            </span>
          </div>

          <Button variant="tab" className="rounded-full">
            {eyebrow}
          </Button>
        </div>
      }
      classNames={{
        mainWrapper: className,
        overlay: "bg-[rgba(0,0,0,0.6)]",
        content: "gap-4",
        eyebrow: "justify-center",
        title:
          "font-times text-[32px] font-bold text-white md:text-[42px] lg:text-[48px]",
        description:
          "text-[15px] leading-relaxed text-white/80 lg:text-[18px]",
      }}
    />
  );
}

export { ContactHeader };
