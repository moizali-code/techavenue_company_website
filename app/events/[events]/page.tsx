import { NewsletterCta } from "@/components/features/news/newsletter-cta";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { RichText } from "@/components/shared/rich-text";
import { Button } from "@/components/ui/button";
import { formatDay } from "@/lib/formatters/day-formatter";
import { getEvent } from "@/lib/cms";
import { MapPin } from "lucide-react";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: Promise<{ events: string }> }) {
  const { events: id } = await params;
  const activeEvent = await getEvent(id);

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
            <MapPin className="size-4 text-[#1E3C8C]" strokeWidth={1.5} />
            {location}
          </span>
        }
        backgroundImage={image}
      />

      <Container>
        <RichText html={html} />
      </Container>

      <NewsletterCta />
    </>
  );
}
