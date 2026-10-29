import type { ReactNode } from "react";

export type JumbotronAlign = "left" | "center";

export type JumbotronProps = {
  title: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  align?: JumbotronAlign;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  overlay?: boolean;
  classNames?: {
    backgroundImage?: string;
    overlay?: string;
    content?: string;
    body?: string;
    eyebrow?: string;
    title?: string;
    description?: string;
    action?: string;
    mainWrapper?: string;
  };
};
