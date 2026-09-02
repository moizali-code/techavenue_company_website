import type { Solution } from "@/types/features/solutions";

export type HomeStat = {
  uuid: string;
  value: string;
  label: string;
};

export type HomeStatsProps = {
  stats: HomeStat[];
  className?: string;
};

export type HomeAboutHighlight = {
  uuid: string;
  label: string;
  image: string;
};

export type HomeAboutProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  highlights: HomeAboutHighlight[];
  className?: string;
};

export type HomeMissionVisionItem = {
  uuid: string;
  title: string;
  description: string;
  image: string;
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

export type HomePartner = {
  id: number;
  uuid: string;
  image: string;
};

export type HomePartnersProps = {
  partners: HomePartner[];
  className?: string;
};

export type HomeSolutionsProps = {
  heading: string;
  solutions: Solution[];
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

export type HomeData = {
  intro: Omit<HomeIntroProps, "className">;
  stats: HomeStat[];
  partners: HomePartner[];
  about: Omit<HomeAboutProps, "className">;
  missionVision: HomeMissionVisionItem[];
  solutions: Omit<HomeSolutionsProps, "className" | "solutions">;
  testimonials: Omit<HomeTestimonialsProps, "className">;
  faqs: Omit<HomeFaqsProps, "className">;
};
