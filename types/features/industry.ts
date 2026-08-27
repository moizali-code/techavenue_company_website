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
