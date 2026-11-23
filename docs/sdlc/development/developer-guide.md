# Developer Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start status -->
_Up to date._
<!-- sdlc:auto:end status -->

<!-- sdlc:auto:start source -->
Generated from commit `23cadaf` · model `claude-sonnet-5`
<!-- sdlc:auto:end source -->

<!-- sdlc:auto:start overview -->
calculator9 is a Quorq AI SDLC-generated project containing two independent applications in one repo: a Vite + React 19 single-page frontend built from an approved UI design (currently running on seeded sample data, not yet wired to the API), and a FastAPI 0.115 backend that at this stage only exposes a health-check endpoint, scaffolded with SQLAlchemy models/Pydantic schemas and a router layer ready for future endpoints. The backend defaults to a local SQLite database for zero-friction startup, with Postgres available via docker-compose and a DATABASE_URL override.
<!-- sdlc:auto:end overview -->

<!-- sdlc:auto:start prerequisites -->
- Node.js (for npm/Vite/React 19/Vitest/Playwright tooling)
- Python 3.12
- pip
- Docker and Docker Compose (optional, for the Postgres service in docker-compose.yml)
<!-- sdlc:auto:end prerequisites -->

<!-- sdlc:auto:start setup -->
1. Clone the repository.
2. cd backend && pip install -r requirements.txt
3. (optional) docker compose up -d to start the Postgres 16 database service defined in docker-compose.yml, then set DATABASE_URL to point at it
4. cd frontend && npm install
5. (optional, only if end-to-end tests will run against a live browser) npm run test:e2e:install
<!-- sdlc:auto:end setup -->

<!-- sdlc:auto:start run -->
| Name | Command | Description |
|---|---|---|
| backend dev | `cd backend && uvicorn app.main:app --reload` | Runs the FastAPI app locally with auto-reload; creates/updates the SQLite schema on startup and serves /health. |
| frontend dev | `cd frontend && npm run dev` | Starts the Vite dev server for the React SPA (default http://localhost:5173). |
| frontend build | `cd frontend && npm run build` | Bundles the frontend for production with vite build (does not typecheck). |
| frontend preview | `cd frontend && npm run preview` | Serves the production build locally for verification. |
| db (compose) | `docker compose up -d` | Starts the postgres:16-alpine database service with the app/app credentials defined in docker-compose.yml. |
<!-- sdlc:auto:end run -->

<!-- sdlc:auto:start structure -->
| Path | Purpose |
|---|---|
| `.devcontainer` | Dev container configuration for a consistent local/editor environment. |
| `.quorq` | Platform metadata (handoff.json) used by the Quorq AI SDLC tooling. |
| `backend` | FastAPI service: app code, tests, Dockerfile, and Python tooling config. |
| `backend/app` | Application package: main.py entrypoint, database.py engine/session setup, models.py (SQLAlchemy), schemas.py (Pydantic), routers/ for future endpoint modules. |
| `backend/tests` | Pytest suite split into unit/ and integration/ (currently a health check integration test). |
| `frontend` | Vite + React 19 SPA: approved screens, component library, Playwright e2e specs, and build/test tooling config. |
| `frontend/src` | Application source: main.tsx entrypoint, lib/ (api client, UI primitives, icons, navigation), index.css brand tokens. |
| `frontend/e2e` | Playwright acceptance tests run against either a locally booted app or a deployed URL via E2E_BASE_URL. |
<!-- sdlc:auto:end structure -->

<!-- sdlc:auto:start conventions -->
- Backend routes are generated one router per architecture component (backend/app/routers), with unimplemented endpoints returning a typed StubResponse rather than raising, so the service stays startable with a complete OpenAPI document.
- SQLAlchemy models live in app/models.py and inherit the shared Base from app/database.py; main.py imports models before calling create_all so tables register.
- Database access is a request-scoped dependency (get_db) yielding one Session per request, closed in a finally block.
- Database URL and allowed CORS origins are environment-driven (DATABASE_URL, ALLOWED_ORIGINS) rather than hardcoded, defaulting to local SQLite and the Vite dev server origins.
- Frontend screens are organized one module per approved screen; shared UI building blocks live in src/lib/ui.tsx and src/lib/icons.tsx, and brand styling in index.css.
- The frontend API client (src/lib/api.ts) centralizes the base URL and bearer-token auth (session token first, falling back to a shared secret) for all backend calls, but screens currently render seeded sample data rather than calling it.
- Python code is linted/formatted with ruff (ruff.toml); frontend code with ESLint (eslint.config.js) and Prettier (.prettierrc).
<!-- sdlc:auto:end conventions -->

<!-- sdlc:auto:start testing -->
| Name | Command | Description |
|---|---|---|
| backend tests | `cd backend && pytest` | Runs the pytest suite (unit/ and integration/), using pythonpath=. so `import app` resolves. |
| backend lint | `cd backend && ruff check .` | Lints the backend Python code. |
| backend format | `cd backend && ruff format .` | Formats the backend Python code. |
| frontend unit tests | `cd frontend && npm test` | Runs Vitest component tests under src/ with jsdom. |
| frontend typecheck | `cd frontend && npm run typecheck` | Runs tsc --noEmit; not run by npm run build, so should be checked separately. |
| frontend lint | `cd frontend && npm run lint` | Runs ESLint across the frontend app (gate used during development). |
| frontend e2e | `cd frontend && npm run test:e2e` | Runs Playwright acceptance tests from e2e/; without E2E_BASE_URL it boots the backend (via backend/.venv) and a built/served frontend preview automatically. |
<!-- sdlc:auto:end testing -->

<!-- sdlc:auto:start troubleshooting -->
| Problem | Solution |
|---|---|
| Frontend requests to the backend are blocked by the browser (CORS error). | Set the ALLOWED_ORIGINS environment variable on the backend to a comma-separated list including the frontend's origin; it defaults to the Vite dev server origins only. |
| `pytest` run from backend/ fails with `ModuleNotFoundError: app`. | Run pytest from the backend/ directory so pytest.ini's pythonpath = . applies, or ensure your working directory matches. |
| `npm run test:e2e` fails to start the backend. | Playwright's webServer expects a backend virtualenv at backend/.venv; create it and install backend/requirements.txt there before running e2e tests locally. |
| Database schema seems out of date after changing models.py. | Base.metadata.create_all only creates missing tables; without an alembic.ini/migrations set up, drop/recreate the SQLite file (app.db) or the Postgres database for a clean schema. |
| `npm run build` succeeds but the app has type errors. | Build does not run the TypeScript compiler; run `npm run typecheck` explicitly to catch tsc errors before shipping. |
<!-- sdlc:auto:end troubleshooting -->
