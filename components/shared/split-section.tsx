import Image from "next/image";

import { Jumbotron } from "@/components/shared/jumbotron";
import { cn } from "@/lib/utils";
import type { SplitSectionProps } from "@/types/features/split-section";

function SplitSection({
  image,
  imageAlt = "",
  reversed = false,
  eyebrow,
  title,
  description,
  action,
  mediaOverlay,
  classNames,
}: SplitSectionProps) {
  return (
    <div
      className={cn(
        "grid items-stretch gap-6 md:grid-cols-2 md:gap-10 lg:gap-14",
        classNames?.mainWrapper,
      )}
    >
      <div
        className={cn(
          "relative aspect-[4/3] w-full overflow-hidden rounded-[12px]",
          reversed && "md:order-2",
          classNames?.media,
        )}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className={cn("object-cover", classNames?.image)}
        />

        {mediaOverlay && (
          <div
            className={cn(
              "absolute right-4 bottom-4 z-10",
              classNames?.mediaOverlay,
            )}
          >
            {mediaOverlay}
          </div>
        )}
      </div>

      <div className={cn(reversed && "md:order-1")}>
        <Jumbotron
          align="left"
          eyebrow={eyebrow}
          title={title}
          description={description}
          action={action}
          classNames={{
            mainWrapper: "px-0 py-0 lg:px-0 lg:py-0",
            content: cn("max-w-none gap-3", classNames?.content),
            eyebrow: classNames?.eyebrow,
            title: classNames?.title,
            description: cn("max-w-none", classNames?.description),
            action: classNames?.action,
          }}
        />
      </div>
    </div>
  );
}

export { SplitSection };
