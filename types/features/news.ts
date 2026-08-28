export type NewsStory = {
  id: number;
  uuid: string;
  category: string;
  title: string;
  description: string;
  publishedAt: string;
  image: string;
};

export type NewsHeroProps = {
  featuredStory: NewsStory;
  stories: NewsStory[];
  className?: string;
};

export type NewsGridProps = {
  stories: NewsStory[];
  className?: string;
};
