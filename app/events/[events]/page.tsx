"use client";
import { NewsletterCta } from "@/components/features/news/newsletter-cta";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { RichText } from "@/components/shared/rich-text";
import { Button } from "@/components/ui/button";
import { formatDay } from "@/lib/formatters/day-formatter";
import { events } from "@/mock/news";
import { MapPin } from "lucide-react";
import { notFound, useParams } from "next/navigation";

const page = () => {
  const { events: eventUuid } = useParams<{ events: string }>();
  const activeEvent = events.find((event) => event.uuid === eventUuid);

  if (!activeEvent) notFound();

  const { title, location, startsAt, image, html } = activeEvent;

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
        description={formatDay(startsAt)}
        eyebrow={
          <Button variant={"tab"} className={"rounded-full "}>
            {location}
          </Button>
        }
        action={
          <span className="flex items-center gap-2 text-[14px] font-semibold tracking-[0.08em] text-white uppercase">
            <MapPin className="size-4" strokeWidth={1.5} />
            {location}
          </span>
        }
        backgroundImage={image}
      />

      <Container classNames={{ container: "max-w-4xl" }}>
        <RichText html={html} />
      </Container>

      <NewsletterCta />
    </>
  );
};

export default page;
