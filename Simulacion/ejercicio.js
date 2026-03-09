//Paradigma declarativo
const numeros1 = [1,2,3,4,5,6];
const pares = numeros1.filter(n => n % 2 === 0);
console.log(pares);

//3.1 Variables
let nombre = "Luis";
let edad = 20;
let activo = true;
//3.2 Estructuras de Selección (if / switch)
if(edad >= 18){
    console.log("Mayor de edad");
}

switch(edad){
    case 18:
        console.log("Tiene 18 años");
        break;
}
//3.3 Iteración (for y while)
for(let i=0;i<5;i++){
    console.log(i);
}

let contador=0;
while(contador<5){
    console.log(contador);
    contador++;
}
//3.4 Funciones y Uso de Funciones
function sumar(a,b){
    return a+b;
}

console.log(sumar(5,3));

//Declaración y acceso
let numeros = [1,2,3,4];
console.log(numeros[0]);

//Métodos principales
numeros.push(5);
numeros.pop();
numeros.shift();
numeros.unshift(0);

//Recorrido
numeros.forEach(n => console.log(n));

//Transformación
let dobles = numeros.map(n => n*2);
let mayores = numeros.filter(n => n>2);
let suma = numeros.reduce((a,b)=>a+b,0);

//3.2 Tipos de Funciones
//Declarativa
function suma1(a,b){
    return a+b;
}

console.log(suma1(9,8));

//Función anónima
const resta = function(a,b){
    return a-b;
}

console.log(resta(9,5));

//Arrow function
const cuadrado = x => x*x;

console.log(cuadrado(3));

//Callback
function procesar(fn, valor){
    return fn(valor);
}

function print(x) {
    return x * 2;
}
//Clases
console.log(procesar(print, 120));

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log("Hola, soy " + this.nombre);
    }
}
//Arreglos y funciones
let persona1 = new Persona("Luis", 20);
persona1.saludar();

let numeros2 = [2, 4, 6, 8];

function mostrarNumeros(lista) {
    lista.forEach(function(num) {
        console.log(num);
    });
}

mostrarNumeros(numeros2);

//Objetos con métodos
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,

    mostrarInfo: function() {
        console.log(this.marca + " " + this.modelo);
    }
};

coche.mostrarInfo();
