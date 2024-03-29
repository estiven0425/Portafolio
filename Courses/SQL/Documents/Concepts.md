#SQL
Esta carpeta contiene un archivo principal con prácticas SQL e información útil.
<hr>
<h3>¿Qué es SQL?</h3>
<b>SQL</b> es un lenguaje estándar para almacenar, manipular y recuperar datos en bases de datos. <br>
<b>SQL</b> son las siglas de <b>Structured Query Language (Lenguaje de Consulta Estructurado)</b>. <br>
<b>SQL</b> permite acceder a las bases de datos y manipularla. <br>
<b>SQL</b> se convirtió en un estándar del Instituto Nacional Americano de Estándares (ANSI) en 1986, y de la Organización Internacional de Normalización (ISO) en 1987.
<hr>
<h3>¿Qué se puede hacer SQL?</h3>
<ul>
    <li><b>SQL</b> puede ejecutar consultas en una base de datos. </li>
    <li><b>SQL</b> puede recuperar datos de una base de datos. </li>
    <li><b>SQL</b> puede insertar registros en una base de datos. </li>
    <li><b>SQL</b> puede actualizar registros en una base de datos. </li>
    <li><b>SQL</b> puede eliminar registros de una base de datos. </li>
    <li><b>SQL</b> puede crear nuevas bases de datos. </li>
    <li><b>SQL</b> puede crear nuevas tablas en una base de datos. </li>
    <li><b>SQL</b> puede crear procedimientos almacenados en una base de datos. </li>
    <li><b>SQL</b> puede crear vistas en una base de datos. </li>
    <li><b>SQL</b> puede establecer permisos en tablas, procedimientos y vistas. </li>
</ul>
Para crear un sitio web que muestre datos de una base de datos, se necesitará:
<ul>
    <li>Un programa de base de datos RDBMS (es decir, MS Access, SQL Server, MySQL).</li>
    <li>Para usar un lenguaje de scripting del lado del servidor, como PHP o ASP.</li>
    <li>Para usar SQL para obtener los datos que desea.</li>
    <li>Para usar HTML / CSS para dar estilo a la página.</li>
</ul>
<b>RDBMS</b> son las siglas de Relational Database Management System (Sistema de Gestión de Bases de Datos Relacionales). <br>
<b>RDBMS</b> es la base de SQL y de todos los sistemas de bases de datos modernos, como MS SQL Server, IBM DB2, Oracle, MySQL y Microsoft Access. <br>
Los datos de <b>RDBMS</b> se almacenan en objetos de base de datos denominados tablas. Una tabla es una colección de entradas de datos relacionadas y consta de columnas y filas. <br>
Cada tabla se divide en entidades más pequeñas llamadas campos. <br>
Un registro, también llamado fila, es cada entrada individual que existe en una tabla. <br>
Una columna es una entidad vertical en una tabla que contiene toda la información asociado a un campo específico de una tabla.
<hr>
<h3>Sentencias SQL</h3>
La mayoría de las acciones que se deben realizar en una base de datos se realizan con instrucciones SQL. <br>
Las sentencias SQL constan de palabras clave que son fáciles de entender. <br>
<h3>Tablas de base de datos</h3>
En la mayoría de los casos, una base de datos contiene una o más tablas. Cada tabla está identificada por un nombre (por ejemplo, "Clientes" o "Pedidos"), y contienen registros (filas) con datos. <br>
<b>Las palabras clave SQL NO distinguen entre mayúsculas y minúsculas</b>. <br>
Algunos sistemas de bases de datos requieren un punto y coma al final de cada instrucción SQL. <br>
El punto y coma es la forma estándar de separar cada instrucción SQL en la base de datos sistemas que permiten ejecutar más de una sentencia SQL en la misma llamada al servidor.
<hr>
<h3>La instrucción SQL SELECT</h3>
La instrucción <b><i>SELECT</i></b> se utiliza para seleccionar datos de una base de datos. <br>
<pre>
SELECT Atributo0, Atributo1 FROM Tabla0;
</pre>
Si se desea devolver todas las columnas, sin especificar el nombre de cada columna, se puede usar la sintaxis <b><i>SELECT *</i></b>.
<hr>
<h3>La instrucción SQL SELECT DISTINCT</h3>
La instrucción se utiliza para devolver solo distintos (diferentes) valores.
<pre>
SELECT DISTINCT Atributo0 FROM Tabla0;
</pre>
<hr>
<h3>La cláusula WHERE de SQL</h3>
La cláusula <b><i>WHERE</i></b> se utiliza para filtrar registros. <br>
Se utiliza para extraer solo aquellos registros que cumplen con un condición. <br>
<pre>
SELECT * FROM Tabla0 WHERE Atributo0 = 'Campo0';
</pre>
SQL requiere comillas simples alrededor de los valores de texto (la mayoría de los sistemas de bases de datos también permiten comillas dobles). <br>
Sin embargo, los campos numéricos no deben ir entre comillas. <br>
Se puede utilizar otros operadores que no sean el operador <b><i>=</i></b> para filtrar la búsqueda.
<hr>
<h3>El SQL ORDER BY</h3>
La palabra clave <b><i>ORDER BY</i></b> se utiliza para ordenar el conjunto de resultados en ascendente o orden descendente. <br>
<pre>
SELECT * FROM Tabla0 ORDER BY LlavePrimaria DESC;
</pre>
La palabra clave <b><i>ORDER BY </i></b> ordena los registros en orden ascendente de forma predeterminada. Para ordenar los registros en orden descendente, hay que utilizar la palabra clave <b><i>DESC</i></b>. <br>
Para los valores de cadena, la palabra clave <b><i>ORDER BY</i></b> ordenará alfabéticamente. <br>
La siguiente instrucción SQL selecciona todos los clientes de la tabla "Clientes", ordenado por la columna "País" y "NombreDeCliente". Esto significa que ordena por País, pero si algunas filas tienen el mismo País, las ordena por Nombre del cliente:
<pre>
SELECT * FROM Clientes ORDER BY Pais, NombreDeCliente;
</pre>
<hr>
<h3>El operador SQL AND</h3>
La cláusula <b><i>WHERE</i></b> puede contener uno o varios operadores <b><i>AND</i></b>. <br>
El operador <b><i>AND</i></b> se utiliza para filtrar registros en función de más de un condición.
<pre>
SELECT * FROM Tabla0 WHERE Atributo0 = 'Campo0' AND Atributo1 = 'Campo1';
</pre>
<b>Todas las condiciones deben ser verdaderas</b>. <br>
Se puede combinar los operadores <b><i>AND</i></b> y <b><i>OR</i></b>. <br>
La siguiente instrucción SQL selecciona todos los clientes de España que comienzan con una "G" o una "R". <br>
Hay que asegurarse de usar paréntesis para obtener el resultado correcto.
<pre>
SELECT * FROM Clientes WHERE Pais = 'España' AND (NombreDeCliente LIKE 'G%' OR NombreDeCliente LIKE 'R%');
</pre>
Sin paréntesis, la instrucción devolverá todos los clientes de España que comiencen con una "G", además de todos los clientes que comiencen con una "R", independientemente del valor del país.
<hr>
<h3>El operador SQL OR</h3>
La cláusula <b><i>WHERE</i></b> puede contener uno o más operadores <b><i>OR</i></b>. <br>
El operador se utiliza para filtrar registros en función de más de una condición. <br>
<h3>¿OR ó AND?</h3>
El operador <b><i>OR</i></b> muestra un registro si alguna de las condiciones es TRUE. <br>
El operador <b><i>AND</i></b> muestra un registro si todas las condiciones son VERDADERAS.
<hr>
<h3>El operador NOT</h3>
El operador <b><i>NOT</i></b> se utiliza en combinación con otros operadores para dar el resultado opuesto, también llamado resultado negativo. <br>
En la declaración de selección a continuación, se quiere devolver a todos los clientes que NO son de España:
<pre>
SELECT * FROM Clientes WHERE NOT Country = 'España';
</pre>
<h3>NO COMO</h3>
<b>Ejemplo</b><br>
Selecciona los clientes que no comiencen con la letra 'A':
<pre>
SELECT * FROM Clientes WHERE ClienteNombre NOT LIKE 'A%';
</pre>
<h3>NO ENTRE</h3>
<b>Ejemplo</b><br>
Selecciona clientes con un ID de cliente que no esté entre 10 y 60:
<pre>
SELECT * FROM Clientes WHERE IdCliente NOT BETWEEN 10 AND 60;
</pre>
<h3>NO EN</h3>
<b>Ejemplo</b><br>
Selecciona clientes que no sean de París o Londres:
<pre>
SELECT * FROM Clientes WHERE Ciudad NOT IN ('Paris', 'London');
</pre>
<h3>NO mayor que</h3>
<b>Ejemplo</b><br>
Selecciona los clientes con un ID de cliente no mayor que 50:
<pre>
SELECT * FROM Customers WHERE NOT CustomerID > 50;
</pre>
Hay un operador no-mayor-que: que te daría el mismo resultado !>.
<h3>NO menor que</h3>
<b>Ejemplo</b><br>
Selecciona los clientes con un ID de cliente no inferior a 50:
<pre>
SELECT * FROM Clientes WHERE NOT IdCliente < 50;
</pre>
Hay un operador no menor que: que le daría el mismo resultado !<.
<hr>
<h3>La instrucción SQL INSERT INTO</h3>
La instrucción <b><i>INSERT INTO</i></b> se utiliza para insertar nuevos registros en una tabla. <br>
Es posible escribir la declaración <b><i>INSERT INTO</i></b> de dos maneras:
<ol>
    <li>Especificar los nombres de las columnas y los valores que se van a insertar:</li>
