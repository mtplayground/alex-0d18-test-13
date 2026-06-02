# Prisma workflow

The backend uses Prisma with PostgreSQL. The connection string is read from
`DATABASE_URL`; never hardcode database credentials.

Common commands from the repository root:

```bash
npm run db:generate -w backend
npm run db:migrate -w backend
npm run db:deploy -w backend
```

Use `db:migrate` while developing schema changes and `db:deploy` for applying
checked-in migrations in deployed environments.
