import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function NewsletterCta({ className }: { className?: string }) {
  return (
    <Container classNames={{ mainWrapper: className }}>
      <Jumbotron
        align="left"
        title="Never Miss an Update"
        description="Get our curated weekly digest of tech insights, company announcements, and global media features delivered to your inbox."
        action={
          <div className="flex w-full flex-col gap-3 md:flex-row md:items-center">
            <Input
              type="email"
              placeholder="Work Email Address"
              aria-label="Work email address"
              className="h-12 rounded-[6px] border-white/25 bg-white/15 px-4 text-[15px] text-white shadow-none placeholder:text-white/70 focus-visible:border-white/60 focus-visible:ring-white/30 md:w-[285px]"
            />

            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-[6px] border-transparent bg-white px-8 text-[13px] font-semibold tracking-[0.08em] uppercase"
            >
              Subscribe Now
            </Button>
          </div>
        }
        classNames={{
          mainWrapper: "rounded-[12px] bg-brand px-6 py-10 lg:px-12 lg:py-12",
          content:
            "max-w-full gap-0 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center",
          title:
            "font-poppins text-[26px] font-semibold text-white md:text-[30px] lg:col-start-1 lg:row-start-1 lg:text-[32px]",
          description:
            "font-poppins font-normal max-w-md text-[13px] leading-relaxed text-[#FFFFFF] lg:col-start-1 lg:row-start-2",
          action:
            "mt-4 w-full lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:w-auto lg:justify-end",
        }}
      />
    </Container>
  );
}

export { NewsletterCta };
