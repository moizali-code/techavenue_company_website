"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { isNavGroup, navigationItems } from "@/components/layout/main-nav"

function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const close = () => setOpen(false)

  return (
    <div className={className}>
      <Button
        variant="ghost"
        size="icon"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </Button>

      {open ? (
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
                      pathname === item.href && "text-brand-link"
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <details className="group rounded-md">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted">
                      {item.label}
                      <ChevronDown
                        className="size-4 transition-transform group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <ul className="mt-1 flex flex-col gap-0.5 border-l border-border pl-3">
                      {item.items.map(({ title, href, icon: Icon }) => (
                        <li key={title}>
                          <Link
                            href={href}
                            onClick={close}
                            className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                          >
                            <Icon className="size-4 shrink-0" aria-hidden="true" />
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
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
      ) : null}
    </div>
  )
}

export { MobileNav }
