import type { ReactNode } from "react";

export type ModalProps = {
  children: ReactNode;
  trigger?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  showCloseButton?: boolean;
  classNames?: {
    trigger?: string;
    content?: string;
  };
};
