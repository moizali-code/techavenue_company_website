import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDay } from "@/lib/formatters/day-formatter";
import type { NewsHeroProps } from "@/types/features/news";

const LATEST_STORIES_COUNT = 4;

function NewsHero({ featuredStory, stories }: NewsHeroProps) {
  const latestStories = stories.slice(0, LATEST_STORIES_COUNT);

  return (
    <Container>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] lg:items-stretch">
        <Jumbotron
          align="left"
          title={featuredStory.title}
          description={featuredStory.description}
          backgroundImage={featuredStory.image}
          eyebrow={
            <Badge className="h-7 rounded-[4px] bg-[#F97316] px-3 text-[11px] font-semibold tracking-[0.08em] text-white uppercase">
              {featuredStory.category}
            </Badge>
          }
          action={
            <>
              <Button
                variant="outline"
                size="lg"
                arrow
                nativeButton={false}
                render={<Link href={`/news/${featuredStory.uuid}`} />}
                className="h-12 rounded-[8px] border-transparent bg-white px-6 text-[14px] font-semibold tracking-[0.08em] uppercase"
              >
                Read Full Story
              </Button>

              <span className="text-[14px] font-semibold tracking-[0.08em] text-white uppercase">
                {formatDay(featuredStory.publishedAt)}
              </span>
            </>
          }
          classNames={{
            mainWrapper:
              "relative isolate h-full overflow-hidden rounded-[16px] px-6 py-10 lg:px-10 lg:py-14",
            overlay: "bg-[rgba(0,0,0,0.42)]",
            content: "h-full max-w-full justify-end gap-4",
            title:
              "font-poppins text-[30px] font-bold text-white md:text-[40px] lg:text-[42px] xl:text-[48px]",
            description: "max-w-xl text-[15px] text-white/80 lg:text-[16px]",
            action: "mt-4 items-center gap-6",
          }}
        />

        <aside className="rounded-[12px] border border-[#E6E6E6] bg-white p-6 shadow-[0px_30px_60px_0px_rgba(0,0,0,0.05)]">
          <h2 className="text-[20px] font-bold text-[#191C1E] lg:text-[22px]">
            Latest Stories
          </h2>

          <ul className="mt-5 flex flex-col">
            {latestStories.map((story) => (
              <li
                key={story.uuid}
                className="border-b border-border py-4 first:pt-0 last:border-0 last:pb-0"
              >
                <Link
                  href={`/news/${story.uuid}`}
                  className="flex flex-col gap-1.5"
                >
                  <span className="text-[11px] font-semibold tracking-[0.08em] text-[#1E3C8C] uppercase">
                    {formatDay(story.publishedAt, "relative")}
                  </span>
                  <span className="text-[15px] leading-snug text-[#191C1E] transition-colors hover:text-brand-link">
                    {story.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Container>
  );
}

export { NewsHero };
