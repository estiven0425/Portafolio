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
El punto y coma es la forma estándar de separar cada instrucción SQL en la base de datos sistemas que permiten ejecutar más de una sentencia SQL en la misma llamada al servidor. <br>
<h3>La instrucción SQL SELECT</h3>
La instrucción <b><i>SELECT</i></b> se utiliza para seleccionar datos de una base de datos. <br>
<pre>
SELECT Atributo0, Atributo1 FROM Tabla0;
</pre>
Si se desea devolver todas las columnas, sin especificar el nombre de cada columna, se puede usar la sintaxis <b><i>SELECT *</i></b>.
<h3>La instrucción SQL SELECT DISTINCT</h3>
La instrucción se utiliza para devolver solo distintos (diferentes) valores.
<pre>
SELECT DISTINCT Atributo0 FROM Tabla0;
</pre>
<h3>La cláusula WHERE de SQL</h3>
La cláusula <b><i>WHERE</i></b> se utiliza para filtrar registros. <br>
Se utiliza para extraer solo aquellos registros que cumplen con un condición. <br>
<pre>
SELECT * FROM Tabla0 WHERE Atributo0 = 'Campo0';
</pre>
SQL requiere comillas simples alrededor de los valores de texto (la mayoría de los sistemas de bases de datos también permiten comillas dobles). <br>
Sin embargo, los campos numéricos no deben ir entre comillas. <br>
Se puede utilizar otros operadores que no sean el operador <b><i>=</i></b> para filtrar la búsqueda.
<h3>El SQL ORDER BY</h3>
La palabra clave <b><i>ORDER BY</i></b> se utiliza para ordenar el conjunto de resultados en ascendente o orden descendente. <br>
<pre>
SELECT * FROM Tabla0 ORDER BY LlavePrimaria DESC;
</pre>
La palabra clave <b><i>ORDER BY </i></b> ordena los registros en orden ascendente de forma predeterminada. Para ordenar los registros en orden descendente, hay que utilizar la palabra clave <b><i>DESC</i></b>. <br>
Para los valores de cadena, la palabra clave <b><i>ORDER BY</i></b> ordenará alfabéticamente. <br>
La siguiente instrucción SQL selecciona todos los clientes de la tabla "Clientes", ordenado por la columna "País" y "NombreDeCliente". Esto significa que ordena por País, pero si algunas filas tienen el mismo País, las ordena por Nombre del cliente:
<pre>
SELECT * FROM Clientes
ORDER BY Pais, NombreDeCliente;
</pre>
<h3>El operador SQL AND</h3>
La cláusula <b><i>WHERE</i></b> puede contener uno o varios operadores <b><i>AND</i></b>. <br>
El operador <b><i>AND</i></b> se utiliza para filtrar registros en función de más de un condición.
<pre>
SELECT * FROM Tabla0 WHERE Atributo0 = 'Campo0' AND Atributo1 = 'Campo1';
</pre>
<b>Todas las condiciones deben ser verdaderas</b>. <br>
Se puede combinar los operadores <b><i>AND</i></b> y <b><i>OR</i></b>. <br>
La siguiente instrucción SQL selecciona todos los clientes de España que comienzan con una "G" o una "R". <br>
Hay que asegurarse de usar paréntesis para obtener el resultado correcto. <br>
<pre>
SELECT * FROM Clientes WHERE Pais = 'España' AND (NombreDeCliente LIKE 'G%' OR NombreDeCliente LIKE 'R%');
</pre>
Sin paréntesis, la instrucción devolverá todos los clientes de España que comiencen con una "G", además de todos los clientes que comiencen con una "R", independientemente del valor del país. <br>
<hr>
<h3>El operador SQL OR</h3>
La cláusula <b><i>WHERE</i></b> puede contener uno o más operadores <b><i>OR</i></b>. <br>
El operador se utiliza para filtrar registros en función de más de una condición. <br>
<h3>¿OR ó AND?</h3>
El operador <b><i>OR</i></b> muestra un registro si alguna de las condiciones es TRUE. <br>
El operador <b><i>AND</i></b> muestra un registro si todas las condiciones son VERDADERAS. <br>