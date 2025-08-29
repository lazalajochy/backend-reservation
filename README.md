# backend-reservation

## 🏷 Version
1.0.0


## 📜 License
ISC


## 🛠️ Basic requirements
- `nodejs >= v18.20.8`
- `npm >= 10.8.2`
- `git >= git version 2.49.0`


## 📖 Description
⚡ Replace this section with a short description of your project (what it does, why it exists)


## ⚙️ Prod stack technologies
Express, Prisma, dotenv


## ⚙️ Dev stack technologies
@types/dotenv, @types/express, nodemon, typescript


## 📜 Scripts available
- `test`
- `dev`
- `start`


## Env variable
- `PORT=4000`
- `POSTGRES_USER=postgres`
- `POSTGRES_PASSWORD=postgres`
- `POSTGRES_DB=postgres`
- `DATABASE_URL="postgres://postgres:postgres@localhost:5432/postgres?schema=public"`


## 🌐 Deployment & Infrastructure
Docker Compose, Environment Variables


## Clone repository
```bash
git clone https://github.com/lazalajochy/backend-reservation.git
```


## 📂 Project structure
    📄 README.md
    📄 combined.log
    📄 docker-compose.yml
    📄 error.log
    📄 package-lock.json
    📄 package.json
    📂 prisma
      📂 migrations
        📂 20250827005757_init
          📄 migration.sql
        📄 migration_lock.toml
      📄 schema.prisma
    📂 src
      📄 app.ts
      📂 config
        📄 env.ts
      📂 database
        📄 prisma.ts
      📂 middlewares
        📄 globalMiddlewares.ts
      📂 modules
        📂 auth
          📄 auth.controller.ts
        📂 user
          📄 user.controller.ts
          📄 user.service.ts
          📄 user.type.ts
      📂 route
        📄 index.ts
        📄 user.ts
      📂 utils
        📄 logger.ts
    📄 tsconfig.json


