//Por Luis Mario Ireta Xiu
// Importación de librerías
import axios from "axios";
import express from "express";

// Inicialización del servidor
const app = express();
const port = 3000;

// Configuración de vistas
app.set("views", "./views"); // Define la carpeta donde están las vistas (.ejs)
app.set("view engine", "ejs"); // Indica a Express que usará EJS como motor de plantillas

// Archivos estáticos
app.use(express.static("public")); // Permite acceder a archivos estáticos (CSS, imágenes, JS) desde la carpeta public

// Ruta principal
app.get("/", async (req, res) => {
  try {
    // Llamada a la API que devuelve una cita de anime
    const result = await axios.get("https://api.animechan.io/v1/quotes/random");

    // Extracción de datos de la respuesta
    const quote = result.data.data.content; // Contenido de la cita
    const character = result.data.data.character.name; // Nombre del personaje

    // Renderizado de la vista index.ejs con datos dinámicos
    res.render("index", {
      quote, // Se envía la cita a la vista
      character, // Se envía el personaje a la vista
    });

    console.log(result.data); // Muestra la respuesta completa en consola

  } catch (error) {
    // Manejo de errores
    if (error.response) {
      console.log(error.response.data); // Error proveniente de la API
    } else {
      console.log("Error:", error.message); // Error generals
    }
    res.status(500).send("Error al obtener la cita"); // Respuesta al cliente
  }
});

// Inicio del servidor
app.listen(port, () => {
  console.log("Server ejecutándose en el puerto", port);
});