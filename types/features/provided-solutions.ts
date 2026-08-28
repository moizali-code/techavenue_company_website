export type ProvidedSolution = {
  icon: string;
  title: string;
  description: string;
};

export type ProvidedSolutions = {
  title: string;
  description: string;
  items: ProvidedSolution[];
};

export type ProvidedSolutionsProps = {
  providedSolutions: ProvidedSolutions;
  className?: string;
};
