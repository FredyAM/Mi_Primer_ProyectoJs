// Obtenemos los elementos del DOM
const form = document.getElementById("loginForm");
const usuario = document.getElementById("Username");
const contraseña = document.getElementById("Password");

// Escuchamos el submit
form.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita recargar la página

    // Obtenemos valores y eliminamos espacios
    const userValue = usuario.value.trim();
    const passValue = contraseña.value.trim();

    // Depuración: ver qué valores está leyendo JS
    console.log("Usuario ingresado:", userValue);
    console.log("Contraseña ingresada:", passValue);

    // Validamos credenciales
    if (userValue === "admin" && passValue === "1234") {
        window.location.href = "admin.html"; // redirige a la pagina d eadministrador
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
