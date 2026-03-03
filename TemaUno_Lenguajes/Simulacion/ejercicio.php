
<?php
//PARADIGMA ESTRUCTURADO
//Organiza el programa en bloques (funciones, condicionales y ciclos) 
//evitando saltos incontrolados.
function calcularPromedio($a, $b, $c){
    $suma = $a + $b + $c;
    return $suma / 3;
}

$promedio = calcularPromedio(8,9,10);

if($promedio >= 7){
    echo "Aprobado";
}else{
    echo "Reprobado";
}

//Ejemplo Declarativo en PHP (estilo funcional con arrays):

$numeros = [1,2,3,4,5,6];
$pares = array_filter($numeros, fn($n) => $n % 2 == 0);
print_r($pares);

//3.1 Variables
$nombre = "Luis";
$edad = 20;
$activo = true;
//3.2 Estructuras de Selección (if / switch)
if($edad >= 18){
    echo "Mayor de edad" . "\n";
}

switch($edad){
    case 18:
        echo "Tiene 18 años";
        break;
}
//3.3 Iteración (for y while)
for($i=0;$i<5;$i++){
    echo $i;
}

$contador=0;
while($contador<5){
    echo $contador;
    $contador++;
}
//3.4 Funciones y Uso de Funciones
function sumar($a,$b){
    return $a+$b;
}

echo sumar(5,3) . "\n";

//Indexado
$numeros = [1,2,3,4];
echo $numeros[0] . "\n";

//Asociativo
$persona = [
    "nombre" => "Luis",
    "edad" => 22
];
echo $persona["nombre"] . "\n";

//Multidimensional
$matriz = [
    [1,2],
    [3,4]
];
echo $matriz[0][1] . "\n";

//Funciones sobre arreglos
array_push($numeros,5);
sort($numeros);
$cuadrados = array_map(fn($n)=>$n*$n,$numeros);


//4.2 Tipos de Funciones en PHP
//Función tradicional
function suma($a,$b){
    return $a+$b;
}
echo suma(12,23) . "\n";
//Función anónima
$resta = function($a,$b){
    return $a-$b;
};
echo $resta(9,78) . "\n";
//Arrow function
$doble = fn($x) => $x*2;
echo $doble(5) . "\n";
//Parámetros por referencia
function incrementar(&$x){
    $x++;
}
$numero = 9;
echo incrementar($numero) . "\n";
?>

