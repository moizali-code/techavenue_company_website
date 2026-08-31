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

export type SuccessStory = {
  id: number;
  uuid: string;
  image: string;
  industry: SuccessStoryTag;
  solution: SuccessStoryTag;
  title: string;
  description: string;
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
  className?: string;
};

export type SuccessStoriesIntroProps = {
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
