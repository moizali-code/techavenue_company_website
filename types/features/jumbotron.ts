import type { ReactNode } from "react";

export type JumbotronAlign = "left" | "center";

export type JumbotronProps = {
  title: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  align?: JumbotronAlign;
  className?: string;
  classNames?: {
    content?: string;
    eyebrow?: string;
    title?: string;
    description?: string;
    action?: string;
  };
};