<pre>
INSERT INTO Tabla (Columna1, Columna2, Columna3, ...) VALUES (Valor1, Valor2, Valor3, ...);
</pre>
    <li>Si se está agregando valores para todas las columnas de la tabla, no es necesario especificar los nombres de columna en la consulta SQL. Sin embargo, hay que asegúrarse de que el orden de los valores está en el mismo orden que las columnas de la tabla.</li>
<pre>
INSERT INTO Tabla VALUES (Valor1, Valor2, Valor3, ...);
</pre>
</ol>
También es posible insertar datos solo en columnas específicas. <br>
También es posible insertar varias filas en una instrucción.
<hr>
<h3>¿Qué es un valor NULL?</h3>
Un campo con un valor <b>NULL</b> es un campo sin valor. <br>
Si un campo de una tabla es opcional, es posible insertar un nuevo registro o actualizar un registro sin agregar un valor a este campo. <br>
Un valor NULL es diferente de un valor cero o de un campo que contiene espacios. ¡Un campo con un valor NULL es aquel que se ha dejado en blanco durante la creación del disco! <br>
No es posible comprobar los valores NULL con operadores de comparación, como =, < o <>.
Se debe usar los operadores <b><i>IS NULL</i></b> y <b><i>IS NOT NULL</i></b> en su lugar. <br>
<b>Sintaxis de IS NULL</b>:
<pre>
SELECT Columna FROM Tabla WHERE Columna IS NULL;
</pre>
<b>IS NOT NULL Sintaxis</b>:
<pre>
SELECT Columna FROM Tabla WHERE Columna IS NOT NULL;
</pre>
El operador <b><i>IS NULL</i></b> se utiliza para comprobar si hay valores vacíos (valores NULL). <br>
Es bueno Utilizar siempre <b><i>IS NULL</i></b> para buscar valores NULL. <br>
El operador <b><i>IS NOT NULL</i></b> se utiliza para comprobar si hay valores no vacíos (NOT NULL valores).
<hr>
<h3>La sentencia UPDATE de SQL</h3>
La instrucción <b><i>UPDATE</i></b> se utiliza para modificar los registros existentes en una tabla. <br>
Sintaxis de UPDATE:
<pre>
UPDATE Tabla SET Columna = Valor1, Columna2 = Valor2 WHERE Condicion;
</pre>
¡Se debe tener cuidado al actualizar los registros de una tabla! Fíjarse en la cláusula WHERE de la declaración UPDATE. La cláusula WHERE especifica qué registro(s) se deben actualizar. Si se omite la cláusula WHERE, se actualizarán todos los registros de la tabla. <br>
La cláusula que determina cuántos registros se actualizarán es <b><i>WHERE</i></b>.
<hr>
<h3>La instrucción DELETE de SQL</h3>
La instrucción <b><i>DELETE</i></b> se utiliza para eliminar registros existentes en una tabla. <br>
<b>Sintaxis de DELETE</b>:
<pre>
DELETE FROM Tabla WHERE Condicion;
</pre>
¡Tener cuidado al eliminar registros en una tabla! Fíjarse en la cláusula WHERE de la declaración DELETE. La cláusula WHERE especifica qué registro(s) se deben eliminar. Si se omite la cláusula WHERE, se eliminarán todos los registros de la tabla. <br>
Es posible eliminar todas las filas de una tabla sin eliminar la tabla. Ésto significa que la estructura de la tabla, los atributos y los índices estarán intactos:
<pre>
DELETE FROM Tabla;
</pre>
Para eliminar una la tabla por completo, se usa la instrucción <b><i>DROP TABLE</i></b>:
<pre>
DROP TABLE Tabla;
</pre>
<h3>La cláusula TOP de SQL Select</h3>
La cláusula <b><i>SELECT TOP</i></b> se utiliza para especificar el número de registros que se van a devolver. <br>
La cláusula <b><i>SELECT TOP</i></b> es útil en tablas grandes con miles de archivo. La devolución de un gran número de registros puede afectar al rendimiento. <br>
No todos los sistemas de bases de datos admiten la cláusula. MySQL admite la cláusula <b><i>SELECT TOP</i></b> para seleccionar un número limitado de registros, mientras que Oracle utiliza <b><i>LIMIT FETCH FIRST</i></b> y <b><i>ROWS ONLYROWNUM</i></b>. <br>
<b>Sintaxis de SQL Server / MS Access</b>:
<pre>
SELECT TOP Numero|percent Columna(s) FROM Tabla WHERE condition;
</pre>
<b>Sintaxis de MySQL</b>:
<pre>
SELECT Columna(s) FROM Tabla WHERE condition LIMIT Numero;
</pre>
<b>Sintaxis de Oracle 12</b>:
<pre>
SELECT Columna(s) FROM Tabla ORDER BY Columna(s) FETCH FIRST Numero ROWS ONLY;
</pre>
<b>Sintaxis de Oracle más antigua</b>:
<pre>
SELECT Columna(s) FROM Tabla WHERE ROWNUM <= Numero;
</pre>
<b>Sintaxis de Oracle más antigua (con ORDER BY)</b>:
<pre>
SELECT * FROM (SELECT Columna(s) FROM Tabla ORDER BY Columna(s)) WHERE ROWNUM <= Numero;
</pre>
La siguiente instrucción SQL muestra el ejemplo equivalente para MySQL:
<pre>
SELECT * FROM Clientes LIMIT 3;
</pre>
La siguiente sentencia SQL muestra el ejemplo equivalente para Oráculo:
Seleccione los 3 primeros registros de la tabla Clientes:
<pre>
SELECT * FROM Customers FETCH FIRST 3 ROWS ONLY;
</pre>
La siguiente sentencia SQL selecciona el primer 50% de los registros de la Tabla "Clientes" (para SQL Server/MS Access):
<pre>
SELECT TOP 50 PERCENT * FROM Customers;
</pre>
La siguiente sentencia SQL muestra el ejemplo equivalente para Oráculo:
<pre>
SELECT * FROM Customers FETCH FIRST 50 PERCENT ROWS ONLY;
</pre>
La siguiente instrucción SQL selecciona los tres primeros registros de la tabla "Clientes", donde el país es "Alemania" (para SQL Server/MS Access):
<pre>SELECT TOP 3 * FROM Customers WHERE Country='Germany';
</pre>
La siguiente instrucción SQL muestra el ejemplo equivalente para MySQL:
<pre>
SELECT * FROM Customers WHERE Country='Germany' LIMIT 3;
</pre>
La siguiente sentencia SQL muestra el ejemplo equivalente para Oráculo:
<pre>
SELECT * FROM Customers WHERE Country='Germany' FETCH FIRST 3 ROWS ONLY;
</pre>
<hr>
<b><i>Las funciones SQL MIN() y MAX()</i></b>
La función <b><i>MIN()</i></b> devuelve el valor más pequeño de la columna seleccionada. <br>
La función <b><i>MAX()</i></b> devuelve el valor más grande de la columna seleccionada. <br>
<h3>Establecer nombre de columna (alias)</h3>
Cuando se utiliza <b><i>MIN()</i></b> o <b><i>MAX()</i></b>, la columna devuelta se denominará de forma predeterminada MIN(Columna). Para dar un nuevo nombre a la columna, se usa la palabra clave <b><i>AS</i></b>.
<hr>
<h3>La función SQL COUNT()</h3>
La función <b><i>COUNT()</i></b> devuelve el número de filas que coincidan con un criterio especificado. <br>
Sintaxis:
<pre>
SELECT COUNT(Columna) FROM Tabla WHERE Condicion;
</pre>
Se puede agregar una cláusula <b><i>WHERE</i></b> para especificar condiciones. <br>
Se puede omitir los duplicados utilizando la palabra clave <b><i>DISTINCT</i></b> de la función <b><i>COUNT</i></b>.
<hr>
<h3>La función SUM() de SQL</h3>
La función <b><i>SUM()</i></b> devuelve la suma total de una columna numérica.
<hr>
<h3>La función AVG() de SQL</h3>
La función <b><i>AVG()</i></b> devuelve el valor promedio de una columna numérica. <br>
Para listar todos los registros con un precio más alto que el promedio, se puede usar la función en una subconsulta. <br>
<b>Ejemplo</b> <br>
Devolver todos los productos con un precio superior al precio medio:
<pre>
SELECT * FROM Producos WHERE Precio > (SELECT AVG(Precio) FROM Products);
</pre>
<hr>
<h3>El operador SQL LIKE</h3>
El operador <b><i>LIKE</i></b> se utiliza en una cláusula <b><i>WHERE</i></b> para buscar un patrón especificado en una columna. <br>
Hay dos comodines que se utilizan a menudo junto con el operador <b><i>LIKE</i></b>:
<ul>
    <li>El signo de porcentaje representa cero, uno o varios caracteres</li>
    <li>El signo de subrayado representa un solo carácter</li>
