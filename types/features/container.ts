import type { ReactNode } from "react";

export type ContainerVariant = "default" | "bare";

export type ContainerProps = {
  children: ReactNode;
  variant?: ContainerVariant;
};
