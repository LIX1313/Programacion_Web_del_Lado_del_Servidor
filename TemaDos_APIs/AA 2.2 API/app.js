//Por Luis Mario Ireta Xiu
import axios from "axios";

axios
  .get("http://jsonplaceholder.typicode.com/posts")
  .then((respuesta) => {
    console.log("Datos recibidos: ", respuesta.data);
  })
  .catch((error) => {
    console.error("Error al hacer la solicitud: ", error);
  });
