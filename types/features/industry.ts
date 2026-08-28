import type { CardTags } from "@/types/features/card";
import type { ProvidedSolutions } from "@/types/features/provided-solutions";

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

export type IndustryHeader = {
  title: string;
  description: string;
  backgroundImage: string;
};

export type IndustryHighlight = {
  title: string;
  description: string;
};

export type IndustryOverview = {
  title: string;
  description: string;
  image: string;
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

export type Industry = IndustryTab & {
  header: IndustryHeader;
  overview: IndustryOverview;
  challenges: IndustryChallengeItems;
  providedSolutions: ProvidedSolutions;
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
