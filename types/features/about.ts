import type { ReactNode } from "react";

import type { CardProps } from "@/types/features/card";

export type TeamMember = {
  id: number;
  uuid: string;
  name: string;
  role: string;
  image: string;
  description: string;
};

export type TeamMemberModalProps = {
  member: TeamMember;
  trigger: ReactNode;
};

export type TeamSection = {
  heading: string;
  description: string;
  members: TeamMember[];
};

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

export type CompanyValuesProps = CompanyValuesSection;

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
