import type { CardProps } from "@/types/features/card";
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
    jumbotron?: JumbotronProps["classNames"];
    card?: CardProps["classNames"];
  };
};
