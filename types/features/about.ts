import type { TeamSection } from "@/types/features/about-team";
import type { CardProps } from "@/types/features/card";

export type AboutHeader = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export type CompanyValue = CardProps & {
  id: number;
  uuid: string;
};

export type CompanyValuesSection = {
  heading: string;
  image: string;
  values: CompanyValue[];
};

export type CompanyValuesProps = CompanyValuesSection & {
  className?: string;
};

export type PartnersSection = {
  heading: string;
  partners: string[];
};

export type AboutCta = {
  title: string;
  description: string;
};

export type AboutPageContent = {
  header: AboutHeader;
  companyValues: CompanyValuesSection;
  partners: PartnersSection;
  team: TeamSection;
  cta: AboutCta;
};
