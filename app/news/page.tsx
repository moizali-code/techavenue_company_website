import { EventsCarousel } from "@/components/features/events/events-carousel";
import { NewsGrid } from "@/components/features/news/news-grid";
import { NewsHero } from "@/components/features/news/news-hero";
import { NewsletterCta } from "@/components/features/news/newsletter-cta";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { events, featuredStory, newsStories } from "@/mock/news";

const page = () => {
  return (
    <>
      <NewsHero featuredStory={featuredStory} stories={newsStories} />

      <Container classNames={{ mainWrapper: "pb-0 lg:pb-0" }}>
        <Jumbotron
          align="left"
          eyebrow={
            <span className="text-[14px] font-semibold tracking-[0.12em] text-[#1E3C8C] uppercase">
              Insight &amp; Innovation
            </span>
          }
          title="Latest Updates"
          classNames={{
            mainWrapper: "px-0 py-0 lg:px-0 lg:py-0",
            content: "max-w-full gap-0",
            title:
              "font-poppins text-[28px] font-bold text-[#191C1E] md:text-[34px] lg:text-[40px]",
          }}
        />
      </Container>

      <NewsGrid stories={newsStories} />

      <EventsCarousel events={events} />

      <NewsletterCta />
    </>
  );
};

export default page;
