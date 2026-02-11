<?php
$servidor = "sql101.infinityfree.com";
$usuario = "if0_41109292";
$clave   = "uBZ7NTXWLm";
$base_datos = "if0_41109292_contactos";

$con = new mysqli($servidor, $usuario, $clave, $base_datos);

if ($con->connect_error) {
    die("Error de conexión: " . $con->connect_error);
}

?>
