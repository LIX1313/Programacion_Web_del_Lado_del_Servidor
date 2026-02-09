<?php

// Conexión a la base de datos
include 'conexion.php';
include 'controlador.php';

$controlador = new Controlador();

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['Nombre']) && isset($_POST['Apellido']) && isset($_POST['correo']) && isset($_POST['tipo']) && isset($_POST['mensaje'])) {
  $controlador->guardarContacto($_POST);
}

?>

<!DOCTYPE html>
<html lang="es">

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
  <title>Formulario de contacto</title>

</head>

<body>

  <div class="contenido">
    <!--Mensaje de éxito-->
    <?php if (isset($_GET['exito']) && $_GET['exito'] == 1): ?>
      <div class="mensaje_exito" id="mensaje_exito">
        <div class="contenido_mensaje">
          <div class="titulo_mensaje"> <img src="assets/images/icon-success-check.svg" alt="">
            <h6>¡Mensaje enviado con éxito!</h6>
          </div>
          <h6>Gracias por completar el formulario. ¡Nos pondremos en contacto pronto!</h6>
        </div>
      </div>
    <?php endif; ?>
    <div class="formulario">
      <form action="index.php" method="post" id="formulario" novalidate>
        <div class="titulo">
          <h3>Contáctanos</h3>
        </div>
        <!--Campo que tiene 2 elementos-->
        <div class="campo_secundario">
          <div class="campo_uno">
            <label for="Nombre">Nombre <span class="requerido">*</span></label>
            <input type="text" name="Nombre" placeholder=" " required>
            <small class="mensaje-error">Este campo es obligatorio</small>
          </div>
          <div class="campo_dos">
            <label for="Apellido">Apellido <span class="requerido">*</span></label>
            <input type="text" name="Apellido" placeholder=" " required>
            <small class="mensaje-error">Este campo es obligatorio</small>
          </div>
        </div>
        <label for="correo">Dirección de correo electrónico <span class="requerido">*</span></label>
        <div class="campo_unico">
          <input type="email" name="correo" placeholder=" " required>
          <small class="mensaje-error">Este campo es obligatorio</small>
          <small class="mensaje-error mensaje-email-invalido">
            Por favor, introduce una dirección de correo electrónico válida
          </small>
        </div>
        <label>Tipo de consulta *</label>
        <div class="opciones">
          <label class="opcion">
            <input type="radio" name="tipo" value="general" required>
            <span class="radio"></span> Consulta general
          </label>
          <label class="opcion">
            <input type="radio" name="tipo" value="soporte">
            <span class="radio"></span> Solicitar soporte
          </label>
          <small class="mensaje-error">Selecciona una opción</small>
        </div>
        <label for="mensaje">Mensaje <span class="requerido">*</span></label>
        <div class="campo_unico">
          <textarea name="mensaje" id="mensaje" rows="5" placeholder=" " required></textarea>
          <small class="mensaje-error">Este campo es obligatorio</small>
        </div>
        <div class="campo_unico_consentimiento">
          <label class="checkbox">
            <input type="checkbox" required>
            <span class="check"></span>
            <span class="texto">
              Doy mi consentimiento para que el equipo se ponga en contacto con el equipo. *
            </span>
          </label>
          <small class="mensaje-error">Para enviar este formulario, por favor consiente ser contactado</small>
        </div>
        <div class="campo_unico">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </div>
  <script>
    const form = document.getElementById("formulario");

    form.addEventListener("submit", function(e) {
      let valido = true;

      // Limpiar errores previos
      form.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
      form.querySelectorAll(".mensaje-error").forEach(msg => msg.style.display = "none");

      /* INPUTS Y TEXTAREA */
      const campos = form.querySelectorAll("input[required]:not([type=radio]):not([type=checkbox]):not([type=email]), textarea");

      campos.forEach(campo => {
        if (!campo.value.trim()) {
          marcarError(campo);
          valido = false;
        }
      });

      /* EMAIL */
      const email = form.querySelector('input[type="email"]');
      const contenedorEmail = email.closest(".campo_unico");

      const errorVacio = contenedorEmail.querySelector(".mensaje-error");
      const errorInvalido = contenedorEmail.querySelector(".mensaje-email-invalido");

      function validarEmail() {
        errorVacio.style.display = "none";
        errorInvalido.style.display = "none";
        email.classList.remove("error");

        if (email.value.trim() === "") {
          errorVacio.style.display = "block";
          email.classList.add("error");
          return false;
        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email.value.trim())) {
          errorInvalido.style.display = "block";
          email.classList.add("error");
          return false;
        }

        return true;
      }

      if (!validarEmail()) {
        valido = false;
      }

      /* RADIOS */
      const radios = form.querySelectorAll('input[type="radio"][name="tipo"]');
      const contenedorRadios = form.querySelector(".opciones");
      const mensajeRadio = contenedorRadios.querySelector(".mensaje-error");

      if (![...radios].some(radio => radio.checked)) {
        mensajeRadio.style.display = "block";
        valido = false;
      } else {
        mensajeRadio.style.display = "none";
      }

      /* CHECKBOX */
      const checkbox = form.querySelector("input[type=checkbox][required]");
      const mensajeCheckbox = checkbox.closest(".campo_unico_consentimiento")
        .querySelector(".mensaje-error");

      if (!checkbox.checked) {
        checkbox.nextElementSibling.classList.add("error");
        mensajeCheckbox.style.display = "block";
        valido = false;
      }

      /* SI HAY ERRORES NO ENVÍA */
      if (!valido) {
        e.preventDefault();
        return;
      }
    });

    /* FUNCIONES AUXILIARES */
    function marcarError(campo) {
      campo.classList.add("error");
      mostrarMensaje(campo);
    }

    function mostrarMensaje(campo) {
      const mensaje = campo.closest("div")?.querySelector(".mensaje-error");
      if (mensaje) mensaje.style.display = "block";
    }
    const mensaje_exito = document.getElementById("mensaje_exito");

    if (mensaje_exito) {
      mensaje_exito.style.display = "block";
      mensaje_exito.style.opacity = "1";

      setTimeout(() => {
        mensaje_exito.style.opacity = "0";
        mensaje_exito.style.transition = "opacity 0.4s ease";

        setTimeout(() => {
          mensaje_exito.remove();

          // Limpia ?exito=1
          const url = new URL(window.location);
          url.searchParams.delete("exito");
          window.history.replaceState({}, document.title, url);
        }, 400);
      }, 3000);
    }
  </script>
</body>

</html>
