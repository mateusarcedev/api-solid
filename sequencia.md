# To-Do List

1. [x] Introdução
2. [x] Definindo requisitos e regras
3. [x] Criando projeto Node.js
4. [x] Usando versões exatas do NPM
5. [x] Carregando variáveis ambiente
6. [x] Configurando ESLint
7. [x] Criando aliases de importação
8. [x] Fundamentos do Prisma ORM
9. [x] Fundamentos do Docker
10. [x] PostgreSQL com Docker
11. [x] Utilizando o Docker Compose
12. [x] Criando schema do Prisma
13. [x] Relacionamentos entre tabelas
14. [x] Criação de um usuário
15. [x] Controller de registro
16. [x] Hash da senha e validação
17. [x] Caso de uso de registro
18. [x] Repository Pattern
19. [x] Inversão de dependências
20. [x] Interface do repositório
21. [x] Lidando com erros do use case
22. [x] Handler de erros global
23. [x] Configurando Vitest
24. [x] Primeiro teste unitário
25. [x] In-Memory Databases
26. [x] Gerando coverage de testes
27. [x] Utilizando UI do Vitest
28. [x] Caso de uso de autenticação
29. [x] Testes e controller de autenticação
30. [x] Refatorando instâncias nos testes
31. [x] Utilizando Factory Pattern
32. [x] Caso de uso de perfil
33. [x] Caso de uso de check-in
34. [x] TDD & Mocking
35. [x] Validando data do check-in
36. [x] Validando distância do check-in
37. [x] Caso de uso de criação de academia
38. [x] Caso de uso de histórico
39. [x] Caso de uso de métricas
40. [x] Caso de uso de busca de academias
41. [x] Caso de uso de academias próximas
42. [x] Caso de uso de validar check-in
43. [x] Validando horário do check-in
44. [x] Repositórios do Prisma
45. [x] Repositório de academias
46. [x] Factories dos casos de uso
47. [x] Princípios da autenticação JWT
48. [x] Implementando JWT no Fastify
49. [x] Controller de perfil
50. [x] Criando test environment
51. [x] Test Environment do Prisma
52. [x] Teste E2E do registro
53. [x] Teste E2E da autenticação
54. [x] Teste E2E do perfil
55. [x] Controller de criação de academia
56. [ ] Outros controllers da academia
57. [ ] Controllers das rotas de check-ins
58. [ ] Testes E2E de rotas de academias
59. [ ] Testes E2E de rotas de check-ins
60. [ ] Estratégia de refresh de token
61. [ ] Implementação do refresh token
62. [ ] Autorização por cargos (RBAC)
63. [ ] Testes de RBAC
64. [ ] Executando testes unitários no CI
65. [ ] Executando testes E2E no CI

## Requisitos Funcionanis

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia.

## Regras de negócio

- [ ] O usuário não deve poder se cadastrar com um email duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser criada por administradores.

## Requisitos não funcionais

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco de dados Postgresql;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por JWT (Json Web Token).
