/*
  Warnings:

  - You are about to drop the column `massage` on the `contact` table. All the data in the column will be lost.
  - Added the required column `message` to the `contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contact" DROP COLUMN "massage",
ADD COLUMN     "message" TEXT NOT NULL;
