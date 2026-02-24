/*
1- La diferencia con un modulo nativo es que viene incluido dentro del NodeJS y puede usarse directamente 
(solo se llama), en cambio, el de NPM es externo y se tiene que instalar con npm install 
para ampliar funcionalidades.

2- La  diferencia es que require es pertenece a CommonJS (predeterminado), cargando los modulos
de forma directa y dinámica durante la ejecución del programa. Con import se debe configurar, como igual
pertence a ES Modules, siendo más moderno, es más compatible con navegadores
y carga los módulos antes de que el programa se ejecute.

3-
a) Porque contiene toda la información y las dependencias necesarias para el proyecto,
así el repositorio solo vincula los modulos de acuerdo al package.json, no se sube porque se
genera nuevamente npm install, lo que evita subir archivos innecesarios al repositorio.
b) Al ejecutar npm install, se instala automáticamente las dependencias especificadas y crea
la carpeta node_modulos junto con el archivo package-lock.json.
*/