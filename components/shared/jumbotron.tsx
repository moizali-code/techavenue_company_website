import { cn } from "@/lib/utils";
import type { JumbotronProps } from "@/types/features/jumbotron";

function Jumbotron({
  title,
  eyebrow,
  description,
  action,
  align = "center",
  className,
  classNames,
}: JumbotronProps) {
  const isCentered = align === "center";

  return (
    <section
      className={cn(
        "w-full px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-3xl flex-col gap-5",
          isCentered ? "items-center text-center" : "items-start text-left",
          classNames?.content
        )}
      >
        {eyebrow ? (
          <div
            className={cn(
              "flex w-full",
              isCentered ? "justify-center" : "justify-start",
              classNames?.eyebrow
            )}
          >
            {eyebrow}
          </div>
        ) : null}

        <h1
          className={cn(
            "text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl",
            classNames?.title
          )}
        >
          {title}
        </h1>

        {description ? (
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
              classNames?.description
            )}
          >
            {description}
          </p>
        ) : null}

        {action ? (
          <div
            className={cn(
              "mt-2 flex flex-wrap items-center gap-3",
              isCentered ? "justify-center" : "justify-start",
              classNames?.action
            )}
          >
            {action}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export { Jumbotron };
