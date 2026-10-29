import type { AboutPageContent } from "@/types/features/about";
import type { CareerData, JobOpening, LifeAtTechAvenueProps } from "@/types/features/career";
import type { EventItem } from "@/types/features/events";
import type { HomeData, HomeTestimonial } from "@/types/features/home";
import type { Industry } from "@/types/features/industry";
import type { Solution } from "@/types/features/legacy-solutions";
import type { NewsStory } from "@/types/features/news";
import type { ServicesPageContent } from "@/types/features/services";
import type { SolutionPage } from "@/types/features/solutions";
import type { SuccessStoriesContent, SuccessStory } from "@/types/features/success-stories";
import type { TrustedPartnerLogo } from "@/types/shared/trusted-partners";

const COCKPIT_URL = (
  process.env.COCKPIT_INTERNAL_URL ??
  process.env.NEXT_PUBLIC_COCKPIT_URL ??
  "http://localhost:8090"
).replace(/\/$/, "");

const HEADERS: Record<string, string> = {
  "api-key": process.env.COCKPIT_API_KEY ?? "",
  "Content-Type": "application/json",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Raw = any;

const PLACEHOLDER = "/placeholder.svg";

function cockpitAsset(field: unknown): string {
  if (!field) return PLACEHOLDER;
  if (typeof field === "string") return field || PLACEHOLDER;
  if (typeof field === "object" && field !== null) {
    const f = field as Record<string, unknown>;
    const path = f.path as string | undefined;
    if (!path) return PLACEHOLDER;
    return path.startsWith("http") ? path : `${COCKPIT_URL}/storage/uploads/${path}`;
  }
  return PLACEHOLDER;
}

async function fetchSingleton(model: string): Promise<Raw> {
  try {
    const res = await fetch(`${COCKPIT_URL}/api/content/item/${model}`, {
      headers: HEADERS,
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

async function fetchCollection(model: string): Promise<Raw[]> {
  try {
    const res = await fetch(`${COCKPIT_URL}/api/content/items/${model}?limit=100`, {
      headers: HEADERS,
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data ?? json.value ?? [];
  } catch {
    return [];
  }
}

async function fetchCollectionItem(model: string, id: string): Promise<Raw> {
  try {
    const res = await fetch(`${COCKPIT_URL}/api/content/item/${model}/${id}`, {
      headers: HEADERS,
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// ─── home ─────────────────────────────────────────────────────────────────────

export async function getHomePageData() {
  const raw = await fetchSingleton("Home");
  if (!raw) {
    const { homeData, testimonials } = await import("@/mock/home");
    return { homeData, testimonials };
  }

  const homeData: HomeData = {
    intro: { ...raw.intro, image: cockpitAsset(raw.intro?.image) },
    stats: (raw.stats ?? []).map((s: Raw) => ({ uuid: s._id ?? s.id, value: s.value, label: s.label })),
    partners: (raw.partners ?? []).map((p: Raw, i: number): TrustedPartnerLogo => ({
      id: i + 1,
      uuid: p._id ?? p.id ?? String(i),
      image: cockpitAsset(p.image),
    })),
    about: {
      eyebrow: raw.about?.eyebrow ?? "",
      title: raw.about?.title ?? "",
      description: raw.about?.description ?? "",
      image: cockpitAsset(raw.about?.image),
      highlights: (raw.about?.highlights ?? []).map((h: Raw) => ({
        uuid: h._id ?? h.id,
        label: h.label,
        image: cockpitAsset(h.image),
      })),
    },
    missionVision: (raw.missionVision ?? []).map((m: Raw) => ({
      uuid: m._id ?? m.id,
      title: m.title,
      description: m.description,
      image: cockpitAsset(m.image),
    })),
    solutions: { heading: raw.solutions?.heading ?? "" },
    testimonials: {
      heading: raw.testimonials?.heading ?? "",
      description: raw.testimonials?.description ?? "",
    },
    faqs: {
      heading: raw.faqs?.heading ?? "",
      faqs: (raw.faqs?.items ?? []).map((f: Raw) => ({
        uuid: f._id ?? f.id,
        question: f.question,
        answer: f.answer,
      })),
    },
  };

  const testimonials: HomeTestimonial[] = (raw.testimonials?.items ?? []).map((t: Raw) => ({
    uuid: t._id ?? t.id,
    quote: t.quote,
    name: t.name,
    role: t.role,
    avatar: cockpitAsset(t.avatar),
    rating: t.rating ?? 5,
  }));

  return { homeData, testimonials };
}

// ─── about ────────────────────────────────────────────────────────────────────

export async function getAboutPageData(): Promise<AboutPageContent> {
  const raw = await fetchSingleton("About");
  if (!raw) return (await import("@/mock/about")).aboutPageContent;

  return {
    header: {
      eyebrow: raw.header?.eyebrow ?? "",
      title: raw.header?.title ?? "",
      description: raw.header?.description ?? "",
      image: cockpitAsset(raw.header?.image),
    },
    companyValues: {
      heading: raw.companyValues?.heading ?? "",
      image: cockpitAsset(raw.companyValues?.image),
      values: (raw.companyValues?.values ?? []).map((v: Raw, i: number) => ({
        id: i + 1,
        uuid: v._id ?? v.id ?? String(i),
        title: v.title,
        description: v.description,
      })),
    },
    partners: {
      heading: raw.partners?.heading ?? "",
      partners: (raw.partners?.items ?? []).map((p: Raw) => p.name),
    },
    team: {
      heading: raw.team?.heading ?? "",
      description: raw.team?.description ?? "",
      members: (raw.team?.members ?? []).map((m: Raw, i: number) => ({
        id: i + 1,
        uuid: m._id ?? m.id ?? String(i),
        name: m.name,
        role: m.role,
        image: cockpitAsset(m.image),
        description: m.description,
      })),
    },
    cta: {
      title: raw.cta?.title ?? "",
      description: raw.cta?.description ?? "",
    },
  };
}

// ─── contact ──────────────────────────────────────────────────────────────────

export async function getContactPageData() {
  const raw = await fetchSingleton("Contact");
  if (!raw) return (await import("@/mock/contact")).contactSection;

  return {
    header: {
      eyebrow: raw.header?.eyebrow ?? "",
      title: raw.header?.title ?? "",
      description: raw.header?.description ?? "",
      image: cockpitAsset(raw.header?.image),
    },
    details: {
      eyebrow: raw.details?.eyebrow ?? "",
      title: raw.details?.title ?? "",
      description: raw.details?.description ?? "",
      officeAddress: raw.details?.officeAddress ?? "",
      phone: raw.details?.phone ?? "",
      email: raw.details?.email ?? "",
      website: raw.details?.website ?? "",
      businessHours: raw.details?.businessHours ?? "",
      weekendHours: raw.details?.weekendHours ?? "",
      mapEmbedUrl: raw.details?.mapEmbedUrl ?? "",
      directionsUrl: raw.details?.directionsUrl ?? "",
    },
    form: {
      title: raw.form?.title ?? "",
      description: raw.form?.description ?? "",
    },
  };
}

// ─── career ───────────────────────────────────────────────────────────────────

export async function getCareerPageData(): Promise<{
  careerData: CareerData;
  jobs: JobOpening[];
  lifeAtTechAvenue: LifeAtTechAvenueProps;
}> {
  const [raw, jobDocs] = await Promise.all([
    fetchSingleton("Career"),
    fetchCollection("Jobs"),
  ]);

  if (!raw) {
    const mock = await import("@/mock/career");
    return { careerData: mock.careerData, jobs: mock.jobs, lifeAtTechAvenue: mock.lifeAtTechAvenue };
  }

  const careerData: CareerData = {
    header: {
      eyebrow: raw.header?.eyebrow ?? "",
      title: raw.header?.title ?? "",
      description: raw.header?.description ?? "",
      image: cockpitAsset(raw.header?.image),
      badgeLabel: raw.header?.badgeLabel ?? "",
    },
    openPositions: {
      title: raw.openPositions?.title ?? "",
      description: raw.openPositions?.description ?? "",
      departments: (raw.openPositions?.departments ?? []).map((d: Raw) => d.name),
      employmentTypes: (raw.openPositions?.employmentTypes ?? []).map((e: Raw) => e.name),
    },
    hiringProcess: {
      title: raw.hiringProcess?.title ?? "",
      description: raw.hiringProcess?.description ?? "",
      steps: (raw.hiringProcess?.steps ?? []).map((s: Raw, i: number) => ({
        id: i + 1,
        uuid: s._id ?? s.id ?? String(i),
        title: s.title,
        description: s.description,
        image: cockpitAsset(s.image),
      })),
    },
    followUs: {
      title: raw.followUs?.title ?? "",
      description: raw.followUs?.description ?? "",
      links: (raw.followUs?.links ?? []).map((l: Raw, i: number) => ({
        id: i + 1,
        uuid: l._id ?? l.id ?? String(i),
        label: l.label,
        href: l.href,
        image: cockpitAsset(l.image),
      })),
    },
  };

  const lifeAtTechAvenue: LifeAtTechAvenueProps = {
    eyebrow: raw.lifeAtTechAvenue?.eyebrow ?? "",
    title: raw.lifeAtTechAvenue?.title ?? "",
    description: raw.lifeAtTechAvenue?.description ?? "",
    highlights: (raw.lifeAtTechAvenue?.highlights ?? []).map((h: Raw, i: number) => ({
      id: i + 1,
      uuid: h._id ?? h.id ?? String(i),
      title: h.title,
      description: h.description,
      media: cockpitAsset(h.media),
    })),
  };

  const jobs: JobOpening[] = jobDocs.map((j: Raw, i: number) => ({
    id: i + 1,
    uuid: j._id ?? j.id ?? String(i),
    title: j.title,
    department: j.department,
    location: j.location,
    employmentType: j.employmentType,
    experience: j.experience,
    workplace: j.workplace,
  }));

  return { careerData, jobs, lifeAtTechAvenue };
}

// ─── services ─────────────────────────────────────────────────────────────────

export async function getServicesPageData(): Promise<ServicesPageContent> {
  const raw = await fetchSingleton("Services");
  if (!raw) return (await import("@/mock/services")).allServicesPageContent;

  return {
    allServicesHeader: {
      title: raw.header?.title ?? "",
      description: raw.header?.description ?? "",
      image: cockpitAsset(raw.header?.image),
    },
    coreServices: {
      heading: raw.coreServices?.heading ?? "",
      description: raw.coreServices?.description ?? "",
      services: (raw.coreServices?.services ?? []).map((s: Raw, i: number) => ({
        id: i + 1,
        uuid: s._id ?? s.id ?? String(i),
        articleUuid: s.articleUuid ?? "",
        image: cockpitAsset(s.image),
        title: s.title,
        description: s.description,
      })),
    },
    allServicesArticles: (raw.articles ?? []).map((a: Raw, i: number) => ({
      id: i + 1,
      uuid: a._id ?? a.id ?? String(i),
      eyebrow: a.eyebrow,
      title: a.title,
      description: a.description,
      image: cockpitAsset(a.image),
      iconImage: cockpitAsset(a.iconImage),
      features: (a.features ?? []).map((f: Raw) => ({
        image: cockpitAsset(f.image),
        title: f.title,
      })),
    })),
  };
}

// ─── industries ───────────────────────────────────────────────────────────────

function toIndustry(raw: Raw): Industry {
  return {
    id: raw._id ?? raw.id,
    uuid: raw._id ?? raw.id,
    title: raw.title,
    image: cockpitAsset(raw.image),
    description: raw.description,
    header: {
      title: raw.header?.title ?? "",
      description: raw.header?.description ?? "",
      backgroundImage: cockpitAsset(raw.header?.backgroundImage),
    },
    overview: {
      title: raw.overview?.title ?? "",
      description: raw.overview?.description ?? "",
      image: cockpitAsset(raw.overview?.image),
      highlights: (raw.overview?.highlights ?? []).map((h: Raw) => ({
        title: h.title,
        description: h.description,
      })),
    },
    challenges: {
      title: raw.challenges?.title ?? "",
      description: raw.challenges?.description ?? "",
      items: (raw.challenges?.items ?? []).map((i: Raw) => ({
        image: cockpitAsset(i.image),
        title: i.title,
        description: i.description,
      })),
    },
    providedSolutions: {
      title: raw.providedSolutions?.title ?? "",
      description: raw.providedSolutions?.description ?? "",
      items: (raw.providedSolutions?.items ?? []).map((i: Raw) => ({
        image: cockpitAsset(i.image),
        title: i.title,
        description: i.description,
      })),
    },
  };
}

export async function getIndustries(): Promise<Industry[]> {
  const docs = await fetchCollection("Industries");
  if (!docs.length) return (await import("@/mock/industry")).industries;
  return docs.map(toIndustry);
}

export async function getIndustry(id: string): Promise<Industry | null> {
  const raw = await fetchCollectionItem("Industries", id);
  if (!raw) return null;
  return toIndustry(raw);
}

// ─── legacy solutions ─────────────────────────────────────────────────────────

function toLegacySolution(raw: Raw): Solution {
  return {
    id: raw._id ?? raw.id,
    uuid: raw._id ?? raw.id,
    title: raw.title,
    image: cockpitAsset(raw.image),
    description: raw.description,
    header: {
      id: raw._id ?? raw.id,
      uuid: raw._id ?? raw.id,
      title: raw.header?.title ?? "",
      description: raw.header?.description ?? "",
      image: cockpitAsset(raw.header?.image),
      items: (raw.header?.items ?? []).map((i: Raw) => ({
        title: i.title,
        description: i.description,
      })),
    },
    highlights: (raw.highlights ?? []).map((h: Raw) => ({
      uuid: h._id ?? h.id,
      label: h.label,
      image: cockpitAsset(h.image),
    })),
    overview: {
      title: raw.overview?.title ?? "",
      description: raw.overview?.description ?? "",
    },
    keyInfo: {
      title: raw.keyInfo?.title ?? "",
      items: Object.fromEntries(
        (raw.keyInfo?.items ?? []).map((i: Raw) => [i.key, i.value])
      ),
    },
    experience: {
      title: raw.experience?.title ?? "",
      description: raw.experience?.description ?? "",
      image: cockpitAsset(raw.experience?.image),
      items: (raw.experience?.items ?? []).map((i: Raw) => ({
        title: i.title,
        description: i.description,
      })),
    },
    testimonial: {
      quote: raw.testimonial?.quote ?? "",
      name: raw.testimonial?.name ?? "",
      role: raw.testimonial?.role ?? "",
      avatar: cockpitAsset(raw.testimonial?.avatar),
    },
  };
}

export async function getLegacySolutions(): Promise<Solution[]> {
  const docs = await fetchCollection("LegacySolutions");
  if (!docs.length) return (await import("@/mock/legacy-solutions")).solutions;
  return docs.map(toLegacySolution);
}

export async function getLegacySolution(id: string): Promise<Solution | null> {
  const raw = await fetchCollectionItem("LegacySolutions", id);
  if (!raw) return null;
  return toLegacySolution(raw);
}

// ─── solution pages ───────────────────────────────────────────────────────────

function toSolutionPage(raw: Raw): SolutionPage {
  return {
    id: raw._id ?? raw.id,
    uuid: raw._id ?? raw.id,
    title: raw.title,
    image: cockpitAsset(raw.image),
    icon: cockpitAsset(raw.icon),
    solutionHeader: {
      heading: raw.solutionHeader?.heading ?? "",
      description: raw.solutionHeader?.description ?? "",
    },
    solutions: {
      heading: raw.solutions?.heading ?? "",
      description: raw.solutions?.description ?? "",
      items: (raw.solutions?.items ?? []).map((i: Raw, idx: number) => ({
        id: idx + 1,
        uuid: i._id ?? i.id ?? String(idx),
        title: i.title,
        description: i.description,
      })),
    },
    phases: (raw.phases ?? []).map((p: Raw, i: number) => ({
      id: i + 1,
      uuid: p._id ?? p.id ?? String(i),
      title: p.title,
      focus: p.focus,
      description: p.description,
    })),
  };
}

export async function getSolutionPages(): Promise<SolutionPage[]> {
  const docs = await fetchCollection("SolutionPages");
  if (!docs.length) return (await import("@/mock/solutions")).solutionPages;
  return docs.map(toSolutionPage);
}

export async function getSolutionPage(id: string): Promise<SolutionPage | null> {
  const raw = await fetchCollectionItem("SolutionPages", id);
  if (!raw) return null;
  return toSolutionPage(raw);
}

// ─── news & events ────────────────────────────────────────────────────────────

function toNewsStory(raw: Raw): NewsStory {
  return {
    id: raw._id ?? raw.id,
    uuid: raw._id ?? raw.id,
    category: raw.category ?? "",
    title: raw.title ?? "",
    description: raw.description ?? "",
    publishedAt: raw.publishedAt ?? new Date().toISOString(),
    image: cockpitAsset(raw.image),
    html: raw.html ?? "",
  };
}

export async function getNewsPageData(): Promise<{
  featuredStory: NewsStory;
  newsStories: NewsStory[];
  events: EventItem[];
}> {
  const [newsDocs, eventDocs] = await Promise.all([
    fetchCollection("NewsItems"),
    fetchCollection("Events"),
  ]);

  if (!newsDocs.length) {
    const mock = await import("@/mock/news");
    return { featuredStory: mock.featuredStory, newsStories: mock.newsStories, events: mock.events };
  }

  const featured = newsDocs.find((d: Raw) => d.featured) ?? newsDocs[0];
  const rest = newsDocs.filter((d: Raw) => (d._id ?? d.id) !== (featured?._id ?? featured?.id));

  const events: EventItem[] = eventDocs.map((e: Raw, i: number) => ({
    id: i + 1,
    uuid: e._id ?? e.id ?? String(i),
    title: e.title,
    location: e.location,
    startsAt: e.startsAt,
    image: cockpitAsset(e.image),
    html: e.html ?? "",
  }));

  return {
    featuredStory: toNewsStory(featured),
    newsStories: rest.map(toNewsStory),
    events,
  };
}

export async function getNewsItem(id: string): Promise<NewsStory | null> {
  const raw = await fetchCollectionItem("NewsItems", id);
  if (!raw) return null;
  return toNewsStory(raw);
}

export async function getEvent(id: string): Promise<EventItem | null> {
  const raw = await fetchCollectionItem("Events", id);
  if (!raw) return null;
  return {
    id: raw._id ?? raw.id,
    uuid: raw._id ?? raw.id,
    title: raw.title,
    location: raw.location,
    startsAt: raw.startsAt,
    image: cockpitAsset(raw.image),
    html: raw.html ?? "",
  };
}

// ─── success stories ──────────────────────────────────────────────────────────

function toSuccessStory(raw: Raw): SuccessStory {
  const itemFields = (arr: Raw[]) =>
    arr.map((i: Raw) => ({
      image: cockpitAsset(i.image),
      title: i.title,
      description: i.description,
    }));

  return {
    id: raw._id ?? raw.id,
    uuid: raw._id ?? raw.id,
    image: cockpitAsset(raw.image),
    title: raw.title,
    description: raw.description,
    industry: { id: raw._id ?? raw.id, uuid: raw._id ?? raw.id, title: raw.industry?.title ?? "" },
    solution: { id: raw._id ?? raw.id, uuid: raw._id ?? raw.id, title: raw.solution?.title ?? "" },
    detail: {
      challenges: {
        title: raw.challenges?.title ?? "",
        description: raw.challenges?.description ?? "",
        items: itemFields(raw.challenges?.items ?? []),
      },
      providedSolutions: {
        title: raw.providedSolutions?.title ?? "",
        description: raw.providedSolutions?.description ?? "",
        items: itemFields(raw.providedSolutions?.items ?? []),
      },
      impact: {
        title: raw.impact?.title ?? "",
        description: raw.impact?.description ?? "",
        items: (raw.impact?.items ?? []).map((i: Raw, idx: number) => ({
          id: idx + 1,
          uuid: i._id ?? i.id ?? String(idx),
          value: i.value,
          title: i.title,
          description: i.description,
        })),
      },
    },
  };
}

export async function getSuccessStoriesPageData(): Promise<{
  content: SuccessStoriesContent;
  stories: SuccessStory[];
}> {
  const [pageRaw, storyDocs] = await Promise.all([
    fetchSingleton("SuccessStoriesPage"),
    fetchCollection("SuccessStories"),
  ]);

  if (!pageRaw && !storyDocs.length) {
    const mock = await import("@/mock/success-stories");
    return { content: mock.successStoriesContent, stories: mock.successStories };
  }

  const content: SuccessStoriesContent = {
    header: {
      title: pageRaw?.header?.title ?? "",
      description: pageRaw?.header?.description ?? "",
      backgroundImage: cockpitAsset(pageRaw?.header?.backgroundImage),
    },
    intro: {
      titleStart: pageRaw?.intro?.titleStart ?? "",
      titleHighlight: pageRaw?.intro?.titleHighlight ?? "",
      titleEnd: pageRaw?.intro?.titleEnd ?? "",
      description: pageRaw?.intro?.description ?? "",
    },
  };

  return { content, stories: storyDocs.map(toSuccessStory) };
}

export async function getSuccessStory(id: string): Promise<SuccessStory | null> {
  const raw = await fetchCollectionItem("SuccessStories", id);
  if (!raw) return null;
  return toSuccessStory(raw);
}
