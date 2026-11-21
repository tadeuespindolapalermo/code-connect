# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

pnpm workspace monorepo (`pnpm-workspace.yaml` → `apps/*`) with two apps:

- `apps/web` — React 19 + Vite 8 SPA (TypeScript 7, Oxlint). Dev server on Vite's default port (5173).
- `apps/api` — NestJS 12 HTTP API (TypeScript 6, Vitest, Oxlint, Prettier). Listens on `PORT` or 3000.

The two apps are not wired together yet: there is no Vite proxy, no CORS setup in `apps/api/src/main.ts`, and no shared package.

## Commands

Run from the repo root (pnpm is required; the lockfile is `pnpm-lock.yaml`):

```bash
pnpm install
pnpm dev          # web + api in parallel (api runs `nest start --watch`)
pnpm dev:web      # web only
pnpm dev:api      # api only
pnpm build        # build all apps (web: tsc -b && vite build; api: nest build → dist/)
pnpm lint         # oxlint in every app
pnpm test         # runs `test` in every app that has one (web and api)
```

Run any app script with the filter aliases: `pnpm web <script>` / `pnpm api <script>`.

API-specific:

```bash
pnpm api test                              # unit tests (*.spec.ts, under src/)
pnpm api test:e2e                          # e2e tests (test/*.e2e-spec.ts, via vitest.config.e2e.ts)
pnpm api test:cov
pnpm api exec vitest run src/app.controller.spec.ts   # single test file
pnpm api exec vitest run -t "should return"           # tests matching a name
pnpm api format                            # prettier (single quotes, trailing commas)
```

Web-specific: `pnpm web test` runs component tests (Vitest + Testing Library + jsdom, `*.test.tsx` next to each component).

## API conventions (see `apps/api/AGENTS.md`)

`apps/api/AGENTS.md` holds the NestJS-specific guidance and should be read before API work. Key points:

- NestJS 12 is likely newer than training data — consult https://docs.nestjs.com/llms.txt rather than relying on memory.
- The API is **ESM-only** (`"type": "module"`): relative imports must end in `.js` (e.g. `./app.module.js`), use `import.meta.dirname` instead of `__dirname`, and `main.ts` uses top-level `await`.
- Tests use Vitest with `globals: true` — mock with `vi.fn()`, not `jest.fn()`.
- Prefer first-party `@nestjs/*` packages (config, swagger, throttler, typeorm/drizzle, etc.) before adding third-party libraries. Validation can use any Standard Schema library (Zod, Valibot…) via `StandardSchemaValidationPipe`.
- Lint is type-aware (`oxlint --type-aware`, via `oxlint-tsgolint`) and treats `no-floating-promises` as an error.

## Frontend conventions (`apps/web`)

- **Atomic Design.** Components live in `apps/web/src/components/` split into `atoms/`, `molecules/`, `organisms/`, `templates/` and `pages/`. A level may only import from levels below it: atoms import nothing from the app; molecules compose atoms; organisms compose molecules and atoms; templates define layout from organisms without fetching data; pages connect data to templates.
- **Tailwind CSS** for styling, via utility classes in JSX. Do not create per-component CSS files. Global styles and theme tokens (`@theme`) stay in `src/index.css` (Tailwind v4, CSS-first config).
- **Every component has a test** in the same folder (`Button.tsx` → `Button.test.tsx`). Cover its essential usage: rendering with required props, its main interaction, and its key variants or states. Query elements by role, label or text, not by class names.
- Routing uses `react-router` (`src/router.tsx`); wrap components that render links in `MemoryRouter` in tests. Import across levels via the `@/components/<level>` barrels.

## Backend conventions: REST (`apps/api`)

The API must follow REST principles strictly:

- **Resources, not actions.** URL paths contain plural nouns (`/v1/users`, `/v1/users/:id/orders`) and never verbs. The operation is the HTTP method.
- **Methods:**
  - `GET` is safe and idempotent, with no side effects.
  - `POST` creates a resource and returns `201` with a `Location` header.
  - `PUT` replaces a resource fully, and `PATCH` changes it partially.
  - `DELETE` returns `204`.
  - `PUT` and `DELETE` must be idempotent.
- **Status codes** are used precisely: `200` success, `201` created, `204` no content, `400` invalid input, `401` unauthenticated, `403` forbidden, `404` not found, `409` conflict. A `500` is never returned on purpose.
- **Errors** use one consistent body, the RFC 9457 problem details format (`application/problem+json`).
- **Collections** use query parameters for filtering, sorting and pagination (never path segments).
- **Hypermedia:** responses include `links` to related resources and to the valid next state transitions.
- **Statelessness:** the server keeps no session. Clients send credentials on every request in the `Authorization` header.
- **Caching:** `GET` responses send `Cache-Control` and `ETag` headers.
- **Representations:** JSON with camelCase fields. Dates are ISO 8601 in UTC.
- **Versioning:** URI prefix `/v1`.
- Use `@nestjs/swagger` to document every endpoint.

## Git conventions (both apps)

Use [Conventional Commits](https://www.conventionalcommits.org/): `<type>(<scope>): <description>`.

- Scope is `web` or `api` for changes inside one app. Omit it for repo-wide changes.
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- Description is imperative, lowercase, with no trailing period.
- Breaking changes add `!` after the type/scope or a `BREAKING CHANGE:` footer.
