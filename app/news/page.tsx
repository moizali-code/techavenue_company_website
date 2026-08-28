import { EventsCarousel } from "@/components/features/events/events-carousel";
import { NewsGrid } from "@/components/features/news/news-grid";
import { NewsHero } from "@/components/features/news/news-hero";
import { events } from "@/mock/events";
import { featuredStory, newsStories } from "@/mock/news";

const page = () => {
  return (
    <>
      <NewsHero featuredStory={featuredStory} stories={newsStories} />

      <NewsGrid stories={newsStories} />

      <EventsCarousel events={events} />
    </>
  );
};

export default page;
