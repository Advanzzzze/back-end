CREATE TABLE `addresses` (
	`id` varchar(36) NOT NULL,
	`zipCode` char(8) NOT NULL,
	`city` varchar(100) NOT NULL,
	`number` varchar(100) NOT NULL,
	`disctrict` varchar(100) NOT NULL,
	`publicPlace` varchar(100),
	`complement` varchar(200),
	`state` enum('AC','AL','AP','AM','BA','CE','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO','DF') NOT NULL,
	`createdAt` date NOT NULL,
	CONSTRAINT `addresses_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `descriptions` (
	`id` varchar(36) NOT NULL,
	`description` varchar(300),
	`squareOfMeters` double NOT NULL,
	`numberOfBathroom` int unsigned NOT NULL DEFAULT 1,
	`numberOfBadroom` int unsigned NOT NULL DEFAULT 1,
	`numberOfSuites` int unsigned NOT NULL DEFAULT 0,
	`numberOfCars` int unsigned NOT NULL DEFAULT 1,
	`price` decimal(10,10),
	`createdAt` date NOT NULL,
	CONSTRAINT `descriptions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `houses` (
	`id` varchar(36) NOT NULL,
	`name` varchar(100) NOT NULL,
	`stage` int unsigned NOT NULL DEFAULT 1,
	`type` int unsigned NOT NULL DEFAULT 1,
	`addressId` varchar(36),
	`descriptionId` varchar(36),
	`createdAt` date NOT NULL,
	CONSTRAINT `houses_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `city_idx` ON `addresses` (`city`);--> statement-breakpoint
CREATE INDEX `district_idx` ON `addresses` (`disctrict`);--> statement-breakpoint
CREATE INDEX `square_of_meters_idx` ON `descriptions` (`squareOfMeters`);--> statement-breakpoint
CREATE INDEX `number_of_bathroom_idx` ON `descriptions` (`numberOfBathroom`);--> statement-breakpoint
CREATE INDEX `number_of_badroom_idx` ON `descriptions` (`numberOfBadroom`);--> statement-breakpoint
CREATE INDEX `number_of_suites` ON `descriptions` (`numberOfSuites`);--> statement-breakpoint
CREATE INDEX `number_of_cars_idx` ON `descriptions` (`numberOfCars`);--> statement-breakpoint
CREATE INDEX `price_idx` ON `descriptions` (`price`);--> statement-breakpoint
CREATE INDEX `name_idx` ON `houses` (`name`);--> statement-breakpoint
CREATE INDEX `stage_idx` ON `houses` (`stage`);--> statement-breakpoint
CREATE INDEX `type_idx` ON `houses` (`type`);--> statement-breakpoint
ALTER TABLE `houses` ADD CONSTRAINT `houses_addressId_addresses_id_fk` FOREIGN KEY (`addressId`) REFERENCES `addresses`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `houses` ADD CONSTRAINT `houses_descriptionId_descriptions_id_fk` FOREIGN KEY (`descriptionId`) REFERENCES `descriptions`(`id`) ON DELETE no action ON UPDATE no action;