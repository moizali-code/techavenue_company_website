import type { ReactNode } from "react";

export type RequestDemoContent = {
  eyebrow: string;
  title: string;
  description: string;
  organizationSizes: string[];
};

export type RequestDemoModalProps = {
  trigger: ReactNode;
};
