import type { Metadata } from "next";
import type React from "react";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactCta } from "@/components/layout/contact-cta";
import { SiteSettingsProvider } from "@/components/layout/site-settings-provider";
import { getContactPageData, getSiteSettings } from "@/lib/cms";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return { title: settings.siteTitle, description: settings.siteDescription };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [{ details }, settings] = await Promise.all([getContactPageData(), getSiteSettings()]);

  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <SiteSettingsProvider settings={settings}>
        <Header settings={settings} />
        <main className="flex-1">{children}</main>
        <ContactCta />
        <Footer settings={settings} address={details.officeAddress} phone={details.phone} email={details.email} />
        </SiteSettingsProvider>
      </body>
    </html>
  );
}
