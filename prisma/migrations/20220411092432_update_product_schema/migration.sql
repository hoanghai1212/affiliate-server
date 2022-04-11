-- AlterTable
ALTER TABLE `Product` MODIFY `description` VARCHAR(191) NULL,
    MODIFY `image` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `_7568383a_6eb2_54a2_8081_f06f927d98e2_20220410132725_del` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `oldMinPrice` INTEGER NULL,
    `oldMaxPrice` INTEGER NULL,
    `currentMinPrice` INTEGER NOT NULL,
    `currentMaxPrice` INTEGER NULL,
    `discountRate` INTEGER NULL,
    `image` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `affiliateLink` VARCHAR(191) NOT NULL,
    `productLink` VARCHAR(191) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_vt_HOLD_3201305d363459a999c9e50a989eac96_20220411074546` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Test_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
