import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/layout/logo";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full  bg-background">
      <Container variant="bare">
        <div className="flex h-20 w-full items-center gap-6">
          <Logo />

          <MainNav className="mx-auto hidden max-w-none lg:flex" />

          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            size="lg"
            className="ml-auto hidden h-11 rounded-[4px] bg-(image:--brand-gradient) px-[26px] py-[12px] text-brand-foreground transition-opacity hover:opacity-90 lg:inline-flex"
          >
            Contact Us
          </Button>

          <MobileNav className="ml-auto lg:hidden" />
        </div>
      </Container>
    </header>
  );
}

export { Header };
