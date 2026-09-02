import type { CardProps } from "@/types/features/card";
import type { ContainerProps } from "@/types/features/container";
import type { JumbotronProps } from "@/types/features/jumbotron";

export type Challenge = {
  image: string;
  title: string;
  description: string;
};

export type Challenges = {
  title: string;
  description: string;
  items: Challenge[];
};

export type ChallengesProps = {
  challenges: Challenges;
  classNames?: {
    container?: ContainerProps["classNames"];
    jumbotron?: JumbotronProps["classNames"];
    card?: CardProps["classNames"];
  };
};
