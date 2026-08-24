import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full  bg-background">
      <div className="mx-auto flex h-20 w-full max-w-360 items-center gap-6 px-4 sm:px-6 lg:px-10">
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
    </header>
  );
}

export { Header };
