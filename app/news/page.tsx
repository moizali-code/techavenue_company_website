import { EventsCarousel } from "@/components/features/events/events-carousel";
import { NewsGrid } from "@/components/features/news/news-grid";
import { NewsHero } from "@/components/features/news/news-hero";
import { NewsletterCta } from "@/components/features/news/newsletter-cta";
import { events, featuredStory, newsStories } from "@/mock/news";

const page = () => {
  return (
    <>
      <NewsHero featuredStory={featuredStory} stories={newsStories} />

      <NewsGrid stories={newsStories} />

      <EventsCarousel events={events} />

      <NewsletterCta />
    </>
  );
};

export default page;
