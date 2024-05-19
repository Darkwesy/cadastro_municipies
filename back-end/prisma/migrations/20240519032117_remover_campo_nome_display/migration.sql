/*
  Warnings:

  - You are about to drop the column `nomeDeDisplay` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `nomeDeUsuario` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `pessoaId` on the `usuario` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nome_de_usuario]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pessoa_id]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nome_de_usuario` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pessoa_id` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `usuario` DROP FOREIGN KEY `usuario_pessoaId_fkey`;

-- DropIndex
DROP INDEX `usuario_nomeDeUsuario_key` ON `usuario`;

-- AlterTable
ALTER TABLE `pessoa` MODIFY `status` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `nomeDeDisplay`,
    DROP COLUMN `nomeDeUsuario`,
    DROP COLUMN `pessoaId`,
    ADD COLUMN `nome_de_usuario` VARCHAR(191) NOT NULL,
    ADD COLUMN `pessoa_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `usuario_nome_de_usuario_key` ON `usuario`(`nome_de_usuario`);

-- CreateIndex
CREATE UNIQUE INDEX `usuario_pessoa_id_key` ON `usuario`(`pessoa_id`);

-- AddForeignKey
ALTER TABLE `usuario` ADD CONSTRAINT `usuario_pessoa_id_fkey` FOREIGN KEY (`pessoa_id`) REFERENCES `pessoa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
