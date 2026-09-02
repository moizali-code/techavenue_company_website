import Image from "next/image";

import { cn } from "@/lib/utils";
import type { HomePartnersProps } from "@/types/features/home";

const MARQUEE_COPIES = 2;

function HomePartners({ partners, className }: HomePartnersProps) {
  return (
    <section
      className={cn("w-full overflow-hidden py-10 lg:py-14", className)}
      aria-label="Technology partners"
    >
      <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
        {Array.from({ length: MARQUEE_COPIES }, (_, copy) => (
          <ul
            key={copy}
            aria-hidden={copy > 0}
            className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16 lg:gap-24 lg:pr-24"
          >
            {partners.map(({ uuid, image }) => (
              <li key={uuid} className="shrink-0">
                <Image
                  src={image}
                  alt=""
                  width={160}
                  height={40}
                  className="h-6 w-auto object-contain md:h-8 lg:h-10"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

export { HomePartners };
