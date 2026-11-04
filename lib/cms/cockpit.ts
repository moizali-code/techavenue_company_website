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
  "http://localhost:8091"
).replace(/\/$/, "");

const HEADERS: Record<string, string> = {
  "api-key": process.env.COCKPIT_API_KEY ?? "",
  "Content-Type": "application/json",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Raw = any;

const PLACEHOLDER = "/placeholder.svg";

const ASSETS_URL = (
  `${process.env.NEXT_PUBLIC_COCKPIT_URL ?? "http://localhost:8091"}/storage/uploads`
).replace(/\/$/, "");

function cockpitAsset(field: unknown): string {
  if (!field) return PLACEHOLDER;
  if (typeof field === "string") {
    if (!field) return PLACEHOLDER;
    return field.startsWith("http") ? field : `${ASSETS_URL}/${field.replace(/^\/+/, "")}`;
  }
  if (typeof field === "object" && field !== null) {
    const f = field as Record<string, unknown>;
    const path = (f.path ?? f._id ?? f.id) as string | undefined;
    if (!path) return PLACEHOLDER;
    if (path.startsWith("http")) return path;
    return `${ASSETS_URL}/${path.replace(/^\/+/, "")}`;
  }
  return PLACEHOLDER;
}

async function fetchSingleton(model: string): Promise<Raw> {
  try {
    const res = await fetch(`${COCKPIT_URL}/api/content/item/${model}`, {
      headers: HEADERS,
      cache: "no-store",
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
      cache: "no-store",
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
      cache: "no-store",
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
    intro: {
      headingStart:      raw.introHeadingStart      ?? "",
      headingHighlight:  raw.introHeadingHighlight  ?? "",
      headingEnd:        raw.introHeadingEnd         ?? "",
      headingSecondLine: raw.introHeadingSecondLine  ?? "",
      experienceLabel:   raw.introExperienceLabel    ?? "",
      experienceValue:   raw.introExperienceValue    ?? "",
      description:       raw.introDescription        ?? "",
      image:             cockpitAsset(raw.introImage),
    },
    stats: (raw.stats ?? []).map((s: Raw, i: number) => ({
      uuid: s._id ?? s.id ?? String(i),
      value: s.value,
      label: s.label,
    })),
    partners: (raw.partners ?? []).map((p: Raw, i: number): TrustedPartnerLogo => ({
      id: i + 1,
      uuid: p._id ?? p.id ?? String(i),
      image: cockpitAsset(p.image),
    })),
    about: {
      eyebrow:     raw.aboutEyebrow     ?? "",
      title:       raw.aboutTitle       ?? "",
      description: raw.aboutDescription ?? "",
      image:       cockpitAsset(raw.aboutImage),
      highlights:  (raw.aboutHighlights ?? []).map((h: Raw, i: number) => ({
        uuid:  h._id ?? h.id ?? String(i),
        label: h.label,
        image: cockpitAsset(h.image),
      })),
    },
    missionVision: (raw.missionVision ?? []).map((m: Raw, i: number) => ({
      uuid:        m._id ?? m.id ?? String(i),
      title:       m.title,
      description: m.description,
      image:       cockpitAsset(m.image),
    })),
    solutions: { heading: raw.solutionsHeading ?? "" },
    testimonials: {
      heading:     raw.testimonialsHeading     ?? "",
      description: raw.testimonialsDescription ?? "",
    },
    faqs: {
      heading: raw.faqsHeading ?? "",
      faqs: (raw.faqs ?? []).map((f: Raw, i: number) => ({
        uuid:     f._id ?? f.id ?? String(i),
        question: f.question,
        answer:   f.answer,
      })),
    },
  };

  const testimonials: HomeTestimonial[] = (raw.testimonials ?? []).map((t: Raw, i: number) => ({
    uuid:   t._id ?? t.id ?? String(i),
    quote:  t.quote,
    name:   t.name,
    role:   t.role,
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
      eyebrow:     raw.headerEyebrow     ?? "",
      title:       raw.headerTitle       ?? "",
      description: raw.headerDescription ?? "",
      image:       cockpitAsset(raw.headerImage),
    },
    companyValues: {
      heading: raw.valuesHeading ?? "",
      image:   cockpitAsset(raw.valuesImage),
      values:  (raw.values ?? []).map((v: Raw, i: number) => ({
        id:          i + 1,
        uuid:        v._id ?? v.id ?? String(i),
        title:       v.title,
        description: v.description,
      })),
    },
    partners: {
      heading:  raw.partnersHeading ?? "",
      partners: (raw.partners ?? []).map((p: Raw) => p.name),
    },
    team: {
      heading:     raw.teamHeading     ?? "",
      description: raw.teamDescription ?? "",
      members:     (raw.team ?? []).map((m: Raw, i: number) => ({
        id:          i + 1,
        uuid:        m._id ?? m.id ?? String(i),
        name:        m.name,
        role:        m.role,
        image:       cockpitAsset(m.image),
        description: m.bio ?? m.description ?? "",
      })),
    },
    cta: {
      title:       raw.ctaTitle       ?? "",
      description: raw.ctaDescription ?? "",
    },
  };
}

// ─── contact ──────────────────────────────────────────────────────────────────

export async function getContactPageData() {
  const raw = await fetchSingleton("Contact");
  if (!raw) return (await import("@/mock/contact")).contactSection;

  return {
    header: {
      eyebrow:     raw.headerEyebrow     ?? "",
      title:       raw.headerTitle       ?? "",
      description: raw.headerDescription ?? "",
      image:       cockpitAsset(raw.headerImage),
    },
    details: {
      eyebrow:       raw.detailsEyebrow     ?? "",
      title:         raw.detailsTitle       ?? "",
      description:   raw.detailsDescription ?? "",
      officeAddress: raw.officeAddress      ?? "",
      phone:         raw.phone              ?? "",
      email:         raw.email              ?? "",
      website:       raw.website            ?? "",
      businessHours: raw.businessHours      ?? "",
      weekendHours:  raw.weekendHours       ?? "",
      mapEmbedUrl:   raw.mapEmbedUrl        ?? "",
      directionsUrl: raw.directionsUrl      ?? "",
    },
    form: {
      title:       raw.formTitle       ?? "",
      description: raw.formDescription ?? "",
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
      eyebrow:     raw.headerEyebrow     ?? "",
      title:       raw.headerTitle       ?? "",
      description: raw.headerDescription ?? "",
      image:       cockpitAsset(raw.headerImage),
      badgeLabel:  raw.headerBadgeLabel  ?? "",
    },
    openPositions: {
      title:           raw.positionsTitle       ?? "",
      description:     raw.positionsDescription ?? "",
      departments:     (raw.departments     ?? []).map((d: Raw) => d.name),
      employmentTypes: (raw.employmentTypes ?? []).map((e: Raw) => e.name),
    },
    hiringProcess: {
      title:       raw.hiringTitle       ?? "",
      description: raw.hiringDescription ?? "",
      steps: (raw.hiringSteps ?? []).map((s: Raw, i: number) => ({
        id:          i + 1,
        uuid:        s._id ?? s.id ?? String(i),
        title:       s.title,
        description: s.description,
        image:       cockpitAsset(s.image),
      })),
    },
    followUs: {
      title:       raw.followUsTitle       ?? "",
      description: raw.followUsDescription ?? "",
      links: (raw.socialLinks ?? []).map((l: Raw, i: number) => ({
        id:    i + 1,
        uuid:  l._id ?? l.id ?? String(i),
        label: l.label,
        href:  l.href,
        image: cockpitAsset(l.image),
      })),
    },
  };

  const lifeAtTechAvenue: LifeAtTechAvenueProps = {
    eyebrow:     raw.lifeEyebrow     ?? "",
    title:       raw.lifeTitle       ?? "",
    description: raw.lifeDescription ?? "",
    highlights:  (raw.lifeHighlights ?? []).map((h: Raw, i: number) => ({
      id:          i + 1,
      uuid:        h._id ?? h.id ?? String(i),
      title:       h.title,
      description: h.description,
      media:       cockpitAsset(h.media),
    })),
  };

  const jobs: JobOpening[] = jobDocs.map((j: Raw, i: number) => ({
    id:             i + 1,
    uuid:           j._id ?? j.id ?? String(i),
    title:          j.title,
    department:     j.department,
    location:       j.location,
    employmentType: j.employmentType,
    experience:     j.experience,
    workplace:      j.workplace,
  }));

  return { careerData, jobs, lifeAtTechAvenue };
}

// ─── services ─────────────────────────────────────────────────────────────────

export async function getServicesPageData(): Promise<ServicesPageContent> {
  const raw = await fetchSingleton("Services");
  if (!raw) return (await import("@/mock/services")).allServicesPageContent;

  return {
    allServicesHeader: {
      title:       raw.headerTitle       ?? "",
      description: raw.headerDescription ?? "",
      image:       cockpitAsset(raw.headerImage),
    },
    coreServices: {
      heading:     raw.servicesHeading     ?? "",
      description: raw.servicesDescription ?? "",
      services: (raw.coreServices ?? []).map((s: Raw, i: number) => ({
        id:          i + 1,
        uuid:        s._id ?? s.id ?? String(i),
        articleUuid: s.articleUuid ?? "",
        image:       cockpitAsset(s.icon),
        title:       s.title,
        description: s.description,
      })),
    },
    allServicesArticles: (raw.articles ?? []).map((a: Raw, i: number) => ({
      id:          i + 1,
      uuid:        a._id ?? a.id ?? String(i),
      eyebrow:     a.eyebrow,
      title:       a.title,
      description: a.description,
      image:       cockpitAsset(a.image),
      iconImage:   cockpitAsset(a.iconImage),
      features:    (a.features ?? "")
        .split("\n")
        .map((line: string) => line.trim())
        .filter(Boolean)
        .map((title: string) => ({ image: PLACEHOLDER, title })),
    })),
  };
}

// ─── industries ───────────────────────────────────────────────────────────────

function toIndustry(raw: Raw): Industry {
  return {
    id:          raw._id ?? raw.id,
    uuid:        raw._id ?? raw.id,
    title:       raw.title,
    image:       cockpitAsset(raw.icon ?? raw.image),
    description: raw.description,
    header: {
      title:           raw.headerTitle       ?? "",
      description:     raw.headerDescription ?? "",
      backgroundImage: cockpitAsset(raw.headerBackground),
    },
    overview: {
      title:       raw.overviewTitle       ?? "",
      description: raw.overviewDescription ?? "",
      image:       cockpitAsset(raw.overviewImage),
      highlights:  (raw.overviewHighlights ?? []).map((h: Raw) => ({
        title:       h.title,
        description: h.description,
      })),
    },
    challenges: {
      title:       raw.challengesTitle       ?? "",
      description: raw.challengesDescription ?? "",
      items: (raw.challenges ?? []).map((i: Raw) => ({
        image:       cockpitAsset(i.icon ?? i.image),
        title:       i.title,
        description: i.description,
      })),
    },
    providedSolutions: {
      title:       raw.solutionsTitle       ?? "",
      description: raw.solutionsDescription ?? "",
      items: (raw.solutions ?? []).map((i: Raw) => ({
        image:       cockpitAsset(i.icon ?? i.image),
        title:       i.title,
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
    id:          raw._id ?? raw.id,
    uuid:        raw._id ?? raw.id,
    title:       raw.title,
    image:       cockpitAsset(raw.icon ?? raw.image),
    description: raw.description,
    header: {
      id:          raw._id ?? raw.id,
      uuid:        raw._id ?? raw.id,
      title:       raw.headerTitle       ?? "",
      description: raw.headerDescription ?? "",
      image:       cockpitAsset(raw.headerImage),
      items: (raw.headerStats ?? []).map((i: Raw) => ({
        title:       i.value,
        description: i.label,
      })),
    },
    highlights: (raw.highlights ?? []).map((h: Raw, i: number) => ({
      uuid:  h._id ?? h.id ?? String(i),
      label: h.label,
      image: cockpitAsset(h.checkIcon ?? h.image),
    })),
    overview: {
      title:       raw.overviewTitle       ?? "",
      description: raw.overviewDescription ?? "",
    },
    keyInfo: {
      title: raw.keyInfoTitle ?? "",
      items: Object.fromEntries(
        (raw.keyInfo ?? []).map((i: Raw) => [i.key, i.value])
      ),
    },
    experience: {
      title:       raw.experienceTitle       ?? "",
      description: raw.experienceDescription ?? "",
      image:       cockpitAsset(raw.experienceImage),
      items: (raw.experienceItems ?? []).map((i: Raw) => ({
        title:       i.title,
        description: i.description,
      })),
    },
    testimonial: {
      quote:  raw.testimonialQuote  ?? "",
      name:   raw.testimonialName   ?? "",
      role:   raw.testimonialRole   ?? "",
      avatar: cockpitAsset(raw.testimonialAvatar),
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
    id:   raw._id ?? raw.id,
    uuid: raw._id ?? raw.id,
    title: raw.title,
    image: cockpitAsset(raw.image),
    icon:  cockpitAsset(raw.icon),
    solutionHeader: {
      heading:     raw.solutionHeading     ?? "",
      description: raw.solutionDescription ?? "",
    },
    solutions: {
      heading:     raw.solutionsHeading     ?? "",
      description: raw.solutionsDescription ?? "",
      items: (raw.solutionItems ?? []).map((i: Raw, idx: number) => ({
        id:          idx + 1,
        uuid:        i._id ?? i.id ?? String(idx),
        title:       i.title,
        description: i.description,
      })),
    },
    phases: (raw.phases ?? []).map((p: Raw, i: number) => ({
      id:          i + 1,
      uuid:        p._id ?? p.id ?? String(i),
      title:       p.title,
      focus:       p.focus,
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
    id:          raw._id ?? raw.id,
    uuid:        raw._id ?? raw.id,
    category:    raw.category    ?? "",
    title:       raw.title       ?? "",
    description: raw.description ?? "",
    publishedAt: raw.publishedAt ?? new Date().toISOString(),
    image:       cockpitAsset(raw.image),
    html:        raw.html ?? "",
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
    id:       i + 1,
    uuid:     e._id ?? e.id ?? String(i),
    title:    e.title,
    location: e.location,
    startsAt: e.startsAt,
    image:    cockpitAsset(e.image),
    html:     e.html ?? "",
  }));

  return {
    featuredStory: toNewsStory(featured),
    newsStories:   rest.map(toNewsStory),
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
    id:       raw._id ?? raw.id,
    uuid:     raw._id ?? raw.id,
    title:    raw.title,
    location: raw.location,
    startsAt: raw.startsAt,
    image:    cockpitAsset(raw.image),
    html:     raw.html ?? "",
  };
}

// ─── success stories ──────────────────────────────────────────────────────────

function toSuccessStory(raw: Raw): SuccessStory {
  const itemFields = (arr: Raw[]) =>
    arr.map((i: Raw) => ({
      image:       cockpitAsset(i.icon ?? i.image),
      title:       i.title,
      description: i.description,
    }));

  return {
    id:          raw._id ?? raw.id,
    uuid:        raw._id ?? raw.id,
    image:       cockpitAsset(raw.image),
    title:       raw.title,
    description: raw.description,
    industry: { id: raw._id ?? raw.id, uuid: raw._id ?? raw.id, title: raw.industryTitle ?? "" },
    solution: { id: raw._id ?? raw.id, uuid: raw._id ?? raw.id, title: raw.solutionTitle  ?? "" },
    detail: {
      challenges: {
        title:       raw.challengesTitle       ?? "",
        description: raw.challengesDescription ?? "",
        items:       itemFields(raw.challenges ?? []),
      },
      providedSolutions: {
        title:       raw.solutionsTitle       ?? "",
        description: raw.solutionsDescription ?? "",
        items:       itemFields(raw.solutionItems ?? []),
      },
      impact: {
        title:       raw.impactTitle       ?? "",
        description: raw.impactDescription ?? "",
        items: (raw.impactItems ?? []).map((i: Raw, idx: number) => ({
          id:          idx + 1,
          uuid:        i._id ?? i.id ?? String(idx),
          value:       i.value,
          title:       i.title,
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
      title:           pageRaw?.headerTitle           ?? "",
      description:     pageRaw?.headerDescription     ?? "",
      backgroundImage: cockpitAsset(pageRaw?.headerBackgroundImage),
    },
    intro: {
      titleStart:     pageRaw?.introTitleStart     ?? "",
      titleHighlight: pageRaw?.introTitleHighlight ?? "",
      titleEnd:       pageRaw?.introTitleEnd       ?? "",
      description:    pageRaw?.introDescription    ?? "",
    },
  };

  return { content, stories: storyDocs.map(toSuccessStory) };
}

export async function getSuccessStory(id: string): Promise<SuccessStory | null> {
  const raw = await fetchCollectionItem("SuccessStories", id);
  if (!raw) return null;
  return toSuccessStory(raw);
}
