import type { ProvidedSolutions } from "@/types/features/provided-solutions";
import type { SuccessStoryTag } from "@/types/shared/tag";

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
  id: number;
  uuid: string;
  image: string;
  industry: SuccessStoryTag;
  solution: SuccessStoryTag;
  title: string;
  description: string;
};

export type IndustrySuccessStories = {
  title: string;
  description: string;
  items: IndustrySuccessStory[];
};

export type IndustrySuccessStoriesProps = {
  successStories: IndustrySuccessStories;
  className?: string;
};
