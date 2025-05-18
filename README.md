# Gym Check-In App

<details>
  <summary>🇧🇷 Português (pt-BR)</summary>

## 📌 Sobre o Projeto

Este projeto foi desenvolvido durante um curso da [Rocketseat](https://www.rocketseat.com.br/), com o objetivo de criar uma aplicação de check-ins em academias. Ao longo do projeto, são aplicados conceitos como:

- SOLID
- Design Patterns (como Factory Pattern e Repository Pattern)
- Docker e Docker Compose para orquestração do ambiente
- Prisma ORM para manipulação do banco de dados PostgreSQL
- JWT e Refresh Token para autenticação
- RBAC (Role-Based Access Control) para autorização
- Testes unitários e E2E com Vitest
- TDD e Mocking
- Clean Architecture

---

## ✅ Funcionalidades

- ✅ Cadastro de usuário
- [ ] Autenticação de usuário
- [ ] Visualização de perfil de usuário logado
- [ ] Visualização do número de check-ins realizados
- [ ] Histórico de check-ins
- [ ] Busca por academias próximas
- [ ] Busca por academias por nome
- [ ] Realizar check-in em uma academia
- [ ] Validação de check-in de usuários
- [ ] Cadastro de academias

---

## 📜 Regras de Negócio

- [ ] Não é permitido cadastro com e-mail duplicado
- [ ] Apenas um check-in por dia por usuário
- [ ] Check-in apenas se estiver a até 100m da academia
- [ ] Validação do check-in em até 20 minutos após a criação
- [ ] Apenas administradores podem validar check-ins
- [ ] Apenas administradores podem cadastrar academias

---

## 🛠 Requisitos Não Funcionais

- [ ] Senhas criptografadas
- [ ] Persistência de dados com PostgreSQL
- [ ] Listagens paginadas com 20 itens por página
- [ ] Autenticação via JWT

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Fastify
- PostgreSQL
- Prisma ORM
- Docker / Docker Compose
- JWT
- Vitest
- TypeScript

</details>

---

<details>
  <summary>🇺🇸 English (en-US)</summary>

## 📌 About the Project

This project was developed during a [Rocketseat](https://www.rocketseat.com.br/) course. The goal is to create a gym check-in application. Throughout the course, several concepts are put into practice, such as:

- SOLID principles
- Design Patterns (like Factory Pattern and Repository Pattern)
- Docker and Docker Compose for environment setup
- Prisma ORM to interact with a PostgreSQL database
- JWT and Refresh Token for authentication
- RBAC (Role-Based Access Control) for authorization
- Unit and E2E tests with Vitest
- TDD and Mocking
- Clean Architecture

---

## ✅ Features

- [ ] User registration
- [ ] User authentication
- [ ] View logged-in user profile
- [ ] View total number of check-ins
- [ ] View check-in history
- [ ] Search gyms nearby
- [ ] Search gyms by name
- [ ] Perform a gym check-in
- [ ] Validate user check-ins
- [ ] Register gyms

---

## 📜 Business Rules

- [ ] Users cannot register with duplicate emails
- [ ] Only one check-in per day per user
- [ ] Check-ins allowed only within 100 meters of the gym
- [ ] Check-in must be validated within 20 minutes
- [ ] Only admins can validate check-ins
- [ ] Only admins can register gyms

---

## 🛠 Non-Functional Requirements

- [ ] Encrypted passwords
- [ ] Data persistence using PostgreSQL
- [ ] Pagination with 20 items per page
- [ ] JWT authentication

---

## 🚀 Tech Stack

- Node.js
- Fastify
- PostgreSQL
- Prisma ORM
- Docker / Docker Compose
- JWT
- Vitest
- TypeScript

</details>
