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
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { NavItem, NavLink } from "@/types/features/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    columns: 1,
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
        href: "/faqs",
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
    columns: 2,
    items: [
      {
        title: "Network Security",
        description:
          "Comprehensive protection for perimeter, endpoint, and cloud.",
        href: "/solutions/network-security",
        icon: ShieldCheck,
      },
      {
        title: "Business Consulting Services",
        description:
          "Strategic advisory to align operations with growth targets.",
        href: "/solutions/business-consulting",
        icon: Briefcase,
      },
      {
        title: "Smart Infrastructure Solutions",
        description: "Intelligent building and campus systems built to scale.",
        href: "/solutions/smart-infrastructure",
        icon: Building2,
      },
      {
        title: "Learning Management System",
        description:
          "Deliver, track, and measure training across your workforce.",
        href: "/solutions/learning-management",
        icon: GraduationCap,
      },
      {
        title: "Smart Agriculture Platform",
        description: "Sensor-driven insight for higher yield and lower waste.",
        href: "/solutions/smart-agriculture",
        icon: Sprout,
      },
      {
        title: "AI & Software Solutions",
        description: "Custom platforms and models tailored to your workflows.",
        href: "/solutions/ai-software",
        icon: BrainCircuit,
      },
      {
        title: "E-Government Solutions",
        description: "Digital citizen services that are secure and accessible.",
        href: "/solutions/e-government",
        icon: Landmark,
      },
      {
        title: "Telecom Intelligence Solutions",
        description: "Network analytics that turn traffic data into decisions.",
        href: "/solutions/telecom-intelligence",
        icon: RadioTower,
      },
      {
        title: "Human Capital Management",
        description: "Hiring, payroll, and performance in a single system.",
        href: "/solutions/human-capital",
        icon: Users,
      },
      {
        title: "Energy & Climate Solutions",
        description: "Monitor consumption and meet sustainability commitments.",
        href: "/solutions/energy-climate",
        icon: Leaf,
      },
    ],
  },
  {
    label: "Services",
    columns: 2,
    items: [
      {
        title: "AI & Machine Learning",
        description: "Models that move from proof of concept to production.",
        href: "/services/ai-machine-learning",
        icon: BrainCircuit,
      },
      {
        title: "Cybersecurity Services",
        description: "Assessments, hardening, and round-the-clock monitoring.",
        href: "/services/cybersecurity",
        icon: ShieldCheck,
      },
      {
        title: "Digital Transformation",
        description:
          "Modernise legacy processes without stalling the business.",
        href: "/services/digital-transformation",
        icon: Rocket,
      },
      {
        title: "Technology Consulting",
        description: "Independent guidance on architecture and vendor choices.",
        href: "/services/technology-consulting",
        icon: Lightbulb,
      },
      {
        title: "Cloud & Infrastructure",
        description: "Migration, cost control, and resilient platform design.",
        href: "/services/cloud-infrastructure",
        icon: Cloud,
      },
      {
        title: "System Integration",
        description: "Connect disparate systems into one coherent estate.",
        href: "/services/system-integration",
        icon: Workflow,
      },
      {
        title: "DevOps & Automation",
        description: "Faster, safer releases through pipelines and IaC.",
        href: "/services/devops-automation",
        icon: Workflow,
      },
      {
        title: "Data Analytics",
        description:
          "Pipelines, warehouses, and dashboards teams actually use.",
        href: "/services/data-analytics",
        icon: ChartColumn,
      },
      {
        title: "Project Advisory",
        description:
          "Delivery oversight that keeps scope, cost, and time honest.",
        href: "/services/project-advisory",
        icon: ClipboardList,
      },
      {
        title: "Managed Support Services",
        description: "Ongoing operations and support with clear SLAs.",
        href: "/services/managed-support",
        icon: Headset,
      },
    ],
  },
  {
    label: "Industries",
    columns: 2,
    items: [
      {
        title: "Government & Public Sector",
        description:
          "Citizen services built for scale, security, and compliance.",
        href: "/industries/government-public-sector",
        icon: Landmark,
      },
      {
        title: "Information Technology",
        description: "Platform and product engineering for technology firms.",
        href: "/industries/information-technology",
        icon: Cpu,
      },
      {
        title: "Telecommunications",
        description: "Operator-grade tooling for networks under constant load.",
        href: "/industries/telecommunications",
        icon: RadioTower,
      },
      {
        title: "Banking & Financial Services",
        description: "Secure systems for regulated financial institutions.",
        href: "/industries/banking-financial-services",
        icon: Banknote,
      },
      {
        title: "Healthcare",
        description: "Patient-centred technology that protects sensitive data.",
        href: "/industries/healthcare",
        icon: HeartPulse,
      },
      {
        title: "Education & Skill Development",
        description: "Learning platforms that widen access and track outcomes.",
        href: "/industries/education-skill-development",
        icon: GraduationCap,
      },
      {
        title: "Construction & Smart Infrastructure",
        description: "Connected sites and buildings managed from one place.",
        href: "/industries/construction-smart-infrastructure",
        icon: HardHat,
      },
      {
        title: "Agriculture",
        description: "Sensor-driven insight for higher yield and lower waste.",
        href: "/industries/agriculture",
        icon: Sprout,
      },
      {
        title: "Energy & Utilities",
        description:
          "Grid, metering, and distribution visibility in real time.",
        href: "/industries/energy-utilities",
        icon: Zap,
      },
      {
        title: "Oil & Gas",
        description: "Upstream and downstream operations with safer oversight.",
        href: "/industries/oil-gas",
        icon: Fuel,
      },
      {
        title: "Manufacturing",
        description: "Connected production floors with real-time visibility.",
        href: "/industries/manufacturing",
        icon: Factory,
      },
    ],
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
                <ul
                  className={cn(
                    "grid gap-x-8 gap-y-1 h-[300px] overflow-auto",
                    item.columns === 2
                      ? "w-184 grid-cols-2"
                      : "w-88 grid-cols-1",
                  )}
                >
                  {item.items.map(
                    ({ title, description, href, icon: Icon }) => (
                      <li key={title}>
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
