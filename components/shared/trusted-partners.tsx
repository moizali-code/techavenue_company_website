import { Container } from "@/components/shared/container";

type TrustedPartnersProps = {
  heading?: string;
  partners: string[];
  className?: string;
};

function TrustedPartners({
  heading,
  partners,
  className,
}: TrustedPartnersProps) {
  return (
    <Container
      classNames={{
        mainWrapper: className,
        container: "flex flex-col items-center gap-6 lg:gap-8",
      }}
    >
      {heading && (
        <h2 className="font-times text-sm font-bold tracking-[0.18em] text-[#1E3C8C] uppercase lg:text-base">
          {heading}
        </h2>
      )}

      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-14">
        {partners.map((partner) => (
          <li
            key={partner}
            className="text-2xl font-bold font-poppins tracking-tight text-[#8E8E93] md:text-3xl lg:text-[34px]"
          >
            {partner}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export { TrustedPartners };
