import Link from "next/link";
import { Clock, ExternalLink, Globe, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Button } from "@/components/ui/button";
import type { ContactDetailsProps } from "@/types/features/contact";

function ContactDetails({
  eyebrow,
  title,
  description,
  officeAddress,
  phone,
  email,
  website,
  businessHours,
  weekendHours,
  mapEmbedUrl,
  directionsUrl,
  className,
}: ContactDetailsProps) {
  return (
    <Container
      classNames={{
        mainWrapper: className,
        container: "font-poppins flex flex-col gap-10",
      }}
    >
      <Jumbotron
        align="left"
        eyebrow={
          <span className="text-[12px] font-bold tracking-[0.14em] text-[#1E3C8C] uppercase">
            {eyebrow}
          </span>
        }
        title={title}
        description={description}
        classNames={{
          mainWrapper: "px-0 py-0 lg:px-0 lg:py-0",
          content: "max-w-none gap-3",
          title:
            "font-poppins text-[28px] font-bold text-[#191C1E] md:text-[34px] lg:text-[40px]",
          description: "max-w-3xl text-[16px] leading-relaxed text-[#444651]",
        }}
      />

      <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col gap-6 rounded-[12px] border border-[#E6E6E6] bg-white p-6 lg:p-8">
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-[12px] font-bold tracking-[0.12em] text-[#1E3C8C] uppercase">
              <MapPin className="size-4" />
              Head Office
            </span>
            <p className="text-[16px] leading-relaxed font-medium text-[#191C1E]">
              {officeAddress}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-[12px] font-bold tracking-[0.12em] text-[#1E3C8C] uppercase">
                <Phone className="size-4" />
                Phone
              </span>
              <Link
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="text-[16px] text-[#191C1E] transition-colors hover:text-brand-link"
              >
                {phone}
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-[12px] font-bold tracking-[0.12em] text-[#1E3C8C] uppercase">
                <Mail className="size-4" />
                Email
              </span>
              <Link
                href={`mailto:${email}`}
                className="text-[16px] break-all text-[#191C1E] transition-colors hover:text-brand-link"
              >
                {email}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-[12px] font-bold tracking-[0.12em] text-[#1E3C8C] uppercase">
              <Globe className="size-4" />
              Website
            </span>
            <Link
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] break-all text-[#191C1E] transition-colors hover:text-brand-link"
            >
              {website}
            </Link>
          </div>

          <div className="flex flex-col gap-2 border-t border-[#E6E6E6] pt-6">
            <span className="flex items-center gap-2 text-[12px] font-bold tracking-[0.12em] text-[#1E3C8C] uppercase">
              <Clock className="size-4" />
              Business Hours
            </span>
            <p className="text-[16px] text-[#191C1E]">{businessHours}</p>
            <p className="text-[14px] text-[#7A7C85]">{weekendHours}</p>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-[12px] border border-[#E6E6E6] bg-white">
          <iframe
            src={mapEmbedUrl}
            title="Tech Avenue head office location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[280px] w-full border-0 md:h-[340px] lg:h-full lg:min-h-[380px]"
          />

          <Button
            variant="brand"
            size="lg"
            nativeButton={false}
            render={
              <Link
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="h-12 w-full gap-2 rounded-none text-[15px] font-medium tracking-normal"
          >
            Get Directions
            <ExternalLink className="size-4" />
          </Button>
        </div>
      </div>
    </Container>
  );
}

export { ContactDetails };