</ul>
El comodín <b><i>_</i></b> representa un solo carácter. <br>
Puede ser cualquier carácter o número, pero cada uno representa un solo carácter. <br>
El comodín <b><i>%</i></b> representa cualquier número de caracteres, incluso cero.
<h3>Caracteres comodín SQL</h3>
Un carácter comodín se utiliza para sustituir uno o varios caracteres de una cadena.
<ul>
    <li><b>%</b>Representa cero o más caracteres.</li>
    <li><b>_</b>Representa un solo carácter.</li>
    <li><b>[]</b>Representa cualquier carácter individual entre corchetes *.</li>
    <li><b>^</b>Representa cualquier carácter que no esté entre corchetes *.</li>
    <li><b>-</b>Representa cualquier carácter individual dentro del intervalo especificado *.</li>
    <li><b>{}</b>Representa cualquier carácter de escape **.</li>
</ul>
El comodín <b><i>[]</i></b> devuelve un resultado si alguno de los caracteres que contiene obtiene una coincidencia. <br>
El comodín <b><i>-</i></b> le permite especificar un rango de caracteres dentro del comodín <b><i>[]</i></b>.
<hr>
<h3>El operador SQL IN</h3>
El operador <b><i>IN</i></b> permite especificar varios valores en una cláusula <b><i>WHERE</i></b>. <br>
El operador <b><i>IN</i></b> es una abreviatura de múltiples condiciones <b><i>OR</i></b>. <br>
También se puede usar con una subconsulta en la cláusula <b><i>WHERE</i></b>. <br>
Con una subconsulta, se puede devolver todos los registros de la consulta principal que están presentes en el resultado de la subconsulta. <br>
<b>Ejemplo</b> <br>
Devolver todos los clientes que tengan un pedido en la tabla Pedidos:
<pre>
SELECT * FROM Clientes WHERE IdCliente IN (SELECT IdCliente FROM Pedidos);
</pre>
<hr>
<h3>El operador SQL BETWEEN</h3>
El operador <b><i>BETWEEN</i></b> selecciona valores dentro de un rango determinado. Los valores pueden ser números, texto o fechas. <br>
El operador <b><i>BETWEEN</i></b> es inclusivo: se incluyen los valores inicial y final. <br>
Para mostrar los productos fuera del rango, se utiliza <b><i>NOT BETWEEN</i></b>. <br>
La siguiente instrucción SQL selecciona todos los pedidos con un OrderDate entre '01-July-1996' y «31-julio-1996»:
<pre>
SELECT * FROM Orders WHERE OrderDate BETWEEN #07/01/1996# AND #07/31/1996#;
</pre>
O:
<pre>
SELECT * FROM Orders WHERE OrderDate BETWEEN '1996-07-01' AND '1996-07-31';
</pre>
<hr>
<h3>Alias SQL</h3>
Los alias SQL se utilizan para dar un nombre temporal a una tabla o a una columna de una tabla. <br>
Los alias se utilizan a menudo para hacer que los nombres de las columnas sean más legibles. <br>
Un alias solo existe mientras dure esa consulta. <br>
Se crea un alias con la palabra clave <b><i>AS</i></b>. <br>
En realidad, en la mayoría de los lenguajes de bases de datos, puede omitir la palabra clave AS y obtener el mismo resultado. <br>
Si se desea que el alias contenga uno o más espacios, como "My Great Products", se rodea el alias con corchetes o comillas dobles. 
<h3>Concatenar columnas</h3>
La siguiente instrucción SQL crea un alias denominado "Direccion" que combina cuatro columnas (Address, PostalCode, Ciudad y País):
<pre>
SELECT NombreCLiente, Address + ', ' + PostalCode + ' ' + City + ', ' + Country AS Direccion FROM Clientes;
</pre>
Para que la instrucción SQL anterior funcione en MySQL, se usa lo siguiente:
<pre>
SELECT NombreCliente, CONCAT(Address,', ',PostalCode,', ',City,', ',Country) AS Direccion FROM Clientes;
</pre>
Para que la instrucción SQL anterior funcione en Oracle, utilizar lo siguiente:
<pre>
SELECT NombreCliente, (Address || ', ' || PostalCode || ' ' || City || ', ' || Country) AS Direccion FROM Clientes;
</pre>
Puede parecer inútil usar alias en tablas, pero cuando se usa más de una tabla en las consultas, puede hacer que las instrucciones SQL sean más cortas. <br>
La siguiente sentencia SQL selecciona todos los pedidos del cliente con IdCliente=4 (alrededor de la bocina). Utilizamos las tablas "Clientes" y "Pedidos", y darles los alias de tabla de "c" y "o" respectivamente (Aquí usamos alias para acortar el SQL):
<pre>
SELECT o.OrderID, o.OrderDate, c.CustomerName FROM Customers AS c, Orders AS o WHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;
</pre>
La siguiente instrucción SQL es la misma que la anterior, pero sin alias:
<pre>
SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName FROM Customers, Orders WHERE Customers.CustomerName='Around the Horn' AND Customers.CustomerID=Orders.CustomerID;
</pre>
Los alias pueden ser útiles cuando:
<ul>
    <li>Hay más de una tabla implicada en una consulta.</li>
    <li>Las funciones se utilizan en la consulta.</li>
    <li>Los nombres de las columnas son grandes o poco legibles.</li>
    <li>Se combinan dos o más columnas.</li>
