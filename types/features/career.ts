export type CareerHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  badgeLabel: string;
};

export type JobWorkplace = "onsite" | "remote";

export type JobOpening = {
  id: number;
  uuid: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  experience: string;
  workplace: JobWorkplace;
};

export type OpenPositionsContent = {
  title: string;
  description: string;
  departments: string[];
  employmentTypes: string[];
};

export type OpenPositionsProps = OpenPositionsContent & {
  jobs: JobOpening[];
};

export type CultureHighlight = {
  id: number;
  uuid: string;
  title: string;
  description: string;
  media: string;
};

export type HiringStep = {
  id: number;
  uuid: string;
  title: string;
  description: string;
  image: string;
};

export type HiringProcessProps = {
  title: string;
  description: string;
  steps: HiringStep[];
};

export type LifeAtTechAvenueProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: CultureHighlight[];
};

export type SocialLink = {
  id: number;
  uuid: string;
  label: string;
  href: string;
  image: string;
};

export type FollowUsProps = {
  title: string;
  description: string;
  links: SocialLink[];
};

export type CareerData = {
  header: CareerHeaderProps;
  openPositions: OpenPositionsContent;
  hiringProcess: HiringProcessProps;
  followUs: FollowUsProps;
};
