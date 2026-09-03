"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

function ContactCta() {
  const pathname = usePathname();

  if (pathname === "/about") return null;

  return (
    <Container>
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-12">
        <div>
          <h2 className="font-be-vietnam text-[32px] font-semibold tracking-tight text-balance text-[#191C1E] md:text-[40px] lg:text-[48px]">
            Ready to Accelerate Your Digital Future?
          </h2>

          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            render={<Link href="/contact" />}
            className="mt-8 h-12 w-full px-10 text-[14px] font-medium tracking-[0.08em] uppercase  md:min-w-[380px] md:w-[380px]"
          >
            Contact Us
          </Button>
        </div>

        <p className="font-normal text-[18px] leading-relaxed text-[#444651] md:self-start md:text-right ">
          Partner with Tech Avenue to unlock intelligent technologies, secure
          infrastructure, and scalable digital transformation solutions designed
          for the future.
        </p>
      </div>
    </Container>
  );
}

export { ContactCta };
