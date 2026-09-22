export type SolutionOffering = {
  id: number;
  uuid: string;
  title: string;
  description: string;
};

export type SolutionOfferingsSection = {
  heading: string;
  description: string;
  items: SolutionOffering[];
};

export type SolutionPhase = {
  id: number;
  uuid: string;
  title: string;
  focus: string;
  description: string;
};

export type SolutionPageHeaderSection = {
  heading: string;
  description: string;
};

export type SolutionPage = {
  id: number;
  uuid: string;
  title: string;
  solutionHeader: SolutionPageHeaderSection;
  image: string;
  icon: string;
  solutions: SolutionOfferingsSection;
  phases: SolutionPhase[];
};

export type SolutionPageHeaderProps = SolutionPageHeaderSection & {
  eyebrow: string;
  image?: string;
};

export type SolutionOfferingsProps = SolutionOfferingsSection;

export type SolutionPhasesProps = {
  phases: SolutionPhase[];
};
