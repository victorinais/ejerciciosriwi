function guardarUsuario() {
  if (nombres.value != "" && apellidos.value != "" && correo.value != "") {
    let nombres = document.getElementById("nombres");
    let apellidos = document.getElementById("apellidos");
    let correo = document.getElementById("correo");
    let tabla = document.getElementById("agregar");
    let cuerpoTabla = document.getElementById("agregar");
    let fila = cuerpoTabla.insertRow(-1);
    let celdaNombre = fila.insertCell(0);
    let celdaApellidos = fila.insertCell(1);
    let celdaCorreo = fila.insertCell(2);
    

    celdaNombre.innerText = nombres.value;
    celdaApellidos.innerText = apellidos.value;
    celdaCorreo.innerText = correo.value;
    
    nombres.value = "";
    apellidos.value = "";
    correo.value = "";
    
    nombres.classList.remove("is-valid");
    nombres.classList.remove("is-invalid");
    apellidos.classList.remove("is-valid");
    apellidos.classList.remove("is-invalid");
    correo.classList.remove("is-valid");
    correo.classList.remove("is-invalid");
    
  } else {
    if (nombres.value == "") {
      nombres.focus();
      nombres.classList.add("is-invalid");
      nombres.classList.remove("is-valid");
    } else {
      nombres.classList.remove("is-invalid");
      nombres.classList.add("is-valid");
    }
    if (apellidos.value == "") {
      apellidos.focus();
      apellidos.classList.add("is-invalid");
      apellidos.classList.remove("is-valid");
    } else {
      apellidos.classList.remove("is-invalid");
      apellidos.classList.add("is-valid");
    }
    if (correo.value == "") {
      correo.focus();
      correo.classList.add("is-invalid");
      correo.classList.remove("is-valid");
    } else {
      correo.classList.remove("is-invalid");
      correo.classList.add("is-valid");
    }
  }
}
