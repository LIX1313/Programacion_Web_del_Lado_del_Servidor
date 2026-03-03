<?php

require_once 'conexion.php';

class Modelo
{
    private $con;

    public function __construct($con)
    {
        $this->con = $con;
    }

    public function guardarContacto($nombre, $apellido, $correo, $tipoConsulta, $mensaje)
    {
        $sql = "INSERT INTO contactos 
            (nombre, apellido, correo, idTipoconsulta, mensaje)
            VALUES (?, ?, ?, ?, ?)";

        $stmt = $this->con->prepare($sql);

        if (!$stmt) {
            die("Error en prepare(): " . $this->con->error);
        }

        $stmt->bind_param(
            "sssis", 
            $nombre,
            $apellido,
            $correo,
            $tipoConsulta, 
            $mensaje
        );

        if (!$stmt->execute()) {
            die("Error en execute(): " . $stmt->error);
        }

        return true;
    }


    public function obtenerContactos()
    {
        $sql = "SELECT * FROM contactos";
        $result = $this->con->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }
}
