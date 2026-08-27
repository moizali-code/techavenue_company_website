import type { CardProps } from "@/types/features/card";

export const caseStudies: (CardProps & { id: string })[] = [
  {
    id: "threat-detection",
    title: "Enterprise Threat Detection Platform",
    description:
      "A multi-layered AI-driven security framework implemented for a global Tier-1 bank to mitigate zero-day vulnerabilities.",
    image: "/about_image.png",
    imageAlt: "Security operations center with monitoring dashboards",
    tags: ["Cybersecurity", "Banking"],
    href: "/case-studies/threat-detection",
  },
  {
    id: "cloud-migration",
    title: "Zero-Downtime Cloud Migration",
    description:
      "Moved a nationwide logistics network onto a resilient multi-region cloud footprint without pausing daily operations.",
    image: "/about_image.png",
    imageAlt: "Distributed cloud infrastructure visualisation",
    tags: ["Cloud", "Logistics"],
    href: "/case-studies/cloud-migration",
  },
  {
    id: "claims-automation",
    title: "Intelligent Claims Automation",
    description:
      "A document-processing pipeline that cut insurance claim turnaround times from days to minutes for a regional insurer.",
    image: "/about_image.png",
    imageAlt: "Automated document processing workflow",
    tags: ["Automation", "Insurance"],
    href: "/case-studies/claims-automation",
  },
  {
    id: "retail-analytics",
    title: "Real-Time Retail Analytics",
    description:
      "A streaming analytics layer giving 400+ storefronts live visibility into inventory, demand, and shopper behaviour.",
    image: "/about_image.png",
    imageAlt: "Retail analytics dashboard",
    tags: ["Data", "Retail"],
    href: "/case-studies/retail-analytics",
  },
];