import type { CardProps } from "@/types/features/card";

export type CoreService = Omit<CardProps, "title" | "description"> & {
  id: number;
  uuid: string;
  articleUuid: string;
  image: string;
  title: string;
  description: string;
};

export type CoreServicesSection = {
  heading: string;
  description: string;
  services: CoreService[];
};

export type CoreServicesProps = CoreServicesSection;

export type ServicesHeader = {
  title: string;
  description: string;
  image: string;
};

export type ServiceFeature = {
  image: string;
  title: string;
};

export type ServiceDetail = {
  id: number;
  uuid: string;
  eyebrow: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  image: string;
  iconImage: string;
};

export type ServiceDetailsProps = {
  details: ServiceDetail[];
};

export type ServicesPageContent = {
  allServicesHeader: ServicesHeader;
  coreServices: CoreServicesSection;
  allServicesArticles: ServiceDetail[];
};
