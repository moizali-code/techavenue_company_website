import type { CardProps } from "@/types/features/card";

export type CoreService = Omit<CardProps, "title"> & {
  id: number;
  uuid: string;
  image: string;
  title: string;
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

export type ServicesPageContent = {
  servicesHeader: ServicesHeader;
  coreServices: CoreServicesSection;
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
