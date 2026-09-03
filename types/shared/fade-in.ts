export type FadeInDirection = "up" | "down" | "left" | "right" | "none";

export type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  direction?: FadeInDirection;
  offset?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
};
