export type NewsStory = {
  id: number;
  uuid: string;
  category: string;
  title: string;
  description: string;
  publishedAt: string;
  image: string;
  html: string;
};

export type NewsHeroProps = {
  featuredStory: NewsStory;
  stories: NewsStory[];
};

export type NewsGridProps = {
  stories: NewsStory[];
};
