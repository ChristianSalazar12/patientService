-- CreateTable
CREATE TABLE "Pacientes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "entidad_salud" TEXT NOT NULL,

    CONSTRAINT "Pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pacientes_document_key" ON "Pacientes"("document");
