document.getElementById("btnHombre").addEventListener("click", function () {
  mostrarMensaje("Selecciona una rutina según tu nivel:");
  document.getElementById("rutinasHombre").style.display = "block";
});

document.getElementById("btnMujer").addEventListener("click", function () {
  mostrarMensaje("¡Bienvenida! Estamos preparando rutinas especiales para mujeres.");
  document.getElementById("rutinasHombre").style.display = "none";
});

document.getElementById("btnPrincipiante").addEventListener("click", function () {
  mostrarMensaje("Has seleccionado la rutina de Principiantes.");
});

document.getElementById("btnSenior").addEventListener("click", function () {
  mostrarMensaje("Has seleccionado la rutina Senior.");
});

document.getElementById("btnPro").addEventListener("click", function () {
  mostrarMensaje("Has seleccionado la rutina Pro.");
});

function mostrarMensaje(texto) {
  const mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.textContent = texto;
}

document.getElementById("btnPrincipiante").addEventListener("click", function () {
  window.location.href = "principiantes.html"; // Redirección
});

document.getElementById("btnSenior").addEventListener("click", function () {
  window.location.href = "senior.html"; // Redirección
});

document.getElementById("btnPro").addEventListener("click", function () {
  window.location.href = "Pro.html";
});


// Rutinas para mujeres

document.getElementById("btnHombre").addEventListener("click", function () {
  mostrarMensaje("Selecciona una rutina según tu nivel:");
  document.getElementById("rutinasHombre").style.display = "block";
  document.getElementById("rutinasMujer").style.display = "none"; // Oculta los de mujer
});

document.getElementById("btnMujer").addEventListener("click", function () {
  mostrarMensaje("Selecciona una rutina según tu nivel:");
  document.getElementById("rutinasMujer").style.display = "block";
  document.getElementById("rutinasHombre").style.display = "none"; // Oculta los de hombre
});

// Botones de rutinas de hombre
document.getElementById("btnPrincipiante").addEventListener("click", function () {
  window.location.href = "principiantes.html";
});

document.getElementById("btnSenior").addEventListener("click", function () {
  window.location.href = "senior.html";
});

document.getElementById("btnPro").addEventListener("click", function () {
  window.location.href = "pro.html";
});

// Botones de rutinas de mujer
document.getElementById("btnPrincipianteMujer").addEventListener("click", function () {
  window.location.href = "principiantes_mujer.html";
});

document.getElementById("btnSeniorMujer").addEventListener("click", function () {
  window.location.href = "senior_mujer.html";
});

document.getElementById("btnProMujer").addEventListener("click", function () {
  window.location.href = "pro_mujer.html";
});
