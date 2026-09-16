"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, CircleHelp, Info, Newspaper } from "lucide-react";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/shared/icon";
import { industries } from "@/mock/industry";
import { solutions } from "@/mock/solutions";
import type { NavItem, NavLink } from "@/types/features/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const industryNavLinks: NavLink[] = industries.map((industry) => ({
  title: industry.title,
  description: industry.description,
  href: `/industry/${industry.uuid}`,
  image: industry.image,
}));

const solutionNavLinks: NavLink[] = solutions.map((solution) => ({
  title: solution.title,
  description: solution.description,
  href: `/solutions/${solution.uuid}`,
  image: solution.image,
}));

const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    items: [
      {
        title: "About Us",
        description: "Who we are, what we stand for, and the drive behind it.",
        href: "/about",
        icon: Info,
      },
      {
        title: "FAQs",
        description: "Answers to the questions we hear most often.",
        href: "/#faqs",
        icon: CircleHelp,
      },
      {
        title: "Career",
        description: "Open roles and what it is like to grow with us.",
        href: "/career",
        icon: Briefcase,
      },
      {
        title: "News & Media",
        description: "Announcements, press coverage, and company updates.",
        href: "/news",
        icon: Newspaper,
      },
    ],
  },
  {
    label: "Solutions",
    items: solutionNavLinks,
  },

  {
    label: "Industries",
    items: industryNavLinks,
  },
  { label: "Success Stories", href: "/success-stories" },
];

type NavGroup = Extract<NavItem, { items: NavLink[] }>;

const isNavGroup = (item: NavItem): item is NavGroup => Boolean(item.items);

function MainNav({ className }: { className?: string }) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <NavigationMenu className={className} align="center">
      <NavigationMenuList className="gap-1">
        {navigationItems.map((item) =>
          !isNavGroup(item) ? (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                render={<Link href={item.href} />}
                active={isActive(item.href)}
                className={cn(
                  "h-9 px-4 text-sm font-medium text-foreground/80 hover:bg-transparent hover:text-brand-link focus:bg-transparent data-active:bg-transparent data-active:font-semibold data-active:text-brand-link data-active:hover:bg-transparent data-active:focus:bg-transparent",
                )}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuTrigger
                render={item.href ? <Link href={item.href} /> : undefined}
                nativeButton={!item.href}
                role={item.href ? "link" : undefined}
                className={cn(
                  "cursor-pointer text-foreground/80 hover:bg-transparent hover:text-brand-link focus:bg-transparent data-popup-open:bg-transparent data-popup-open:text-brand-link",
                  item.href &&
                    isActive(item.href) &&
                    "font-semibold text-brand-link",
                )}
              >
                {item.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-6">
                <p className="mb-4 text-sm font-semibold text-foreground border-b border-[#F5F5F5 ] pb-2">
                  {item.label}
                </p>
                <ul className="flex max-h-[350px] h-fit flex-col flex-wrap gap-x-2 ">
                  {item.items.map(
                    ({ title, description, href, icon: NavIcon, image }) => (
                      <li key={title} className=" w-[300px]">
                        <NavigationMenuLink
                          render={<Link href={href} />}
                          closeOnClick
                          className="items-start gap-3 rounded-md p-3 hover:bg-muted/60"
                        >
                          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full  text-muted-foreground">
                            {image ? (
                              <Icon
                                src={image}
                                className="size-4 text-[#8C8C8C]"
                              />
                            ) : (
                              NavIcon && (
                                <NavIcon
                                  className="size-4 text-[#8C8C8C]"
                                  aria-hidden="true"
                                />
                              )
                            )}
                          </span>
                          <span className="flex flex-col gap-0.5">
                            <span className="text-sm font-semibold text-foreground">
                              {title}
                            </span>
                            <span className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {description}
                            </span>
                          </span>
                        </NavigationMenuLink>
                      </li>
                    ),
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export { MainNav, navigationItems, isNavGroup };
