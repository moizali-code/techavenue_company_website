import Image from "next/image";
import Link from "next/link";
import { cva } from "class-variance-authority";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CardProps } from "@/types/features/card";

const cardVariants = cva("flex w-full flex-col overflow-hidden", {
  variants: {
    variant: {
      default:
        "shadow-[0_4px_12px_#0000001F] max-w-sm rounded-2xl border border-border bg-background shadow-sm transition-shadow hover:shadow-md",
      bare: "rounded-none border-0 bg-transparent shadow-none hover:shadow-none",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const cardContentVariants = cva("flex flex-1 flex-col gap-3", {
  variants: {
    variant: {
      default: "p-5 lg:p-6",
      bare: "px-0 pt-4 pb-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Card({
  title,
  description,
  image,
  imageAlt = "",
  tags,
  actionLabel = "View Case Study",
  href,
  onActionClick,
  variant = "default",
  className,
  classNames,
}: CardProps) {
  const hasAction = Boolean(href || onActionClick);
  const hasContent = Boolean(title || description || hasAction);

  return (
    <article className={cn(cardVariants({ variant }), className)}>
      {image ? (
        <div
          className={cn(
            "relative aspect-[16/11] w-full overflow-hidden",
            classNames?.imageWrapper,
          )}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
            className={cn("object-cover", classNames?.image)}
          />

          {tags ? (
            <div
              className={cn(
                "absolute top-3 left-3 flex flex-wrap items-center gap-2 lg:top-4 lg:left-4",
                classNames?.tags,
              )}
            >
              {tags.map((tag, index) => (
                <Badge
                  key={tag}
                  className={cn(
                    "h-6 px-3 text-[10px] font-semibold tracking-[0.08em] text-white uppercase",
                    index === 0 ? "bg-[#1E3C8C]" : "bg-[#F97316]",
                  )}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      {hasContent ? (
        <div
          className={cn(cardContentVariants({ variant }), classNames?.content)}
        >
          {title ? (
            <h3
              className={cn(
                "text-[24px] font-bold tracking-tight text-balance ",
                classNames?.title,
              )}
            >
              {title}
            </h3>
          ) : null}

          {description ? (
            <p
              className={cn(
                "text-[16px] text-[#444651] leading-relaxed text-muted-foreground",
                classNames?.description,
              )}
            >
              {description}
            </p>
          ) : null}

          {hasAction ? (
            <div className={cn("mt-3 flex", classNames?.action)}>
              {href ? (
                <Button
                  variant="outline"
                  size="lg"
                  arrow
                  nativeButton={false}
                  render={<Link href={href} />}
                >
                  {actionLabel}
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="lg"
                  arrow
                  onClick={onActionClick}
                >
                  {actionLabel}
                </Button>
              )}
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export { Card };
