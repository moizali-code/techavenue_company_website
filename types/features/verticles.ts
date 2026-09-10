import type { CardProps } from "@/types/features/card";

export type CoreVerticle = Omit<CardProps, "title" | "description"> & {
  id: number;
  uuid: string;
  image: string;
  title: string;
  description: string;
};

export type CoreVerticlesSection = {
  heading: string;
  description: string;
  verticles: CoreVerticle[];
};

export type CoreVerticlesProps = CoreVerticlesSection;

export type VerticlesHeader = {
  title: string;
  description: string;
  image: string;
};

export type VerticleFeature = {
  image: string;
  title: string;
};

export type VerticleDetail = {
  id: number;
  uuid: string;
  eyebrow: string;
  title: string;
  description: string;
  features: VerticleFeature[];
  image: string;
  iconImage: string;
};

export type VerticleDetailsProps = {
  details: VerticleDetail[];
};

export type VerticlesPageContent = {
  allVerticlesHeader: VerticlesHeader;
  coreVerticles: CoreVerticlesSection;
  allVerticlesArticles: VerticleDetail[];
};

export type VerticleSolution = {
  id: number;
  uuid: string;
  title: string;
  description: string;
};

export type VerticleSolutionsSection = {
  heading: string;
  description: string;
  items: VerticleSolution[];
};

export type VerticlePhase = {
  id: number;
  uuid: string;
  title: string;
  focus: string;
  description: string;
};

export type VerticlePageHeaderSection = {
  heading: string;
  description: string;
};

export type VerticlePage = {
  id: number;
  uuid: string;
  title: string;
  verticleHeader: VerticlePageHeaderSection;
  image: string;
  solutions: VerticleSolutionsSection;
  phases: VerticlePhase[];
};

export type VerticlePageHeaderProps = VerticlePageHeaderSection & {
  eyebrow: string;
  image?: string;
};

export type VerticleSolutionsProps = VerticleSolutionsSection;

export type VerticlePhasesProps = {
  phases: VerticlePhase[];
};
