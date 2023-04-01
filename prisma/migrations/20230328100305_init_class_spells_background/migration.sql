/*
  Warnings:

  - You are about to drop the column `main_race` on the `Race` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Dice" AS ENUM ('D4', 'D6', 'D8', 'D10', 'D12', 'D20', 'D100');

-- DropIndex
DROP INDEX "Race_id_key";

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "main_race";

-- CreateTable
CREATE TABLE "Class" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hit_dice" "Dice" NOT NULL,
    "proficiencies" TEXT[],
    "skills" TEXT[],
    "features" TEXT[],

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Background" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "skills" TEXT[],
    "proficiencies" TEXT[],
    "features" TEXT[],

    CONSTRAINT "Background_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spell" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "school" TEXT NOT NULL,
    "casting_time" TEXT NOT NULL,
    "range" INTEGER NOT NULL,
    "components" TEXT[],
    "duration" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassSpells" (
    "classId" TEXT NOT NULL,
    "spellId" TEXT NOT NULL,

    CONSTRAINT "ClassSpells_pkey" PRIMARY KEY ("classId","spellId")
);

-- AddForeignKey
ALTER TABLE "ClassSpells" ADD CONSTRAINT "ClassSpells_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassSpells" ADD CONSTRAINT "ClassSpells_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
