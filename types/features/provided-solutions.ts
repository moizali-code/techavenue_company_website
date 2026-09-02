import type { CardProps } from "@/types/features/card";
import type { ContainerProps } from "@/types/features/container";
import type { JumbotronProps } from "@/types/features/jumbotron";

export type ProvidedSolution = {
  image: string;
  title: string;
  description: string;
};

export type ProvidedSolutions = {
  title: string;
  description: string;
  items: ProvidedSolution[];
};

export type ProvidedSolutionsProps = {
  providedSolutions: ProvidedSolutions;
  classNames?: {
    container?: ContainerProps["classNames"];
    jumbotron?: JumbotronProps["classNames"];
    card?: CardProps["classNames"];
  };
};
