<?php
$servidor = "localhost"; //sql101.infinityfree.com
$usuario = "root"; //if0_41109292
$clave   = "1234"; //uBZ7NTXWLm
$base_datos = "contactos"; //if0_41109292_contactos

$con = new mysqli($servidor, $usuario, $clave, $base_datos);

if ($con->connect_error) {
    die("Error de conexión: " . $con->connect_error);
}

?>
