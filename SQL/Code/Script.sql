CREATE DATABASE PortafolioSQL; /* Creación base de datos */

USE PortafolioSQL; /* Uso de base de datos */

CREATE TABLE Tabla0 (LlavePrimaria VARCHAR(25) PRIMARY KEY, Atributo0 VARCHAR(25), Atributo1 VARCHAR(25)); /* Creación de tabla */
CREATE TABLE Tabla1 (LlavePrimaria VARCHAR(25) PRIMARY KEY, Atributo01 VARCHAR(25), Atributo11 VARCHAR(25)); /* Creación de tabla */
CREATE TABLE Copia_Tabla0 (LlavePrimaria VARCHAR(25) PRIMARY KEY); /* Creación de tabla */

SELECT Atributo0, Atributo1 FROM Tabla0; /* Selección de campos */
SELECT * FROM Tabla0; /* Seleccionar todo */
SELECT DISTINCT Atributo0 FROM Tabla0; /* Seleccionar sin repetir */
SELECT * FROM Tabla0 WHERE Atributo0 = 'Campo0'; /* Seleccionar con filtro */
SELECT * FROM Tabla0 ORDER BY LlavePrimaria DESC; /* Ordenar selección */
SELECT * FROM Tabla0 ORDER BY LlavePrimaria ASC; /* Ordenar selección */
SELECT * FROM Tabla0 WHERE Atributo0 = 'Campo0' AND Atributo1 = 'Campo1'; /* Seleccionar con múltiples filtros */
SELECT * FROM Tabla0 WHERE Atributo0 = 'Campo0' OR 'Campo1'; /* Seleccionar con múltiples opciones */
SELECT * FROM Tabla0 WHERE Atributo0 = 'Campo0' AND (Atributo1 LIKE 'A%' OR 'B%'); /* Seleccionar con filtro y múltiples opciones */
SELECT * FROM Tabla0 WHERE NOT Atributo0 = 'Campo'; /* Seleccionar excepto */
SELECT * FROM Tabla0 WHERE Atributo0 NOT LIKE 'A%'; /* Seleccionar excepto condición */
SELECT * FROM Tabla0 WHERE LlavePrimaria NOT BETWEEN 0 AND 2; /* Seleccionar excepto condición de rango */
SELECT * FROM Tabla0 WHERE Atributo0 NOT IN('Campo00', 'Campo01'); /* Seleccionar excepto múltiples condiciones */
SELECT * FROM Tabla0 WHERE NOT LlavePrimaria > 5; /* Seleccionar excepto condición mayor que */
SELECT * FROM Tabla0 WHERE NOT LlavePrimaria < 5; /* Seleccionar excepto condición menor que */

INSERT INTO Tabla0 (LlavePrimaria, Atributo0, Atributo1) VALUES (0, 'Campo0', 'Campo1'); /* Insertar datos por columna */
INSERT INTO Tabla1 VALUES (1, 'Campo00', 'Campo10'); /* Insertar datos completos */
INSERT INTO Tabla0 (LlavePrimaria, Atributo0) VALUES (2, 'Campo01'); /* Insertar datos en columna */
INSERT INTO Tabla0 VALUES (3, 'Campo02', 'Campo11'), (4, 'Campo03', 'Campo12'), (5, 'Campo04', 'Campo13'); /* Insertar múltiples registros */

SELECT * FROM Tabla0 WHERE Atributo1 IS NULL; /* Seleccionar con filtro de null */
SELECT * FROM Tabla0 WHERE Atributo1 IS NOT NULL; /* Seleccionar con filtro de no es null */

SET SQL_SAFE_UPDATES = 0; /* Desactivar el modo seguro */

UPDATE Tabla0 SET Atributo0 = 'CampoActualizado', Atributo1 = 'CampoActualizado' WHERE LlavePrimaria = 4; /* Actualización de registro */

SET SQL_SAFE_UPDATES = 1; /* Activar el modo seguro */

