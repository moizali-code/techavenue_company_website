import type { LucideIcon } from "lucide-react";

export type HomeStat = {
  uuid: string;
  value: string;
  label: string;
  icon: LucideIcon;
};

export type HomeStatsProps = {
  stats: HomeStat[];
  className?: string;
};

export type HomeAboutHighlight = {
  uuid: string;
  label: string;
  icon: string;
};

export type HomeAboutProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  highlights: HomeAboutHighlight[];
  actionLabel: string;
  href: string;
  className?: string;
};

export type HomeMissionVisionItem = {
  uuid: string;
  title: string;
  description: string;
  icon: string;
};

export type HomeMissionVisionProps = {
  items: HomeMissionVisionItem[];
  className?: string;
};

export type HomeTestimonial = {
  uuid: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
};

export type HomeTestimonialsProps = {
  heading: string;
  description: string;
  testimonials: HomeTestimonial[];
  className?: string;
};

export type HomeFaq = {
  uuid: string;
  question: string;
  answer: string;
};

export type HomeFaqsProps = {
  heading: string;
  faqs: HomeFaq[];
  className?: string;
};

export type HomeIntroProps = {
  headingStart: string;
  headingHighlight: string;
  headingEnd: string;
  headingSecondLine: string;
  experienceLabel: string;
  experienceValue: string;
  description: string;
  className?: string;
};
