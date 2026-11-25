-- CreateTable
CREATE TABLE "Film" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL,

    CONSTRAINT "Film_pkey" PRIMARY KEY ("id")
);
