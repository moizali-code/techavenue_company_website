# Cockpit CMS Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Cockpit CMS as a swappable content provider alongside Payload, controlled by a single `CMS_PROVIDER` env var.

**Architecture:** Split `lib/cms.ts` into a `lib/cms/` directory with a `payload.ts` adapter (existing logic, moved verbatim), a `cockpit.ts` adapter (Cockpit HQ REST API mapped to the same TypeScript return types), and an `index.ts` that re-exports from whichever adapter `CMS_PROVIDER` selects. Cockpit runs as a new Docker service built from the cloned `./cockpit` directory.

**Tech Stack:** Next.js 16, TypeScript, Cockpit HQ (PHP 8.3 + SQLite), Docker Compose

**Spec:** This document is the spec. Cross-reference `lib/cms.ts` for the exact return types each function must produce.

## Global Constraints

- `CMS_PROVIDER` values: `payload` (default) | `cockpit`
- Cockpit host port on Docker host: `8090`; internal container port: `80`
- Cockpit API auth header: `Cockpit-Token: {COCKPIT_API_KEY}`
- Cockpit collections API: `GET /api/content/items/{Model}` → `{ data: [...], total: N }`
- Cockpit singletons API: `GET /api/content/item/{Model}` → object
- Cockpit asset URL: `{COCKPIT_URL}/storage/uploads/{path}`
- All exported function signatures must be identical between `payload.ts` and `cockpit.ts`
- `next.config.ts` must allow images from the Cockpit hostname
- No new npm dependencies

## Cockpit Content Model Reference

The Cockpit adapter assumes these model names and field names (content manager creates these in Cockpit admin):

**Singletons (single-entry models):** `Home`, `About`, `Contact`, `Career`, `Services`, `SuccessStoriesPage`

**Collections (multi-entry models):** `Industries`, `Jobs`, `LegacySolutions`, `SolutionPages`, `NewsItems`, `Events`, `SuccessStories`

Field names inside each model mirror the Payload field names exactly (same snake_case or camelCase as seen in `lib/cms.ts` raw responses). Assets stored in Cockpit are referenced as `{ path: "filename.jpg" }` objects — the adapter converts these to full URLs via `cockpitAsset(field)`.

## Review Focus

- **Missing `CMS_PROVIDER` env var** — index.ts must default to `payload` silently, not throw
- **Cockpit asset fields** — Cockpit returns `{ path: "img.jpg" }` not `{ url: "/api/media/..." }`; `cockpitAsset()` must handle null/undefined without throwing
- **Cockpit collection response shape** — `GET /api/content/items/X` returns `{ data: [] }` not `{ docs: [] }`; the adapter must read `.data`, not `.docs`
- **Cockpit singleton returns null model** — if a singleton has never been saved, Cockpit returns `null`; adapter must fall through to mock data exactly as Payload adapter does
- **`next.config.ts` remotePatterns** — Cockpit images served from port 8090 locally and from `cockpit` hostname inside Docker; both must be listed or `<Image>` will throw

---

## Task 1: Docker — Add Cockpit service

**Files:**
- Modify: `D:\Github\techavenue-cms\docker-compose.yml`

**Interfaces:**
- Produces: Cockpit reachable at `http://localhost:8090` on host, `http://cockpit:80` inside Docker network

- [ ] **Step 1: Add `cockpit` service to `docker-compose.yml`**

Add after the `minio` service, before `cms`:

```yaml
  cockpit:
    build:
      context: ./cockpit
    restart: unless-stopped
    ports:
      - "8090:80"
    volumes:
      - cockpit_storage:/var/www/html/storage
    environment:
      COCKPIT_ENV: production
```

Also add `cockpit_storage:` under the top-level `volumes:` key.

The `./cockpit` directory is the cloned Cockpit HQ repo with its own `Dockerfile` (`php:8.3-apache`). No additional Dockerfile needed.

- [ ] **Step 2: Start the service and verify**

