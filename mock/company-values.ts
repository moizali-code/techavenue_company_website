import type { CardProps } from "@/types/features/card";

export const companyValuesHeading =
  "The Values Behind Our Innovation, Driving Impact Through Purpose";

export const companyValuesImage = {
  src: "/about_image.png",
  alt: "Tech Avenue team collaborating in a meeting room",
};

export const companyValues: (CardProps & { id: string })[] = [
  {
    id: "why-choose-us",
    title: "Why Choose Us",
    description:
      "Organizations choose Tech Avenue for our expertise in AI, cybersecurity, digital transformation, and intelligent technology solutions. Backed by strategic partnerships and decades of industry knowledge, we deliver secure, scalable, and future-ready solutions that empower enterprises and governments to achieve lasting success.",
    actionLabel: "View Success Stories",
    href: "/case-studies",
  },
  {
    id: "our-mission",
    title: "Our Mission",
    description:
      "Our mission is to empower organizations with integrated technology solutions that accelerate innovation, strengthen security, and enable sustainable digital transformation. Through engineering excellence, strategic partnerships, and industry expertise, we create measurable value.",
  },
  {
    id: "our-vision",
    title: "Our Vision",
    description:
      "Our vision is to become a trusted global technology leader recognized for innovation, engineering excellence, and delivering intelligent solutions across enterprise and government sectors. We strive to help organizations confidently embrace emerging technologies and build a smarter, more connected future.",
  },
];
