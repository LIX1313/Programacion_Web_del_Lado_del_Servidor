import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const recetaJSON = `[
  {
    "id": "0002",
    "tipo": "taco",
    "nombre": "Taco de cochinita pibil",
    "precio": 25.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Cerdo",
        "preparacion": "Marinado con achiote y cocido en pib"
      },
      "salsa": {
        "nombre": "Xnipec",
        "picor": "Alto"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla morada encurtida",
          "cantidad": "1 porción",
          "ingredientes": ["Cebolla morada", "Naranja agria", "Orégano", "Sal"]
        },
        {
          "nombre": "Tortilla de maíz",
          "cantidad": "2 piezas",
          "ingredientes": ["Masa de maíz", "Agua", "Sal"]
        }
      ]
    }
  },
  {
    "id": "0003",
    "tipo": "taco",
    "nombre": "Taco de lechón al horno",
    "precio": 30.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Lechón",
        "preparacion": "Horneado lentamente"
      },
      "salsa": {
        "nombre": "Salsa de chile habanero",
        "picor": "Muy alto"
      },
      "acompañamientos": [
        {
          "nombre": "Repollo",
          "cantidad": "1 porción",
          "ingredientes": ["Repollo", "Sal", "Limón"]
        },
        {
          "nombre": "Frijol colado",
          "cantidad": "1 cucharada",
          "ingredientes": ["Frijol negro", "Manteca", "Sal"]
        }
      ]
    }
  },
  {
    "id": "0004",
    "tipo": "taco",
    "nombre": "Taco de relleno negro",
    "precio": 28.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Pavo",
        "preparacion": "Cocido en recado negro"
      },
      "salsa": {
        "nombre": "Salsa de tomate",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Huevo cocido",
          "cantidad": "1 pieza",
          "ingredientes": ["Huevo", "Sal"]
        },
        {
          "nombre": "Tortilla de maíz",
          "cantidad": "2 piezas",
          "ingredientes": ["Masa de maíz", "Agua", "Sal"]
        }
      ]
    }
  },
  {
    "id": "0005",
    "tipo": "taco",
    "nombre": "Taco de pollo pibil",
    "precio": 24.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Pollo",
        "preparacion": "Marinado con achiote y horneado"
      },
      "salsa": {
        "nombre": "Salsa de tomate con habanero",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla encurtida",
          "cantidad": "1 porción",
          "ingredientes": ["Cebolla morada", "Vinagre", "Sal"]
        },
        {
          "nombre": "Arroz",
          "cantidad": "1 porción",
          "ingredientes": ["Arroz", "Ajo", "Sal"]
        }
      ]
    }
  }
]`;

const recetasTacos = JSON.parse(recetaJSON);

app.use(bodyParser.urlencoded({ extended: true })); //Habilitar el middleware
app.use(express.static("public")); //Acceso a estilos
app.use(bodyParser.json());

//Obtener datos
app.get("/receta/:type", (req, res) => {
  const elegirTaco = recetasTacos.find(
    (r) =>
      r.ingredientes.proteina.nombre.toLowerCase() ===
      req.params.type.toLowerCase(),
  );
  res.json(elegirTaco || { error: "Receta no encontrada" });
});

app.listen(port, () => {
  console.log("El servidor se ejecuta en: " + port);
});
