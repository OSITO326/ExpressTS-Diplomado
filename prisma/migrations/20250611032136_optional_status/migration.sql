-- AlterTable
ALTER TABLE `users` MODIFY `status` ENUM('active', 'inactive') NULL DEFAULT 'active';
