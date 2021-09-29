CREATE TABLE `rol` (
  `id` int,
  `nombre` varchar(255)
);

CREATE TABLE `usuario` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255),
  `aPaterno` varchar(255),
  `aMaterno` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `avatar` varchar(255),
  `rol_id` int
);

CREATE TABLE `categoria` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255)
);

CREATE TABLE `orden_compra_producto` (
  `id_orden_compra` int PRIMARY KEY NOT NULL,
  `orden_id` int,
  `id_producto` int,
  `cantidad` int DEFAULT 1
);

CREATE TABLE `orden_compra` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `fecha` date
);

CREATE TABLE `producto` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255),
  `categoria_id` int,
  `price` double,
  `estatus` ENUM ('agotado', 'disponible', 'pocas_unidades'),
  `descripcion` varchar(255)
);

ALTER TABLE `usuario` ADD FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`);

ALTER TABLE `producto` ADD FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`);

ALTER TABLE `orden_compra` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`);

ALTER TABLE `orden_compra_producto` ADD FOREIGN KEY (`orden_id`) REFERENCES `orden_compra` (`id`);

ALTER TABLE `orden_compra_producto` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

CREATE UNIQUE INDEX `producto_index_0` ON `producto` (`id`);
