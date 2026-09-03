"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import type { FadeInDirection, FadeInProps } from "@/types/shared/fade-in";

const getOffset = (direction: FadeInDirection, offset: number) => {
  switch (direction) {
    case "up":
      return { y: offset };
    case "down":
      return { y: -offset };
    case "left":
      return { x: offset };
    case "right":
      return { x: -offset };
    default:
      return {};
  }
};

function FadeIn({
  children,
  className,
  direction = "up",
  offset = 24,
  delay = 0,
  duration = 0.5,
  once = false,
  amount = 0.2,
}: FadeInProps) {
  const hidden = getOffset(direction, offset);

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...hidden }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -80px 0px" }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export { FadeIn };
