import { cn } from "@/lib/utils";
import type { MarqueeProps } from "@/types/shared/marquee";

const MARQUEE_COPIES = 2;

function Marquee({ children, classNames }: MarqueeProps) {
  return (
    <div className={cn("w-full overflow-hidden", classNames?.mainWrapper)}>
      <div
        className={cn(
          "flex w-max animate-marquee items-center motion-reduce:animate-none",
          classNames?.track,
        )}
      >
        {Array.from({ length: MARQUEE_COPIES }, (_, copy) => (
          <div
            key={copy}
            aria-hidden={copy > 0}
            className={cn("flex shrink-0 items-center", classNames?.group)}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Marquee };
