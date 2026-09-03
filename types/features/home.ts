import type { Solution } from "@/types/features/solutions";
import type { TrustedPartnerLogo } from "@/types/shared/trusted-partners";

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
};

export type HomeMissionVisionItem = {
  uuid: string;
  title: string;
  description: string;
  image: string;
};

export type HomeMissionVisionProps = {
  items: HomeMissionVisionItem[];
};

export type HomeTestimonial = {
  uuid: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
};

export type HomeTestimonialsContent = {
  heading: string;
  description: string;
};

export type HomeTestimonialsProps = HomeTestimonialsContent & {
  testimonials: HomeTestimonial[];
};

export type HomeFaq = {
  uuid: string;
  question: string;
  answer: string;
};

export type HomeFaqsProps = {
  heading: string;
  faqs: HomeFaq[];
};

export type HomeSolutionsContent = {
  heading: string;
};

export type HomeSolutionsProps = HomeSolutionsContent & {
  solutions: Solution[];
};

export type HomeIntroProps = {
  headingStart: string;
  headingHighlight: string;
  headingEnd: string;
  headingSecondLine: string;
  experienceLabel: string;
  experienceValue: string;
  description: string;
};

export type HomeData = {
  intro: HomeIntroProps;
  stats: HomeStat[];
  partners: TrustedPartnerLogo[];
  about: HomeAboutProps;
  missionVision: HomeMissionVisionItem[];
  solutions: HomeSolutionsContent;
  testimonials: HomeTestimonialsContent;
  faqs: HomeFaqsProps;
};
