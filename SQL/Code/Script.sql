CREATE DATABASE PortafolioSQL; /* Creación base de datos */
USE PortafolioSQL; /* Uso de base de datos */
CREATE TABLE Tabla0 (LlavePrimaria VARCHAR(25) PRIMARY KEY, Atributo0 VARCHAR(25), Atributo1 VARCHAR(25)); /* Creación de tabla */
SELECT Atributo0, Atributo1 FROM Tabla0; /* Selección de campos */
SELECT * FROM Tabla0; /* Seleccionar todo */
SELECT DISTINCT Atributo0 FROM Tabla0; /* Seleccionar sin repetir */
SELECT * FROM Tabla0 WHERE Atributo0 = 'Campo0'; /* Seleccionar con filtro */
SELECT * FROM Tabla0 ORDER BY LlavePrimaria DESC; /* Ordenar selección */
SELECT * FROM Tabla0 WHERE Atributo0 = 'Campo0' AND Atributo1 = 'Campo1'; /* Seleccionar con múltiples filtros */