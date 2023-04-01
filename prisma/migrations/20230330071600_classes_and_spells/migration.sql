/*
  Warnings:

  - You are about to drop the column `features` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the `Background` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `hit_dice` on the `Class` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `size` on the `Race` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `modifiers` on the `Race` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "features",
ADD COLUMN     "spellcasting_ability" TEXT,
DROP COLUMN "hit_dice",
ADD COLUMN     "hit_dice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "size",
ADD COLUMN     "size" TEXT NOT NULL,
DROP COLUMN "modifiers",
ADD COLUMN     "modifiers" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Spell" ALTER COLUMN "range" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Background";

-- DropEnum
DROP TYPE "Dice";

-- DropEnum
DROP TYPE "Size";
