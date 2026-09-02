import type { CardProps } from "@/types/features/card";
import type { ContainerProps } from "@/types/features/container";
import type { JumbotronProps } from "@/types/features/jumbotron";
import type { ProvidedSolutions } from "@/types/features/provided-solutions";
import type { Challenges } from "@/types/shared/challenges";
import type { SuccessStoryTag } from "@/types/shared/tag";

export type SuccessStoryHeader = {
  title: string;
  description: string;
  backgroundImage: string;
};

export type SuccessStoryIntro = {
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  description: string;
};

export type SuccessStoryImpactResult = {
  id: number;
  uuid: string;
  value: string;
  title: string;
  description: string;
};

export type SuccessStoryImpact = {
  title: string;
  description: string;
  items: SuccessStoryImpactResult[];
};

export type SuccessStoryDetail = {
  challenges: Challenges;
  providedSolutions: ProvidedSolutions;
  impact: SuccessStoryImpact;
};

export type SuccessStoryImpactProps = {
  impact: SuccessStoryImpact;
  classNames?: {
    container?: ContainerProps["classNames"];
    jumbotron?: JumbotronProps["classNames"];
    card?: CardProps["classNames"];
  };
};

export type SuccessStory = {
  id: number;
  uuid: string;
  image: string;
  industry: SuccessStoryTag;
  solution: SuccessStoryTag;
  title: string;
  description: string;
  detail: SuccessStoryDetail;
};

export type SuccessStoryFilters = {
  solutions: SuccessStoryTag[];
  industries: SuccessStoryTag[];
};

export type SuccessStoriesContent = {
  header: SuccessStoryHeader;
  intro: SuccessStoryIntro;
  filters: SuccessStoryFilters;
};

export type SuccessStoriesHeaderProps = {
  header: SuccessStoryHeader;
  intro: SuccessStoryIntro;
  className?: string;
};

export type SuccessStoriesGridProps = {
  stories: SuccessStory[];
  filters: SuccessStoryFilters;
  className?: string;
};

export type SuccessStoryFilterRowProps = {
  label: string;
  options: SuccessStoryTag[];
  activeUuid: string;
  onSelect: (uuid: string) => void;
};
