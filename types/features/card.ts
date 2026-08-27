import type { ReactNode } from "react";

export type CardTags = [string, string];

export type CardVariant = "default" | "bare";

export type CardProps = {
  variant?: CardVariant;
  title?: ReactNode;
  description?: ReactNode;
  image?: string;
  imageAlt?: string;
  tags?: CardTags;
  actionLabel?: string;
  href?: string;
  onActionClick?: () => void;
  className?: string;
  classNames?: {
    imageWrapper?: string;
    image?: string;
    content?: string;
    title?: string;
    description?: string;
    tags?: string;
    action?: string;
  };
};
