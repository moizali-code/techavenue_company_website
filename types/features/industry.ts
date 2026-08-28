import type { CardTags } from "@/types/features/card";

export type IndustryTab = {
  id: number;
  uuid: string;
  title: string;
  description: string;
};

export type IndustryTabsProps = {
  tabs: IndustryTab[];
  activeUuid?: string;
  className?: string;
};

export type IndustryHighlight = {
  title: string;
  description: string;
};

export type IndustryOverview = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: IndustryHighlight[];
};

export type IndustryChallenge = {
  icon: string;
  title: string;
  description: string;
};

export type IndustryChallengeItems = {
  title: string;
  description: string;
  items: IndustryChallenge[];
};

export type IndustryChallengesProps = {
  challenges: IndustryChallengeItems;
  className?: string;
};

export type IndustrySuccessStory = {
  image: string;
  imageAlt: string;
  tags: CardTags;
  title: string;
  description: string;
  href: string;
};

export type IndustrySuccessStories = {
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  items: IndustrySuccessStory[];
};

export type IndustrySuccessStoriesProps = {
  successStories: IndustrySuccessStories;
  className?: string;
};
