"use client";

import { createContext, useContext, type ReactNode } from "react";
import { siteDefaults, type SiteSettings } from "@/lib/site-defaults";

const SiteSettingsContext = createContext<SiteSettings>(siteDefaults);

export function SiteSettingsProvider({ settings, children }: { settings: SiteSettings; children: ReactNode }) {
  return <SiteSettingsContext.Provider value={settings}>{children}</SiteSettingsContext.Provider>;
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
