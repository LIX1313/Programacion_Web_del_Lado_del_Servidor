//Por Luis Mario Ireta Xiu

let objetoJavaScript = {
  id: "0001",
  tipo: "taco",
  nombre: "Taco lechon",
  precio: 20.0,
  ingredientes: {
    proteina: {
      nombre: "Puerco",
      preparacion: "Horneado",
    },
    salsa: {
      nombre: "Tomate verde",
      picor: "Medio",
    },
    acompañamientos: [
      {
        nombre: "Cebolla",
        cantidad: "1 cucharada",
        ingredientes: ["Cebolla blanca", "Cilantro", "Naranja", "Sal"],
      },
      {
        nombre: "Guacamole",
        cantidad: "2 cucharadas",
        ingredientes: [
          "Aguacate",
          "Jugo de limon",
          "Sal",
          "Cebolla",
          "Cilantro",
        ],
      },
    ],
  },
};
//Serializar es convertir JSON
const jsonString = JSON.stringify(objetoJavaScript);

console.log(jsonString);
