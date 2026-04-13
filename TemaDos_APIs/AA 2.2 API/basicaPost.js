//Por Luis Mario Ireta Xiu
import axios from "axios";
const registrarUsuario = async () => {
  try {
    const respuesta = await axios.post(
      "https://reqres.in/api/register",
      {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
      {
        headers: {
          "x-api-key":
            "pro_d9165432435eca6188aac97b8ebcd4509eee0f23ecb084e8e2a63628afdc7e28",
        },
      },
    );
    console.log("Registro exitoso: ", respuesta.data);
  } catch (error) {
    console.error("Error en el registro: ", error.response.data);
  }
};

registrarUsuario();
