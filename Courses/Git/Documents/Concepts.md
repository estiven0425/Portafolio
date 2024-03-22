# GIT
Esta carpeta contiene información útil sobre GIT y GitHub
<hr>
<h3>¿Qué es GIT?</h3>
Git es un sistema de control de versiones. <br>
Git ayuda a realizar un seguimiento de los cambios de código. <br>
Git se utiliza para colaborar en el código. <br>
Git y GitHub son cosas diferentes. <br>
Git es un sistema de control de versiones popular. Fue creado por Linus Torvalds en 2005 y ha sido mantenido por Junio ​​Hamano desde entonces. <br>
Se utiliza para:
<ul>
    <li>Cambios en el código de seguimiento.</li>
    <li>Seguimiento de quién realizó cambios.</li>
    <li>Colaboración en codificación.</li>
</ul>
<h3>¿Qué hace Git?</h3>
<ul>
    <li>Gestionar proyectos con Repositorios.</li>
    <li>Clonar un proyecto para trabajar en una copia local.</li>
    <li>Controlar y rastrear los cambios con Staging y Committing.</li>
    <li>Ramificar y fusionar para permitir trabajar en diferentes partes y versiones de un proyecto.</li>
    <li>Extraer la última versión del proyecto a una copia local.</li>
    <li>Enviar actualizaciones locales al proyecto principal.</li>
</ul>
<hr>
<h3>¿Cómo trabajar con Git?</h3>
<ul>
    <li>Inicializar Git en una carpeta, convirtiéndola en un repositorio</li>
    <li>Git ahora crea una carpeta oculta para realizar un seguimiento de los cambios en esa carpeta</li>
    <li>Cuando un archivo se cambia, agrega o elimina, se considera modificado</li>
    <li>Seleccionar los archivos modificados que se desea Stage</li>
    <li>Los archivos preparados están comprometidos, lo que solicita a Git que almacene una instantánea permanente de los archivos.</li>
    <li>Git permite ver el historial completo de cada confirmación.</li>
    <li>Se puede volver a cualquier confirmación anterior.</li>
    <li>Git no almacena una copia separada de cada archivo en cada confirmación, ¡pero realiza un seguimiento de los cambios realizados en cada confirmación!</li>
</ul>
<h3>¿Por qué Git?</h3>
<ul>
    <li>¡Más del 70% de los desarrolladores usan Git!</li>
    <li>Los desarrolladores pueden trabajar juntos desde cualquier parte del mundo.</li>
    <li>Los desarrolladores pueden ver la historia completa del proyecto.</li>
    <li>Los desarrolladores pueden volver a versiones anteriores de un proyecto.</li>
</ul>
<h3>¿Qué es GitHub?</h3>
<ul>
    <li>Git no es lo mismo que GitHub.</li>
    <li>GitHub crea herramientas que utilizan Git.</li>
    <li>GitHub es el mayor servidor de código fuente del mundo y es propiedad de Microsoft desde 2018.</li>
</ul>
<hr>
<h3>Instalación de Git</h3>
Se puede descargar Git de forma gratuita desde el siguiente sitio web: <a>https://www.git-scm.com/</a>
<hr>
<h3>Usar Git con línea de comando</h3>
Para comenzar a usar Git, primero se abre el shell de comandos. <br>
Para Windows, se puede usar Git bash, que viene incluido en Git para Windows. Para Mac y Linux se puede utilizar el terminal integrado. <br>
Lo primero que se debe hacer es comprobar si Git está instalado correctamente:
<pre>
git --version
</pre>
Ahora se debe hacer saber a Git quién eres. Esto es importante para los sistemas de control de versiones, ya que cada confirmación de Git utiliza esta información:
<pre>
git config --global user.name "Usuario"
git config --global user.email "E-mail"
</pre>
Se usa <b><i>global</i></b> para configurar el nombre de usuario y el correo electrónico para cada repositorio en la computadora. <br>
Si se desea configurar el nombre de usuario/correo electrónico solo para el repositorio actual, se puede eliminar <b><i>global</i></b>. <br>
Ahora, se creea una nueva carpeta para el proyecto proyecto:
<pre>
mkdir Carpeta
</pre>
<b><i>mkdir</i></b> crea un nuevo directorio. <br>
Una vez que se haya navegado a la carpeta correcta, se puede inicializar Git en esa carpeta:
<pre>
git init 
</pre>
<pre>
<b><i>ls</i></b> enumerará los archivos en el directorio. Se puede ver que index.txt está ahí.
ls
index.txt
</pre>
Luego se verifica con <b><i>Git status</i></b> y se comprueba si es parte del repositorio:
<pre>
git status
</pre>
¡Ahora Git conoce el archivo, pero no lo ha agregado al repositorio! <br>
Los archivos en la carpeta del repositorio Git pueden estar en uno de dos estados:
<ul>
    <li><b>Seguimiento</b>: archivos que Git conoce y se agregan al repositorio.</li>
    <li><b>Sin seguimiento</b>: archivos que están en su directorio de trabajo, pero no agregados al repositorio.</li>
