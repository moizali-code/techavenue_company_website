export type SolutionHeaderItem = {
  title: string;
  description: string;
};

export type SolutionHeader = {
  id: number;
  uuid: string;
  title: string;
  description: string;
  image: string;
  items: SolutionHeaderItem[];
};

export type SolutionOverview = {
  title: string;
  description: string;
};

export type SolutionKeyInfo = {
  title: string;
  items: Record<string, string>;
};

export type SolutionExperienceItem = {
  title: string;
  description: string;
};

export type SolutionExperience = {
  title: string;
  description: string;
  image: string;
  items: SolutionExperienceItem[];
};

export type SolutionTestimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export type SolutionSummary = {
  id: number;
  uuid: string;
  title: string;
  description: string;
};

export type Solution = SolutionSummary & {
  header: SolutionHeader;
  overview: SolutionOverview;
  keyInfo: SolutionKeyInfo;
  experience: SolutionExperience;
  testimonial: SolutionTestimonial;
};

export type SolutionHeaderProps = {
  eyebrow: string;
  header: SolutionHeader;
  classNames?: {
    mainWrapper?: string;
  };
};

export type SolutionOverviewProps = {
  overview: SolutionOverview;
  keyInfo: SolutionKeyInfo;
  classNames?: {
    mainWrapper?: string;
  };
};

export type SolutionExperienceProps = {
  experience: SolutionExperience;
  classNames?: {
    mainWrapper?: string;
  };
};

export type SolutionTestimonialProps = {
  testimonial: SolutionTestimonial;
  classNames?: {
    mainWrapper?: string;
  };
};
