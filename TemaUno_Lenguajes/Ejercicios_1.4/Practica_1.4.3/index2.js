//Por Luis Mario Ireta Xiu

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
//Se importa la librería de body-parser
import bodyParser from "body-parser";

const _dirname = dirname(fileURLToPath(import.meta.url));
/* import.meta.url proporciona la URL del módulo actual.
fileURLToPath(import.meta.url) convierte esa URL en una ruta de archivo.
dirname() recupera el nombre del directorio a partir de la ruta del archivo. */

console.log(_dirname);

const app = express();
const port = 3000;
//Declación de variable para el middleware
var nombreEquipo = "";

//Función
function registrador(req, res, next) {
  // Crea middleware
  console.log(req.body); // Muestra los datos enviados por el usuario
  nombreEquipo = req.body["mascota"] + req.body["adjetivo"]; // Concatena los datos enviados por el usuario
  next(); // Llama a la siguiente funcion en la pila de middleware
}

//Implementación de middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});
//Ejecución de la función
app.use(registrador);
//Uso de post
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("<h1>El nombre de tu equipo es: </h1>" + `<h2>${nombreEquipo}</h2>`);
});

app.listen(port, () => {
  console.log(`Servidor ejecutandose en el puerto ${port}`);
});
