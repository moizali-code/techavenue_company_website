import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { ContainerProps } from "@/types/features/container";

const containerVariants = cva("w-full px-4 lg:px-10", {
  variants: {
    variant: {
      default: "py-12 lg:py-12",
      bare: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Container({ children, variant, className }: ContainerProps) {
  return (
    <section className={cn(containerVariants({ variant }), className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export { Container, containerVariants };
