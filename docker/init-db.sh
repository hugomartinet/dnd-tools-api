set -e
docker run --name dnd-tools-db -p 5434:5432 -e POSTGRES_PASSWORD=docker -d postgres
npx prisma migrate dev
