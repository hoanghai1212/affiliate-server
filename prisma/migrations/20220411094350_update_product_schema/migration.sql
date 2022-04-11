/*
  Warnings:

  - You are about to alter the column `discountRate` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `Product` MODIFY `discountRate` DECIMAL(65, 30) NULL;
