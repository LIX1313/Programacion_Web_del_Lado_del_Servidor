//Por Luis Mario Ireta Xiu
import axios from "axios";

const inicio_sesion = async () => {
  try {
    const res = await axios.post("https://dummyjson.com/auth/login", {
      username: "emilys",
      password: "emilyspass",
    });

    const token = res.data.accessToken;

    console.log("El token es: ", token);

    const respuesta = await axios.get("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    console.log("El usuario es:", respuesta.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
};

inicio_sesion();
