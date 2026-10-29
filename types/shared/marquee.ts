import type { ReactNode } from "react";

export type MarqueeProps = {
  children: ReactNode;
  classNames?: {
    mainWrapper?: string;
    track?: string;
    group?: string;
  };
};
