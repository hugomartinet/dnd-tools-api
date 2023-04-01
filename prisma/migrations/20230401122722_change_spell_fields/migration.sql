/*
  Warnings:

  - The `description` column on the `Spell` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "description",
ADD COLUMN     "description" JSONB[];
