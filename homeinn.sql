-- MySQL dump 10.13  Distrib 9.1.0, for Win64 (x86_64)
--
-- Host: localhost    Database: HomeInn
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `catalog_items`
--

DROP TABLE IF EXISTS `catalog_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catalog_items` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Item_ID` int unsigned NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `Item_ID` (`Item_ID`),
  CONSTRAINT `catalog_items_ibfk_1` FOREIGN KEY (`Item_ID`) REFERENCES `items` (`ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalog_items`
--

LOCK TABLES `catalog_items` WRITE;
/*!40000 ALTER TABLE `catalog_items` DISABLE KEYS */;
INSERT INTO `catalog_items` VALUES (1,16),(2,17),(3,18),(4,49),(5,50),(6,51),(7,52),(8,53),(9,54),(10,55),(11,56),(12,57),(13,94),(14,95),(15,96),(16,97),(17,98),(18,99),(19,100),(20,101),(21,102),(22,103),(23,104),(24,105),(25,106),(26,107),(27,108),(28,109);
/*!40000 ALTER TABLE `catalog_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `ItemName` varchar(50) NOT NULL,
  `Category` enum('Trending','Catalog') NOT NULL,
  `Subcategory` enum('Chairs','Furniture','Couches','Tables') NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `Image_URL` varchar(255) DEFAULT NULL,
  `Trending` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=278 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (16,'Luxury Chair','Trending','Chairs',129.99,'Chair01.png',1),(17,'Best Chair','Trending','Chairs',169.99,'Chair02.png',1),(18,'Good Chair','Trending','Chairs',199.99,'Chair03.png',1),(49,'Luxury Couch','Trending','Couches',200.00,'Couch01.png',1),(50,'Best Couch','Trending','Couches',250.00,'Couch02.png',1),(51,'Good Couch','Trending','Couches',99.99,'Couch03.png',1),(52,'Luxury Furniture','Trending','Furniture',250.00,'Furniture01.png',1),(53,'Best Furniture','Trending','Furniture',170.50,'Furniture02.png',1),(54,'Good Furniture','Trending','Furniture',160.20,'Furniture03.png',1),(55,'Luxury Table','Trending','Tables',180.50,'Table01.png',1),(56,'Best Table','Trending','Tables',110.40,'Table02.png',1),(57,'Good Table','Trending','Tables',80.00,'Table03.png',1),(94,'Luxury Chair','Catalog','Chairs',129.99,'Chair01.png',0),(95,'Best Chair','Catalog','Chairs',169.99,'Chair02.png',0),(96,'Good Chair','Catalog','Chairs',199.99,'Chair03.png',0),(97,'Exclusive Chair','Catalog','Chairs',219.99,'Chair04.png',0),(98,'Luxury Couch','Catalog','Couches',200.00,'Couch01.png',0),(99,'Best Couch','Catalog','Couches',250.00,'Couch02.png',0),(100,'Good Couch','Catalog','Couches',99.99,'Couch03.png',0),(101,'Premium Couch','Catalog','Couches',275.00,'Couch04.png',0),(102,'Luxury Furniture','Catalog','Furniture',250.00,'Furniture01.png',0),(103,'Best Furniture','Catalog','Furniture',170.50,'Furniture02.png',0),(104,'Good Furniture','Catalog','Furniture',160.20,'Furniture03.png',0),(105,'Elegant Dresser','Catalog','Furniture',220.00,'Furniture04.png',0),(106,'Luxury Table','Catalog','Tables',180.50,'Table01.png',0),(107,'Best Table','Catalog','Tables',110.40,'Table02.png',0),(108,'Good Table','Catalog','Tables',80.00,'Table03.png',0),(109,'Modern Table','Catalog','Tables',190.00,'Table04.png',0);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trending_items`
--

DROP TABLE IF EXISTS `trending_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trending_items` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Item_ID` int unsigned NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `Item_ID` (`Item_ID`),
  CONSTRAINT `trending_items_ibfk_1` FOREIGN KEY (`Item_ID`) REFERENCES `items` (`ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trending_items`
--

LOCK TABLES `trending_items` WRITE;
/*!40000 ALTER TABLE `trending_items` DISABLE KEYS */;
INSERT INTO `trending_items` VALUES (1,16),(2,17),(3,18),(4,49),(5,50),(6,51),(7,52),(8,53),(9,54),(10,55),(11,56),(12,57);
/*!40000 ALTER TABLE `trending_items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-09 12:05:20
