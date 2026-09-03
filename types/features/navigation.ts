import type { LucideIcon } from "lucide-react";

export type NavLink = {
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon;
  image?: string;
};

export type NavItem =
  | { label: string; href: string; items?: never }
  | { label: string; href?: never; items: NavLink[] };
