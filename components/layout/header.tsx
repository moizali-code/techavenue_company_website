import type { SiteSettings } from "@/lib/site-defaults";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/layout/logo";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { getIndustries, getSolutionPages } from "@/lib/cms";

async function Header({ settings }: { settings: SiteSettings }) {
  const [industries, solutionPages] = await Promise.all([
    getIndustries(),
    getSolutionPages(),
  ]);

  const industryItems = industries.map((i) => ({
    title: i.title,
    description: i.description,
    href: `/industry/${i.uuid}`,
    image: i.image,
  }));

  const solutionItems = solutionPages.map((s) => ({
    title: s.title,
    description: s.solutionHeader.description,
    href: `/solutions/${s.uuid}`,
    image: s.icon,
  }));

  return (
    <header className="sticky top-0 z-50 w-full  bg-background">
      <Container variant="bare">
        <div className="flex h-20 w-full items-center gap-6">
          <Logo settings={settings} />

          <MainNav
            className="mx-auto hidden max-w-none lg:flex"
            industryItems={industryItems}
            solutionItems={solutionItems}
          />

          <Button
            render={<Link href={settings.contactHref} />}
            nativeButton={false}
            size="lg"
            className="ml-auto hidden h-11 rounded-[4px] bg-(image:--brand-gradient) px-[26px] py-[12px] text-brand-foreground transition-opacity hover:opacity-90 lg:inline-flex"
          >
            {settings.contactLabel}
          </Button>

          <MobileNav
            className="ml-auto lg:hidden"
            industryItems={industryItems}
            solutionItems={solutionItems}
          />
        </div>
      </Container>
    </header>
  );
}

export { Header };
