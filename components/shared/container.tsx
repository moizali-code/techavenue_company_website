import { cn } from "@/lib/utils";
import type { ContainerProps } from "@/types/features/container";

function Container({ children, classNames }: ContainerProps) {
  return (
    <section
      className={cn(
        "w-full px-4 py-12 lg:px-10 lg:py-16",
        classNames?.mainWrapper,
      )}
    >
      <div className={cn("mx-auto w-full max-w-6xl", classNames?.container)}>
        {children}
      </div>
    </section>
  );
}

export { Container };
