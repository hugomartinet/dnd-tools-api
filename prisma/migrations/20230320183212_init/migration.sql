-- CreateEnum
CREATE TYPE "Size" AS ENUM ('TINY', 'SMALL', 'MEDIUM', 'LARGE', 'HUGE', 'GARGANTUAN');

-- CreateTable
CREATE TABLE "Race" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "size" "Size" NOT NULL,
    "speed" DOUBLE PRECISION NOT NULL,
    "skills" JSONB NOT NULL,
    "traits" TEXT[],

    CONSTRAINT "Race_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Race_id_key" ON "Race"("id");
