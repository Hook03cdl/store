-- CreateTable
CREATE TABLE `Products` (
    `pid` VARCHAR(191) NOT NULL,
    `sku` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `stock` INTEGER NOT NULL,
    `category` ENUM('Pelele', 'Vestido', 'Camisa', 'Short', 'Cubrepañal', 'Peto', 'Ranita', 'Complemento') NOT NULL,
    `classification` ENUM('niño', 'niña') NOT NULL,
    `rating` DOUBLE NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `discount` ENUM('50%', '40%', '30%') NOT NULL,
    `tags` VARCHAR(191) NOT NULL,
    `age_range` VARCHAR(50) NOT NULL,
    `material` VARCHAR(255) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Products_sku_key`(`sku`),
    PRIMARY KEY (`pid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reviews` (
    `id` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(255) NOT NULL,
    `rating` DOUBLE NOT NULL,
    `comment` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reviews` ADD CONSTRAINT `Reviews_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`pid`) ON DELETE RESTRICT ON UPDATE CASCADE;