</ul>
<hr>
<h3>SQL JOIN</h3>
Una cláusula <b><i>JOIN</i></b> se utiliza para combinar filas de dos o más tablas, en función de una columna relacionada entre ellos. <br>
Estos son los diferentes tipos de JOIN en SQL:
<ul>
    <li><b>(INNER) JOIN</b>: Devuelve los registros que tienen valores coincidentes en ambas tablas.</li>
    <li><b>LEFT (OUTER) JOIN</b>: Devuelve todos los registros de la tabla de la izquierda y los registros coincidentes de la tabla de la derecha.</li>
    <li><b>RIGHT (OUTER) JOIN</b>: Devuelve todos los registros de la tabla de la derecha y el Registros de la tabla de la izquierda.</li>
    <li><b>FULL (OUTER) JOIN</b>: Devuelve todos los registros cuando hay una coincidencia en cualquiera de los dos o la tabla de la derecha.</li>
</ul>
Se recomienda incluir el nombre de la tabla al especificar columnas en la instrucción SQL. <br>
<b><i>JOIN</i></b> y <b><i>INNER JOIN</i></b> devolveran el mismo resultado. <br>
<b><i>INNER</i></b> es el tipo de unión predeterminado para <b><i>JOIN</i></b>, Entonces, cuando se escribe <b><i>INNER JOIN</i></b>, el analizador en realidad escribe <b><i>JOIN</i></b>.
<h3>Palabra clave SQL LEFT JOIN</h3>
La palabra clave <b><i>LEFT</i></b> devuelve todos los registros de la tabla de la izquierda (tabla1) y la palabra clave <b><i>JOIN</i></b> registros coincidentes de la tabla de la derecha (Tabla2). El resultado es 0 registros desde el lado derecho, si no hay coincidencia. <br>
En algunas bases de datos, <b><i>LEFT JOIN</i></b> se denomina <b><i>LEFT OUTER JOIN</i></b>.
<h3>Palabra clave SQL RIGHT JOIN</h3>
La palabra clave <b><i>RIGHT</i></b> devuelve todos los registros de la tabla de la derecha (tabla2) y la palabra clave <b><i>JOIN</i></b> registros coincidentes de la tabla de la izquierda (Tabla1). El resultado es 0 registros desde el lado izquierdo, si no hay coincidencia. <br>
En algunas bases de datos <b><i>RIGHT JOIN</i></b> se llama <b><i>RIGHT OUTER JOIN</i></b>.
<h3>Palabra clave SQL FULL OUTER JOIN</h3>
La palabra clave <b><i>FULL OUTER JOIN</i></b> devuelve todos los registros cuando hay una coincidencia en registros de tabla izquierdo (Tabla1) o derecho (Tabla2). <br>
<b><i>FULL OUTER JOIN</i></b> y <b><i>FULL JOIN</i></b> son lo mismo. <br>
<b><i>FULL OUTER JOIN</i></b> puede devolver potencialmente un tamaño muy grande ¡Conjuntos de resultados!
<hr>
<h3>Autocombinación de SQL</h3>
Una combinación automática es una combinación normal, pero la tabla se une consigo misma. <br>
Sintaxis de unión automática:
<pre>
SELECT Columna(s) FROM Tabla0, Tabla1 WHERE Condicion;
</pre>
<hr>
<b><i>El operador SQL UNION</i></b>
El operador <b><i>UNIONSELECT</i></b> se utiliza para combinar el conjunto de resultados de dos o más instrucciones. <br>
Cada instrucción <b><i>UNION</i></b> debe tener el mismo número de columnas <b><i>SELECT</i></b>. <br>
Las columnas también deben tener tipos de datos similares. <br>
Las columnas de cada declaración <b><i>SELECT</i></b> también debe estar en el mismo orden. <br>
Sintaxis de UNION:
<pre>
SELECT Colunma(s) FROM Tabla0 UNION SELECT Columna(s) FROM Tabla1;
</pre>
De forma predeterminada, el operador <b><i>UNION</i></b> selecciona solo valores distintos. Para permitir valores duplicados, usar <b><i>UNION ALL</i></b>.
<h3>La instrucción SQL GROUP BY</h3>
La instrucción <b><i>GROUP BY</i></b> agrupa las filas que tienen los mismos valores en summary filas, como "encontrar el número de clientes en cada país". <br>
La instrucción <b><i>GROUP BY</i></b> se utiliza a menudo con funciones agregadas (<b><i>COUNT()</i></b>, <b><i>MAX()</i></b>, <b><i>MIN()</i></b>, <b><i>SUM()</i></b>, <b><i>AVG()</i></b>) para agrupar el conjunto de resultados por una o más columnas.
<hr>
<h3>La cláusula HAVING de SQL</h3>
La cláusula <b><i>HAVING</i></b> se agregó a SQL porque la palabra clave <b><i>WHERE</i></b> no puede ser utilizada con funciones de agregado. <br>
Sintaxis HAVING:
<pre>
SELECT Columnas(s) FROM Tabla WHERE Condicion GROUP BY Columa(s) HAVING Condicion ORDER BY Columa(s);
</pre>
<hr>
<h3>El operador SQL EXISTS</h3>
El operador <b><i>EXISTS</i></b> se utiliza para probar la existencia de cualquier registro en una subconsulta. <br>
El operador <b><i>EXISTS</i></b> devuelve TRUE si la subconsulta devuelve uno o varios registros. <br>
Sintaxis de EXISTS:
<pre>
SELECT Columna(s) FROM Tabla WHERE EXISTS (SELECT Columna FROM Tabla WHERE Condicion);
</pre>
<hr>
<h3>Los operadores SQL, ANY y ALL</h3>
Los operadores <b><i>ANY</i></b> y <b><i>ALL</i></b> permiten realizar una comparación entre un solo y un rango de otros valores. <br>
<h3>El operador SQL ANY</h3>
Devuelve un valor booleano como resultado, devuelve TRUE si CUALQUIERA de los valores de la subconsulta cumple la condición
<b><i>ANY</i></b> significa que la condición será verdadera si la operación es verdadera para cualquiera de los valores del rango. <br>
Sintaxis de ANY:
<pre>
SELECT Columna(s) FROM Tabla WHERE Columna Operador ANY (SELECT Columna FROM Tabla WHERE Condicion);
</pre>
El operador debe ser una comparación estándar (=, <>, !=, >, >=, < o <=).
<h3>El operador ALL de SQL</h3>
Devuelve un valor booleano como resultado, devuelve TRUE si TODOS los valores de la subconsulta cumplen la condición. Se usa con sentencias <b><i>SELECT</i></b>, <b><i>WHERE</i></b> y <b><i>HAVING</i></b>. <br>
<b><i>ALL</i></b> significa que la condición será verdadera solo si la operación es verdadera para todos los valores del rango. <br>
Sintaxis de <b><i>ALL</i></b> con <b><i>SELECT</i></b>:
<pre>
SELECT ALL Columna(s) FROM Tabla WHERE Condicion;
</pre>
Sintaxis de <b><i>ALL</i></b> con <b><i>WHERE</i></b> o <b><i>HAVING</i></b>:
<pre>
SELECT Columna(s) FROM Tabla WHERE Columna Operador ALL (SELECT Columna FROM Tabla WHERE Condicion);
</pre>
<hr>
<h3>La instrucción SQL SELECT INTO</h3>
La instrucción <b><i>SELECT INTO</i></b> copia los datos de una tabla en una nueva tabla. <br>
<pre>
SELECT * INTO NuevaTabla [IN DBExterna] FROM ViejaTabla WHERE Condicion;
</pre>
La nueva tabla se creará con los nombres y tipos de columna definidos en la tabla anterior. Se puede crear nuevos nombres de columna mediante la cláusula <b><i>AS</i></b>. <br>
también se puede utiliza <b><i>SELECT INTO</i></b>r para crear un nueva tabla vacía utilizando el esquema de otra. Basta con añadir una cláusula <b><i>WHERE</i></b> que hace que la consulta no devuelva ningún dato.
<h3>La instrucción SQL INSERT INTO SELECT</h3>
La instrucción <b><i>INSERT INTO</i></b> copia los datos de una tabla y lo inserta en otra tabla. <br>
La declaración <b><i>INSERT INTO</i></b> requiere que los tipos de datos de las tablas de origen y destino coincidan. <br>
Los registros existentes en la tabla de destino no se ven afectados.
<pre>
INSERT INTO Tabla1 SELECT * FROM Tabla0 WHERE Condicion;
</pre>
<hr>
<h3>La expresión SQL CASE</h3>
La expresión <b><i>CASE</i></b> pasa por las condiciones y devuelve un valor cuando la primera condición es met (como una declaración if-then-else). Por lo tanto, una vez que una condición es verdadera, se detendrá lectura y devolver el resultado. Si no se cumple ninguna condición, devuelve el valor de la cláusula <b><i>ELSE</i></b>. <br>
Si no hay ninguna parte y no se cumple ninguna condición, devuelve NULL. <br>
Sintaxis de CASE:
<pre>
CASE
    WHEN Condicion1 THEN Resultado1
    WHEN Condicion2 THEN Resultado2
    WHEN CondicionN THEN ResultadoN
    ELSE Resultado
