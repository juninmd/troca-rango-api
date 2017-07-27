CREATE DATABASE  IF NOT EXISTS `troca-rango` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `troca-rango`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: troca-rango
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `smn_tro_alimento`
--

DROP TABLE IF EXISTS `smn_tro_alimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smn_tro_alimento` (
  `IDALIMENTO` int(11) NOT NULL AUTO_INCREMENT,
  `DESCRICAO` varchar(45) NOT NULL,
  `IDTPALIMENTO` int(11) NOT NULL,
  PRIMARY KEY (`IDALIMENTO`),
  KEY `FK_ALIMENTO_TP_ALIMENTO_idx` (`IDTPALIMENTO`),
  CONSTRAINT `FK_ALIMENTO_TP_ALIMENTO` FOREIGN KEY (`IDTPALIMENTO`) REFERENCES `smn_tro_tipo_alimento` (`IDTPALIMENTO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smn_tro_alimento`
--

LOCK TABLES `smn_tro_alimento` WRITE;
/*!40000 ALTER TABLE `smn_tro_alimento` DISABLE KEYS */;
INSERT INTO `smn_tro_alimento` VALUES (1,'Vaca',1),(2,'Porco',1),(3,'Batata Frita',2),(4,'Arroz',4),(5,'Feijão',4),(6,'Alface',3);
/*!40000 ALTER TABLE `smn_tro_alimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smn_tro_cardapio`
--

DROP TABLE IF EXISTS `smn_tro_cardapio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smn_tro_cardapio` (
  `IDCARDAPIO` int(11) NOT NULL AUTO_INCREMENT,
  `DATA` datetime NOT NULL,
  PRIMARY KEY (`IDCARDAPIO`),
  UNIQUE KEY `DATA_UNIQUE` (`DATA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smn_tro_cardapio`
--

LOCK TABLES `smn_tro_cardapio` WRITE;
/*!40000 ALTER TABLE `smn_tro_cardapio` DISABLE KEYS */;
/*!40000 ALTER TABLE `smn_tro_cardapio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smn_tro_cardapio_alimento`
--

DROP TABLE IF EXISTS `smn_tro_cardapio_alimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smn_tro_cardapio_alimento` (
  `IDCARDAPIO` int(11) NOT NULL,
  `IDALIMENTO` int(11) NOT NULL,
  PRIMARY KEY (`IDCARDAPIO`,`IDALIMENTO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smn_tro_cardapio_alimento`
--

LOCK TABLES `smn_tro_cardapio_alimento` WRITE;
/*!40000 ALTER TABLE `smn_tro_cardapio_alimento` DISABLE KEYS */;
/*!40000 ALTER TABLE `smn_tro_cardapio_alimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smn_tro_tipo_alimento`
--

DROP TABLE IF EXISTS `smn_tro_tipo_alimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smn_tro_tipo_alimento` (
  `IDTPALIMENTO` int(11) NOT NULL AUTO_INCREMENT,
  `DESCRICAO` varchar(45) NOT NULL,
  PRIMARY KEY (`IDTPALIMENTO`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smn_tro_tipo_alimento`
--

LOCK TABLES `smn_tro_tipo_alimento` WRITE;
/*!40000 ALTER TABLE `smn_tro_tipo_alimento` DISABLE KEYS */;
INSERT INTO `smn_tro_tipo_alimento` VALUES (1,'Carne'),(2,'Guarnição'),(3,'Salada'),(4,'Base');
/*!40000 ALTER TABLE `smn_tro_tipo_alimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smn_tro_troca`
--

DROP TABLE IF EXISTS `smn_tro_troca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smn_tro_troca` (
  `IDUSUARIO` int(11) NOT NULL,
  `IDCARDAPIO` int(11) NOT NULL,
  `IDALIMENTO` int(11) NOT NULL,
  `DATA` date NOT NULL,
  PRIMARY KEY (`IDUSUARIO`,`IDCARDAPIO`,`IDALIMENTO`),
  KEY `FK_TROCA_CARDAPIO_idx` (`IDCARDAPIO`),
  KEY `FK_TROCA_ALIMENTO_idx` (`IDALIMENTO`),
  CONSTRAINT `FK_TROCA_ALIMENTO` FOREIGN KEY (`IDALIMENTO`) REFERENCES `smn_tro_alimento` (`IDALIMENTO`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_TROCA_CARDAPIO` FOREIGN KEY (`IDCARDAPIO`) REFERENCES `smn_tro_cardapio` (`IDCARDAPIO`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_TROCA_USUARIO` FOREIGN KEY (`IDUSUARIO`) REFERENCES `smn_tro_usuario` (`IDUSUARIO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smn_tro_troca`
--

LOCK TABLES `smn_tro_troca` WRITE;
/*!40000 ALTER TABLE `smn_tro_troca` DISABLE KEYS */;
/*!40000 ALTER TABLE `smn_tro_troca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smn_tro_usuario`
--

DROP TABLE IF EXISTS `smn_tro_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smn_tro_usuario` (
  `IDUSUARIO` int(11) NOT NULL AUTO_INCREMENT,
  `EMAIL` varchar(120) NOT NULL COMMENT 'somente @smn.com.br ou @smnti.com.br',
  `SENHA` varchar(45) NOT NULL,
  `HASH` varchar(45) NOT NULL,
  `NOME` varchar(200) NOT NULL,
  `CELULAR` varchar(11) NOT NULL,
  `PUSHID` varchar(45) DEFAULT NULL,
  `ADMINISTRADOR` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`IDUSUARIO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smn_tro_usuario`
--

LOCK TABLES `smn_tro_usuario` WRITE;
/*!40000 ALTER TABLE `smn_tro_usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `smn_tro_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'troca-rango'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-27 19:38:20
