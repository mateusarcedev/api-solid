# To-Do List

1. [x] Introdução
2. [x] Definindo requisitos e regras
3. [x] Criando projeto Node.js
4. [x] Usando versões exatas do NPM
5. [x] Carregando variáveis ambiente
6. [x] Configurando ESLint
7. [x] Criando aliases de importação
8. [ ] Fundamentos do Prisma ORM
9. [ ] Fundamentos do Docker
10. [ ] PostgreSQL com Docker
11. [ ] Utilizando o Docker Compose
12. [ ] Criando schema do Prisma
13. [ ] Relacionamentos entre tabelas
14. [ ] Criação de um usuário
15. [ ] Controller de registro
16. [ ] Hash da senha e validação
17. [ ] Caso de uso de registro
18. [ ] Repository Pattern
19. [ ] Inversão de dependências
20. [ ] Interface do repositório
21. [ ] Lidando com erros do use case
22. [ ] Handler de erros global
23. [ ] Configurando Vitest
24. [ ] Primeiro teste unitário
25. [ ] In-Memory Databases
26. [ ] Gerando coverage de testes
27. [ ] Utilizando UI do Vitest
28. [ ] Caso de uso de autenticação
29. [ ] Testes e controller de autenticação
30. [ ] Refatorando instâncias nos testes
31. [ ] Utilizando Factory Pattern
32. [ ] Caso de uso de perfil
33. [ ] Caso de uso de check-in
34. [ ] TDD & Mocking
35. [ ] Validando data do check-in
36. [ ] Validando distância do check-in
37. [ ] Caso de uso de criação de academia
38. [ ] Caso de uso de histórico
39. [ ] Caso de uso de métricas
40. [ ] Caso de uso de busca de academias
41. [ ] Caso de uso de academias próximas
42. [ ] Caso de uso de validar check-in
43. [ ] Validando horário do check-in
44. [ ] Repositórios do Prisma
45. [ ] Repositório de academias
46. [ ] Factories dos casos de uso
47. [ ] Princípios da autenticação JWT
48. [ ] Implementando JWT no Fastify
49. [ ] Controller de perfil
50. [ ] Criando test environment
51. [ ] Organizando NPM scripts
52. [ ] Test Environment do Prisma
53. [ ] Teste E2E do registro
54. [ ] Teste E2E da autenticação
55. [ ] Teste E2E do perfil
56. [ ] Controller de criação de academia
57. [ ] Outros controllers da academia
58. [ ] Controllers das rotas de check-ins
59. [ ] Testes E2E de rotas de academias
60. [ ] Testes E2E de rotas de check-ins
61. [ ] Estratégia de refresh de token
62. [ ] Implementação do refresh token
63. [ ] Autorização por cargos (RBAC)
64. [ ] Testes de RBAC
65. [ ] Executando testes unitários no CI
66. [ ] Executando testes E2E no CI


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