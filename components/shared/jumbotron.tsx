import Image from "next/image";

import { cn } from "@/lib/utils";
import type { JumbotronProps } from "@/types/features/jumbotron";
import { FadeIn } from "./fade-in";

function Jumbotron({
  title,
  eyebrow,
  description,
  action,
  align = "center",
  backgroundImage,
  backgroundImageAlt = "",
  overlay = true,
  classNames,
}: JumbotronProps) {
  const isCentered = align === "center";
  const hasBackgroundImage = Boolean(backgroundImage);

  return (
    <section
      className={cn(
        "w-full px-4 py-14 lg:px-10 lg:py-24 flex",
        hasBackgroundImage && "relative isolate overflow-hidden",
        classNames?.mainWrapper,
      )}
    >
      {hasBackgroundImage && (
        <>
          <Image
            src={backgroundImage as string}
            alt={backgroundImageAlt}
            fill
            priority
            sizes="100vw"
            className={cn("-z-10 object-cover", classNames?.backgroundImage)}
          />
          {overlay && (
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 -z-10 bg-[rgba(0,0,0,0.7)]",
                classNames?.overlay,
              )}
            />
          )}
        </>
      )}

      <div
        className={cn(
          " w-full max-w-3xl",
          isCentered ? "text-center" : "text-left",
          classNames?.content,
        )}
      >
        <FadeIn
          className={cn(
            "flex flex-col gap-5",
            isCentered ? "items-center" : "items-start",
          )}
        >
          {eyebrow && (
            <div
              className={cn(
                "flex w-full",
                isCentered ? "justify-center" : "justify-start",
                classNames?.eyebrow,
              )}
            >
              {eyebrow}
            </div>
          )}

          <h1
            className={cn(
              "font-bold tracking-tight text-balance text-[36px] md:text-[40px] lg:text-[48px]",
              classNames?.title,
            )}
          >
            {title}
          </h1>

          {description && (
            <p
              className={cn(
                "max-w-2xl text-base leading-relaxed text-muted-foreground ",
                classNames?.description,
              )}
            >
              {description}
            </p>
          )}

          {action && (
            <div
              className={cn(
                "mt-2 flex flex-wrap items-center gap-3",
                isCentered ? "justify-center" : "justify-start",
                classNames?.action,
              )}
            >
              {action}
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

export { Jumbotron };