END;
</pre>
<hr>
<h3>Funciones SQL IFNULL(), ISNULL(), COALESCE() y NVL()</h3>
La función <b><i>IFNULL()</i></b> MySQL permite devolver un valor alternativo si una expresión es NULL:
<pre>
SELECT NombreProducto, PrecioUnitario * (UnidadesDisponibles + IFNULL(UnidadesOrdenadas, 0)) FROM Productos;
</pre>
O podemos usar la función <b><i>COALESCE()</i></b>, así: 
<pre>
SELECT NombreProducto, PrecioUnitario * (UnidadesDisponibles + COALESCE(UnidadesOrdenadas, 0)) FROM Productos;
</pre>
La función SQL Server <b><i>ISNULL()</i></b> permite devuelve un valor alternativo cuando una expresión es NULL:
<pre>
SELECT NombreProducto, PrecioUnitario * (UnidadesDisponibles + ISNULL(UnidadesOrdenadas, 0)) FROM Productos;
</pre>
La función MS Access <b><i>IsNull()</i></b> devuelve TRUE (-1) si la expresión es un valor nulo, de lo contrario FALSE (0): 
<pre>
SELECT NombreProducto, PrecioUnitario * (UnidadesDisponibles + IIF(IsNull(UnidadesOrdenadas), 0, UnidadesOrdenadas)) FROM Productos;
</pre>
<hr>
<h3>¿Qué es un procedimiento almacenado?</h3>
Un procedimiento almacenado es un código SQL preparado que se puede guardar, por lo que el El código se puede reutilizar una y otra vez. <br>
Por lo tanto, si tiene una consulta SQL que escribe una y otra vez, guarde como un procedimiento almacenado y, a continuación, simplemente llámelo para ejecutarlo. <br>
También puede pasar parámetros a un procedimiento almacenado, de modo que el procedimiento almacenado pueda actuar en función de los valores de los parámetros que se aprueba. <br>
Sintaxis de procedimientos almacenados:
<pre>
CREATE PROCEDURE Nombre AS ScriptSQL GO;
</pre>
Ejecución de un procedimiento almacenado:
<pre>
EXEC Nombre;
</pre>
<hr>
<h3>Comentarios de SQL</h3>
Los comentarios se utilizan para explicar secciones de sentencias SQL o para impedir la ejecución de sentencias SQL. <br>
Los comentarios de una sola línea comienzan con <b><i>--</i></b>. <br>
Cualquier texto entre <b><i>--</i></b> y el final de la línea será ignorado (no se ejecutará). <br>
Los comentarios de varias líneas comienzan con <b><i>/**/</i></b>. <br>
Cualquier texto entre <b><i>/*</i></b> y <b><i>*/</i></b> será ignorado.
<hr>
<h3>La instrucción SQL CREATE DATABASE</h3>
La instrucción <b><i>CREATE DATABASE</i></b> se utiliza para crear una nueva base de datos SQL. <br>
Sintaxis:
<pre>
CREATE DATABASE BaseDeDatos;
</pre>
Hay que asegurarse de tener privilegios de administrador antes de crear cualquier base de datos. Una vez creada una base de datos se puede verificarla en la lista de bases de datos con el siguiente comando SQL <b><i>SHOW DATABASES;</i></b>.
<hr>
<h3>La instrucción SQL DROP DATABASE</h3>
La instrucción <b><i>DROP DATABASE</i></b> se utiliza para quitar una base de datos SQL existente. <br>
Sintaxis:
<pre>
DROP DATABASE BaseDeDatos;
</pre>
<hr>
<h3>La instrucción SQL BACKUP DATABASE</h3>
La instrucción <b><i>BACKUP DATABASE</i></b> se usa en SQL Server para crear una copia de seguridad completa de una base de datos SQL existente. <br>
Sintaxis:
<pre>
BACKUP DATABASE BaseDeDatos TO DISK = 'Directorio';
</pre>
<h3>La instrucción SQL BACKUP WITH DIFFERENTIAL</h3>
Una copia de seguridad diferencial solo realiza una copia de seguridad de las partes de la base de datos que se tienen desde la última copia de seguridad completa de la base de datos. <br>
Sintaxis:
<pre>
BACKUP DATABASE BaseDeDatos TO DISK = 'Directorio' WITH DIFFERENTIAL;
</pre>
<h3>La instrucción SQL CREATE TABLE</h3>
La instrucción <b><i>CREATE TABLE</i></b> se utiliza para crear una nueva tabla en una base de datos. <br>
Sintaxis:
<pre>
CREATE TABLE Tabla ( Columna1 TipoDeDato, Columna2 TipoDeDato, Columna3 TipoDeDato, ....);
</pre>
Los parámetros de Columna especifican los nombres de las columnas de la tabla. <br>
El parámetro TipoDeDato especifica el tipo de datos que puede contener la columna (por ejemplo, varchar, integer, date, etc.). <br>
<h3>Crear tabla usando otra tabla</h3>
También se puede crear una copia de una tabla existente mediante <b><i>CREATE TABLE</i></b>. <br>
La nueva tabla obtiene las mismas definiciones de columna. Todas las columnas o se pueden seleccionar columnas. <br>
Si se crea una nueva tabla con una tabla existente, la nueva tabla será rellena con los valores existentes de la tabla anterior. <br>
Sintaxis:
<pre>
CREATE TABLE NuevaTabla AS SELECT Columna1, Columna2,... FROM ViejaTabla WHERE ....;
</pre>
<hr>
<h3>La instrucción SQL DROP TABLE</h3>
La instrucción <b><i>DROP TABLE</i></b> se utiliza para quitar una tabla existente en una base de datos. <br>
Sintaxis:
<pre>
DROP TABLE Tabla;
</pre>
<h3>TABLA TRUNCADA DE SQL</h3>
La instrucción <b><i>TRUNCATE TABLE</i></b> se utiliza para eliminar los datos dentro de una tabla, pero no la tabla en sí. <br>
Sintaxis:
<pre>
TRUNCATE TABLE Tabla;
</pre>
<hr>
<h3>Instrucción SQL ALTER TABLE</h3>
La instrucción <b><i>ALTER TABLE</i></b> se utiliza para agregar, eliminar o modificar columnas en una tabla existente. <br>
La instrucción <b><i>ALTER TABLE</i></b> también se usa para agregar y quitar varias restricciones en una tabla existente.
<h3>ALTER TABLE - ADD (Columna)</h3>
Para agregar una columna en una tabla, se utiliza la siguiente sintaxis:
<pre>
ALTER TABLE Tabla ADD Columna Propiedades;
</pre>
<h3>MODIFICAR TABLA - DROP (Columna)</h3>
Para eliminar una columna de una tabla, se utiliza la siguiente sintaxis (Tener en cuenta que algunos sistemas de bases de datos no permiten eliminar una columna):
<pre>
ALTER TABLE Tabla DROP COLUMN Columna;
</pre>
<h3>MODIFICAR TABLA - CAMBIAR EL NOMBRE DE LA COLUMNA</h3>
Para cambiar el nombre de una columna de una tabla, se utilia la siguiente sintaxis:
<pre>
ALTER TABLE Tabla CHANGE ViejoNombre NuevoNombre Propiedades;
</pre>
<h3>ALTERAR TABLA - ALTERAR/MODIFICAR TIPO DE DATOS</h3>
Para cambiar el tipo de dato de una columna de una tabla, se utiliza la siguiente sintaxis:
<h3>SQL Server / MS Access:</h3>
<pre>
ALTER TABLE Tabla ALTER COLUMN Columna Propiedades;
</pre>
<h3>My SQL / Oracle (versión anterior 10G):</h3>
<pre>
ALTER TABLE Tabla MODIFY COLUMN Columna Propiedades;
</pre>
<h3>Oracle 10G y versiones posteriores:</h3>
<pre>
ALTER TABLE Tabla MODIFY Columna Propiedades;
</pre>
<h3>Restricciones de creación de SQL</h3>
Las restricciones se pueden especificar cuando se crea la tabla con la instrucción <b><i>CREATE TABLE</i></b> o después de crear la tabla con la declaración <b><i>ALTER TABLE</i></b>. <br>
Sintaxis:
<pre>
CREATE TABLE Tabla ( Columna1 Propiedades constraint, Columna2 Propiedades constraint, Columna3 Propiedades constraint, .... );
</pre>
Las restricciones SQL se utilizan para especificar reglas para los datos de una tabla. <br>
Las restricciones se utilizan para limitar el tipo de datos que se pueden incluir en una tabla. Éste garantiza la exactitud y fiabilidad de los datos de la tabla. Si hay alguna infracción entre la restricción y la acción de datos, La acción se anula. <br>
Las restricciones pueden ser de nivel de columna o de tabla. Restricciones de nivel de columna se aplican a una columna y las restricciones de nivel de tabla se aplican a toda la tabla. <br>
Las siguientes restricciones se utilizan habitualmente en SQL:
<ul>
    <li><b>NOT NULL</b>: Garantiza que una columna no pueda tener un valor <b><i>NULL</i></b>.</li>
    <li><b>UNIQUE</b>: Garantiza que todos los valores de una columna sean diferente.</li>
    <li><b>PRIMARY KEY</b>: Una combinación de <b><i>NOT NULL</i></b> y <b><i>UNIQUE</i></b>. Identifica de forma única cada fila de una tabla.</li>
    <li><b>FOREIGN KEY</b>: Evita acciones que destruirían los vínculos entre tablas.</li>
    <li><b>CHECK</b>: Garantiza que Los valores de una columna satisfacen una condición específica.</li>
    <li><b>DEFAULT</b>: Establece un valor predeterminado para una columna Si no hay ningún valor se especifica.</li>
    <li><b>CREATE INDEX</b>: Se utiliza para crear y recuperar datos de la base de datos muy rápidamente.</li>
