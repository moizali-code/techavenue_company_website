import { notFound } from "next/navigation";
import { getContactPageData, getJob, getSiteSettings } from "@/lib/cms";
import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { Button } from "@/components/ui/button";

export default async function JobPage({ params }: { params: Promise<{ job: string }> }) {
  const { job: id } = await params;
  const [job, contact, settings] = await Promise.all([getJob(id), getContactPageData(), getSiteSettings()]);
  if (!job) notFound();
  const candidate = job.applicationUrl || `mailto:${contact.details.email}`;
  let applicationUrl: string | undefined;
  try {
    const url = new URL(candidate);
    if (["https:", "http:", "mailto:"].includes(url.protocol)) applicationUrl = url.href;
  } catch { /* An invalid application link is omitted. */ }

  return <>
    <Jumbotron title={job.title} description={[job.department, job.location, job.employmentType, job.experience].filter(Boolean).join(" · ")} />
    <Container>
      <div className="flex max-w-3xl flex-col gap-5 py-10">
        {job.description.split("\n").filter(Boolean).map((paragraph, index) => <p key={index} className="leading-relaxed text-muted-foreground">{paragraph}</p>)}
        {applicationUrl && <Button variant="brand" nativeButton={false} render={<a href={applicationUrl} />}>{settings.openPositionsApplyNow}</Button>}
      </div>
    </Container>
  </>;
}
