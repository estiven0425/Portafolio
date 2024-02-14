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
Cualquier texto entre <b><i>/*</i></b> y <b><i>*/</i></b> será ignorado. <br>
