import type { ReactNode } from "react";

export type SplitSectionProps = {
  image: string;
  imageAlt?: string;
  reversed?: boolean;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  classNames?: {
    mainWrapper?: string;
    media?: string;
    image?: string;
    content?: string;
    eyebrow?: string;
    title?: string;
    description?: string;
    action?: string;
  };
};
