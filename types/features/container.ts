import type { ReactNode } from "react";

export type ContainerProps = {
  children: ReactNode;
  classNames?: {
    mainWrapper?: string;
    container?: string;
  };
};
