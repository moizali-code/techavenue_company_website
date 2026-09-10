"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { isNavGroup, navigationItems } from "@/components/layout/main-nav";

function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();

  const close = () => {
    setOpen(false);
    setOpenSection(null);
  };

  const toggleSection = (label: string) =>
    setOpenSection((current) => (current === label ? null : label));

  return (
    <div className={className}>
      <Button
        variant="ghost"
        size="icon"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => (open ? close() : setOpen(true))}
      >
        {open ? (
          <X className="text-[#1E3C8C]" />
        ) : (
          <Menu className="text-[#1E3C8C]" />
        )}
      </Button>

      {open && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-border bg-background px-4 py-4 shadow-lg">
          <ul className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              <li key={item.label}>
                {!isNavGroup(item) ? (
                  <Link
                    href={item.href}
                    onClick={close}
                    className={cn(
                      "block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted",
                      pathname === item.href && "text-brand-link",
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    {item.href ? (
                      <div className="flex items-center gap-1">
                        <Link
                          href={item.href}
                          onClick={close}
                          className={cn(
                            "flex-1 rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted",
                            pathname === item.href && "text-brand-link",
                          )}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleSection(item.label)}
                          aria-expanded={openSection === item.label}
                          aria-controls={`mobile-nav-${item.label}`}
                          aria-label={`Toggle ${item.label} menu`}
                          className="cursor-pointer rounded-md px-3 py-2.5 hover:bg-muted"
                        >
                          <ChevronDown
                            className={cn(
                              "size-4 transition-transform text-[#1E3C8C]",
                              openSection === item.label && "rotate-180",
                            )}
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => toggleSection(item.label)}
                        aria-expanded={openSection === item.label}
                        aria-controls={`mobile-nav-${item.label}`}
                        className="flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform text-[#1E3C8C]",
                            openSection === item.label && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                    {openSection === item.label && (
                      <ul
                        id={`mobile-nav-${item.label}`}
                        className="mt-1 flex flex-col gap-0.5 border-l border-border pl-3"
                      >
                        {item.items.map(
                          ({ title, href, icon: NavIcon, image }) => (
                            <li key={title}>
                              <Link
                                href={href}
                                onClick={close}
                                className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                              >
                                {image ? (
                                  <Icon
                                    src={image}
                                    className="size-4 text-[#8C8C8C]"
                                  />
                                ) : (
                                  NavIcon && (
                                    <NavIcon
                                      className="size-4 shrink-0 text-[#8C8C8C]"
                                      aria-hidden="true"
                                    />
                                  )
                                )}
                                {title}
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          <Button
            render={<Link href="/contact" onClick={close} />}
            nativeButton={false}
            size="lg"
            className="mt-4 w-full bg-(image:--brand-gradient) text-brand-foreground transition-opacity hover:opacity-90"
          >
            Contact Us
          </Button>
        </div>
      )}
    </div>
  );
}

export { MobileNav };
