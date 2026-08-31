import type { ReactNode } from "react";

export type CardVariant = "default" | "bare";

export type CardEyebrowPosition = "top" | "inline";

export type CardProps = {
  variant?: CardVariant;
  eyebrowPosition?: CardEyebrowPosition;
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  image?: string;
  imageAlt?: string;
  video?: string;
  imageOverlay?: ReactNode;
  actionLabel?: string;
  href?: string;
  onActionClick?: () => void;
  footer?: ReactNode;
  classNames?: {
    mainWrapper?: string;
    imageWrapper?: string;
    image?: string;
    video?: string;
    content?: string;
    titleRow?: string;
    eyebrow?: string;
    title?: string;
    description?: string;
    imageOverlay?: string;
    action?: string;
    footer?: string;
  };
};
