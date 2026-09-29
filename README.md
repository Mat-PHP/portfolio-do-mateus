# Portfólio do Mateus Ferreira

Portfólio profissional de **Mateus Ferreira Salustiano**, Full Stack Developer com experiência em desenvolvimento backend, APIs REST, React, automação, bancos de dados e soluções digitais.

## Site

[Acessar o portfólio no GitHub Pages](https://mat-php.github.io/portfolio-do-mateus/)

## Tecnologias

- **Frontend:** React, Vite, JavaScript e CSS responsivo
- **Backend:** Java 21 e Spring Boot 3
- **API:** REST com os endpoints `GET /api/portfolio` e `GET /api/health`
- **Dados:** PostgreSQL, MongoDB, SQL e NoSQL
- **Ferramentas:** Git, GitHub, Maven e pnpm

## Estrutura do projeto

```text
portfolio-do-mateus/
├── frontend/     Aplicação React e arquivos públicos
├── backend/      API Java com Spring Boot
├── dist/         Versão compilada do frontend
└── README.md     Documentação do projeto
```

## Executar o frontend

```bash
pnpm install
pnpm run dev
```

O frontend estará disponível em `http://localhost:5173`.

## Executar o backend

```bash
cd backend
./mvnw spring-boot:run       # macOS ou Linux
mvnw.cmd spring-boot:run     # Windows
```

A API estará disponível em `http://localhost:8080`.

Para carregar os dados diretamente da API, crie um arquivo `.env.local` na raiz do projeto:

```text
VITE_API_URL=http://localhost:8080
```

O frontend também possui dados locais de contingência e funciona normalmente como site estático no GitHub Pages.

## Autor

**Mateus Ferreira Salustiano**  
Full Stack Developer — Campinas, São Paulo, Brasil
