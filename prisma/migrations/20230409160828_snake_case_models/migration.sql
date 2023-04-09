/*
  Warnings:

  - You are about to drop the `Background` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Class` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClassSpells` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Race` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Spell` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClassSpells" DROP CONSTRAINT "ClassSpells_classId_fkey";

-- DropForeignKey
ALTER TABLE "ClassSpells" DROP CONSTRAINT "ClassSpells_spellId_fkey";

-- DropTable
DROP TABLE "Background";

-- DropTable
DROP TABLE "Class";

-- DropTable
DROP TABLE "ClassSpells";

-- DropTable
DROP TABLE "Race";

-- DropTable
DROP TABLE "Spell";

-- CreateTable
CREATE TABLE "race" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "speed" DOUBLE PRECISION NOT NULL,
    "modifiers" JSONB NOT NULL,
    "traits" TEXT[],

    CONSTRAINT "race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hit_dice" INTEGER NOT NULL,
    "proficiencies" TEXT[],
    "skills" TEXT[],
    "spellcasting_ability" TEXT,

    CONSTRAINT "class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "background" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "proficiencies" TEXT[],

    CONSTRAINT "background_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spell" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "school" TEXT NOT NULL,
    "casting_time" TEXT NOT NULL,
    "range" TEXT NOT NULL,
    "components" TEXT[],
    "duration" TEXT NOT NULL,
    "description" JSONB[],

    CONSTRAINT "spell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class_spells" (
    "class_id" TEXT NOT NULL,
    "spell_id" TEXT NOT NULL,

    CONSTRAINT "class_spells_pkey" PRIMARY KEY ("class_id","spell_id")
);

-- AddForeignKey
ALTER TABLE "class_spells" ADD CONSTRAINT "class_spells_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_spells" ADD CONSTRAINT "class_spells_spell_id_fkey" FOREIGN KEY ("spell_id") REFERENCES "spell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
