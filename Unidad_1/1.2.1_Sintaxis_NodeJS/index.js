//Ejercicios 1.2.1 Sintaxis básica de NodeJS
//Luis Mario Ireta Xiu

//Variables
//Ejercicio a
var nombre = "Luis Mario Ireta Xiu";
var edad = 22;
var esEstudiante = true;
var productos = ["Laptop", "Smartphone", "Tablet"];
var iva = 0.16;
var autos = { marca: "Toyota", modelo: "Corolla", año: 2020 };

//Ejercicio b
console.log(
  nombre +
    "\n" +
    edad +
    "\n" +
    esEstudiante +
    "\n" +
    productos +
    "\n" +
    iva +
    "\n" +
    autos.marca +
    " " +
    autos.modelo +
    " " +
    autos.año,
);

//Ejercicio c
var elementos = ["Hola", 123, true, { nombre: "Luis" }, [1, 2, 3]];

//Ejercicio d
function polinomica() {
  var a = 2;
  var b = 6;
  var c = 4;
  var valor = a ** 2 + b + c ** 3;
  return valor;
}

console.log(polinomica());

//Ejercicio e
console.log("=============");
const mayuscula = (cadena) => cadena.toUpperCase();

console.log(mayuscula("fElIciDAD"));

//Ejercicio f
console.log("=============");
for (let o = 1; o < 11; o++) {
  console.log("El número es: " + o);
}

//Ejercicio g
console.log("=============");
var proyector = {
  marca: "Epson",
  color: "blanco",
  costo: 15000,
  antiguedad_anos: 10,
  conexion: "HDMI y Internet",
};

//Ejercicio h
function ver_valor(objeto, propiedad) {
  return objeto[propiedad];
}

console.log(ver_valor(proyector, "marca"));

//Ejercicio j
console.log("=============");
console.log("Inicio de simulación de la operación asincróna");

let valor_prueba = 0;
setTimeout(() => {
  valor_prueba += 2;
  console.log("Finalización de la simulación");
  console.log("Valor prueba es:" + valor_prueba);
}, 0);

for (let p = 0; p < 10; p++) {
  console.log(
    "El valor de p es:" + p + " y el valor prueba es:" + valor_prueba,
  );
}

console.log("Fin de simulación de la operación asincróna");

//Ejercicio k
console.log("=============");
function conversion_cadena_a_numero(cadena) {
  try {
    const numero = Number(cadena);
    if (Number.isNaN(numero)) {
      throw new Error("La cadena no se puede convertir a número");
    }

    return numero;
  } catch (error) {
    return error.message;
  }
}

console.log(conversion_cadena_a_numero("5"));
console.log(conversion_cadena_a_numero("s"));