```bash
cd D:\Github\techavenue-cms
docker compose up cockpit -d
```

Expected: `http://localhost:8090/install` loads the Cockpit installation wizard.

- [ ] **Step 3: Complete Cockpit first-run setup**

Visit `http://localhost:8090/install`, create admin account. Then go to **System → API Keys**, create a key with read access to Content. Copy the key — it becomes `COCKPIT_API_KEY`.

- [ ] **Step 4: Commit**

```bash
git add docker-compose.yml
git commit -m "feat: add Cockpit CMS service to docker-compose"
```

---

## Task 2: Restructure — Split `lib/cms.ts` into `lib/cms/`

**Files:**
- Create: `techavenue-frontend/lib/cms/payload.ts` — verbatim copy of current `lib/cms.ts`
- Create: `techavenue-frontend/lib/cms/index.ts` — provider switcher
- Delete: `techavenue-frontend/lib/cms.ts`

**Interfaces:**
- Produces: all existing exports (`getHomePageData`, `getAboutPageData`, `getContactPageData`, `getCareerPageData`, `getServicesPageData`, `getIndustries`, `getIndustry`, `getLegacySolutions`, `getLegacySolution`, `getSolutionPages`, `getSolutionPage`, `getNewsPageData`, `getNewsItem`, `getEvent`, `getSuccessStoriesPageData`, `getSuccessStory`) re-exported from `lib/cms/index.ts` with identical signatures

- [ ] **Step 1: Create `lib/cms/payload.ts`**

Copy `lib/cms.ts` verbatim. No changes to content.

- [ ] **Step 2: Create `lib/cms/index.ts`**

```ts
const provider = process.env.CMS_PROVIDER ?? 'payload'

export * from provider === 'cockpit'
  ? './cockpit'
  : './payload'
```

- [ ] **Step 3: Delete `lib/cms.ts`**

- [ ] **Step 4: Verify no import paths broke**

All files that import from `@/lib/cms` continue to work because `index.ts` re-exports everything. Run:

```bash
cd techavenue-frontend && npm run build 2>&1 | grep -i error
```

Expected: zero TypeScript errors related to cms imports.

- [ ] **Step 5: Commit**

```bash
git add lib/cms/ && git rm lib/cms.ts
git commit -m "refactor: split lib/cms.ts into lib/cms/ with provider switcher"
```

---

## Task 3: Cockpit adapter — `lib/cms/cockpit.ts`

**Files:**
- Create: `techavenue-frontend/lib/cms/cockpit.ts`

**Interfaces:**
- Consumes: same TypeScript types imported from `@/types/*` that `payload.ts` uses
- Produces: identical exported function signatures as `payload.ts`

- [ ] **Step 1: Write `cockpit.ts` with helpers**

```ts
const COCKPIT_URL = process.env.COCKPIT_INTERNAL_URL
  ?? process.env.NEXT_PUBLIC_COCKPIT_URL
  ?? 'http://localhost:8090'

const HEADERS = {
  'Cockpit-Token': process.env.COCKPIT_API_KEY ?? '',
}

const PLACEHOLDER = '/placeholder.svg'

function cockpitAsset(field: unknown): string {
  if (!field) return PLACEHOLDER
  if (typeof field === 'string') return field || PLACEHOLDER
  if (typeof field === 'object' && field !== null && 'path' in field) {
    const p = (field as { path: string }).path
    if (!p) return PLACEHOLDER
    return `${COCKPIT_URL}/storage/uploads/${p}`
  }
  return PLACEHOLDER
}

async function fetchSingleton(model: string): Promise<any> {
  try {
    const res = await fetch(`${COCKPIT_URL}/api/content/item/${model}`, {
      headers: HEADERS,
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    return res.json()
  } catch { return null }
}

async function fetchCollection(model: string): Promise<any[]> {
  try {
    const res = await fetch(`${COCKPIT_URL}/api/content/items/${model}?limit=100`, {
      headers: HEADERS,
      next: { revalidate: 60 },
    })
    if (!res.ok) return []
    const json = await res.json()
    return json.data ?? []
  } catch { return [] }
}

async function fetchCollectionItem(model: string, id: string): Promise<any> {
  try {
    const res = await fetch(`${COCKPIT_URL}/api/content/item/${model}/${id}`, {
      headers: HEADERS,
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    return res.json()
  } catch { return null }
}
```

