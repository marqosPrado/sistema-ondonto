-- MariaDB dump 10.19  Distrib 10.11.3-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: db_clinica
-- ------------------------------------------------------
-- Server version	10.11.3-MariaDB-1:10.11.3+maria~ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Sequence structure for `tb_estoque_seq`
--

DROP SEQUENCE IF EXISTS `tb_estoque_seq`;
CREATE SEQUENCE `tb_estoque_seq` start with 1 minvalue 1 maxvalue 9223372036854775806 increment by 50 cache 1000 nocycle ENGINE=InnoDB;
SELECT SETVAL(`tb_estoque_seq`, 50001, 0);

--
-- Table structure for table `tb_estoque`
--

DROP TABLE IF EXISTS `tb_estoque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_estoque` (
  `id` bigint(20) NOT NULL,
  `desc_product` varchar(400) NOT NULL,
  `quant_product` int(11) NOT NULL,
  `name_product` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_estoque`
--

LOCK TABLES `tb_estoque` WRITE;
/*!40000 ALTER TABLE `tb_estoque` DISABLE KEYS */;
INSERT INTO `tb_estoque` VALUES
(153,'material de escritório',7,'Tesoura'),
(154,'material de escritório',7,'Lápis'),
(202,'dispositivo usado para remover a saliva e outros fluidos da boca do paciente durante procedimentos dentários.',19,'Sugador de Saliva'),
(203,'pequeno espelho de mão que permite ao dentista visualizar áreas da boca que são difíceis de ver diretamente.',9,'Espelho Dental'),
(204,'É uma pinça usada para manipular agulhas e seringas durante procedimentos como anestesia local.',9,'Pinça de Seringa'),
(205,'É uma pinça usada para manipular agulhas e seringas durante procedimentos como anestesia local.',9,'Pinça de Seringa');
/*!40000 ALTER TABLE `tb_estoque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_paciente`
--

DROP TABLE IF EXISTS `tb_paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_paciente` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `name_paciente` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_paciente`
--

LOCK TABLES `tb_paciente` WRITE;
/*!40000 ALTER TABLE `tb_paciente` DISABLE KEYS */;
INSERT INTO `tb_paciente` VALUES
(1,'marcospradofelix@gmail.com','Marcos Prado','11958889742'),
(3,'kevinju@gmail.com','Kevin Juliano','11958889742'),
(4,'maicon@gmail.com','Maicon Ponte da Silva','11958889742'),
(5,'benk@gmail.com','Kaue Benk','11958889742'),
(6,'aiminhacabeça@gmail.com','RedBull','11958889742'),
(7,'borabeber@gmail.com','Cesar e Menotti','11958889742'),
(9,'cursincursin@gmail.com','cursin','11958889742'),
(10,'mussarelovacilao@gmail.com','mussarelo','11958889742'),
(11,'jailsondiscreto@gmail.com','jailson','11958889742');
/*!40000 ALTER TABLE `tb_paciente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-26 15:50:24
