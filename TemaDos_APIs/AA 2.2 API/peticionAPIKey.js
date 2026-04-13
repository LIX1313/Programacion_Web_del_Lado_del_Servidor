//Por Luis Mario Ireta Xiu
import axios from "axios";

const obtenerClima = async () => {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          q: "Mérida",
          appid: "a2ea2f7ab129795018bd92e0cd5ed18a",
          units: "metric",
        },
      },
    );
    console.log("Datos del clima:", response.data);
  } catch (error) {
    console.error("Error:", error.response.data);
  }
};

obtenerClima();
