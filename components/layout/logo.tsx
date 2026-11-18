import type { SiteSettings } from "@/lib/site-defaults";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

function Logo({ className, settings }: { className?: string; settings: SiteSettings }) {
  return (
    <Link
      href="/"
      aria-label={settings.homeLabel}
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src={settings.logo}
        alt={settings.logoAlt}
        width={188}
        height={50}
        priority
        className="h-11 w-auto"
      />
    </Link>
  );
}

export { Logo };
