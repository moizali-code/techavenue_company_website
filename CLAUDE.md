@AGENTS.md

# Project Structure

```
next_app/
├── .env
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json / package-lock.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── about/
│       ├── page.tsx
│       └── components/   (empty)
├── components/
│   ├── features/  (empty)
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── logo.tsx
│   │   ├── main-nav.tsx
│   │   └── mobile-nav.tsx
│   ├── shared/    (empty)
│   └── ui/
│       ├── button.tsx
│       └── navigation-menu.tsx
├── hooks/         (empty)
├── lib/
│   ├── utils.ts
│   ├── formatters/  (empty)
│   └── helpers/     (empty)
├── mock/          (empty)
├── providers/     (empty)
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── services/      (empty)
├── store/
│   ├── index.ts
│   └── slices/    (empty)
├── types/
│   └── features/
│       └── navigation.ts
└── validations/   (empty)
```

# Conventions

- **Next.js is frontend-only** in this project. Do not create API routes or use Next.js as a fullstack platform. Backend calls go through `services/` (RTK Query).
- **File naming**: kebab-case for all files, e.g. `about-us.tsx`, `use-auth-hook.ts`.
- **`features/` vs `shared/` split**: `types/`, `validations/`, `services/`, and `hooks/` each split into exactly two subfolders:
  - `shared/` — only if the thing has a realistic possibility of being reused somewhere else. Reuse must be plausible, not hypothetical. `shared/` is **not** a catch-all bucket for anything that lacks an obvious feature.
  - `features/` — everything else. One kebab-case file per feature, placed directly in `features/` (no per-feature subfolder).
  - Examples: `types/features/navigation.ts`, `validations/features/about.zod.ts`, `services/features/auth.ts`, `hooks/features/use-checkout.ts`, `validations/shared/pagination.zod.ts`.
  - If something starts feature-specific and later gets a second consumer, move it to `shared/` then — do not pre-place it in `shared/` in anticipation.
- **`components/`**:
  - `ui/` — shadcn components
  - `shared/` — global/shared components
  - `layout/` — layout components (header, footer, etc.)
  - `features/` — feature-specific sub-components, e.g. `features/about/about-header.tsx` instead of one large page component.
  - Note: `components/features/` is the one place that **does** use a per-feature subfolder, since a feature has many components. The `types`/`validations`/`services`/`hooks` split above uses a single flat file per feature instead.
- **No comments**: Do not write comments in code — no inline `//`, no block comments, no JSDoc, no `TODO`/`FIXME` notes, and no CSS comments. Code must be self-explanatory through naming and structure instead. If something genuinely needs explaining (an unwired form, placeholder data, a non-obvious workaround), raise it in the chat response rather than leaving a note in the file.
- **Responsive by default**: Every component must work at all screen sizes — mobile, tablet, and desktop — not just the width shown in a design mockup. Design mobile-first and layer breakpoints upward. Multi-column layouts must stack, navigation must have a mobile equivalent, and text, images, and tables must never cause horizontal overflow.
- **No `sm:` prefix**: Never use the `sm:` breakpoint. An unprefixed class is already the small-screen value — `text-[18px]` means "18px on small screens". Layer larger screens on top with `md:`, `lg:`, and `xl:` only, e.g. `text-[18px] lg:text-[24px]`, `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`. Never write `sm:text-[18px]` or any other `sm:`-prefixed utility.
- **No styling in mock data**: Files in `mock/` hold content only — never `className`, `classNames`, Tailwind classes, inline `style`, colors, spacing, or any other presentational value. Styling belongs in the component that renders the data. If a mock entry needs to look different from its siblings (a highlighted card, a themed variant), stop and ask which approach to take — do not put the classes in the mock and do not invent a variant on your own. Only include styling in mock data when explicitly told to.
- **shadcn usage**: We use shadcn as much as possible. Before creating a new component, always check `components/ui/` first for an existing related component. Prefer extending it via props/variants over creating a new component from scratch. Only build a custom component when no suitable shadcn component exists.

use lucide-react for icons and do not use any other library.

# When Unsure

If a feature, component, or file placement is ambiguous, or anything deviates from these conventions, ask before proceeding — do not guess.
