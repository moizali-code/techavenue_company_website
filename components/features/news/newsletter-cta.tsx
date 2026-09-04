import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function NewsletterCta({ className }: { className?: string }) {
  return (
    <Container>
      <div
        className={cn(
          "flex flex-col gap-6 rounded-[12px] bg-brand px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-12 lg:py-12",
          className,
        )}
      >
        <div className="flex flex-col gap-2">
          <h2 className="font-poppins text-[26px] font-semibold text-white md:text-[30px] lg:text-[32px]">
            Never Miss an Update
          </h2>

          <p className="font-poppins max-w-md text-[13px] leading-relaxed font-normal text-white">
            Get our curated weekly digest of tech insights, company
            announcements, and global media features delivered to your inbox.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 md:flex-row md:items-center lg:w-auto lg:shrink-0">
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
      </div>
    </Container>
  );
}

export { NewsletterCta };
