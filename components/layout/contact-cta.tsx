"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSiteSettings } from "@/components/layout/site-settings-provider";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

function ContactCta() {
  const pathname = usePathname();
  const settings = useSiteSettings();

  if (pathname === "/about") return null;

  return (
    <Container>
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-12">
        <div>
          <h2 className="font-be-vietnam text-[32px] font-semibold tracking-tight text-balance text-[#191C1E] md:text-[40px] lg:text-[38px]">
            {settings.ctaTitle}
          </h2>

          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            render={<Link href={settings.contactHref} />}
            className="mt-8 h-10 w-full px-10 text-[14px] font-medium tracking-[0.08em] uppercase  md:min-w-[380px] md:w-[380px]"
          >
            {settings.contactLabel}
          </Button>
        </div>

        <p className="font-normal text-[18px] leading-relaxed text-[#444651] md:self-start md:text-right ">
          {settings.ctaDescription}
        </p>
      </div>
    </Container>
  );
}

export { ContactCta };