</ul>
<h3>Restricción SQL NOT NULL</h3>
De forma predeterminada, una columna puede contener valores NULL.
La restricción <b><i>NOT NULL</i></b> obliga a una columna a NO aceptar valores NULL. <br>
Esto obliga a que un campo siempre contenga un valor, lo que significa que no puede insertar un nuevo registro ni actualizar un registro sin agregar un valor a este campo.
<h3>Restricción UNIQUE de SQL</h3>
La restricción <b><i>UNIQUE</i></b> garantiza que todos los valores de una columna sean diferentes. <br>
Tanto las restricciones <b><i>UNIQUE</i></b> y <b><i>PRIMARY KEY</i></b> proporcionan una garantía de unicidad para una columna o un conjunto de columnas. <br>
Una restricción <b><i>PRIMARY KEY</i></b> tiene automáticamente una restricción <b><i>UNIQUE</i></b>. <br>
Sin embargo, se puede tener muchas restricciones <b><i>UNIQUE</i></b> por tabla, pero solo una restricción <b><i>PRIMARY KEY</i></b> por tabla.
<h3>Restricción de clave principal de SQL</h3>
La restricción <b><i>PRIMARY KEY</i></b> identifica de forma única cada registro de una tabla. <br>
Las claves principales deben contener valores UNIQUE y no pueden contener valores NULL. <br>
Una tabla solo puede tener UNA clave principal; y en la tabla, esta clave primaria puede constan de una o varias columnas (campos). <br>
Para crear una restricción en la columna "ID" cuando la tabla ya está creada, se utilice el siguiente SQL:
<pre>
ALTER TABLE Tabla ADD Restriccion (Columna);
</pre>
Para permitir la nomenclatura de una restricción y para definir una restricción en varias columnas, se utiliza la siguiente sintaxis SQL:
<pre>
ALTER TABLE Tabla ADD CONSTRAINT NombreRestriccion Restriccion (Columna1,Columna2);
</pre>
<h3>Restricción de clave externa de SQL</h3>
La restricción <b><i>FOREIGN KEY</i></b> se utiliza para evitar acciones que destruyan los vínculos entre tablas. <br>
<b><i>FOREIGN KEY</i></b> es un campo (o colección de campos) en una tabla, que hace referencia a <b><i>PRIMARY KEY</i></b> en otra tabla. <br>
La tabla con la clave externa se denomina tabla secundaria y la tabla con la clave primaria se denomina tabla a la que se hace referencia o principal. <br>
<h3>SQL FOREIGN KEY en CREATE TABLE</h3>
El siguiente SQL crea un en la columna "PersonID" cuando se crea la tabla "Pedidos":
<pre>
CREATE TABLE Orders (OrderID int NOT NULL, OrderNumber int NOT NULL, PersonID int, PRIMARY KEY (OrderID), FOREIGN KEY (PersonID) REFERENCES Persons(PersonID));
</pre>
<h3>Restricción CHECK de SQL</h3>
La restricción <b><i>CHECK</i></b> se utiliza para limitar el rango de valores que se puede colocar en una columna. <br>
Si se define una restricción <b><i>CHECK</i></b> en una columna, se permitirá solo ciertos valores para esta columna. <br>
Si define una restricción  <b><i>CHECK</i></b>en una tabla, se puede limitar los valores de determinadas columnas en función de los valores de otras columnas de la fila.
<h3>Restricción SQL DEFAULT</h3>
La restricción <b><i>DEFAULT</i></b> se utiliza para establecer un valor predeterminado para una columna. <br>
El valor predeterminado se agregará a todos los registros nuevos, si no se especifica ningún otro valor.
<hr>
<h3>Instrucción SQL CREATE INDEX</h3>
La instrucción <b><i>CREATE INDEX</i></b> se utiliza para crear índices en tablas. <br>
Los índices se utilizan para recuperar datos de la base de datos más rápidamente que de otra manera. Los usuarios no pueden ver los índices, solo se utilizan para acelerar las búsquedas/consultas. <br>
La actualización de una tabla con índices lleva más tiempo que la actualización de una tabla sin ellos (porque los índices también necesitan una actualización). Por lo tanto, solo cree índices en columnas en las que se buscará con frecuencia. <br>
<b>Sintaxis de CREATE INDEX</b>. Crea un índice en una tabla. Se permiten valores duplicados:
<pre>
CREATE INDEX Nombre ON Tabla (Columna1, Columna2, ...);
</pre>
<b>Sintaxis de CREATE UNIQUE INDEX</b>. Crea un índice único en una tabla. No se permiten valores duplicados:
<pre>
CREATE UNIQUE INDEX Nombre ON Tabla (Columna1, Columna2, ...);
</pre>
<h3>Declaración DROP INDEX</h3>
La instrucción <b><i>DROP INDEX</i></b> se utiliza para eliminar un índice de una tabla. <br>
<b>Acceso a MS:</b>
<pre>
DROP INDEX Indice ON Tabla;
</pre>
<b>SQL Server:</b>
<pre>
DROP INDEX Tabla.Indice;
</pre>
<b>DB2/Oracle:</b>
<pre>
DROP INDEX Indice;
</pre>
<b>MySQL:</b>
<pre>
ALTER TABLE Tabla DROP INDEX Indice;
</pre>
<h3>Campo AUTO INCREMENT</h3>
El incremento automático permite que se genere automáticamente un número único cuando se inserta un nuevo registro en una tabla. <br>
A menudo, este es el campo clave principal que nos gustaría que se creara automáticamente cada vez que se inserta un nuevo registro. <br>
MySQL utiliza la palabra clave <b><i>AUTO_INCREMENT</i></b> para realizar una función de incremento automático. <br>
De forma predeterminada, el valor inicial de <b><i>AUTO_INCREMENT</i></b> es 1 y se incrementará en 1 para cada nuevo registro. <br>
Para permitir que la secuencia comience con otro valor, se utiliza la siguiente instrucción SQL:
<pre>
ALTER TABLE Tabla AUTO_INCREMENT = Numero;
</pre>
<hr>
<h3>Fechas SQL</h3>
La parte más difícil cuando se trabaja con fechas es asegurarse de que el formato de la fecha que está tratando de insertar, coincide con el formato de la columna de fecha de la base de datos. <br>
Siempre que los datos contengan solo la parte de la fecha, las consultas funcionarán según lo previsto. Sin embargo, si se trata de una parte de tiempo, se obtiene más complicado. <br>
<h3>Tipos de datos de fecha SQL</h3>
<b>MySQL viene con los siguientes tipos de datos para almacenar una fecha o un valor de fecha/hora en la base de datos:</b>
<ul>
    <li><b>DATE</b>: formato AAAA-MM-DD</li>
    <li><b>DATETIME</b>: formato: AAAA-MM-DD HH:MI:SS</li>
    <li><b>TIMESTAMP</b>: formato: AAAA-MM-DD HH:MI:SS</li>
    <li><b>YEAR</b>: formato AAAA o AAA</li>
