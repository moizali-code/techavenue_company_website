import type { CardProps } from "@/types/features/card";

export type CoreService = Omit<CardProps, "icon"> & {
  id: number;
  icon: string;
};

export type CoreServicesProps = {
  heading: string;
  description: string;
  services: CoreService[];
  className?: string;
};

export type ServiceFeature = {
  icon: string;
  title: string;
};

export type ServiceSolution = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  image: string;
  imageAlt: string;
};

export type ServiceSolutionsProps = {
  solutions: ServiceSolution[];
  className?: string;
};
