import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollTop } from "@/components/layout/scroll-top";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Partners", href: "/partners" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookies Policy", href: "/cookies-policy" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Tech-Avenue-Pvt-Ltd/100064156050542/#",
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.13V9.9H7.55V13h2.72v8h3.23Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 3.6c-2.28 0-2.57.01-3.47.05-.9.04-1.51.18-2.05.39-.56.22-1.03.51-1.5.98-.47.47-.76.94-.98 1.5-.21.54-.35 1.15-.39 2.05C3.57 9.47 3.56 9.76 3.56 12s.01 2.53.05 3.43c.4.9.18 1.51.39 2.05.22.56.51 1.03.98 1.5.47.47.94.76 1.5.98.54.21 1.15.35 2.05.39.9.04 1.19.05 3.47.05s2.57-.01 3.47-.05c.9-.04 1.51-.18 2.05-.39.56-.22 1.03-.51 1.5-.98.47-.47.76-.94.98-1.5.21-.54.35-1.15.39-2.05.04-.9.05-1.19.05-3.43s-.01-2.53-.05-3.43c-.04-.9-.18-1.51-.39-2.05a4.15 4.15 0 0 0-.98-1.5 4.15 4.15 0 0 0-1.5-.98c-.54-.21-1.15-.35-2.05-.39-.9-.04-1.19-.05-3.47-.05Zm0 1.51c2.24 0 2.5.01 3.39.05.82.04 1.26.17 1.56.29.39.15.67.33.96.62.29.29.47.57.62.96.12.3.25.74.29 1.56.04.89.05 1.15.05 3.39s-.01 2.5-.05 3.39c-.4.82-.17 1.26-.29 1.56-.15.39-.33.67-.62.96-.29.29-.57.47-.96.62-.3.12-.74.25-1.56.29-.89.04-1.15.05-3.39.05s-2.5-.01-3.39-.05c-.82-.04-1.26-.17-1.56-.29a2.6 2.6 0 0 1-.96-.62 2.6 2.6 0 0 1-.62-.96c-.12-.3-.25-.74-.29-1.56-.04-.89-.05-1.15-.05-3.39s.01-2.5.05-3.39c.04-.82.17-1.26.29-1.56.15-.39.33-.67.62-.96.29-.29.57-.47.96-.62.3-.12.74-.25 1.56-.29.89-.04 1.15-.05 3.39-.05Zm0 2.57a4.32 4.32 0 1 0 0 8.64 4.32 4.32 0 0 0 0-8.64Zm0 7.13a2.81 2.81 0 1 1 0-5.62 2.81 2.81 0 0 1 0 5.62Zm5.5-7.3a1.01 1.01 0 1 1-2.02 0 1.01 1.01 0 0 1 2.02 0Z",
  },
  {
    label: "X",
    href: "https://x.com",
    path: "M17.18 4h2.64l-5.77 6.59L20.83 20h-5.31l-4.16-5.44L6.6 20H3.96l6.17-7.05L3.4 4h5.45l3.76 4.97L17.18 4Zm-.93 14.42h1.46L8.2 5.5H6.63l9.62 12.92Z",
  },
];

function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA]">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1.3fr] lg:gap-12">
          <div>
            <p className="font-serif text-base font-bold text-foreground">
              Tech Avenue
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Empowering enterprises and governments with AI-driven
              technologies, cybersecurity, intelligent infrastructure, and
              digital transformation solutions that drive sustainable innovation
              and business growth.
            </p>

            <ul className="mt-7 flex items-center gap-3">
              {socialLinks.map(({ label, href, path }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="shadow-sm flex size-9 items-center justify-center rounded-full text-[#6C6C6C] transition-colors hover:border-brand hover:text-brand"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                      aria-hidden="true"
                    >
                      <path d={path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.12em] text-brand uppercase">
              Quick Links
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-foreground/80 transition-colors hover:text-brand"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.12em] text-brand uppercase">
              Contact Us
            </h2>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-foreground/80">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-[#1E3C8C]"
                  aria-hidden="true"
                />
                <address className="not-italic leading-relaxed">
                  Office #409, Fourth Floor, Evacuee Trust Complex, F-5/1,
                  Islamabad, 44000, Pakistan
                </address>
              </li>
              <li className="flex gap-3">
                <Phone
                  className="size-4 shrink-0 text-[#1E3C8C]"
                  aria-hidden="true"
                />
                <a
                  href="tel:+920518844080"
                  className="transition-colors hover:text-brand"
                >
                  (051) 8844080
                </a>
              </li>
              <li className="flex gap-3">
                <Mail
                  className="size-4 shrink-0 text-[#1E3C8C]"
                  aria-hidden="true"
                />
                <a
                  href="mailto:info@techavenue.biz"
                  className="transition-colors hover:text-brand"
                >
                  info@techavenue.biz
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.12em] text-brand uppercase">
              Stay Connected
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Receive insights on emerging technologies, cybersecurity trends,
              and enterprise innovation.
            </p>

            <form className="mt-5 flex flex-col gap-3">
              <label htmlFor="footer-email" className="sr-only">
                Email Address
              </label>
              <Input
                id="footer-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Email Address"
                className="h-12 rounded-full border-border bg-background px-5 shadow-none"
              />
              <Button
                type="submit"
                variant="brand"
                size="lg"
                className="h-12 rounded-full uppercase"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4  pt-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tech Avenue. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {legalLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-foreground/80 transition-colors hover:text-brand"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <ScrollTop />
    </footer>
  );
}

export { Footer };
