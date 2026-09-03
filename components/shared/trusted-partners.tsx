import Image from "next/image";

import { Container } from "@/components/shared/container";
import { Marquee } from "@/components/shared/marquee";
import { cn } from "@/lib/utils";
import type {
  TrustedPartner,
  TrustedPartnersProps,
} from "@/types/shared/trusted-partners";

function TrustedPartners({
  heading,
  partners,
  marquee = false,
  classNames,
}: TrustedPartnersProps) {
  const renderPartner = (partner: TrustedPartner) =>
    typeof partner === "string" ? (
      <li
        key={partner}
        className={cn(
          "shrink-0 font-poppins text-2xl font-bold tracking-tight text-[#8E8E93] md:text-3xl lg:text-[34px]",
          classNames?.item,
        )}
      >
        {partner}
      </li>
    ) : (
      <li key={partner.uuid} className={cn("shrink-0", classNames?.item)}>
        <Image
          src={partner.image}
          alt=""
          width={160}
          height={40}
          className="h-6 w-auto object-contain md:h-8 lg:h-10"
        />
      </li>
    );

  const headingContent = heading && (
    <h2
      className={cn(
        "font-times text-sm font-bold tracking-[0.18em] text-[#1E3C8C] uppercase lg:text-base",
        classNames?.heading,
      )}
    >
      {heading}
    </h2>
  );

  if (marquee) {
    return (
      <section
        aria-label={heading ?? "Partners"}
        className={cn("w-full py-10 lg:py-14", classNames?.mainWrapper)}
      >
        {headingContent && (
          <div className="mb-6 flex justify-center px-4 text-center lg:mb-8">
            {headingContent}
          </div>
        )}

        <Marquee classNames={{ mainWrapper: classNames?.container }}>
          <ul
            className={cn(
              "flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16 lg:gap-24 lg:pr-24",
              classNames?.list,
            )}
          >
            {partners.map(renderPartner)}
          </ul>
        </Marquee>
      </section>
    );
  }

  return (
    <Container
      classNames={{
        mainWrapper: classNames?.mainWrapper,
        container: cn(
          "flex flex-col items-center gap-6 lg:gap-8",
          classNames?.container,
        ),
      }}
    >
      {headingContent}

      <ul
        className={cn(
          "flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-14",
          classNames?.list,
        )}
      >
        {partners.map(renderPartner)}
      </ul>
    </Container>
  );
}

export { TrustedPartners };
