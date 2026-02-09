<?php

// Conexión a la base de datos
include 'conexion.php';
include 'controlador.php';

$controlador = new Controlador();

$contactos = $controlador->obtenerContactos();


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- displays site properly based on user's device -->

    <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
    <!-- Font Family -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap"
        rel="stylesheet">
    <!--CSS personalizado-->
    <link rel="stylesheet" href="styles.css">
    <title>Mostrar</title>
</head>

<body>

    <div class="contenido">
        <div class="titulo_mostrar">
            <h2>Contactos</h2>
        </div>
        <div class="tabla">
            <table>
                <thead class="encablezados_tabla">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Tipo de consulta</th>
                        <th>Mensaje</th>
                    </tr>
                </thead>
                <tbody class="cuerpo_tabla">
                    <?php foreach ($contactos as $fila): ?>
                        <tr>
                            <td scope="row"><?php echo $fila['id']; ?></td>
                            <td><?php echo $fila['nombre']; ?></td>
                            <td><?php echo $fila['apellido']; ?></td>
                            <td><?php echo $fila['correo']; ?></td>
                            <td><?php if ($fila['idTipoconsulta'] == 1) {
                                                    echo "Consulta general";
                                                } elseif ($fila['idTipoconsulta'] == 2) {
                                                    echo "Solicitar soporte";
                                                } else {
                                                    echo "Desconocido";
                                                }; ?></td>
                            <td><?php echo $fila['mensaje']; ?></td>
                        </tr>
                    <?php endforeach; ?>
                    <?php if (empty($contactos)): ?>
                        <tr>
                            <td colspan="6" style="text-align: center;">No se encontraron contactos.</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>

        </div>
        <div class="tarjetas">
            <?php foreach ($contactos as $fila):  ?>
                <div class="tarjeta">
                    <div class="tarjeta-header">
                        <span class="id">ID: <?php echo $fila['id']; ?></span>
                    </div>

                    <div class="tarjeta-body">
                        <div class="campo">
                            <span class="tarjeta-titulo">Nombre</span>
                            <span class="valor"><?php echo $fila['nombre']; ?></span>
                        </div>

                        <div class="campo">
                            <span class="tarjeta-titulo">Apellido: </span>
                            <span class="valor"><?php echo $fila['apellido']; ?></span>
                        </div>

                        <div class="campo">
                            <span class="tarjeta-titulo">Correo</span>
                            <span class="valor"><?php echo $fila['correo']; ?></span>
                        </div>

                        <div class="campo">
                            <span class="tarjeta-titulo">Tipo de consulta: </span>
                            <span class="valor"><?php
                                                if ($fila['idTipoconsulta'] == 1) {
                                                    echo "Consulta general";
                                                } elseif ($fila['idTipoconsulta'] == 2) {
                                                    echo "Solicitar soporte";
                                                } else {
                                                    echo "Desconocido";
                                                }; ?></span>
                        </div>

                        <div class="campo campo-mensaje">
                            <span class="tarjeta-titulo">Mensaje:</span>
                            <p class="valor-mensaje">
                                <?php echo $fila['mensaje']; ?>
                            </p>
                        </div>
                    </div>
                </div>
            <?php endforeach ?>
            <?php if (empty($contactos)): ?>
                <h4>
                    <span style="text-align: center; width: 100%;">No se encontraron contactos.</span>
                </h4>
            <?php endif; ?>
        </div>

    </div>

</body>

</html>
