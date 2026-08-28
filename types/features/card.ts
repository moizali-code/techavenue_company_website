import type { ReactNode } from "react";

export type CardTags = [string, string];

export type CardVariant = "default" | "bare";

export type CardIconPosition = "top" | "inline";

export type CardProps = {
  variant?: CardVariant;
  iconPosition?: CardIconPosition;
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  image?: string;
  imageAlt?: string;
  tags?: CardTags;
  actionLabel?: string;
  href?: string;
  onActionClick?: () => void;
  classNames?: {
    mainWrapper?: string;
    imageWrapper?: string;
    image?: string;
    content?: string;
    titleRow?: string;
    icon?: string;
    title?: string;
    description?: string;
    tags?: string;
    action?: string;
  };
};
