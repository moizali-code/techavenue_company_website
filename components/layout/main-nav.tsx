"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Banknote,
  BrainCircuit,
  Briefcase,
  Building2,
  ChartColumn,
  CircleHelp,
  ClipboardList,
  Cloud,
  Cpu,
  Factory,
  Fuel,
  GraduationCap,
  HardHat,
  Headset,
  HeartPulse,
  Info,
  Landmark,
  Leaf,
  Lightbulb,
  Newspaper,
  RadioTower,
  Rocket,
  ShieldCheck,
  Sprout,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
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

const industryIcons: Record<string, LucideIcon> = {
  "3f1a6c2e-9b47-4d18-8a52-71c0d5e4b901": Landmark,
  "8c74b1d9-2e35-4af6-9d10-6b83f7a2c542": Cpu,
  "5d92e0a7-6c81-4b23-97ef-2a14d8b60c73": RadioTower,
  "b06f3a48-71d2-4e95-8c37-9f5e2b1a0d64": Banknote,
  "e4718b53-0d6a-49c7-b218-3c9f6a5d7e20": HeartPulse,
  "27ac95f1-4b60-4d83-a5e9-8d012f7b6c34": GraduationCap,
  "9b53d7c0-8e14-42f6-b073-5a6c1e8f4d29": HardHat,
  "1e60f4b8-53a9-4c07-8d62-7b94e0a3c518": Sprout,
  "6a2d81e4-b703-4f59-9c48-0e35d7b1a962": Zap,
  "c85b0937-1a4e-4620-b7d3-2f16c9e08a45": Fuel,
  "4d19a7f2-6c58-4b31-90ae-8e27b5d3f016": Factory,
};

const industryNavLinks: NavLink[] = industries.map((industry) => ({
  title: industry.title,
  description: industry.description,
  href: `/industry/${industry.uuid}`,
  icon: industryIcons[industry.uuid] ?? Building2,
}));

const solutionIcons: Record<string, LucideIcon> = {
  "a7f3c19e-52b8-4d06-9e41-3c8b7d502f6a": ShieldCheck,
  "5b21e8d4-9c73-4a1f-b60e-27d4f9a31c85": Briefcase,
  "e94d0a76-1f52-4b83-8c25-6a710e4bd93f": Building2,
  "2c68b3f0-7d41-49ea-95b7-08f3c6d21a54": GraduationCap,
  "84f1d5c9-3a07-4e62-b18d-5c92074fe3b6": Sprout,
  "d306a2e8-6b95-4137-a4f0-91e58c7d206b": BrainCircuit,
  "71bc4f83-0e26-45d9-8a73-b4c62f019d75": Landmark,
  "3e57c810-4d9b-42f6-b085-7a13e9c46082": RadioTower,
  "c0942b6f-8e15-4370-91da-6b48f2071e93": Users,
  "6fa85d31-b207-4c94-8e63-0d29a7f51c48": Leaf,
};

const solutionNavLinks: NavLink[] = solutions.map((solution) => ({
  title: solution.title,
  description: solution.description,
  href: `/solutions/${solution.uuid}`,
  icon: solutionIcons[solution.uuid] ?? Building2,
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
    label: "Services",
    href: "/services",
    // items: [
    //   {
    //     title: "AI & Machine Learning",
    //     description: "Models that move from proof of concept to production.",
    //     href: "/services/ai-machine-learning",
    //     icon: BrainCircuit,
    //   },
    //   {
    //     title: "Cybersecurity Services",
    //     description: "Assessments, hardening, and round-the-clock monitoring.",
    //     href: "/services/cybersecurity",
    //     icon: ShieldCheck,
    //   },
    //   {
    //     title: "Digital Transformation",
    //     description:
    //       "Modernise legacy processes without stalling the business.",
    //     href: "/services/digital-transformation",
    //     icon: Rocket,
    //   },
    //   {
    //     title: "Technology Consulting",
    //     description: "Independent guidance on architecture and vendor choices.",
    //     href: "/services/technology-consulting",
    //     icon: Lightbulb,
    //   },
    //   {
    //     title: "Cloud & Infrastructure",
    //     description: "Migration, cost control, and resilient platform design.",
    //     href: "/services/cloud-infrastructure",
    //     icon: Cloud,
    //   },
    //   {
    //     title: "System Integration",
    //     description: "Connect disparate systems into one coherent estate.",
    //     href: "/services/system-integration",
    //     icon: Workflow,
    //   },
    //   {
    //     title: "DevOps & Automation",
    //     description: "Faster, safer releases through pipelines and IaC.",
    //     href: "/services/devops-automation",
    //     icon: Workflow,
    //   },
    //   {
    //     title: "Data Analytics",
    //     description:
    //       "Pipelines, warehouses, and dashboards teams actually use.",
    //     href: "/services/data-analytics",
    //     icon: ChartColumn,
    //   },
    //   {
    //     title: "Project Advisory",
    //     description:
    //       "Delivery oversight that keeps scope, cost, and time honest.",
    //     href: "/services/project-advisory",
    //     icon: ClipboardList,
    //   },
    //   {
    //     title: "Managed Support Services",
    //     description: "Ongoing operations and support with clear SLAs.",
    //     href: "/services/managed-support",
    //     icon: Headset,
    //   },
    // ],
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
              <NavigationMenuTrigger className="cursor-pointer text-foreground/80 hover:bg-transparent hover:text-brand-link focus:bg-transparent data-popup-open:bg-transparent data-popup-open:text-brand-link">
                {item.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-6">
                <p className="mb-4 text-sm font-semibold text-foreground border-b border-[#F5F5F5 ] pb-2">
                  {item.label}
                </p>
                <ul className="flex max-h-[350px] h-fit flex-col flex-wrap gap-x-2 ">
                  {item.items.map(
                    ({ title, description, href, icon: Icon }) => (
                      <li key={title} className=" w-[300px]">
                        <NavigationMenuLink
                          render={<Link href={href} />}
                          closeOnClick
                          className="items-start gap-3 rounded-md p-3 hover:bg-muted/60"
                        >
                          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full  text-muted-foreground">
                            <Icon className="size-4" aria-hidden="true" />
                          </span>
                          <span className="flex flex-col gap-0.5">
                            <span className="text-sm font-semibold text-foreground">
                              {title}
                            </span>
                            <span className="text-xs leading-snug text-muted-foreground">
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
