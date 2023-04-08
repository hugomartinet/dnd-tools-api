-- CreateTable
CREATE TABLE "Background" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "proficiencies" TEXT[],

    CONSTRAINT "Background_pkey" PRIMARY KEY ("id")
);
