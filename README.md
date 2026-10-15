# Gym Check-In API

[![CI](https://github.com/mateusarcedev/api-solid/actions/workflows/ci.yml/badge.svg)](https://github.com/mateusarcedev/api-solid/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

[English version](README.en.md)

> **Projeto de estudo.** Desenvolvido durante o curso de Node.js da [Rocketseat](https://www.rocketseat.com.br/), seguindo a estrutura e os requisitos propostos no curso. É um registro de aprendizado de SOLID, Clean Architecture e TDD, não um produto: não há front-end, deploy nem preocupações de escala.

API REST de check-ins em academias (estilo GymPass) com Fastify, Prisma e PostgreSQL.

## O que o projeto pratica

- **SOLID e Clean Architecture**: casos de uso independentes de framework, com repositórios injetados por interface (`src/http/repositories/`, com implementações Prisma e em memória)
- **Factory pattern** para montar casos de uso (`src/http/use-cases/factories/`)
- **TDD**: testes unitários dos casos de uso com repositórios em memória
- **Testes e2e** das rotas com Vitest e Supertest, cada arquivo em um schema PostgreSQL próprio (`prisma/vitest-environment-prisma/`)
- **Autenticação JWT** com refresh token em cookie `httpOnly` e **RBAC** (`ADMIN` / `MEMBER`)
- **Prisma ORM** com migrations, e validação de entrada e de variáveis de ambiente com Zod

## Regras de negócio

- Não é possível cadastrar e-mail duplicado
- Um check-in por dia por usuário
- Check-in apenas a até 100 m da academia
- O check-in só pode ser validado até 20 minutos após a criação
- Apenas administradores validam check-ins e cadastram academias
- Listagens paginadas com 20 itens por página

## Rotas

| Método | Rota | Acesso |
|---|---|---|
| `POST` | `/users` | público |
| `POST` | `/sessions` | público |
| `PATCH` | `/token/refresh` | cookie `refreshToken` |
| `GET` | `/me` | autenticado |
| `GET` | `/gyms/search?q=&page=` | autenticado |
| `GET` | `/gyms/nearby?latitude=&longitude=` | autenticado |
| `POST` | `/gyms` | `ADMIN` |
| `POST` | `/gyms/:gymId/check-ins` | autenticado |
| `GET` | `/check-ins/history?page=` | autenticado |
| `GET` | `/check-ins/metrics` | autenticado |
| `PATCH` | `/check-ins/:checkInId/validate` | `ADMIN` |

## Como rodar

Requer Node.js 20+ (CI em Node 22) e Docker.

```bash
npm ci
cp .env.example .env        # preencha JWT_SECRET (instrução no arquivo)
docker compose up -d        # PostgreSQL em localhost:5432
npm run db:migrate          # aplica as migrations
npm run dev                 # http://localhost:3333
```

### Testes

```bash
npm test            # unitários (não precisam de banco)
npm run test:e2e    # precisa do PostgreSQL do docker compose e do .env
npm run typecheck
npm run lint
```

O CI roda typecheck, lint, unitários e e2e a cada push na `main` e em pull requests.

## Stack

Node.js · TypeScript · Fastify 5 · Prisma 6 · PostgreSQL 17 · Zod · JWT (`@fastify/jwt`) · bcryptjs · Vitest · Supertest · tsup

## Limitações conhecidas

Escolhas herdadas do curso e mantidas de propósito, por serem didáticas:

- `verifyUserRole` responde `401` quando o papel é insuficiente (o semanticamente correto seria `403`)
- Custo do bcrypt em 6 (rápido para os testes) e `JWT_SECRET` sem exigência de tamanho mínimo
- Sem rate limit, logging externo ou Dockerfile da aplicação

O `npm audit` ainda aponta vulnerabilidades em ferramentas de desenvolvimento (Vitest e a config do ESLint da Rocketseat), cuja correção exige atualizações major. As dependências de produção estão sem vulnerabilidades conhecidas.

## Licença

[MIT](LICENSE) © Mateus Arce. O conteúdo e os requisitos do curso pertencem à Rocketseat.
