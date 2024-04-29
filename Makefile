api: db-create run-server

migrations: migrations-generate db-create migrations-execute db-destroy

migrations-generate:
	@npx drizzle-kit generate:mysql

migrations-execute:
	@npx tsx ./src/db/migrate.ts

db-create:
	@docker compose up -d

db-destroy:
	@docker compose down

run-server:
	@npx tsx watch src/server.ts

studio:
	@npx drizzle-kit studio
