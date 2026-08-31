export type CareerHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  badgeLabel: string;
  className?: string;
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

export type OpenPositionsProps = {
  title: string;
  description: string;
  departments: string[];
  employmentTypes: string[];
  jobs: JobOpening[];
  className?: string;
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
  icon: string;
};

export type HiringProcessProps = {
  title: string;
  description: string;
  steps: HiringStep[];
  className?: string;
};

export type LifeAtTechAvenueProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: CultureHighlight[];
  className?: string;
};

export type SocialLink = {
  id: number;
  uuid: string;
  label: string;
  href: string;
  icon: string;
};

export type FollowUsProps = {
  title: string;
  description: string;
  links: SocialLink[];
  className?: string;
};
