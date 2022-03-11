## This is the query
`
CREATE DATABASE `blog-app`;

CREATE TABLE `blog-app`.`posts`(
`id` INT NOT NULL AUTO_INCREMENT,
`title` VARCHAR(100) NOT NULL,
`body` TEXT NOT NULL,
`created_at` DATE NOT NULL,
PRIMARY KEY(`id`),
UNIQUE INDEX `id_UNQUE`(`id` ASC)
VISIBLE
);

`