<?php
$servidor = "localhost";
$usuario = "root";
$clave = "1234";
$base_datos = "contactos";
$puerto = 3306;

$con = new mysqli($servidor, $usuario, $clave, $base_datos, $puerto);

if ($con->connect_error) {
    die("Error de conexión: " . $con->connect_error);
}
?>