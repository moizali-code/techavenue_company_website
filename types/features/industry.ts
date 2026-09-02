import type { ProvidedSolutions } from "@/types/features/provided-solutions";
import type { Challenges } from "@/types/shared/challenges";

export type IndustryTab = {
  id: number;
  uuid: string;
  title: string;
  description: string;
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

export type Industry = IndustryTab & {
  header: IndustryHeader;
  overview: IndustryOverview;
  challenges: Challenges;
  providedSolutions: ProvidedSolutions;
};