</ul>
Cuando se agregan archivos por primera vez a un repositorio vacío, no se realiza ningún seguimiento de ellos. Para que Git los rastree, debe prepararlos o agregarlos al entorno de ensayo.
<hr>
<h3>Entorno de prueba de Git</h3>
Una de las funciones principales de Git son los conceptos de <b><i>Staging Environment</i></b> y <b><i>Commit</i></b>. <br>
Mientras se trabaja, es posible que se esté agregando, editando y eliminando archivos. Pero cada vez que se alcance un hito o termine una parte del trabajo, se deben agregar los archivos a un entorno de prueba. <br>
Los archivos preparados son archivos que están listos para enviarse al repositorio en el que se está trabajando. <br>
Terminado de trabajar con index.txt. Entonces se puede agregar al entorno de ensayo:
<pre>
git add index.txt
</pre>
El archivo debe estar en etapa de preparación. Se comprueba el estado con <b><i>git status</i></b>. <br>
Para agregar múltiples archivos se usa:
<pre>
git add --all
</pre>
El uso <b><i>--all</i></b> en lugar de nombres de archivos individuales cambiará todos los archivos (nuevos, modificados y eliminados).
<hr>
<h3>Confirmación de Git</h3>
Terminado el trabajo, se está listo para pasar de <b><i>stage</i></b> a <b><i>commit</i></b> a el repositorio. <br>
Agregar confirmaciones realiza un seguimiento del progreso y cambios a medida que se trabaja. Git considera cada <b><i>commit</i></b> punto de cambio o "punto de guardado". Es un punto del proyecto al que se puede volver si se encuentra un error o se quiere realizar un cambio. <br>
Cuando se hace <b><i>commit</i></b>, siempre se debe incluir un mensaje. <br>
Al agregar mensajes claros a cada <b><i>commit</i></b>, será fácil para usted (y para los demás) ver qué ha cambiado y cuándo.
<pre>
git commit -m "Primer commit"
</pre>
El entorno de ensayo se ha comprometido con nuestro repositorio, con el mensaje "Primer commit". <br>
A veces, cuando se realizan pequeños cambios, utilizar el entorno de prueba parece una pérdida de tiempo. Es posible realizar cambios directamente, omitiendo el entorno de prueba. La opción <b><i>-a</i></b> preparará automáticamente cada archivo modificado y ya rastreado. <br>
Y comprobar el estado del repositorio. Pero esta vez usando la opción <b><i>--short</i></b> para ver los cambios de una forma más compacta.
<pre>
git status --short
</pre>
Las banderas de estado breves son:
<ul>
    <li><b>??</b> Archivos sin seguimiento.</li>
    <li><b>A</b> Archivos agregados al escenario.</li>
    <li><b>M</b> Archivos modificados.</li>
    <li><b>D</b> Archivos eliminados.</li>
</ul>
Vemos que el archivo que se esperaba está modificado. Así que se realiza el commit directamente:
<pre>
git commit -a -m "Commit directo"
</pre>
Para ver el historial de confirmaciones de un repositorio, se puede utilizar el comando <b><i>log</i></b>:
<pre>
git log
</pre>
<hr>
<h3>Ayuda de Git</h3>
Si se tienen problemas para recordar comandos u opciones de comandos, se puede usar <b><i>Git help</i></b>.
<pre>
git help
</pre>
Hay un par de formas diferentes de utilizar el comando <b><i>help</i></b> en la línea de comando:
<ul>
    <li><b>git command -help</b>: Para ver todas las opciones disponibles para el comando específico.</li>
    <li><b>git help --all</b>: Para ver todos los comandos posibles.</li>
