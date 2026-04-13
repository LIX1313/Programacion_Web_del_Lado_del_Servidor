//Hecho por Luis Mario Ireta Xiu
fetch("http://jsonplaceholder.typicode.com/posts")
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error("Respuesta del servidor fallida " + respuesta.statusText);
    }
    return respuesta.json();
  })
  .then((datos) => {
    console.log("Datos recibidos: ", datos);
  })
  .catch((error) => {
    console.log("Error al hacer la solicitud: ", error);
  });
