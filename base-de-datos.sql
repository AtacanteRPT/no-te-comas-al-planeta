-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-05-2017 a las 03:36:20
-- Versión del servidor: 5.6.26
-- Versión de PHP: 5.5.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `no-comas-el-planeta-development`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aguas`
--

CREATE TABLE IF NOT EXISTS `aguas` (
  `id` int(11) NOT NULL,
  `volumen` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alimentos`
--

CREATE TABLE IF NOT EXISTS `alimentos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alternativas`
--

CREATE TABLE IF NOT EXISTS `alternativas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `ingredientes` varchar(255) DEFAULT NULL,
  `preparacion` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `usuarioId` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alternativas`
--

INSERT INTO `alternativas` (`id`, `nombre`, `ingredientes`, `preparacion`, `img`, `createdAt`, `updatedAt`, `usuarioId`) VALUES
(4, 'Asado de choclo', '1.\r\n2.\r\n3.', 'uno\r\ndos\r\ntres', NULL, '2017-05-02 07:35:57', '2017-05-02 07:35:57', 5),
(5, 'Salchicha de Postre', 'ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg', 'tggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg', NULL, '2017-05-02 09:49:40', '2017-05-02 09:49:40', 5),
(6, 'Torta de Soja', 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', '*************************************************************************************************************************', NULL, '2017-05-02 09:57:49', '2017-05-02 09:57:49', 6),
(7, 'Pescado de Mani', 'jhgjdfksghljfdsghjdfs;\r\nfdjgkdfgj;dfskgds\r\nhdkjgdlsahfkjdsa', 'dsjklfhdskjafhdsakjfhsa\r\nhdsakjfhdsakjfhdlsaf\r\nfhdsjafhdaskjfhkdsjafhkdsa\r\nhdskjfadsfhdkjsahfkasdj', NULL, '2017-05-02 12:31:25', '2017-05-02 12:31:25', 7),
(8, '', '4 tazas de floretes (cogollitos) de coliflor fresca\r\n3/4 de taza de chícharos (arvejas, guisantes) a la parmesana Alexia® Parmesan Peas\r\n2 huevos duros, pelados y picados\r\n1/3 de taza de apio finamente picado\r\n1/2 taza de yogur estilo griego al 2% sabor n', 'Ponga la coliflor en un tazón grande, apto para microondas; tápelo. Caliéntela a potencia ALTA por 3 minutos. Añada los chícharos; tape y caliente durante otros 2 minutos o hasta que la coliflor esté blanda y los chícharos, descongelados. Deje enfriar lig', NULL, '2017-05-02 13:15:29', '2017-05-02 13:15:29', 5),
(9, 'salchicha de postre', 'fgfdgh\r\ngfhgfhjgf\r\nfgjhgfj', 'dvdfxb\r\ncfbcvbncvbn\r\ncn\r\ncvn\r\nvb\r\nn', NULL, '2017-05-02 13:35:31', '2017-05-02 13:35:31', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animals`
--

CREATE TABLE IF NOT EXISTS `animals` (
  `id` int(11) NOT NULL,
  `tiempo_de_vida` varchar(255) DEFAULT NULL,
  `alimentacion` varchar(255) DEFAULT NULL,
  `tierra_consumida` varchar(255) DEFAULT NULL,
  `agua_consumida` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `metado_volumen` varchar(255) DEFAULT NULL,
  `cantidad_quimicos` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articles`
--

CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carnes`
--

CREATE TABLE IF NOT EXISTS `carnes` (
  `id` int(11) NOT NULL,
  `peso` double DEFAULT NULL,
  `alimentacion` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'ricarso_usuario_1', 'ricarso_usuario_1@gmail.com', '$2a$10$3QXflj74AvTSle/yeV37xOc/daWDNMqTtm.I2TnfN4gjHVZR/Dafa', '2017-04-26 20:40:31', '2017-04-26 20:40:31'),
(2, 'ricarso_usuario_2', 'ricarso_usuario_2@gmail.com', '$2a$10$RE1gdjrQEZq84aCJ2grnTO1b36DHm20GHe3pneYRnkL69HVxN3fVm', '2017-04-26 21:35:08', '2017-04-26 21:35:08'),
(3, 'ricarso_usuario_3', 'ricarso_usuario_3@gmail.com', '$2a$10$2VcG1ZH9lMoux6BsxBtX..VeCqK5xHb43h/5NTNwrHcb3YzCgld2.', '2017-04-26 21:35:19', '2017-04-26 21:35:19'),
(4, 'ricarso_usuario_6', 'ricarso_usuario_6@gmail.com', '$2a$10$1L94lTWtcQcoXMWhzYCO7etApi81sJCcGkScr2QwNB9vzUtgt32wi', '2017-04-27 04:07:56', '2017-04-27 04:07:56'),
(5, 'oso', 'oso@oso.com', '$2a$10$0eYEfjfFAQoqtj0vK7loru.ClZpU3zmDqR1tTkALzG0LDFHesAPJW', '2017-05-02 04:48:42', '2017-05-02 04:48:42'),
(6, 'umsa', 'oso@umsa.com', '$2a$10$NLuu0SyD9E4iLPRqzE2ULuu4ORRXt/Vw9H9Tf2UH6bx.Wkvi52nri', '2017-05-02 09:57:06', '2017-05-02 09:57:06'),
(7, 'CHULO', 'chulo@umsa.bo', '$2a$10$2X37mO3PiLCeGBSNURxjP.xjIaUauhNlpsPzaQc5ANJJFfPHY7w9O', '2017-05-02 12:29:18', '2017-05-02 12:29:18'),
(8, 'alejandro', 'ale@umsa.bo', '$2a$10$Mv3QYXYCZHZw9QmtiIDnreNCqfe4UpMcWgxbUWFySvX5B3iOOv0/6', '2017-05-02 13:34:38', '2017-05-02 13:34:38');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aguas`
--
ALTER TABLE `aguas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `alimentos`
--
ALTER TABLE `alimentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `alternativas`
--
ALTER TABLE `alternativas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarioId` (`usuarioId`);

--
-- Indices de la tabla `animals`
--
ALTER TABLE `animals`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `carnes`
--
ALTER TABLE `carnes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aguas`
--
ALTER TABLE `aguas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `alimentos`
--
ALTER TABLE `alimentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `alternativas`
--
ALTER TABLE `alternativas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `animals`
--
ALTER TABLE `animals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `carnes`
--
ALTER TABLE `carnes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alternativas`
--
ALTER TABLE `alternativas`
  ADD CONSTRAINT `alternativas_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
