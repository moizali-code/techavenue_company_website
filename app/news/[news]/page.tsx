import { EventsCarousel } from "@/components/features/events/events-carousel";
import { NewsletterCta } from "@/components/features/news/newsletter-cta";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { RichText } from "@/components/shared/rich-text";
import { Button } from "@/components/ui/button";
import { formatDay } from "@/lib/formatters/day-formatter";
import { getNewsItem, getNewsPageData } from "@/lib/cms";
import { Clock } from "lucide-react";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: Promise<{ news: string }> }) {
  const { news: id } = await params;
  const [activeStory, { events }] = await Promise.all([
    getNewsItem(id),
    getNewsPageData(),
  ]);

  if (!activeStory) notFound();

  const { category, title, description, publishedAt, image, html } = activeStory;

  return (
    <>
      <Jumbotron
        title={title}
        classNames={{
          title: "text-white !text-[48px] font-times w-full max-w-full",
          description: "text-white text-[18px]",
          content: "w-full max-w-full ",
          mainWrapper: "h-[400px] lg:h-[600px] items-end",
        }}
        description={description}
        eyebrow={
          <Button variant={"tab"} className={"rounded-full "}>
            {category}
          </Button>
        }
        action={
          <span className="flex items-center gap-2 text-[14px] font-semibold tracking-[0.08em] text-white uppercase">
            <Clock className="size-4 text-[#1E3C8C]" strokeWidth={1.5} />
            {formatDay(publishedAt)}
          </span>
        }
        backgroundImage={image}
      />

      <Container>
        <RichText html={html} />
      </Container>

      <EventsCarousel events={events} />

      <NewsletterCta />
    </>
  );
}