- [ ] **Step 2: Implement all exported functions**

For each function, copy the mapping logic from `payload.ts` and replace `mediaUrl(x)` with `cockpitAsset(x)`. The raw field names from Cockpit match those from Payload (content manager uses the same field names). The fallback-to-mock pattern is identical:

```ts
export async function getHomePageData() {
  const raw = await fetchSingleton('Home')
  if (!raw) {
    const { homeData, testimonials } = await import('@/mock/home')
    return { homeData, testimonials }
  }
  // ... same toHomeData mapping as payload.ts, with cockpitAsset instead of mediaUrl
}
```

Apply this pattern for all 13 exported functions. Use `cockpitAsset` everywhere `mediaUrl` appears in `payload.ts`.

- [ ] **Step 3: Commit**

```bash
git add lib/cms/cockpit.ts
git commit -m "feat: add Cockpit CMS adapter"
```

---

## Task 4: Config — env vars and `next.config.ts`

**Files:**
- Modify: `techavenue-frontend/.env.local`
- Modify: `techavenue-frontend/next.config.ts`
- Modify: `D:\Github\techavenue-cms\docker-compose.yml` (frontend service env block)

**Interfaces:**
- Produces: `CMS_PROVIDER=cockpit` switches the live app to Cockpit; images from `localhost:8090` and `cockpit:80` load without Next.js warning

- [ ] **Step 1: Add vars to `.env.local`**

```
CMS_PROVIDER=payload
NEXT_PUBLIC_COCKPIT_URL=http://localhost:8090
COCKPIT_INTERNAL_URL=http://localhost:8090
COCKPIT_API_KEY=<key from Task 1 Step 3>
```

- [ ] **Step 2: Update `next.config.ts` remotePatterns**

Add two entries:

```ts
{ protocol: 'http', hostname: 'localhost', port: '8090' },
{ protocol: 'http', hostname: 'cockpit', port: '80' },
```

- [ ] **Step 3: Add vars to docker-compose `frontend` service env block**

```yaml
CMS_PROVIDER: cockpit
COCKPIT_INTERNAL_URL: http://cockpit:80
COCKPIT_API_KEY: <key>
NEXT_PUBLIC_COCKPIT_URL: http://localhost:8090
```

- [ ] **Step 4: Commit**

```bash
git add .env.local next.config.ts ../../docker-compose.yml
git commit -m "feat: wire CMS_PROVIDER toggle and Cockpit env vars"
```

---

## Task 5: Verify end-to-end

- [ ] **Step 1: Test with `CMS_PROVIDER=payload` (default)**

Start dev server with `.env.local` set to `CMS_PROVIDER=payload`. Visit all pages — data loads from Payload. No regressions.

- [ ] **Step 2: Create a test singleton in Cockpit**

In Cockpit admin (`http://localhost:8090`), create a singleton model named `Home` with at least one field (`intro.headingStart` as text). Save a value.

- [ ] **Step 3: Test with `CMS_PROVIDER=cockpit`**

Change `.env.local` to `CMS_PROVIDER=cockpit`, restart dev server. Visit home page — it should render Cockpit data (or fall through to mock if the model is incomplete). No 500 errors.

- [ ] **Step 4: Verify image loading**

Upload an asset in Cockpit, reference it in a model. Confirm Next.js `<Image>` renders it without a hostname warning.

- [ ] **Step 5: Final commit**

```bash
git add .
git commit -m "feat: Cockpit CMS integration complete"
```
