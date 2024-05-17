-- CreateTable
CREATE TABLE `pessoa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `idade` INTEGER NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `rg` VARCHAR(191) NOT NULL,
    `data_nascimento` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `logradouro` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `numero` INTEGER NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL,

    UNIQUE INDEX `pessoa_id_key`(`id`),
    UNIQUE INDEX `pessoa_cpf_key`(`cpf`),
    UNIQUE INDEX `pessoa_rg_key`(`rg`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pessoaId` INTEGER NOT NULL,
    `uuid` VARCHAR(191) NOT NULL,
    `nomeDeUsuario` VARCHAR(191) NOT NULL,
    `hashSenha` VARCHAR(191) NOT NULL,
    `nomeDeDisplay` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `usuario_id_key`(`id`),
    UNIQUE INDEX `usuario_pessoaId_key`(`pessoaId`),
    UNIQUE INDEX `usuario_uuid_key`(`uuid`),
    UNIQUE INDEX `usuario_nomeDeUsuario_key`(`nomeDeUsuario`),
    UNIQUE INDEX `usuario_hashSenha_key`(`hashSenha`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usuario` ADD CONSTRAINT `usuario_pessoaId_fkey` FOREIGN KEY (`pessoaId`) REFERENCES `pessoa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