</ul>
<b>SQL Server incluye los siguientes tipos de datos para almacenar una fecha o un valor de fecha y hora en la base de datos:</b>
<ul>
    <li><b>DATE</b>: formato AAAA-MM-DD</li>
    <li><b>DATETIME</b>: formato: AAAA-MM-DD HH:MI:SS</li>
    <li><b>SMALLDATETIME</b>: formato: AAAA-MM-DD HH:MI:SS</li>
    <li><b>TIMESTAMP</b>: Formato: Un número único</li>
</ul>
Los tipos de fecha se eligen para una columna cuando se crea una nueva tabla en la base de datos.
<hr>
<h3>Instrucción SQL CREATE VIEW</h3>
En SQL, una vista es una tabla virtual basada en el conjunto de resultados de una instrucción SQL. <br>
Una vista contiene filas y columnas, al igual que una tabla real. Los campos de una vista son campos de una o varias tablas reales de la base de datos. <br>
Se puede agregar instrucciones y funciones SQL a una vista y presentar los datos como si los datos provinieran de una sola tabla. <br>
Se crea una vista con la instrucción <b><i>CREATE VIEW</i></b>. <br>
Sintaxis de <b><i>CREATE VIEW</i></b>:
<pre>
CREATE VIEW Vista AS SELECT Columna1, Columna2, ... FROM Tabla WHERE Condicion;
</pre>
SQL Actualización de una vista
Una vista se puede actualizar con la instrucción <b><i>CREATE OR REPLACE VIEW</i></b>.
<hr>
<h3>Inyección SQL</h3>
La inyección SQL es una técnica de inyección de código que puede destruir su base de datos. <br>
La inyección SQL es una de las técnicas de hackeo web más comunes. <br>
La inyección SQL es la colocación de código malicioso en instrucciones SQL, a través de la entrada de la página web. <br>
La inyección SQL generalmente ocurre cuando le pides a un usuario una entrada, como su username/userid, y en lugar de un name/id, el usuario le da una instrucción SQL que, sin saberlo, ejecutará en su base de datos.
<hr>
<h3>Hospedaje SQL</h3>
Si se desea que un sitio web pueda almacenar y recuperar datos de un base de datos, su servidor web debe tener acceso a un sistema de base de datos que utilice el Lenguaje SQL. <br>
Si el servidor web está alojado en un proveedor de servicios de Internet (ISP), se tendrá que buscar planes de alojamiento SQL. <br>
Las bases de datos de alojamiento SQL más comunes son <b>MS SQL Server, Oracle, MySQL y MS Access</b>. <br>
<h3>MS SQL Server</h3>
SQL Server de Microsoft es un popular software de base de datos para sitios web basados en bases de datos con alto tráfico. <br>
SQL Server es un sistema de base de datos SQL muy potente, robusto y con todas las funciones.
<h3>Oracle</h3>
Oracle también es un popular software de base de datos para sitios web basados en bases de datos con alto tráfico. <br>
Oracle es un sistema de base de datos SQL muy potente, robusto y con todas las funciones.
<h3>MySQL</h3>
MySQL también es un popular software de base de datos para sitios web. <br>
MySQL es un sistema de base de datos SQL muy potente, robusto y con todas las funciones. <br>
MySQL es un método económico alternativa a las costosas soluciones de Microsoft y Oracle.
<h3>Acceso a MS</h3>
Cuando un sitio web requiere solo una base de datos simple, Microsoft Access puede ser un solución. <br>
MS Access no es adecuado para un tráfico muy alto, y no es tan potente como MySQL, SQL Server u Oracle.