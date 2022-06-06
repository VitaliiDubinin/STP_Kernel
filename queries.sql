CREATE TABLE `farmDB`.`product2` 
(
    `id` INT NOT NULL AUTO_INCREMENT ,
    `product_name` VARCHAR(100) NOT NULL ,
    `price` FLOAT NOT NULL , `user_id` INT NOT NULL ,
    `description` TEXT NOT NULL ,
    `image` VARCHAR(255) NULL DEFAULT NULL , 
    `quantity` INT NOT NULL , 
    `unit` VARCHAR(50) NOT NULL , 
    PRIMARY KEY (`id`)
    
) ENGINE = InnoDB;

INSERT INTO `product2` 
(`id`, `product_name`, `price`, `user_id`, `description`, `image`, `quantity`, `unit`) 
VALUES 
(NULL, '', , '', '', NULL, , '');

/*nahom products*/
INSERT INTO `product2` (`id`, `product_name`, `price`, `user_id`, `description`, `image`, `quantity`, `unit`) 
VALUES (NULL, 'rice', 1.55, 1, 'this product was seeded and farmed in the local farms of helsinki, the minimun tu buy is 1kg', NULL, 50, 'kg');


INSERT INTO `product2` 
(`id`, `product_name`, `price`, `user_id`, `description`, `image`, `quantity`, `unit`) 
VALUES 
(NULL, 'potatoes', 2.25, 1, 'try my potatoes and you will fall inlove for first time with a potato', NULL, 20, 'kg');

INSERT INTO `product2` 
(`id`, `product_name`, `price`, `user_id`, `description`, `image`, `quantity`, `unit`) 
VALUES 
(NULL, 'zuccini', 0.99, 1, 'combine this zuccini with vaseline, condom and a bottle of wine then find out what climax is', NULL, 10, 'unit');

/* eyoel */
INSERT INTO `product2` 
(`id`, `product_name`, `price`, `user_id`, `description`, `image`, `quantity`, `unit`) 
VALUES 
(NULL, 'punkin', 100, 2, 'just dont be a coward an buy my punkin', NULL, 1, 'unit');

INSERT INTO `product2` 
(`id`, `product_name`, `price`, `user_id`, `description`, `image`, `quantity`, `unit`) 
VALUES 
(NULL, 'carrots', 5.99, 2, 'Have you ever seen a bunny with glasses?! if you are not a doctor or a biologist dont comment', NULL, 200, 'bunch');

INSERT INTO `product2` 
(`id`, `product_name`, `price`, `user_id`, `description`, `image`, `quantity`, `unit`) 
VALUES 
(NULL, 'tomatoes', 0.65, 2, 'a salad witout tomatoes is like a a battle cruise armada ship without serial number', NULL, 50, 'pound');

INSERT INTO `product2` 
(`id`, `product_name`, `price`, `user_id`, `description`, `image`, `quantity`, `unit`) 
VALUES 
(NULL, 'eggplant', 2.50, 2, 'make the best jokes about eggplants with this beauties of vegetables', NULL, 20, 'unit');

INSERT INTO `product2` 
(`id`, `product_name`, `price`, `user_id`, `description`, `image`, `quantity`, `unit`) 
VALUES 
(NULL, 'magic beans', 99.99, '2', 'grow a magic tree in your back yard so you can slay a gigant', NULL, 3, 'bean');



/* victor */
INSERT INTO `product2` (`id`, `product_name`, `price`, `user_id`, `description`, `image`, `quantity`, `unit`) 
VALUES (NULL, 'bananas', '0.50', '4', 'bananas from the jungle ', NULL, '200', 'kg');