</ul>
También se puede utilizar <b><i>--help</i></b> en lugar de <b><i>-help</i></b> para abrir la página del manual de Git correspondiente.
<hr>
<h3>Ramas de Git</h3>
En Git, <b><i>branches</i></b> es una versión nueva/separada del repositorio principal. <br>
Digamos que se tiene un proyecto grande y se necesita actualizar el diseño. <br>
<h3>¿Cómo funcionaría eso sin y con Git?</h3>
Sin Git:
<ul>
    <li>Hacer copias de todos los archivos relevantes para evitar afectar la versión en vivo.</li>
    <li>Comenzar a trabajar con el diseño y descubrir que el código depende del código de otros archivos, ¡que también deben cambiarse!</li>
    <li>Hacer también copias de los archivos dependientes. Asegurarse de que cada dependencia de archivo se haga referencia al nombre de archivo correcto</li>
    <li>¡EMERGENCIA! ¡Hay un error no relacionado en otra parte del proyecto que debe solucionarse lo antes posible!</li>
    <li>Guardar todos los archivos y tomar nota de los nombres de las copias en las que se estaba trabajando.</li>
    <li>Trabajar en el error no relacionado y actualizar el código para solucionarlo.</li>
    <li>Volver al diseño y terminar el trabajo allí.</li>
    <li>Copiar el código o cambiar el nombre de los archivos para que el diseño actualizado esté en la versión en vivo.</li>
    <li>(2 semanas después, te das cuenta de que el error no relacionado no se solucionó en la nueva versión de diseño porque copiaste los archivos antes de la corrección)</li>
</ul>
Con Git:
<ul>
    <li>Con una nueva rama llamada new-design, editar el código directamente sin afectar la rama principal</li>
    <li>¡EMERGENCIA! ¡Hay un error no relacionado en otra parte del proyecto que debe solucionarse lo antes posible!</li>
    <li>Crear una nueva rama desde el proyecto principal llamada Small-Error-Fix</li>
    <li>Corregir el error no relacionado y combinar la rama de corrección de errores pequeños con la rama principal</li>
    <li>Regresar a la rama de nuevo diseño y terminar el trabajo allí.</li>
    <li>Fusionar la rama de nuevo diseño con la principal (recibir una alerta sobre la pequeña solución de error que faltaba)</li>
    <li>Las ramas permiten trabajar en diferentes partes de un proyecto sin afectar la rama principal.</li>
</ul>
Cuando se completa el trabajo, se puede fusionar una rama con el proyecto principal. <br>
Incluso se puedes cambiar entre ramas y trabajar en diferentes proyectos sin que interfieran entre sí. <br>
¡La ramificación en Git es muy ligera y rápida! <br>
Se está trabajando en el repositorio local y no se quiere perturbar ni arruinar el proyecto principal. <br>
Entonces se crea un nuevo branch:
<pre>
git branch Rama0
</pre>
Ahora se confirma que se ha creado un nuevo branch:
<pre>
git branch
</pre>
<b><i>checkout</i></b> es el comando utilizado para verificar un branch. Pasándonos del actual branch, al especificado al final del comando:
<pre>
git checkout Rama0
</pre>
Ahora se ha movido el espacio de trabajo actual de la rama master a la nueva branch.
<h3>Cambiar entre sucursales</h3>
Ahora veamos qué tan rápido y fácil es trabajar con diferentes ramas y qué tan bien funciona. <br>
Podemos ver el nuevo archivo style.txt, podemos ver que el código ha sido modificado. Todo es como debería ser. <br>
Ahora, veamos qué sucede cuando se cambiam de rama a master:
<pre>
git checkout master
</pre>
El nuevo archivo no forma parte de esta rama.
<h3>Fusionar ramas</h3>
Primero, necesitamos cambiar a la rama master:
<pre>
git checkout master
</pre>
Ahora se fusionan la rama actual (maestra) con la otra rama:
<pre>
git merge Rama0
</pre>
Dado que la rama de reparación de emergencia vino directamente de master y no se realizaron otros cambios en master mientras estábamos trabajando, Git ve esto como una continuación de master. Por lo tanto, puede "Avanzar rápidamente", simplemente apuntando tanto al maestro como a la solución de emergencia al mismo compromiso. <br>
Ahora se puede pasar a Rama0 y seguir trabajando. <br>
<b><i>git remote add origin</i></b> URL especifica que está agregando un repositorio remoto, con el especificado URL, como origin a su repositorio Git local.
<hr>
<h3>Git pull de GitHub</h3>
Cuando se trabaja en equipo en un proyecto, es importante que todos se mantengan actualizados. <br>
Cada vez que se comience a trabajar en un proyecto, se debería obtener los cambios más recientes en su copia local. <br>
Con Git, se puede hacer eso con pull. <br>
pull es una combinación de 2 comandos diferentes:
<ul>
    <li>fetch</li>
    <li>merge</li>
</ul>
<b><i>fetch</i></b> obtiene todo el historial de cambios de una rama/repositorio rastreado. <br>
<b><i>merge</i></b> combina la rama actual con una rama especificada.