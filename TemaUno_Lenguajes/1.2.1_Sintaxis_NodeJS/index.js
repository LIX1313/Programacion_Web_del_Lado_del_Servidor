//Ejercicios 1.2.1 Sintaxis básica de NodeJS
//Luis Mario Ireta Xiu

//Variables
console.log("=============");
console.log("Ejercicio b");
var nombre = "Luis Mario Ireta Xiu";
var edad = 22;
var esEstudiante = true;
var productos = ["Laptop", "Smartphone", "Tablet"];
var iva = 0.16;
var autos = { marca: "Toyota", modelo: "Corolla", año: 2020 };

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

console.log("=============");
console.log("Ejercicio c");
var elementos = ["Hola", 123, true, { nombre: "Luis" }, [1, 2, 3]];
console.log(elementos);

console.log("=============");
console.log("Ejercicio d");
function polinomica() {
  var a = 2,
    b = 6,
    c = 4;
  var valor = a ** 2 + b + c ** 3;
  return valor;
}
console.log(polinomica());

console.log("=============");
console.log("Ejercicio e");
const mayuscula = (cadena) => cadena.toUpperCase();
console.log(mayuscula("fElIciDAD"));

console.log("=============");
console.log("Ejercicio f");
for (let o = 1; o < 11; o++) {
  console.log("El número es: " + o);
}

console.log("=============");
console.log("Ejercicio g");
var proyector = {
  marca: "Epson",
  color: "blanco",
  costo: 15000,
  antiguedad_anos: 10,
  conexion: "HDMI y Internet"
};
console.log(proyector.marca);

console.log("=============");
console.log("Ejercicio h");
var proyector = {
  marca: "Epson",
  color: "blanco",
  costo: 15000,
  antiguedad_anos: 10,
  conexion: "HDMI y Internet",
  descripcion: function () {
    return (
      "La marca es: " +
      this.marca +
      "\nEl color es: " +
      this.color +
      "\nEl costo es: " +
      this.costo +
      "\nLa antigues es: " +
      this.antiguedad_anos +
      "\nLa conexion es: " +
      this.conexion
    );
  },
};
console.log(proyector.descripcion());

console.log("=============");
console.log("Ejercicio j");
console.log("Inicio de simulación de la operación asincróna");

function funcion_asincrona (numero, callback){
setTimeout(() => {
  var valor = 5;
  const resultado = numero ** valor;
  callback(resultado);
}, 100);
}

function mostrar_resultado (valor){
  console.log("El valor del exponente es: "+valor);
}

funcion_asincrona(5, mostrar_resultado);
console.log("Fin de simulación de la operación asincróna");

console.log("=============");
console.log("Ejercicio k");
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
