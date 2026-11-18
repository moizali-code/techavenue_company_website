"use client";

import { useSiteSettings } from "@/components/layout/site-settings-provider";
import type { SiteSettings } from "@/lib/site-defaults";

export function WebsiteText({ name }: { name: keyof SiteSettings }) {
  const value = useSiteSettings()[name];
  return typeof value === "string" ? value : null;
}
