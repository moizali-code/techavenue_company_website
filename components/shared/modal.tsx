"use client";

import { isValidElement } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { ModalProps } from "@/types/shared/modal";

function Modal({
  children,
  trigger,
  open,
  onOpenChange,
  defaultOpen,
  showCloseButton = true,
  classNames,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
      {trigger &&
        (isValidElement(trigger) ? (
          <DialogTrigger render={trigger} className={classNames?.trigger} />
        ) : (
          <DialogTrigger className={classNames?.trigger}>
            {trigger}
          </DialogTrigger>
        ))}

      <DialogContent
        showCloseButton={showCloseButton}
        className={cn(classNames?.content)}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}

export { Modal };