DELETE FROM Tabla0 WHERE Atributo0 = 'Campo04'; /* Eliminación de registro */

SELECT * FROM Tabla0 LIMIT 2; /* Limitar resultados */
SELECT * FROM Tabla0 WHERE Atributo0 LIKE 'C%' LIMIT 2; /* Limitar resultados con filtro */
SELECT * FROM Tabla0 ORDER BY Atributo0 DESC LIMIT 2; /* Limitar resultados con orden */
SELECT MIN(LlavePrimaria) FROM Tabla0; /* Seleccionar mínimo */
SELECT MAX(LlavePrimaria) FROM Tabla0; /* Seleccionar máximo */
SELECT MAX(LlavePrimaria) AS Mayor FROM Tabla0; /* Seleccionar máximo con alias */
SELECT COUNT(LlavePrimaria) FROM Tabla0; /* Contar registros */
SELECT COUNT(*) FROM Tabla0 WHERE LlavePrimaria > 2; /* Contar registros con condición */
SELECT COUNT(DISTINCT Atributo0) FROM Tabla0; /* Contar registros sin repetir */
SELECT COUNT(LlavePrimaria) AS CantidadCampos FROM Tabla0; /* Contar registros con alias */
SELECT SUM(LlavePrimaria) AS Suma FROM Tabla0; /* Suma de campos numéricos */
SELECT AVG(LlavePrimaria) AS Promedio FROM Tabla0; /* Promedio de campos numéricos */
SELECT * FROM Tabla0 WHERE Atributo0 LIKE 'C%'; /* Seleccionar con filtro de estructura */
SELECT * FROM Tabla0 WHERE Atributo0 LIKE '%amp%'; /* Seleccionar con filtro de estructura */
SELECT * FROM Tabla0 WHERE Atributo0 LIKE '_a%'; /* Seleccionar con filtro de estructura */
SELECT * FROM Tabla0 WHERE Atributo0 LIKE '%[01o]'; /* Seleccionar con filtro de estructura */
SELECT * FROM Tabla0 WHERE Atributo0 LIKE '%[0-9]'; /* Seleccionar con filtro de estructura */
SELECT * FROM Tabla0 WHERE LlavePrimaria IN(0, 2, 4); /* Seleccionar con múltiples condiciones */
SELECT * FROM Tabla0 WHERE LlavePrimaria BETWEEN 0 AND 2; /* Seleccionar con filtro de rango */
SELECT * FROM Tabla0 WHERE LlavePrimaria NOT BETWEEN 0 AND 2; /* Seleccionar con filtro de rango */
SELECT LlavePrimaria AS PK, Atributo0 AS Atr0, Atributo1 AS Atr1 FROM Tabla0 AS Tbl; /* Seleccionar con alias */
SELECT LlavePrimaria PK, Atributo0 Atr0, Atributo1 Atr1 FROM Tabla0 Tbl; /* Seleccionar con alias omitido */
SELECT LlavePrimaria AS "Primary Key", Atributo0 , Atributo1 FROM Tabla0; /* Seleccionar con alias espaciado */
SELECT LlavePrimaria PK, concat(Atributo0, ',', ' ', Atributo1) AS Campos FROM Tabla0; /* Seleccionar concatenados */
SELECT Tabla0.LlavePrimaria PK0, Tabla1.Atributo01 Atr01 FROM Tabla0 INNER JOIN Tabla1 ON Tabla0.LlavePrimaria = Tabla1.LlavePrimaria; /* Selección de concidencias de tabla la primera y segunda tabla */
SELECT Tabla0.LlavePrimaria PK0, Tabla1.Atributo01 Atr01 FROM Tabla0 LEFT JOIN Tabla1 ON Tabla0.LlavePrimaria = Tabla1.LlavePrimaria; /* Selección de tabla 1 y coincidencias con la segunda tabla */
SELECT Tabla0.LlavePrimaria PK0, Tabla1.Atributo01 Atr01 FROM Tabla0 RIGHT JOIN Tabla1 ON Tabla0.LlavePrimaria = Tabla1.LlavePrimaria; /* Selección de tabla 2 y coincidencias con la primera tabla */
SELECT * FROM Tabla0 FULL JOIN Tabla1 ON Tabla0.LlavePrimaria = Tabla1.LlavePrimaria; /* Selección de múltiples tablas */
SELECT * FROM Tabla0, Tabla1; /* Selección de múltiples tablas */
SELECT * FROM Tabla0 UNION SELECT * FROM Tabla1; /* Seleccion conjunta de múltiples tablas */
SELECT * FROM Tabla0 UNION ALL SELECT * FROM Tabla1; /* Seleccion conjunta de múltiples tablas con valores duplicados */
SELECT * FROM Tabla0 WHERE LlavePrimaria NOT IN(1, 3) UNION SELECT * FROM Tabla1; /* Seleccion conjunta de múltiples tablas con filtro */
SELECT COUNT(LlavePrimaria), Atributo0 FROM Tabla0 GROUP BY Atributo0; /* Selección de grupo */
SELECT COUNT(LlavePrimaria), Atributo0, Atributo1 FROM Tabla0 GROUP BY Atributo0 ORDER BY LlavePrimaria DESC; /* Selección de grupo con orden */
SELECT COUNT(Tbl0.LlavePrimaria) AS Cantidad, Tbl0.Atributo0 FROM Tabla0 Tbl0 INNER JOIN Tabla1 Tbl1 ON NOT Tbl0.Atributo0 = Tbl1.Atributo01 GROUP BY Atributo0; /* Selección de grupo con inner join */
SELECT LlavePrimaria, Atributo0, Atributo1 FROM Tabla0 GROUP BY Atributo0 HAVING LlavePrimaria <> 3; /* Seleccionar con filtro secundario */
SELECT LlavePrimaria, Atributo0, Atributo1 FROM Tabla0 GROUP BY Atributo0 HAVING NOT LlavePrimaria = 3; /* Seleccionar con excepción secundaria */
SELECT * FROM Tabla0 WHERE EXISTS(SELECT Atributo0 FROM Tabla0); /* Seleccionar si existe */
SELECT LlavePrimaria, Atributo0, Atributo1 FROM Tabla0 WHERE LlavePrimaria <> ANY(SELECT LlavePrimaria FROM Tabla0 WHERE LlavePrimaria > 3); /* Seleccionar con condición condicionada más booleano */
SELECT ALL Atributo0, Atributo1 FROM Tabla0 WHERE LlavePrimaria > 2; /* Seleccionar con condición condicionada más booleano */
SELECT * INTO Copia_Tabla0 FROM Tabla0 WHERE Atributo0 = 'CampoActualizado'; /* Movida de resgitros */
SELECT * INTO Copia_Tabla1 FROM Tabla1 WHERE 1 = 0; /* Copia de estructura */
INSERT INTO Tabla1 SELECT * FROM Tabla0 WHERE LlavePrimaria > 0; /* Duplicar registros */
SELECT *, CASE WHEN LlavePrimaria = 0 THEN 'Primer resgitro' WHEN LlavePrimaria <= 2 THEN 'Siguientes dos registros' ELSE 'Registros consiguientes' END AS Identificacion FROM Tabla0; /* Seleccionar y filtrar por condición */

DELIMITER // /* Cambiar delimitador */
CREATE PROCEDURE Registros() /* Procedimiento */
BEGIN /* Inicio */
    SELECT * FROM Tabla0; /* Seleccionar */
END // /* Fin */
CREATE PROCEDURE RegistrosParametros(Parametro INT(1) = 2) /* Procedimiento */
BEGIN /* Inicio */
    SELECT * FROM Tabla0 WHERE NOT LlavePrimaria = Parametro; /* Seleccionar */
END // /* Fin */
DELIMITER ; /* Cambiar delimitador */