import type { SuccessStoryTag } from "@/types/shared/tag";

export type SuccessStoryUnderSection = {
  id: number;
  uuid: string;
  image: string;
  industry: SuccessStoryTag;
  solution: SuccessStoryTag;
  title: string;
  description: string;
};

export type SuccessStoriesUnderSection = {
  title: string;
  description: string;
  items: SuccessStoryUnderSection[];
};

export type SuccessStoriesUnderSectionProps = {
  successStories: SuccessStoriesUnderSection;
  className?: string;
};
