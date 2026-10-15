# Gym Check-In API

[![CI](https://github.com/mateusarcedev/api-solid/actions/workflows/ci.yml/badge.svg)](https://github.com/mateusarcedev/api-solid/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

[Versão em português](README.md)

> **Study project.** Built during the [Rocketseat](https://www.rocketseat.com.br/) Node.js course, following the structure and requirements proposed in the course. It is a learning record of SOLID, Clean Architecture and TDD, not a product: there is no front end, deployment or scaling work.

A gym check-in REST API (GymPass-style) built with Fastify, Prisma and PostgreSQL.

## What it practices

- **SOLID and Clean Architecture**: framework-independent use cases with repositories injected through interfaces (`src/http/repositories/`, with Prisma and in-memory implementations)
- **Factory pattern** to compose use cases (`src/http/use-cases/factories/`)
- **TDD**: use case unit tests with in-memory repositories
- **E2E tests** of the routes with Vitest and Supertest, each test file in its own PostgreSQL schema (`prisma/vitest-environment-prisma/`)
- **JWT authentication** with a refresh token in an `httpOnly` cookie, and **RBAC** (`ADMIN` / `MEMBER`)
- **Prisma ORM** with migrations, and input and environment validation with Zod

## Business rules

- No duplicate e-mails on sign-up
- One check-in per day per user
- Check-in only within 100 m of the gym
- A check-in can only be validated within 20 minutes of creation
- Only admins validate check-ins and register gyms
- Lists are paginated, 20 items per page

## Routes

| Method | Route | Access |
|---|---|---|
| `POST` | `/users` | public |
| `POST` | `/sessions` | public |
| `PATCH` | `/token/refresh` | `refreshToken` cookie |
| `GET` | `/me` | authenticated |
| `GET` | `/gyms/search?q=&page=` | authenticated |
| `GET` | `/gyms/nearby?latitude=&longitude=` | authenticated |
| `POST` | `/gyms` | `ADMIN` |
| `POST` | `/gyms/:gymId/check-ins` | authenticated |
| `GET` | `/check-ins/history?page=` | authenticated |
| `GET` | `/check-ins/metrics` | authenticated |
| `PATCH` | `/check-ins/:checkInId/validate` | `ADMIN` |

## Running it

Requires Node.js 20+ (CI uses Node 22) and Docker.

```bash
npm ci
cp .env.example .env        # fill in JWT_SECRET (instructions in the file)
docker compose up -d        # PostgreSQL on localhost:5432
npm run db:migrate          # apply migrations
npm run dev                 # http://localhost:3333
```

### Tests

```bash
npm test            # unit tests (no database needed)
npm run test:e2e    # needs the docker compose PostgreSQL and the .env
npm run typecheck
npm run lint
```

CI runs typecheck, lint, unit and e2e tests on every push to `main` and on pull requests.

## Stack

Node.js · TypeScript · Fastify 5 · Prisma 6 · PostgreSQL 17 · Zod · JWT (`@fastify/jwt`) · bcryptjs · Vitest · Supertest · tsup

## Known limitations

Choices inherited from the course and kept on purpose because they are didactic:

- `verifyUserRole` replies `401` when the role is insufficient (`403` would be the semantically correct status)
- bcrypt cost of 6 (fast for tests) and no minimum length required for `JWT_SECRET`
- No rate limiting, external logging or application Dockerfile

`npm audit` still reports vulnerabilities in development tooling (Vitest and Rocketseat's ESLint config); fixing them requires major upgrades. Production dependencies have no known vulnerabilities.

## License

[MIT](LICENSE) © Mateus Arce. Course content and requirements belong to Rocketseat.
