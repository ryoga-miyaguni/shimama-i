/*
  Warnings:

  - You are about to drop the column `userId` on the `CollectedStamp` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profileId,shopId]` on the table `CollectedStamp` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profileId` to the `CollectedStamp` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."CollectedStamp" DROP CONSTRAINT "CollectedStamp_userId_fkey";

-- DropIndex
DROP INDEX "public"."CollectedStamp_userId_shopId_key";

-- AlterTable
ALTER TABLE "CollectedStamp" DROP COLUMN "userId",
ADD COLUMN     "profileId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CollectedStamp_profileId_shopId_key" ON "CollectedStamp"("profileId", "shopId");

-- AddForeignKey
ALTER TABLE "CollectedStamp" ADD CONSTRAINT "CollectedStamp_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
