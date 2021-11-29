-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 21, 2021 at 09:39 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oneventos`
--

-- --------------------------------------------------------

--
-- Table structure for table `Usuario`
--

CREATE TABLE `Usuarios` (
  `ID_Usuario` int(15) NOT NULL,
  `NombreUsuario` varchar(32) COLLATE utf8_spanish_ci NOT NULL,
  `Email` varchar(32) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Password` varchar(64) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `Usuarios` (`ID_Usuario`, `NombreUsuario`, `Email`, `Password`) VALUES
(1, 'Admin', 'admin@oneventos.com', 'adminlogin');

--
-- Table structure for table `Empleados`
--

CREATE TABLE `Empleados` (
  `ID_Empleado` int(15) NOT NULL,
  `ID_Menu` int(20) DEFAULT NULL,
  `Nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `Apellido` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Email` varchar(35) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Telefono` varchar(16) DEFAULT NULL,
  `Comentario` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `Empleados`
--

INSERT INTO `Empleados` (`ID_Empleado`, `ID_Menu`, `Nombre`, `Apellido`, `Email`, `Telefono`, `Comentario`) VALUES
(1, 1, 'Fulanito 1', 'Detal 1', 'email 1', '44441541', 'Es una persona'),
(2, 1, 'Fulanito 2', 'Detal 2', 'email 2', '44441542', 'Es una persona'),
(3, 1, 'Fulanito 3', 'Detal 3', 'email 3', '44441543', 'Es una persona'),
(4, 1, 'Fulanito 4', 'Detal 4', 'email 4', '44441544', 'Es una persona'),
(5, 1, 'Fulanito 5', 'Detal 5', 'email 5', '44441545', 'Es una persona'),
(6, 1, 'Fulanito 6', 'Detal 6', 'email 6', '44441546', 'Es una persona'),
(7, 1, 'Fulanito 7', 'Detal 7', 'email 7', '44441547', 'Es una persona'),
(8, 1, 'Fulanito 8', 'Detal 8', 'email 8', '44441548', 'Es una persona'),
(9, 1, 'Fulanito 9', 'Detal 9', 'email 9', '44441549', 'Es una persona'),
(10, 1, 'Fulanito 10', 'Detal 10', 'email 10', '44441550', 'Es una persona'),
(11, 1, 'Fulanito 11', 'Detal 11', 'email 11', '44441551', 'Es una persona'),
(12, 1, 'Fulanito 12', 'Detal 12', 'email 12', '44441552', 'Es una persona'),
(13, 1, 'Fulanito 13', 'Detal 13', 'email 13', '44441553', 'Es una persona'),
(14, 1, 'Fulanito 14', 'Detal 14', 'email 14', '44441554', 'Es una persona'),
(15, 1, 'Fulanito 15', 'Detal 15', 'email 15', '44441555', 'Es una persona'),
(16, 1, 'Fulanito 16', 'Detal 16', 'email 16', '44441556', 'Es una persona'),
(17, 1, 'Fulanito 17', 'Detal 17', 'email 17', '44441557', 'Es una persona'),
(18, 1, 'Fulanito 18', 'Detal 18', 'email 18', '44441558', 'Es una persona'),
(19, 1, 'Fulanito 19', 'Detal 19', 'email 19', '44441559', 'Es una persona'),
(20, 1, 'Fulanito 20', 'Detal 20', 'email 20', '44441560', 'Es una persona'),
(21, 1, 'Fulanito 21', 'Detal 21', 'email 21', '44441561', 'Es una persona'),
(22, 1, 'Fulanito 22', 'Detal 22', 'email 22', '44441562', 'Es una persona'),
(23, 1, 'Fulanito 23', 'Detal 23', 'email 23', '44441563', 'Es una persona'),
(24, 1, 'Fulanito 24', 'Detal 24', 'email 24', '44441564', 'Es una persona'),
(25, 1, 'Fulanito 25', 'Detal 25', 'email 25', '44441565', 'Es una persona'),
(26, 1, 'Fulanito 26', 'Detal 26', 'email 26', '44441566', 'Es una persona'),
(27, 1, 'Fulanito 27', 'Detal 27', 'email 27', '44441567', 'Es una persona'),
(28, 1, 'Fulanito 28', 'Detal 28', 'email 28', '44441568', 'Es una persona'),
(29, 1, 'Fulanito 29', 'Detal 29', 'email 29', '44441569', 'Es una persona'),
(30, 1, 'Fulanito 30', 'Detal 30', 'email 30', '44441570', 'Es una persona'),
(31, 1, 'Fulanito 31', 'Detal 31', 'email 31', '44441571', 'Es una persona'),
(32, 1, 'Fulanito 32', 'Detal 32', 'email 32', '44441572', 'Es una persona'),
(33, 1, 'Fulanito 33', 'Detal 33', 'email 33', '44441573', 'Es una persona'),
(34, 1, 'Fulanito 34', 'Detal 34', 'email 34', '44441574', 'Es una persona'),
(35, 1, 'Fulanito 35', 'Detal 35', 'email 35', '44441575', 'Es una persona'),
(36, 1, 'Fulanito 36', 'Detal 36', 'email 36', '44441576', 'Es una persona'),
(37, 1, 'Fulanito 37', 'Detal 37', 'email 37', '44441577', 'Es una persona'),
(38, 1, 'Fulanito 38', 'Detal 38', 'email 38', '44441578', 'Es una persona'),
(39, 1, 'Fulanito 39', 'Detal 39', 'email 39', '44441579', 'Es una persona'),
(40, 1, 'Fulanito 40', 'Detal 40', 'email 40', '44441580', 'Es una persona'),
(41, 1, 'Fulanito 41', 'Detal 41', 'email 41', '44441581', 'Es una persona'),
(42, 1, 'Fulanito 42', 'Detal 42', 'email 42', '44441582', 'Es una persona'),
(43, 1, 'Fulanito 43', 'Detal 43', 'email 43', '44441583', 'Es una persona'),
(44, 1, 'Fulanito 44', 'Detal 44', 'email 44', '44441584', 'Es una persona'),
(45, 1, 'Fulanito 45', 'Detal 45', 'email 45', '44441585', 'Es una persona'),
(46, 1, 'Fulanito 46', 'Detal 46', 'email 46', '44441586', 'Es una persona'),
(47, 1, 'Fulanito 47', 'Detal 47', 'email 47', '44441587', 'Es una persona'),
(48, 1, 'Fulanito 48', 'Detal 48', 'email 48', '44441588', 'Es una persona'),
(49, 1, 'Fulanito 49', 'Detal 49', 'email 49', '44441589', 'Es una persona'),
(50, 1, 'Fulanito 50', 'Detal 50', 'email 50', '44441590', 'Es una persona'),
(51, 1, 'Fulanito 51', 'Detal 51', 'email 51', '44441591', 'Es una persona'),
(52, 1, 'Fulanito 52', 'Detal 52', 'email 52', '44441592', 'Es una persona'),
(53, 1, 'Fulanito 53', 'Detal 53', 'email 53', '44441593', 'Es una persona'),
(54, 1, 'Fulanito 54', 'Detal 54', 'email 54', '44441594', 'Es una persona'),
(55, 1, 'Fulanito 55', 'Detal 55', 'email 55', '44441595', 'Es una persona'),
(56, 1, 'Fulanito 56', 'Detal 56', 'email 56', '44441596', 'Es una persona'),
(57, 1, 'Fulanito 57', 'Detal 57', 'email 57', '44441597', 'Es una persona'),
(58, 1, 'Fulanito 58', 'Detal 58', 'email 58', '44441598', 'Es una persona'),
(59, 1, 'Fulanito 59', 'Detal 59', 'email 59', '44441599', 'Es una persona'),
(60, 1, 'Fulanito 60', 'Detal 60', 'email 60', '44441600', 'Es una persona'),
(61, 1, 'Fulanito 61', 'Detal 61', 'email 61', '44441601', 'Es una persona'),
(62, 1, 'Fulanito 62', 'Detal 62', 'email 62', '44441602', 'Es una persona'),
(63, 1, 'Fulanito 63', 'Detal 63', 'email 63', '44441603', 'Es una persona'),
(64, 1, 'Fulanito 64', 'Detal 64', 'email 64', '44441604', 'Es una persona'),
(65, 1, 'Fulanito 65', 'Detal 65', 'email 65', '44441605', 'Es una persona'),
(66, 1, 'Fulanito 66', 'Detal 66', 'email 66', '44441606', 'Es una persona'),
(67, 1, 'Fulanito 67', 'Detal 67', 'email 67', '44441607', 'Es una persona'),
(68, 1, 'Fulanito 68', 'Detal 68', 'email 68', '44441608', 'Es una persona'),
(69, 1, 'Fulanito 69', 'Detal 69', 'email 69', '44441609', 'Es una persona'),
(70, 1, 'Fulanito 70', 'Detal 70', 'email 70', '44441610', 'Es una persona'),
(71, 1, 'Fulanito 71', 'Detal 71', 'email 71', '44441611', 'Es una persona'),
(72, 1, 'Fulanito 72', 'Detal 72', 'email 72', '44441612', 'Es una persona'),
(73, 1, 'Fulanito 73', 'Detal 73', 'email 73', '44441613', 'Es una persona'),
(74, 1, 'Fulanito 74', 'Detal 74', 'email 74', '44441614', 'Es una persona'),
(75, 1, 'Fulanito 75', 'Detal 75', 'email 75', '44441615', 'Es una persona'),
(76, 1, 'Fulanito 76', 'Detal 76', 'email 76', '44441616', 'Es una persona'),
(77, 1, 'Fulanito 77', 'Detal 77', 'email 77', '44441617', 'Es una persona'),
(78, 1, 'Fulanito 78', 'Detal 78', 'email 78', '44441618', 'Es una persona'),
(79, 1, 'Fulanito 79', 'Detal 79', 'email 79', '44441619', 'Es una persona'),
(80, 1, 'Fulanito 80', 'Detal 80', 'email 80', '44441620', 'Es una persona'),
(81, 1, 'Fulanito 81', 'Detal 81', 'email 81', '44441621', 'Es una persona'),
(82, 1, 'Fulanito 82', 'Detal 82', 'email 82', '44441622', 'Es una persona'),
(83, 1, 'Fulanito 83', 'Detal 83', 'email 83', '44441623', 'Es una persona'),
(84, 1, 'Fulanito 84', 'Detal 84', 'email 84', '44441624', 'Es una persona'),
(85, 1, 'Fulanito 85', 'Detal 85', 'email 85', '44441625', 'Es una persona'),
(86, 1, 'Fulanito 86', 'Detal 86', 'email 86', '44441626', 'Es una persona'),
(87, 1, 'Fulanito 87', 'Detal 87', 'email 87', '44441627', 'Es una persona'),
(88, 1, 'Fulanito 88', 'Detal 88', 'email 88', '44441628', 'Es una persona'),
(89, 1, 'Fulanito 89', 'Detal 89', 'email 89', '44441629', 'Es una persona'),
(90, 1, 'Fulanito 90', 'Detal 90', 'email 90', '44441630', 'Es una persona'),
(91, 1, 'Fulanito 91', 'Detal 91', 'email 91', '44441631', 'Es una persona'),
(92, 1, 'Fulanito 92', 'Detal 92', 'email 92', '44441632', 'Es una persona'),
(93, 1, 'Fulanito 93', 'Detal 93', 'email 93', '44441633', 'Es una persona'),
(94, 1, 'Fulanito 94', 'Detal 94', 'email 94', '44441634', 'Es una persona'),
(95, 1, 'Fulanito 95', 'Detal 95', 'email 95', '44441635', 'Es una persona'),
(96, 1, 'Fulanito 96', 'Detal 96', 'email 96', '44441636', 'Es una persona'),
(97, 1, 'Fulanito 97', 'Detal 97', 'email 97', '44441637', 'Es una persona'),
(98, 1, 'Fulanito 98', 'Detal 98', 'email 98', '44441638', 'Es una persona'),
(99, 1, 'Fulanito 99', 'Detal 99', 'email 99', '44441639', 'Es una persona'),
(100, 1, 'Fulanito 100', 'Detal 100', 'email 100', '44441640', 'Es una persona');

-- --------------------------------------------------------

--
-- Table structure for table `Empleados-SubEventos`
--

CREATE TABLE `Empleados-SubEventos` (
  `ID_Subevento` int(11) NOT NULL,
  `ID_Empleado` int(11) NOT NULL,
  `Asistencia` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `Empleados-SubEventos`
--

INSERT INTO `Empleados-SubEventos` (`ID_Empleado`, `ID_Subevento`, `Asistencia`) VALUES
(1, 1, 1),
(2, 1, 1),
(3, 1, 1),
(4, 1, 1),
(5, 1, 1),
(6, 1, 1),
(7, 1, 1),
(8, 1, 1),
(9, 1, 1),
(10, 1, 1),
(11, 2, 1),
(12, 2, 1),
(13, 2, 1),
(14, 2, 1),
(15, 2, 1),
(16, 2, 1),
(17, 2, 1),
(18, 2, 1),
(19, 2, 1),
(20, 2, 1),
(21, 3, 1),
(22, 3, 1),
(23, 3, 1),
(24, 3, 1),
(25, 3, 1),
(26, 3, 1),
(27, 3, 1),
(28, 3, 1),
(29, 3, 1),
(30, 3, 1),
(31, 4, 1),
(32, 4, 1),
(33, 4, 1),
(34, 4, 1),
(35, 4, 1),
(36, 4, 1),
(37, 4, 1),
(38, 4, 1),
(39, 4, 1),
(40, 4, 1),
(41, 5, 1),
(42, 5, 1),
(43, 5, 1),
(44, 5, 1),
(45, 5, 1),
(46, 5, 1),
(47, 5, 1),
(48, 5, 1),
(49, 5, 1),
(50, 5, 1),
(51, 6, 1),
(52, 6, 1),
(53, 6, 1),
(54, 6, 1),
(55, 6, 1),
(56, 6, 1),
(57, 6, 1),
(58, 6, 1),
(59, 6, 1),
(60, 6, 1),
(61, 7, 1),
(62, 7, 1),
(63, 7, 1),
(64, 7, 1),
(65, 7, 1),
(66, 7, 1),
(67, 7, 1),
(68, 7, 1),
(69, 7, 1),
(70, 7, 1),
(71, 8, 1),
(72, 8, 1),
(73, 8, 1),
(74, 8, 1),
(75, 8, 1),
(76, 8, 1),
(77, 8, 1),
(78, 8, 1),
(79, 8, 1),
(80, 8, 1),
(81, 9, 1),
(82, 9, 1),
(83, 9, 1),
(84, 9, 1),
(85, 9, 1),
(86, 9, 1),
(87, 9, 1),
(88, 9, 1),
(89, 9, 1),
(90, 9, 1),
(91, 10, 1),
(92, 10, 1),
(93, 10, 1),
(94, 10, 1),
(95, 10, 1),
(96, 10, 1),
(97, 10, 1),
(98, 10, 1),
(99, 10, 1),
(100, 10, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Empleados-Alergias`
--

CREATE TABLE `Empleados-Alergias` (
  `ID_Empleado` int(11) NOT NULL,
  `ID_Alergia` int(11) NOT NULL,
  `Activo` tinyint(1) NOT NULL,
  `Fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `Empleados-Alergias`
--

INSERT INTO `Empleados-Alergias` (`ID_Empleado`, `ID_Alergia`, `Activo`, `Fecha`) VALUES
(1, 1, 1, '2017-06-15'),
(2, 1, 1, '2017-06-16'),
(3, 1, 1, '2017-06-17'),
(4, 1, 1, '2017-06-18'),
(5, 1, 1, '2017-06-19'),
(6, 1, 1, '2017-06-20'),
(7, 1, 1, '2017-06-21'),
(8, 1, 1, '2017-06-22'),
(9, 1, 1, '2017-06-23'),
(10, 1, 1, '2017-06-24'),
(11, 1, 1, '2017-06-25'),
(12, 1, 1, '2017-06-26'),
(13, 1, 1, '2017-06-27'),
(14, 1, 1, '2017-06-28'),
(15, 1, 1, '2017-06-29'),
(16, 1, 1, '2017-06-30'),
(17, 1, 1, '2017-07-01'),
(18, 1, 1, '2017-07-02'),
(19, 1, 1, '2017-07-03'),
(20, 1, 1, '2017-07-04'),
(21, 1, 1, '2017-07-05'),
(22, 1, 1, '2017-07-06'),
(23, 1, 1, '2017-07-07'),
(24, 1, 1, '2017-07-08'),
(25, 1, 1, '2017-07-09'),
(26, 1, 1, '2017-07-10'),
(27, 1, 1, '2017-07-11'),
(28, 1, 1, '2017-07-12'),
(29, 1, 1, '2017-07-13'),
(30, 1, 1, '2017-07-14'),
(31, 1, 1, '2017-07-15'),
(32, 1, 1, '2017-07-16'),
(33, 1, 1, '2017-07-17'),
(34, 1, 1, '2017-07-18'),
(35, 1, 1, '2017-07-19'),
(36, 1, 1, '2017-07-20'),
(37, 1, 1, '2017-07-21'),
(38, 1, 1, '2017-07-22'),
(39, 1, 1, '2017-07-23'),
(40, 1, 1, '2017-07-24'),
(41, 1, 1, '2017-07-25'),
(42, 1, 1, '2017-07-26'),
(43, 1, 1, '2017-07-27'),
(44, 1, 1, '2017-07-28'),
(45, 1, 1, '2017-07-29'),
(46, 1, 1, '2017-07-30'),
(47, 1, 1, '2017-07-31'),
(48, 1, 1, '2017-08-01'),
(49, 1, 1, '2017-08-02'),
(50, 1, 1, '2017-08-03'),
(51, 1, 1, '2017-08-04'),
(52, 1, 1, '2017-08-05'),
(53, 1, 1, '2017-08-06'),
(54, 1, 1, '2017-08-07'),
(55, 1, 1, '2017-08-08'),
(56, 1, 1, '2017-08-09'),
(57, 1, 1, '2017-08-10'),
(58, 1, 1, '2017-08-11'),
(59, 1, 1, '2017-08-12'),
(60, 1, 1, '2017-08-13'),
(61, 1, 1, '2017-08-14'),
(62, 1, 1, '2017-08-15'),
(63, 1, 1, '2017-08-16'),
(64, 1, 1, '2017-08-17'),
(65, 1, 1, '2017-08-18'),
(66, 1, 1, '2017-08-19'),
(67, 1, 1, '2017-08-20'),
(68, 1, 1, '2017-08-21'),
(69, 1, 1, '2017-08-22'),
(70, 1, 1, '2017-08-23'),
(71, 1, 1, '2017-08-24'),
(72, 1, 1, '2017-08-25'),
(73, 1, 1, '2017-08-26'),
(74, 1, 1, '2017-08-27'),
(75, 1, 1, '2017-08-28'),
(76, 1, 1, '2017-08-29'),
(77, 1, 1, '2017-08-30'),
(78, 1, 1, '2017-08-31'),
(79, 1, 1, '2017-09-01'),
(80, 1, 1, '2017-09-02'),
(81, 1, 1, '2017-09-03'),
(82, 1, 1, '2017-09-04'),
(83, 1, 1, '2017-09-05'),
(84, 1, 1, '2017-09-06'),
(85, 1, 1, '2017-09-07'),
(86, 1, 1, '2017-09-08'),
(87, 1, 1, '2017-09-09'),
(88, 1, 1, '2017-09-10'),
(89, 1, 1, '2017-09-11'),
(90, 1, 1, '2017-09-12'),
(91, 1, 1, '2017-09-13'),
(92, 1, 1, '2017-09-14'),
(93, 1, 1, '2017-09-15'),
(94, 1, 1, '2017-09-16'),
(95, 1, 1, '2017-09-17'),
(96, 1, 1, '2017-09-18'),
(97, 1, 1, '2017-09-19'),
(98, 1, 1, '2017-09-20'),
(99, 1, 1, '2017-09-21'),
(100, 1, 1, '2017-09-22');

-- --------------------------------------------------------

--
-- Table structure for table `Empleados-AreasTrabajo`
--

CREATE TABLE `Empleados-AreasTrabajo` (
  `ID_Empleado` int(11) NOT NULL,
  `ID_AreaTrabajo` int(11) NOT NULL,
  `Fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `Empleados-AreasTrabajo`
--

INSERT INTO `Empleados-AreasTrabajo` (`ID_Empleado`, `ID_AreaTrabajo`, `Fecha`) VALUES
(1, 1, '2017-06-15'),
(2, 1, '2017-06-16'),
(3, 1, '2017-06-17'),
(4, 1, '2017-06-18'),
(5, 1, '2017-06-19'),
(6, 1, '2017-06-20'),
(7, 1, '2017-06-21'),
(8, 1, '2017-06-22'),
(9, 1, '2017-06-23'),
(10, 1, '2017-06-24'),
(11, 1, '2017-06-25'),
(12, 1, '2017-06-26'),
(13, 1, '2017-06-27'),
(14, 1, '2017-06-28'),
(15, 1, '2017-06-29'),
(16, 1, '2017-06-30'),
(17, 1, '2017-07-01'),
(18, 1, '2017-07-02'),
(19, 1, '2017-07-03'),
(20, 1, '2017-07-04'),
(21, 1, '2017-07-05'),
(22, 1, '2017-07-06'),
(23, 1, '2017-07-07'),
(24, 1, '2017-07-08'),
(25, 1, '2017-07-09'),
(26, 2, '2017-07-10'),
(27, 2, '2017-07-11'),
(28, 2, '2017-07-12'),
(29, 2, '2017-07-13'),
(30, 2, '2017-07-14'),
(31, 2, '2017-07-15'),
(32, 2, '2017-07-16'),
(33, 2, '2017-07-17'),
(34, 2, '2017-07-18'),
(35, 2, '2017-07-19'),
(36, 2, '2017-07-20'),
(37, 2, '2017-07-21'),
(38, 2, '2017-07-22'),
(39, 2, '2017-07-23'),
(40, 2, '2017-07-24'),
(41, 2, '2017-07-25'),
(42, 2, '2017-07-26'),
(43, 2, '2017-07-27'),
(44, 2, '2017-07-28'),
(45, 2, '2017-07-29'),
(46, 2, '2017-07-30'),
(47, 2, '2017-07-31'),
(48, 2, '2017-08-01'),
(49, 2, '2017-08-02'),
(50, 2, '2017-08-03'),
(51, 3, '2017-08-04'),
(52, 3, '2017-08-05'),
(53, 3, '2017-08-06'),
(54, 3, '2017-08-07'),
(55, 3, '2017-08-08'),
(56, 3, '2017-08-09'),
(57, 3, '2017-08-10'),
(58, 3, '2017-08-11'),
(59, 3, '2017-08-12'),
(60, 3, '2017-08-13'),
(61, 3, '2017-08-14'),
(62, 3, '2017-08-15'),
(63, 3, '2017-08-16'),
(64, 3, '2017-08-17'),
(65, 3, '2017-08-18'),
(66, 3, '2017-08-19'),
(67, 3, '2017-08-20'),
(68, 3, '2017-08-21'),
(69, 3, '2017-08-22'),
(70, 3, '2017-08-23'),
(71, 3, '2017-08-24'),
(72, 3, '2017-08-25'),
(73, 3, '2017-08-26'),
(74, 3, '2017-08-27'),
(75, 3, '2017-08-28'),
(76, 4, '2017-08-29'),
(77, 4, '2017-08-30'),
(78, 4, '2017-08-31'),
(79, 4, '2017-09-01'),
(80, 4, '2017-09-02'),
(81, 4, '2017-09-03'),
(82, 4, '2017-09-04'),
(83, 4, '2017-09-05'),
(84, 4, '2017-09-06'),
(85, 4, '2017-09-07'),
(86, 4, '2017-09-08'),
(87, 4, '2017-09-09'),
(88, 4, '2017-09-10'),
(89, 4, '2017-09-11'),
(90, 4, '2017-09-12'),
(91, 4, '2017-09-13'),
(92, 4, '2017-09-14'),
(93, 4, '2017-09-15'),
(94, 4, '2017-09-16'),
(95, 4, '2017-09-17'),
(96, 4, '2017-09-18'),
(97, 4, '2017-09-19'),
(98, 4, '2017-09-20'),
(99, 4, '2017-09-21'),
(100, 4, '2017-09-22');

-- --------------------------------------------------------

--
-- Table structure for table `Empresas`
--

CREATE TABLE `Empresas` (
  `ID_Empresa` int(15) NOT NULL,
  `Nombre` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `Empresas`
--

INSERT INTO `Empresas` (`ID_Empresa`, `Nombre`) VALUES
(1, 'empresa1'),
(2, 'empresa2'),
(3, 'empresa3'),
(4, 'empresa4'),
(5, 'empresa5'),
(6, 'empresa6'),
(7, 'empresa7'),
(8, 'empresa8'),
(9, 'empresa9'),
(10, 'empresa10');

-- --------------------------------------------------------

--
-- Table structure for table `Empresas-Empleados`
--

CREATE TABLE `Empresas-Empleados` (
  `ID_Empleado` int(11) NOT NULL,
  `ID_Empresa` int(11) NOT NULL,
  `Fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `Empresas-Empleados`
--

INSERT INTO `Empresas-Empleados` (`ID_Empleado`, `ID_Empresa`, `Fecha`) VALUES
(1, 1, '2017-06-15'),
(2, 1, '2017-06-16'),
(3, 1, '2017-06-17'),
(4, 1, '2017-06-18'),
(5, 1, '2017-06-19'),
(6, 1, '2017-06-20'),
(7, 1, '2017-06-21'),
(8, 1, '2017-06-22'),
(9, 1, '2017-06-23'),
(10, 1, '2017-06-24'),
(11, 2, '2017-06-25'),
(12, 2, '2017-06-26'),
(13, 2, '2017-06-27'),
(14, 2, '2017-06-28'),
(15, 2, '2017-06-29'),
(16, 2, '2017-06-30'),
(17, 2, '2017-07-01'),
(18, 2, '2017-07-02'),
(19, 2, '2017-07-03'),
(20, 2, '2017-07-04'),
(21, 3, '2017-07-05'),
(22, 3, '2017-07-06'),
(23, 3, '2017-07-07'),
(24, 3, '2017-07-08'),
(25, 3, '2017-07-09'),
(26, 3, '2017-07-10'),
(27, 3, '2017-07-11'),
(28, 3, '2017-07-12'),
(29, 3, '2017-07-13'),
(30, 3, '2017-07-14'),
(31, 4, '2017-07-15'),
(32, 4, '2017-07-16'),
(33, 4, '2017-07-17'),
(34, 4, '2017-07-18'),
(35, 4, '2017-07-19'),
(36, 4, '2017-07-20'),
(37, 4, '2017-07-21'),
(38, 4, '2017-07-22'),
(39, 4, '2017-07-23'),
(40, 4, '2017-07-24'),
(41, 5, '2017-07-25'),
(42, 5, '2017-07-26'),
(43, 5, '2017-07-27'),
(44, 5, '2017-07-28'),
(45, 5, '2017-07-29'),
(46, 5, '2017-07-30'),
(47, 5, '2017-07-31'),
(48, 5, '2017-08-01'),
(49, 5, '2017-08-02'),
(50, 5, '2017-08-03'),
(51, 6, '2017-08-04'),
(52, 6, '2017-08-05'),
(53, 6, '2017-08-06'),
(54, 6, '2017-08-07'),
(55, 6, '2017-08-08'),
(56, 6, '2017-08-09'),
(57, 6, '2017-08-10'),
(58, 6, '2017-08-11'),
(59, 6, '2017-08-12'),
(60, 6, '2017-08-13'),
(61, 7, '2017-08-14'),
(62, 7, '2017-08-15'),
(63, 7, '2017-08-16'),
(64, 7, '2017-08-17'),
(65, 7, '2017-08-18'),
(66, 7, '2017-08-19'),
(67, 7, '2017-08-20'),
(68, 7, '2017-08-21'),
(69, 7, '2017-08-22'),
(70, 7, '2017-08-23'),
(71, 8, '2017-08-24'),
(72, 8, '2017-08-25'),
(73, 8, '2017-08-26'),
(74, 8, '2017-08-27'),
(75, 8, '2017-08-28'),
(76, 8, '2017-08-29'),
(77, 8, '2017-08-30'),
(78, 8, '2017-08-31'),
(79, 8, '2017-09-01'),
(80, 8, '2017-09-02'),
(81, 9, '2017-09-03'),
(82, 9, '2017-09-04'),
(83, 9, '2017-09-05'),
(84, 9, '2017-09-06'),
(85, 9, '2017-09-07'),
(86, 9, '2017-09-08'),
(87, 9, '2017-09-09'),
(88, 9, '2017-09-10'),
(89, 9, '2017-09-11'),
(90, 9, '2017-09-12'),
(91, 10, '2017-09-13'),
(92, 10, '2017-09-14'),
(93, 10, '2017-09-15'),
(94, 10, '2017-09-16'),
(95, 10, '2017-09-17'),
(96, 10, '2017-09-18'),
(97, 10, '2017-09-19'),
(98, 10, '2017-09-20'),
(99, 10, '2017-09-21'),
(100, 10, '2017-09-22');

-- --------------------------------------------------------

--
-- Table structure for table `Eventos`
--

CREATE TABLE `Eventos` (
  `ID_Evento` int(10) NOT NULL,
  `Nombre` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Descripcion` varchar(500) COLLATE utf8_spanish_ci DEFAULT NULL,
  `CupoMaximo` int(255) DEFAULT NULL,
  `FechaInicio` date DEFAULT NULL,
  `FechaFin` date DEFAULT NULL,
  `Locacion` varchar(1000) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Imagen` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `MaximoInvitados` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `Eventos`
--

INSERT INTO `Eventos` (`ID_Evento`, `Nombre`, `Descripcion`, `CupoMaximo`, `FechaInicio`, `FechaFin`, `Locacion`, `Imagen`, `MaximoInvitados`) VALUES
(1, 'Conferencia1', 'Eventos de carros', 1000, '2017-06-15', '2017-06-16', 'ITESM', 'imagen', 2),
(2, 'Conferencia2', 'Eventos de carros', 1000, '2017-06-16', '2017-06-17', 'ITESM', 'imagen', 2),
(3, 'Conferencia3', 'Eventos de carros', 1000, '2017-06-17', '2017-06-18', 'ITESM', 'imagen', 2),
(4, 'Conferencia4', 'Eventos de carros', 1000, '2017-06-18', '2017-06-19', 'ITESM', 'imagen', 2),
(5, 'Conferencia5', 'Eventos de carros', 1000, '2017-06-19', '2017-06-20', 'ITESM', 'imagen', 2),
(6, 'Conferencia6', 'Eventos de carros', 1000, '2017-06-20', '2017-06-21', 'ITESM', 'imagen', 2),
(7, 'Conferencia7', 'Eventos de carros', 1000, '2017-06-21', '2017-06-22', 'ITESM', 'imagen', 2),
(8, 'Conferencia8', 'Eventos de carros', 1000, '2017-06-22', '2017-06-23', 'ITESM', 'imagen', 2),
(9, 'Conferencia9', 'Eventos de carros', 1000, '2017-06-23', '2017-06-24', 'ITESM', 'imagen', 2),
(10, 'Conferencia10', 'Eventos de carros', 1000, '2017-06-24', '2017-06-25', 'ITESM', 'imagen', 2);

-- --------------------------------------------------------

--
-- Table structure for table `Eventos-Empleados`
--

CREATE TABLE `Eventos-Empleados` (
  `ID_Evento` int(11) NOT NULL,
  `ID_Empleado` int(11) NOT NULL,
  `Asistencia` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `Eventos-Empleados`
--

INSERT INTO `Eventos-Empleados` (`ID_Evento`, `ID_Empleado`, `Asistencia`) VALUES
(1, 1, 1),
(1, 2, 1),
(1, 3, 1),
(1, 4, 1),
(1, 5, 1),
(1, 6, 1),
(1, 7, 1),
(1, 8, 1),
(1, 9, 1),
(1, 10, 1),
(2, 11, 1),
(2, 12, 1),
(2, 13, 1),
(2, 14, 1),
(2, 15, 1),
(2, 16, 1),
(2, 17, 1),
(2, 18, 1),
(2, 19, 1),
(2, 20, 1),
(3, 21, 1),
(3, 22, 1),
(3, 23, 1),
(3, 24, 1),
(3, 25, 1),
(3, 26, 1),
(3, 27, 1),
(3, 28, 1),
(3, 29, 1),
(3, 30, 1),
(4, 31, 1),
(4, 32, 1),
(4, 33, 1),
(4, 34, 1),
(4, 35, 1),
(4, 36, 1),
(4, 37, 1),
(4, 38, 1),
(4, 39, 1),
(4, 40, 1),
(5, 41, 1),
(5, 42, 1),
(5, 43, 1),
(5, 44, 1),
(5, 45, 1),
(5, 46, 1),
(5, 47, 1),
(5, 48, 1),
(5, 49, 1),
(5, 50, 1),
(6, 51, 1),
(6, 52, 1),
(6, 53, 1),
(6, 54, 1),
(6, 55, 1),
(6, 56, 1),
(6, 57, 1),
(6, 58, 1),
(6, 59, 1),
(6, 60, 1),
(7, 61, 1),
(7, 62, 1),
(7, 63, 1),
(7, 64, 1),
(7, 65, 1),
(7, 66, 1),
(7, 67, 1),
(7, 68, 1),
(7, 69, 1),
(7, 70, 1),
(8, 71, 1),
(8, 72, 1),
(8, 73, 1),
(8, 74, 1),
(8, 75, 1),
(8, 76, 1),
(8, 77, 1),
(8, 78, 1),
(8, 79, 1),
(8, 80, 1),
(9, 81, 1),
(9, 82, 1),
(9, 83, 1),
(9, 84, 1),
(9, 85, 1),
(9, 86, 1),
(9, 87, 1),
(9, 88, 1),
(9, 89, 1),
(9, 90, 1),
(10, 91, 1),
(10, 92, 1),
(10, 93, 1),
(10, 94, 1),
(10, 95, 1),
(10, 96, 1),
(10, 97, 1),
(10, 98, 1),
(10, 99, 1),
(10, 100, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Eventos-Invitados`
--

CREATE TABLE `Eventos-Invitados` (
  `ID_Invitado` int(11) NOT NULL,
  `ID_Evento` int(11) NOT NULL,
  `Asistencia` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `Eventos-Invitados`
--

INSERT INTO `Eventos-Invitados` (`ID_Invitado`, `ID_Evento`, `Asistencia`) VALUES
(1, 1, 1),
(2, 1, 1),
(3, 1, 1),
(4, 1, 1),
(5, 1, 1),
(6, 1, 1),
(7, 1, 1),
(8, 1, 1),
(9, 1, 1),
(10, 1, 1),
(11, 2, 1),
(12, 2, 1),
(13, 2, 1),
(14, 2, 1),
(15, 2, 1),
(16, 2, 1),
(17, 2, 1),
(18, 2, 1),
(19, 2, 1),
(20, 2, 1),
(21, 3, 1),
(22, 3, 1),
(23, 3, 1),
(24, 3, 1),
(25, 3, 1),
(26, 3, 1),
(27, 3, 1),
(28, 3, 1),
(29, 3, 1),
(30, 3, 1),
(31, 4, 1),
(32, 4, 1),
(33, 4, 1),
(34, 4, 1),
(35, 4, 1),
(36, 4, 1),
(37, 4, 1),
(38, 4, 1),
(39, 4, 1),
(40, 4, 1),
(41, 5, 1),
(42, 5, 1),
(43, 5, 1),
(44, 5, 1),
(45, 5, 1),
(46, 5, 1),
(47, 5, 1),
(48, 5, 1),
(49, 5, 1),
(50, 5, 1),
(51, 6, 1),
(52, 6, 1),
(53, 6, 1),
(54, 6, 1),
(55, 6, 1),
(56, 6, 1),
(57, 6, 1),
(58, 6, 1),
(59, 6, 1),
(60, 6, 1),
(61, 7, 1),
(62, 7, 1),
(63, 7, 1),
(64, 7, 1),
(65, 7, 1),
(66, 7, 1),
(67, 7, 1),
(68, 7, 1),
(69, 7, 1),
(70, 7, 1),
(71, 8, 1),
(72, 8, 1),
(73, 8, 1),
(74, 8, 1),
(75, 8, 1),
(76, 8, 1),
(77, 8, 1),
(78, 8, 1),
(79, 8, 1),
(80, 8, 1),
(81, 9, 1),
(82, 9, 1),
(83, 9, 1),
(84, 9, 1),
(85, 9, 1),
(86, 9, 1),
(87, 9, 1),
(88, 9, 1),
(89, 9, 1),
(90, 9, 1),
(91, 10, 1),
(92, 10, 1),
(93, 10, 1),
(94, 10, 1),
(95, 10, 1),
(96, 10, 1),
(97, 10, 1),
(98, 10, 1),
(99, 10, 1),
(100, 10, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Eventos-Menus`
--

CREATE TABLE `Eventos-Menus` (
  `ID_Evento` int(11) NOT NULL,
  `ID_Menu` int(11) NOT NULL,
  `Activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `Eventos-Menus`
--

INSERT INTO `Eventos-Menus` (`ID_Evento`, `ID_Menu`, `Activo`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 1, 1),
(6, 2, 1),
(7, 3, 1),
(8, 4, 1),
(9, 1, 1),
(10, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Eventos-Alergias`
--

CREATE TABLE `Eventos-Alergias` (
  `ID_Evento` int(11) NOT NULL,
  `ID_Alergia` int(11) NOT NULL,
  `Activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `Eventos-Alergias`
--

INSERT INTO `Eventos-Alergias` (`ID_Evento`, `ID_Alergia`, `Activo`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 1, 1),
(6, 2, 1),
(7, 3, 1),
(8, 4, 1),
(9, 1, 1),
(10, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Invitados`
--

CREATE TABLE `Invitados` (
  `ID_Invitado` int(15) NOT NULL,
  `ID_Menu` int(20) DEFAULT NULL,
  `ID_Empleado` int(15) DEFAULT NULL,
  `Nombre` varchar(25) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Apellido` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Email` varchar(40) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Telefono` int(10) DEFAULT NULL,
  `Comentario` varchar(40) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `Invitados`
--

INSERT INTO `Invitados` (`ID_Invitado`, `ID_Menu`, `ID_Empleado`, `Nombre`, `Apellido`, `Email`, `Telefono`, `Comentario`) VALUES
(1, 1, 1, 'Invitados 1', 'Detal 1', 'email 1', 78945621, 'Familiar del Empleados'),
(2, 1, 2, 'Invitados 2', 'Detal 2', 'email 2', 78945622, 'Familiar del Empleados'),
(3, 1, 3, 'Invitados 3', 'Detal 3', 'email 3', 78945623, 'Familiar del Empleados'),
(4, 1, 4, 'Invitados 4', 'Detal 4', 'email 4', 78945624, 'Familiar del Empleados'),
(5, 1, 5, 'Invitados 5', 'Detal 5', 'email 5', 78945625, 'Familiar del Empleados'),
(6, 1, 6, 'Invitados 6', 'Detal 6', 'email 6', 78945626, 'Familiar del Empleados'),
(7, 1, 7, 'Invitados 7', 'Detal 7', 'email 7', 78945627, 'Familiar del Empleados'),
(8, 1, 8, 'Invitados 8', 'Detal 8', 'email 8', 78945628, 'Familiar del Empleados'),
(9, 1, 9, 'Invitados 9', 'Detal 9', 'email 9', 78945629, 'Familiar del Empleados'),
(10, 1, 10, 'Invitados 10', 'Detal 10', 'email 10', 78945630, 'Familiar del Empleados'),
(11, 1, 11, 'Invitados 11', 'Detal 11', 'email 11', 78945631, 'Familiar del Empleados'),
(12, 1, 12, 'Invitados 12', 'Detal 12', 'email 12', 78945632, 'Familiar del Empleados'),
(13, 1, 13, 'Invitados 13', 'Detal 13', 'email 13', 78945633, 'Familiar del Empleados'),
(14, 1, 14, 'Invitados 14', 'Detal 14', 'email 14', 78945634, 'Familiar del Empleados'),
(15, 1, 15, 'Invitados 15', 'Detal 15', 'email 15', 78945635, 'Familiar del Empleados'),
(16, 1, 16, 'Invitados 16', 'Detal 16', 'email 16', 78945636, 'Familiar del Empleados'),
(17, 1, 17, 'Invitados 17', 'Detal 17', 'email 17', 78945637, 'Familiar del Empleados'),
(18, 1, 18, 'Invitados 18', 'Detal 18', 'email 18', 78945638, 'Familiar del Empleados'),
(19, 1, 19, 'Invitados 19', 'Detal 19', 'email 19', 78945639, 'Familiar del Empleados'),
(20, 1, 20, 'Invitados 20', 'Detal 20', 'email 20', 78945640, 'Familiar del Empleados'),
(21, 1, 21, 'Invitados 21', 'Detal 21', 'email 21', 78945641, 'Familiar del Empleados'),
(22, 1, 22, 'Invitados 22', 'Detal 22', 'email 22', 78945642, 'Familiar del Empleados'),
(23, 1, 23, 'Invitados 23', 'Detal 23', 'email 23', 78945643, 'Familiar del Empleados'),
(24, 1, 24, 'Invitados 24', 'Detal 24', 'email 24', 78945644, 'Familiar del Empleados'),
(25, 1, 25, 'Invitados 25', 'Detal 25', 'email 25', 78945645, 'Familiar del Empleados'),
(26, 1, 26, 'Invitados 26', 'Detal 26', 'email 26', 78945646, 'Familiar del Empleados'),
(27, 1, 27, 'Invitados 27', 'Detal 27', 'email 27', 78945647, 'Familiar del Empleados'),
(28, 1, 28, 'Invitados 28', 'Detal 28', 'email 28', 78945648, 'Familiar del Empleados'),
(29, 1, 29, 'Invitados 29', 'Detal 29', 'email 29', 78945649, 'Familiar del Empleados'),
(30, 1, 30, 'Invitados 30', 'Detal 30', 'email 30', 78945650, 'Familiar del Empleados'),
(31, 1, 31, 'Invitados 31', 'Detal 31', 'email 31', 78945651, 'Familiar del Empleados'),
(32, 1, 32, 'Invitados 32', 'Detal 32', 'email 32', 78945652, 'Familiar del Empleados'),
(33, 1, 33, 'Invitados 33', 'Detal 33', 'email 33', 78945653, 'Familiar del Empleados'),
(34, 1, 34, 'Invitados 34', 'Detal 34', 'email 34', 78945654, 'Familiar del Empleados'),
(35, 1, 35, 'Invitados 35', 'Detal 35', 'email 35', 78945655, 'Familiar del Empleados'),
(36, 1, 36, 'Invitados 36', 'Detal 36', 'email 36', 78945656, 'Familiar del Empleados'),
(37, 1, 37, 'Invitados 37', 'Detal 37', 'email 37', 78945657, 'Familiar del Empleados'),
(38, 1, 38, 'Invitados 38', 'Detal 38', 'email 38', 78945658, 'Familiar del Empleados'),
(39, 1, 39, 'Invitados 39', 'Detal 39', 'email 39', 78945659, 'Familiar del Empleados'),
(40, 1, 40, 'Invitados 40', 'Detal 40', 'email 40', 78945660, 'Familiar del Empleados'),
(41, 1, 41, 'Invitados 41', 'Detal 41', 'email 41', 78945661, 'Familiar del Empleados'),
(42, 1, 42, 'Invitados 42', 'Detal 42', 'email 42', 78945662, 'Familiar del Empleados'),
(43, 1, 43, 'Invitados 43', 'Detal 43', 'email 43', 78945663, 'Familiar del Empleados'),
(44, 1, 44, 'Invitados 44', 'Detal 44', 'email 44', 78945664, 'Familiar del Empleados'),
(45, 1, 45, 'Invitados 45', 'Detal 45', 'email 45', 78945665, 'Familiar del Empleados'),
(46, 1, 46, 'Invitados 46', 'Detal 46', 'email 46', 78945666, 'Familiar del Empleados'),
(47, 1, 47, 'Invitados 47', 'Detal 47', 'email 47', 78945667, 'Familiar del Empleados'),
(48, 1, 48, 'Invitados 48', 'Detal 48', 'email 48', 78945668, 'Familiar del Empleados'),
(49, 1, 49, 'Invitados 49', 'Detal 49', 'email 49', 78945669, 'Familiar del Empleados'),
(50, 1, 50, 'Invitados 50', 'Detal 50', 'email 50', 78945670, 'Familiar del Empleados'),
(51, 1, 51, 'Invitados 51', 'Detal 51', 'email 51', 78945671, 'Familiar del Empleados'),
(52, 1, 52, 'Invitados 52', 'Detal 52', 'email 52', 78945672, 'Familiar del Empleados'),
(53, 1, 53, 'Invitados 53', 'Detal 53', 'email 53', 78945673, 'Familiar del Empleados'),
(54, 1, 54, 'Invitados 54', 'Detal 54', 'email 54', 78945674, 'Familiar del Empleados'),
(55, 1, 55, 'Invitados 55', 'Detal 55', 'email 55', 78945675, 'Familiar del Empleados'),
(56, 1, 56, 'Invitados 56', 'Detal 56', 'email 56', 78945676, 'Familiar del Empleados'),
(57, 1, 57, 'Invitados 57', 'Detal 57', 'email 57', 78945677, 'Familiar del Empleados'),
(58, 1, 58, 'Invitados 58', 'Detal 58', 'email 58', 78945678, 'Familiar del Empleados'),
(59, 1, 59, 'Invitados 59', 'Detal 59', 'email 59', 78945679, 'Familiar del Empleados'),
(60, 1, 60, 'Invitados 60', 'Detal 60', 'email 60', 78945680, 'Familiar del Empleados'),
(61, 1, 61, 'Invitados 61', 'Detal 61', 'email 61', 78945681, 'Familiar del Empleados'),
(62, 1, 62, 'Invitados 62', 'Detal 62', 'email 62', 78945682, 'Familiar del Empleados'),
(63, 1, 63, 'Invitados 63', 'Detal 63', 'email 63', 78945683, 'Familiar del Empleados'),
(64, 1, 64, 'Invitados 64', 'Detal 64', 'email 64', 78945684, 'Familiar del Empleados'),
(65, 1, 65, 'Invitados 65', 'Detal 65', 'email 65', 78945685, 'Familiar del Empleados'),
(66, 1, 66, 'Invitados 66', 'Detal 66', 'email 66', 78945686, 'Familiar del Empleados'),
(67, 1, 67, 'Invitados 67', 'Detal 67', 'email 67', 78945687, 'Familiar del Empleados'),
(68, 1, 68, 'Invitados 68', 'Detal 68', 'email 68', 78945688, 'Familiar del Empleados'),
(69, 1, 69, 'Invitados 69', 'Detal 69', 'email 69', 78945689, 'Familiar del Empleados'),
(70, 1, 70, 'Invitados 70', 'Detal 70', 'email 70', 78945690, 'Familiar del Empleados'),
(71, 1, 71, 'Invitados 71', 'Detal 71', 'email 71', 78945691, 'Familiar del Empleados'),
(72, 1, 72, 'Invitados 72', 'Detal 72', 'email 72', 78945692, 'Familiar del Empleados'),
(73, 1, 73, 'Invitados 73', 'Detal 73', 'email 73', 78945693, 'Familiar del Empleados'),
(74, 1, 74, 'Invitados 74', 'Detal 74', 'email 74', 78945694, 'Familiar del Empleados'),
(75, 1, 75, 'Invitados 75', 'Detal 75', 'email 75', 78945695, 'Familiar del Empleados'),
(76, 1, 76, 'Invitados 76', 'Detal 76', 'email 76', 78945696, 'Familiar del Empleados'),
(77, 1, 77, 'Invitados 77', 'Detal 77', 'email 77', 78945697, 'Familiar del Empleados'),
(78, 1, 78, 'Invitados 78', 'Detal 78', 'email 78', 78945698, 'Familiar del Empleados'),
(79, 1, 79, 'Invitados 79', 'Detal 79', 'email 79', 78945699, 'Familiar del Empleados'),
(80, 1, 80, 'Invitados 80', 'Detal 80', 'email 80', 78945700, 'Familiar del Empleados'),
(81, 1, 81, 'Invitados 81', 'Detal 81', 'email 81', 78945701, 'Familiar del Empleados'),
(82, 1, 82, 'Invitados 82', 'Detal 82', 'email 82', 78945702, 'Familiar del Empleados'),
(83, 1, 83, 'Invitados 83', 'Detal 83', 'email 83', 78945703, 'Familiar del Empleados'),
(84, 1, 84, 'Invitados 84', 'Detal 84', 'email 84', 78945704, 'Familiar del Empleados'),
(85, 1, 85, 'Invitados 85', 'Detal 85', 'email 85', 78945705, 'Familiar del Empleados'),
(86, 1, 86, 'Invitados 86', 'Detal 86', 'email 86', 78945706, 'Familiar del Empleados'),
(87, 1, 87, 'Invitados 87', 'Detal 87', 'email 87', 78945707, 'Familiar del Empleados'),
(88, 1, 88, 'Invitados 88', 'Detal 88', 'email 88', 78945708, 'Familiar del Empleados'),
(89, 1, 89, 'Invitados 89', 'Detal 89', 'email 89', 78945709, 'Familiar del Empleados'),
(90, 1, 90, 'Invitados 90', 'Detal 90', 'email 90', 78945710, 'Familiar del Empleados'),
(91, 1, 91, 'Invitados 91', 'Detal 91', 'email 91', 78945711, 'Familiar del Empleados'),
(92, 1, 92, 'Invitados 92', 'Detal 92', 'email 92', 78945712, 'Familiar del Empleados'),
(93, 1, 93, 'Invitados 93', 'Detal 93', 'email 93', 78945713, 'Familiar del Empleados'),
(94, 1, 94, 'Invitados 94', 'Detal 94', 'email 94', 78945714, 'Familiar del Empleados'),
(95, 1, 95, 'Invitados 95', 'Detal 95', 'email 95', 78945715, 'Familiar del Empleados'),
(96, 1, 96, 'Invitados 96', 'Detal 96', 'email 96', 78945716, 'Familiar del Empleados'),
(97, 1, 97, 'Invitados 97', 'Detal 97', 'email 97', 78945717, 'Familiar del Empleados'),
(98, 1, 98, 'Invitados 98', 'Detal 98', 'email 98', 78945718, 'Familiar del Empleados'),
(99, 1, 99, 'Invitados 99', 'Detal 99', 'email 99', 78945719, 'Familiar del Empleados'),
(100, 1, 100, 'Invitados 100', 'Detal 100', 'email 100', 78945720, 'Familiar del Empleados');

-- --------------------------------------------------------

--
-- Table structure for table `Invitados-Alergias`
--

CREATE TABLE `Invitados-Alergias` (
  `ID_Invitado` int(11) NOT NULL,
  `ID_Alergia` int(11) NOT NULL,
  `Activo` tinyint(1) NOT NULL,
  `Fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `Invitados-Alergias`
--

INSERT INTO `Invitados-Alergias` (`ID_Invitado`, `ID_Alergia`, `Activo`, `Fecha`) VALUES
(1, 1, 1, '2017-06-15'),
(2, 1, 1, '2017-06-16'),
(3, 1, 1, '2017-06-17'),
(4, 1, 1, '2017-06-18'),
(5, 1, 1, '2017-06-19'),
(6, 1, 1, '2017-06-20'),
(7, 1, 1, '2017-06-21'),
(8, 1, 1, '2017-06-22'),
(9, 1, 1, '2017-06-23'),
(10, 1, 1, '2017-06-24'),
(11, 1, 1, '2017-06-25'),
(12, 1, 1, '2017-06-26'),
(13, 1, 1, '2017-06-27'),
(14, 1, 1, '2017-06-28'),
(15, 1, 1, '2017-06-29'),
(16, 1, 1, '2017-06-30'),
(17, 1, 1, '2017-07-01'),
(18, 1, 1, '2017-07-02'),
(19, 1, 1, '2017-07-03'),
(20, 1, 1, '2017-07-04'),
(21, 1, 1, '2017-07-05'),
(22, 1, 1, '2017-07-06'),
(23, 1, 1, '2017-07-07'),
(24, 1, 1, '2017-07-08'),
(25, 1, 1, '2017-07-09'),
(26, 1, 1, '2017-07-10'),
(27, 1, 1, '2017-07-11'),
(28, 1, 1, '2017-07-12'),
(29, 1, 1, '2017-07-13'),
(30, 1, 1, '2017-07-14'),
(31, 1, 1, '2017-07-15'),
(32, 1, 1, '2017-07-16'),
(33, 1, 1, '2017-07-17'),
(34, 1, 1, '2017-07-18'),
(35, 1, 1, '2017-07-19'),
(36, 1, 1, '2017-07-20'),
(37, 1, 1, '2017-07-21'),
(38, 1, 1, '2017-07-22'),
(39, 1, 1, '2017-07-23'),
(40, 1, 1, '2017-07-24'),
(41, 1, 1, '2017-07-25'),
(42, 1, 1, '2017-07-26'),
(43, 1, 1, '2017-07-27'),
(44, 1, 1, '2017-07-28'),
(45, 1, 1, '2017-07-29'),
(46, 1, 1, '2017-07-30'),
(47, 1, 1, '2017-07-31'),
(48, 1, 1, '2017-08-01'),
(49, 1, 1, '2017-08-02'),
(50, 1, 1, '2017-08-03'),
(51, 1, 1, '2017-08-04'),
(52, 1, 1, '2017-08-05'),
(53, 1, 1, '2017-08-06'),
(54, 1, 1, '2017-08-07'),
(55, 1, 1, '2017-08-08'),
(56, 1, 1, '2017-08-09'),
(57, 1, 1, '2017-08-10'),
(58, 1, 1, '2017-08-11'),
(59, 1, 1, '2017-08-12'),
(60, 1, 1, '2017-08-13'),
(61, 1, 1, '2017-08-14'),
(62, 1, 1, '2017-08-15'),
(63, 1, 1, '2017-08-16'),
(64, 1, 1, '2017-08-17'),
(65, 1, 1, '2017-08-18'),
(66, 1, 1, '2017-08-19'),
(67, 1, 1, '2017-08-20'),
(68, 1, 1, '2017-08-21'),
(69, 1, 1, '2017-08-22'),
(70, 1, 1, '2017-08-23'),
(71, 1, 1, '2017-08-24'),
(72, 1, 1, '2017-08-25'),
(73, 1, 1, '2017-08-26'),
(74, 1, 1, '2017-08-27'),
(75, 1, 1, '2017-08-28'),
(76, 1, 1, '2017-08-29'),
(77, 1, 1, '2017-08-30'),
(78, 1, 1, '2017-08-31'),
(79, 1, 1, '2017-09-01'),
(80, 1, 1, '2017-09-02'),
(81, 1, 1, '2017-09-03'),
(82, 1, 1, '2017-09-04'),
(83, 1, 1, '2017-09-05'),
(84, 1, 1, '2017-09-06'),
(85, 1, 1, '2017-09-07'),
(86, 1, 1, '2017-09-08'),
(87, 1, 1, '2017-09-09'),
(88, 1, 1, '2017-09-10'),
(89, 1, 1, '2017-09-11'),
(90, 1, 1, '2017-09-12'),
(91, 1, 1, '2017-09-13'),
(92, 1, 1, '2017-09-14'),
(93, 1, 1, '2017-09-15'),
(94, 1, 1, '2017-09-16'),
(95, 1, 1, '2017-09-17'),
(96, 1, 1, '2017-09-18'),
(97, 1, 1, '2017-09-19'),
(98, 1, 1, '2017-09-20'),
(99, 1, 1, '2017-09-21'),
(100, 1, 1, '2017-09-22');

-- --------------------------------------------------------

--
-- Table structure for table `Menus`
--

CREATE TABLE `Menus` (
  `ID_Menu` int(20) NOT NULL,
  `Tipo_Menu` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `Menus`
--

INSERT INTO `Menus` (`ID_Menu`, `Tipo_Menu`) VALUES
(1, 'carne'),
(2, 'vegetariano'),
(3, 'infantil'),
(4, 'vegano');

-- --------------------------------------------------------

--
-- Table structure for table `SubEventos`
--

CREATE TABLE `SubEventos` (
  `ID_Subevento` int(10) NOT NULL,
  `ID_Evento` int(10) DEFAULT NULL,
  `Descripcion` varchar(500) COLLATE utf8_spanish_ci DEFAULT NULL,
  `FechaInicio` datetime DEFAULT NULL,
  `FechaFin` datetime DEFAULT NULL,
  `Nombre` varchar(150) COLLATE utf8_spanish_ci DEFAULT NULL,
  `CupoMaximo` int(255) DEFAULT NULL,
  `Locacion` varchar(150) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `SubEventos`
--

INSERT INTO `SubEventos` (`ID_Subevento`, `ID_Evento`, `Descripcion`, `FechaInicio`, `FechaFin`, `Nombre`, `CupoMaximo`, `Locacion`) VALUES
(1, 1, 'Conferencia1', '2017-06-15 07:00:00', '2017-06-16 08:00:00', 'Subevento1', 100, 'Sala 1'),
(2, 2, 'Conferencia2', '2017-06-16 07:00:00', '2017-06-17 08:00:00', 'Subevento2', 100, 'Sala 2'),
(3, 3, 'Conferencia3', '2017-06-17 07:00:00', '2017-06-18 08:00:00', 'Subevento3', 100, 'Sala 3'),
(4, 4, 'Conferencia4', '2017-06-18 07:00:00', '2017-06-19 08:00:00', 'Subevento4', 100, 'Sala 4'),
(5, 5, 'Conferencia5', '2017-06-19 07:00:00', '2017-06-20 08:00:00', 'Subevento5', 100, 'Sala 5'),
(6, 6, 'Conferencia6', '2017-06-20 07:00:00', '2017-06-21 08:00:00', 'Subevento6', 100, 'Sala 6'),
(7, 7, 'Conferencia7', '2017-06-21 07:00:00', '2017-06-22 08:00:00', 'Subevento7', 100, 'Sala 7'),
(8, 8, 'Conferencia8', '2017-06-22 07:00:00', '2017-06-23 08:00:00', 'Subevento8', 100, 'Sala 8'),
(9, 9, 'Conferencia9', '2017-06-23 07:00:00', '2017-06-24 08:00:00', 'Subevento9', 100, 'Sala 9'),
(10, 10, 'Conferencia10', '2017-06-24 07:00:00', '2017-06-25 08:00:00', 'Subevento10', 100, 'Sala 10');

-- --------------------------------------------------------

--
-- Table structure for table `SubEventos-Invitados`
--

CREATE TABLE `SubEventos-Invitados` (
  `ID_Subevento` int(11) NOT NULL,
  `ID_Invitado` int(11) NOT NULL,
  `Asistencia` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `SubEventos-Invitados`
--

INSERT INTO `SubEventos-Invitados` (`ID_Subevento`, `ID_Invitado`, `Asistencia`) VALUES
(1, 1, 1),
(1, 2, 1),
(1, 3, 1),
(1, 4, 1),
(1, 5, 1),
(1, 6, 1),
(1, 7, 1),
(1, 8, 1),
(1, 9, 1),
(1, 10, 1),
(2, 11, 1),
(2, 12, 1),
(2, 13, 1),
(2, 14, 1),
(2, 15, 1),
(2, 16, 1),
(2, 17, 1),
(2, 18, 1),
(2, 19, 1),
(2, 20, 1),
(3, 21, 1),
(3, 22, 1),
(3, 23, 1),
(3, 24, 1),
(3, 25, 1),
(3, 26, 1),
(3, 27, 1),
(3, 28, 1),
(3, 29, 1),
(3, 30, 1),
(4, 31, 1),
(4, 32, 1),
(4, 33, 1),
(4, 34, 1),
(4, 35, 1),
(4, 36, 1),
(4, 37, 1),
(4, 38, 1),
(4, 39, 1),
(4, 40, 1),
(5, 41, 1),
(5, 42, 1),
(5, 43, 1),
(5, 44, 1),
(5, 45, 1),
(5, 46, 1),
(5, 47, 1),
(5, 48, 1),
(5, 49, 1),
(5, 50, 1),
(6, 51, 1),
(6, 52, 1),
(6, 53, 1),
(6, 54, 1),
(6, 55, 1),
(6, 56, 1),
(6, 57, 1),
(6, 58, 1),
(6, 59, 1),
(6, 60, 1),
(7, 61, 1),
(7, 62, 1),
(7, 63, 1),
(7, 64, 1),
(7, 65, 1),
(7, 66, 1),
(7, 67, 1),
(7, 68, 1),
(7, 69, 1),
(7, 70, 1),
(8, 71, 1),
(8, 72, 1),
(8, 73, 1),
(8, 74, 1),
(8, 75, 1),
(8, 76, 1),
(8, 77, 1),
(8, 78, 1),
(8, 79, 1),
(8, 80, 1),
(9, 81, 1),
(9, 82, 1),
(9, 83, 1),
(9, 84, 1),
(9, 85, 1),
(9, 86, 1),
(9, 87, 1),
(9, 88, 1),
(9, 89, 1),
(9, 90, 1),
(10, 91, 1),
(10, 92, 1),
(10, 93, 1),
(10, 94, 1),
(10, 95, 1),
(10, 96, 1),
(10, 97, 1),
(10, 98, 1),
(10, 99, 1),
(10, 100, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Alergias`
--

CREATE TABLE `Alergias` (
  `ID_Alergia` int(15) NOT NULL,
  `Nombre` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `Alergias`
--

INSERT INTO `Alergias` (`ID_Alergia`, `Nombre`) VALUES
(1, 'Nueces'),
(2, 'Lacteos'),
(3, 'Ninguna'),
(4, 'Otros');

-- --------------------------------------------------------

--
-- Table structure for table `AreasTrabajo`
--

CREATE TABLE `AreasTrabajo` (
  `ID_AreaTrabajo` int(15) NOT NULL,
  `Nombre` varchar(15) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `AreasTrabajo`
--

INSERT INTO `AreasTrabajo` (`ID_AreaTrabajo`, `Nombre`) VALUES
(1, 'Secretaria'),
(2, 'Inginieria'),
(3, 'Direccion'),
(4, 'Finanzas');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Empleados`
--
ALTER TABLE `Empleados`
  ADD PRIMARY KEY (`ID_Empleado`),
  ADD KEY `ID_Menu` (`ID_Menu`);

--
-- Indexes for table `Empleados-SubEventos`
--
ALTER TABLE `Empleados-SubEventos`
  ADD PRIMARY KEY (`ID_Empleado`,`ID_Subevento`),
  ADD KEY `ID_Subevento` (`ID_Subevento`);

--
-- Indexes for table `Empleados-Alergias`
--
ALTER TABLE `Empleados-Alergias`
  ADD PRIMARY KEY (`ID_Empleado`,`ID_Alergia`),
  ADD KEY `ID_Alergia` (`ID_Alergia`);

--
-- Indexes for table `Empleados-AreasTrabajo`
--
ALTER TABLE `Empleados-AreasTrabajo`
  ADD PRIMARY KEY (`ID_Empleado`,`ID_AreaTrabajo`),
  ADD KEY `ID_AreaTrabajo` (`ID_AreaTrabajo`);

--
-- Indexes for table `Empresas`
--
ALTER TABLE `Empresas`
  ADD PRIMARY KEY (`ID_Empresa`);

--
-- Indexes for table `Empresas-Empleados`
--
ALTER TABLE `Empresas-Empleados`
  ADD PRIMARY KEY (`ID_Empleado`,`ID_Empresa`),
  ADD KEY `ID_Empresa` (`ID_Empresa`);

--
-- Indexes for table `Eventos`
--
ALTER TABLE `Eventos`
  ADD PRIMARY KEY (`ID_Evento`);

--
-- Indexes for table `Eventos-Empleados`
--
ALTER TABLE `Eventos-Empleados`
  ADD PRIMARY KEY (`ID_Empleado`,`ID_Evento`),
  ADD KEY `ID_Evento` (`ID_Evento`);

--
-- Indexes for table `Eventos-Invitados`
--
ALTER TABLE `Eventos-Invitados`
  ADD PRIMARY KEY (`ID_Invitado`,`ID_Evento`),
  ADD KEY `ID_Evento` (`ID_Evento`);

--
-- Indexes for table `Eventos-Menus`
--
ALTER TABLE `Eventos-Menus`
  ADD PRIMARY KEY (`ID_Evento`,`ID_Menu`),
  ADD KEY `ID_Menu` (`ID_Menu`);

--
-- Indexes for table `Eventos-Alergias`
--
ALTER TABLE `Eventos-Alergias`
  ADD PRIMARY KEY (`ID_Evento`,`ID_Alergia`),
  ADD KEY `ID_Alergia` (`ID_Alergia`);

--
-- Indexes for table `Invitados`
--
ALTER TABLE `Invitados`
  ADD PRIMARY KEY (`ID_Invitado`),
  ADD KEY `ID_Menu` (`ID_Menu`),
  ADD KEY `ID_Empleado` (`ID_Empleado`);

--
-- Indexes for table `Invitados-Alergias`
--
ALTER TABLE `Invitados-Alergias`
  ADD PRIMARY KEY (`ID_Invitado`,`ID_Alergia`),
  ADD KEY `ID_Alergia` (`ID_Alergia`);

--
-- Indexes for table `Menus`
--
ALTER TABLE `Menus`
  ADD PRIMARY KEY (`ID_Menu`);

--
-- Indexes for table `SubEventos`
--
ALTER TABLE `SubEventos`
  ADD PRIMARY KEY (`ID_Subevento`),
  ADD KEY `ID_Evento` (`ID_Evento`);

--
-- Indexes for table `SubEventos-Invitados`
--
ALTER TABLE `SubEventos-Invitados`
  ADD PRIMARY KEY (`ID_Invitado`,`ID_Subevento`),
  ADD KEY `ID_Subevento` (`ID_Subevento`);

--
-- Indexes for table `Alergias`
--
ALTER TABLE `Alergias`
  ADD PRIMARY KEY (`ID_Alergia`);

--
-- Indexes for table `AreasTrabajo`
--
ALTER TABLE `AreasTrabajo`
  ADD PRIMARY KEY (`ID_AreaTrabajo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Empleados`
--
ALTER TABLE `Empleados`
  MODIFY `ID_Empleado` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `Empresas`
--
ALTER TABLE `Empresas`
  MODIFY `ID_Empresa` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `Eventos`
--
ALTER TABLE `Eventos`
  MODIFY `ID_Evento` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `Invitados`
--
ALTER TABLE `Invitados`
  MODIFY `ID_Invitado` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `Menus`
--
ALTER TABLE `Menus`
  MODIFY `ID_Menu` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `SubEventos`
--
ALTER TABLE `SubEventos`
  MODIFY `ID_Subevento` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `Alergias`
--
ALTER TABLE `Alergias`
  MODIFY `ID_Alergia` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `AreasTrabajo`
--
ALTER TABLE `AreasTrabajo`
  MODIFY `ID_AreaTrabajo` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Empleados-SubEventos`
--
ALTER TABLE `Empleados-SubEventos`
  ADD CONSTRAINT `empleado_subevento_ibfk_1` FOREIGN KEY (`ID_Empleado`) REFERENCES `Empleados` (`ID_Empleado`),
  ADD CONSTRAINT `empleado_subevento_ibfk_2` FOREIGN KEY (`ID_Subevento`) REFERENCES `SubEventos` (`ID_Subevento`);

--
-- Constraints for table `Empleados-Alergias`
--
ALTER TABLE `Empleados-Alergias`
  ADD CONSTRAINT `empleado_tipo_alergia_ibfk_1` FOREIGN KEY (`ID_Empleado`) REFERENCES `Empleados` (`ID_Empleado`),
  ADD CONSTRAINT `empleado_tipo_alergia_ibfk_2` FOREIGN KEY (`ID_Alergia`) REFERENCES `Alergias` (`ID_Alergia`);

--
-- Constraints for table `Empleados-AreasTrabajo`
--
ALTER TABLE `Empleados-AreasTrabajo`
  ADD CONSTRAINT `empleado_área_trabajo_ibfk_1` FOREIGN KEY (`ID_Empleado`) REFERENCES `Empleados` (`ID_Empleado`),
  ADD CONSTRAINT `empleado_área_trabajo_ibfk_2` FOREIGN KEY (`ID_AreaTrabajo`) REFERENCES `AreasTrabajo` (`ID_AreaTrabajo`);

--
-- Constraints for table `Empresas-Empleados`
--
ALTER TABLE `Empresas-Empleados`
  ADD CONSTRAINT `empresa_empleado_ibfk_1` FOREIGN KEY (`ID_Empleado`) REFERENCES `Empleados` (`ID_Empleado`),
  ADD CONSTRAINT `empresa_empleado_ibfk_2` FOREIGN KEY (`ID_Empresa`) REFERENCES `Empresas` (`ID_Empresa`);

--
-- Constraints for table `Eventos-Empleados`
--
ALTER TABLE `Eventos-Empleados`
  ADD CONSTRAINT `evento_empleado_ibfk_1` FOREIGN KEY (`ID_Empleado`) REFERENCES `Empleados` (`ID_Empleado`),
  ADD CONSTRAINT `evento_empleado_ibfk_2` FOREIGN KEY (`ID_Evento`) REFERENCES `Eventos` (`ID_Evento`);

--
-- Constraints for table `Eventos-Invitados`
--
ALTER TABLE `Eventos-Invitados`
  ADD CONSTRAINT `evento_invitado_ibfk_1` FOREIGN KEY (`ID_Invitado`) REFERENCES `Invitados` (`ID_Invitado`),
  ADD CONSTRAINT `evento_invitado_ibfk_2` FOREIGN KEY (`ID_Evento`) REFERENCES `Eventos` (`ID_Evento`);

--
-- Constraints for table `Eventos-Menus`
--
ALTER TABLE `Eventos-Menus`
  ADD CONSTRAINT `evento_menú_ibfk_1` FOREIGN KEY (`ID_Evento`) REFERENCES `Eventos` (`ID_Evento`),
  ADD CONSTRAINT `evento_menú_ibfk_2` FOREIGN KEY (`ID_Menu`) REFERENCES `Menus` (`ID_Menu`);

--
-- Constraints for table `Eventos-Alergias`
--
ALTER TABLE `Eventos-Alergias`
  ADD CONSTRAINT `evento_tipo_alergia_ibfk_1` FOREIGN KEY (`ID_Evento`) REFERENCES `Eventos` (`ID_Evento`),
  ADD CONSTRAINT `evento_tipo_alergia_ibfk_2` FOREIGN KEY (`ID_Alergia`) REFERENCES `Alergias` (`ID_Alergia`);

--
-- Constraints for table `Invitados-Alergias`
--
ALTER TABLE `Invitados-Alergias`
  ADD CONSTRAINT `invitado_tipo_alergia_ibfk_1` FOREIGN KEY (`ID_Invitado`) REFERENCES `Invitados` (`ID_Invitado`),
  ADD CONSTRAINT `invitado_tipo_alergia_ibfk_2` FOREIGN KEY (`ID_Alergia`) REFERENCES `Alergias` (`ID_Alergia`);

--
-- Constraints for table `SubEventos-Invitados`
--
ALTER TABLE `SubEventos-Invitados`
  ADD CONSTRAINT `subevento_invitado_ibfk_1` FOREIGN KEY (`ID_Invitado`) REFERENCES `Invitados` (`ID_Invitado`),
  ADD CONSTRAINT `subevento_invitado_ibfk_2` FOREIGN KEY (`ID_Subevento`) REFERENCES `SubEventos` (`ID_Subevento`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
