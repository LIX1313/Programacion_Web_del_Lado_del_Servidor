<?php

require_once 'conexion.php';
require_once 'modelo.php';

class Controlador
{

    public function guardarContacto($datos)
    {

        global $con;

        $modelo = new Modelo($con);

        $nombre = trim($datos['Nombre'] ?? '');
        $apellido = trim($datos['Apellido'] ?? '');
        $correo = trim($datos['correo'] ?? '');

        $tipo_consulta = trim($datos['tipo'] ?? '');

        if ($tipo_consulta == "general") {
            $tipo = 1;
        } elseif ($tipo_consulta == "soporte") {
            $tipo = 2;
        }

        $mensaje = trim($datos['mensaje'] ?? '');

        if (
            $nombre !== '' &&
            $apellido !== '' &&
            $mensaje !== '' &&
            $tipo !== '' &&
            filter_var($correo, FILTER_VALIDATE_EMAIL)
        ) {
            $modelo->guardarContacto($nombre, $apellido, $correo, $tipo, $mensaje);
            header("Location: index.php?exito=1");
            exit;
        }
    }

    public function obtenerContactos()
    {
        global $con;

        $modelo = new Modelo($con);
        return $modelo->obtenerContactos();
    }
}
