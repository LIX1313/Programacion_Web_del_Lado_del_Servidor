<?php

require_once 'conexion.php';
require_once 'modelo.php';

class Controlador
{

    public function guardarContacto($datos)
    {

        global $con;

        $modelo = new Modelo($con);

        $nombre = $datos['Nombre'];
        $apellido = $datos['Apellido'];
        $correo = $datos['correo'];

        $tipo_consulta = $datos['tipo'];

        if ($tipo_consulta == "general"){
            $tipo = 1;
        } elseif ($tipo_consulta == "soporte"){
            $tipo = 2;
        }

        $mensaje = $datos['mensaje'];

        $modelo->guardarContacto($nombre, $apellido, $correo, $tipo, $mensaje);

        header("Location: index.php?exito=1");
        exit();
    }

    public function obtenerContactos()
    {
        global $con;

        $modelo = new Modelo($con);
        return $modelo->obtenerContactos();
    }
}
