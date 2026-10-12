# V Starter

**A reusable full-stack web application starter by Virat Software Solutions.**

V Starter gives new projects a working foundation for building web applications with Next.js, React, Bun, and TypeScript. It includes a landing-page canvas, a sample dashboard, reusable UI components, an Elysia API integration, and PostgreSQL tooling.

This repository is a **starter package, not a finished product**. Use its examples and structure as a starting point, then replace the demo content and adapt the application to your project.

## What's included

| Area | Included stack or example |
| --- | --- |
| Application | Next.js 16 (App Router), React 19, TypeScript |
| Runtime and package manager | Bun |
| Styling and UI | Tailwind CSS 4, shadcn/ui-style components, Radix UI, Lucide icons |
| Motion and visuals | GSAP, OGL, and shader-based visual components |
| API | Elysia mounted at `/api` through a Next.js route handler |
| Database | PostgreSQL, Drizzle ORM, Drizzle Kit |
| Authentication example | Admin username/email and password sign-in endpoint |
| Dashboard example | Sidebar, charts, cards, and a table with sample data |
| Developer tooling | ESLint, Prettier, Husky, lint-staged, React Compiler |

These are components and examples currently present in the repository. They are not a claim that enterprise authentication, AI services, or third-party integrations are implemented.

## Getting started

### Prerequisites

- [Bun](https://bun.sh/) installed.
- A running PostgreSQL database **if you plan to use the database or admin sign-in example**.

### 1. Clone and install

```bash
git clone https://github.com/viratsoftwaresolutions/v-starter.git
cd v-starter
bun install --frozen-lockfile
```

Access to this private repository is required to clone it.

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` to use your own PostgreSQL connection string and admin credentials:

```dotenv
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/app_db
AUTH_ADMIN_EMAIL=admin@example.com
AUTH_ADMIN_PASSWORD=replace-with-a-strong-unique-password
AUTH_ADMIN_NAME=Project Admin
AUTH_ADMIN_USERNAME=admin
AUTH_ADMIN_PHONE_NUMBER=0000000000
```

The values above are examples, not safe production credentials. Never commit `.env.local` or real credentials. Bun loads this environment file when you run the project's Bun scripts.

### 3. Prepare the database (for the auth example)

Use a **development database**. First check connectivity, then apply the current schema:

```bash
bun run db:connect
bun run db:push
bun run db:verify
bun run auth:register-admin
```

`db:push` applies the Drizzle schema directly. Review generated changes before using it on any database with valuable data. For managed environments, prefer reviewed migrations instead.

### 4. Run the application

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the starter landing page.

- `/` — landing-page canvas.
- `/dashboard` — example dashboard using sample data.
- `/api/auth/sign-in` — example admin sign-in API endpoint (POST); requires the database and a registered admin account.

The landing page and sample dashboard are useful without running the admin setup. Database-backed features require the PostgreSQL configuration.

## Useful commands

| Command | Purpose |
| --- | --- |
| `bun run dev` | Start the development server |
| `bun run build` | Build the Next.js application |
| `bun run start` | Serve a production build |
| `bun run lint` | Run ESLint on `src` |
| `bun run format:check` | Check formatting with Prettier |
| `bun run check` | Run lint and build |
| `bun run db:connect` | Check PostgreSQL connectivity |
| `bun run db:generate` | Generate Drizzle migration files |
| `bun run db:migrate` | Apply generated database migrations |
| `bun run db:studio` | Open Drizzle Studio |
| `bun run db:seed` | Seed an admin account from configured values |
| `bun run auth:register-admin` | Create or update the configured admin account |

Other database maintenance scripts are defined in `package.json`. Inspect their effects before using them, especially `db:reset`.

## Project structure

```text
src/
├── app/                 Next.js routes, landing page, dashboard, API route
├── components/          Shared components and UI primitives
├── hooks/               Reusable React hooks
├── lib/                 Utilities and database configuration
└── modules/
    └── auth/            Example auth models, service, API routes
scripts/                 Database and admin maintenance scripts
public/                  Static assets
drizzle.config.ts        Drizzle Kit configuration
.env.example             Environment variable template
```

## Adapting V Starter for a new project

1. Replace the landing-page copy, visuals, and branding in `src/app/page.tsx` and related components.
2. Replace the dashboard's sample data and UI with your real product features.
3. Define your application's tables in `src/lib/db/schema.ts` and manage schema changes with Drizzle.
4. Add business modules under `src/modules/` and register them in the Elysia route handler at `src/app/api/[[...slugs]]/route.ts`.
5. Update the project name in `package.json`, along with metadata, icons, environment variables, and deployment settings.

The package manifest retains the original name `v-nexora-webapp` from the source snapshot. Change it when creating a new application from this starter.

## Security and production readiness

**Do not treat the included sign-in example as a complete production authentication system.** It checks administrator credentials, but the returned token is a simple example value, not a fully implemented, verified session lifecycle. Before using this starter for real users, implement appropriate session verification, authorization, secure cookie handling, rate limiting, and other security controls. The dashboard is also a UI demonstration, not a protected production admin console.

Do not deploy with the sample admin password or expose a production database to development scripts. Review dependencies, routes, secrets, and deployment configuration for your application.

## Origin

V Starter was created as an independent starter repository from a snapshot of the private [V Nexora Webapp](https://github.com/viratsoftwaresolutions/v-nexora-webapp) repository.

- **Source commit:** [`9955927e36733bdde088472d112bac49a3d24644`](https://github.com/viratsoftwaresolutions/v-nexora-webapp/commit/9955927e36733bdde088472d112bac49a3d24644)
- **Migration:** Original tracked files were copied without modification; V Starter has its own Git history.
- **Maintainer:** Virat Software Solutions

This README describes the starter as migrated. It does not change application behavior.
